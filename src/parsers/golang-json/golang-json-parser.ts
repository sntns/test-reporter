import * as path from 'path'
import {ParseOptions, TestParser} from '../../test-parser'

import {Event, OutputEvent, ResultTestEvent, PackageEvent, Group, isPackageEvent, isTestEvent, isResultTestEvent, isOutputTestEvent} from './golang-json-types'

import {getBasePath, normalizeFilePath} from '../../utils/path-utils'

import {
  TestExecutionResult,
  TestRunResult,
  TestSuiteResult,
  TestGroupResult,
  TestCaseResult,
  TestCaseError
} from '../../test-results'

class TestRun {
  constructor(readonly path: string, readonly packages: TestPackage[], readonly success: boolean, readonly time: number) {}
}

class TestPackage {
  constructor(readonly name: string) {}
  readonly groups: {[name: string]: TestGroup} = {}
  readonly output: OutputEvent[] = []
}

class TestGroup {
  constructor(readonly group: Group) {}
  readonly tests:{[name: string]: TestCase} = {}
}


class TestCase {
  constructor(readonly name: string, readonly rank: number) {
    this.name = name
    this.rank = rank
  }
  readonly output: OutputEvent[] = []
  res?: ResultTestEvent

  get result(): TestExecutionResult {
    if (this.res?.Action === "skip") {
      return 'skipped'
    }
    if (this.res?.Action === 'pass') {
      return 'success'
    }

    if (this.res?.Action === 'fail') {
      return 'failed'
    }

    return undefined
  }

  get time(): number {
    return this.res !== undefined ? this.res.Elapsed*1000 : 0
  }
}

export class GolangJsonParser implements TestParser {
  readonly trackedFiles: {[fileName: string]: string[]}
  readonly separator: string = "/"
  assumedWorkDir: string | undefined

  constructor(readonly options: ParseOptions) {
    // Map to efficient lookup of all paths with given file name
    this.trackedFiles = {}
    for (const filePath of options.trackedFiles) {
      const fileName = path.basename(filePath)
      const files = this.trackedFiles[fileName] ?? (this.trackedFiles[fileName] = [])
      files.push(normalizeFilePath(filePath))
    }
  }

  async parse(path: string, content: string): Promise<TestRunResult> {
    const tr = this.getTestRun(path, content)
    const result = this.getTestRunResult(tr)
    return Promise.resolve(result)
  }

  private getTestRun(path: string, content: string): TestRun {
    const lines = content.split(/\n\r?/g)
    const events = lines
      .map((str, i) => {
        if (str.trim() === '') {
          return null
        }
        try {
          return JSON.parse(str)
        } catch (e) {
          const col = e.columnNumber !== undefined ? `:${e.columnNumber}` : ''
          throw new Error(`Invalid JSON at ${path}:${i + 1}${col}\n\n${e}`)
        }
      })
      .filter(evt => evt != null) as Event[]

    let success = false
    let totalTime = 0
    const packages: {[name: string]: TestPackage} = {}
    
    let rank = 0
    for (const evt of events) {
      if(isPackageEvent(evt)) {
        // Lookup for package
        if(packages[evt.Package] === undefined) {
          packages[evt.Package] = new TestPackage(evt.Package)
        }
        const pkg = packages[evt.Package]

        if(isTestEvent(evt)) {
          let items = evt.Test.split(this.separator)
          const group = {rank: rank++, name: items[0]}
          if(pkg.groups[group.name] === undefined) {
            pkg.groups[group.name] = new TestGroup(group)
          }
          const grp = pkg.groups[group.name]
          const test = (items.length > 1) ? items.slice(1).join(this.separator) : group.name
          if(grp.tests[test] === undefined) {
            grp.tests[test] = new TestCase(test, rank++)
          }
          const tc = grp.tests[test]
          if (isResultTestEvent(evt)) {
            tc.res = evt
          } else if (isOutputTestEvent(evt)) {
            tc.output.push(evt)
          }
        } else if (isOutputTestEvent(evt)) {
          pkg.output.push(evt)
        }
      }
    }

    return new TestRun(path, Object.values(packages), success, totalTime)
  }

  private getGroups(pkg: TestPackage): TestGroupResult[] {
    const groups = Object.values(pkg.groups).filter(grp => Object.keys(grp.tests).length > 0)
    groups.sort((a, b) => (a.group.rank ?? 0) - (b.group.rank ?? 0))

    return groups.map(group => {
      let tests = Object.values(group.tests).sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0)).map(tc => {
        const error = this.getError(pkg, tc)
        const testName =
          group.group.name !== undefined && tc.name.startsWith(group.group.name)
            ? tc.name.slice(group.group.name.length).trim()
            : tc.name.trim()
        // The (main) test duration is encompassing children, then remove them
        const testTime = testName != "" ? tc.time : (tc.time*2 - Object.values(group.tests).reduce((sum, t) => (sum + t.time), 0))
        return new TestCaseResult(testName != "" ? testName : "(main)", tc.result, testTime, error, tc.output.map(e => { return e.Output.trimEnd() }))
      })
      return new TestGroupResult(group.group.name, tests)
    })
  }

  private getTestRunResult(tr: TestRun): TestRunResult {
    const suites = tr.packages.map(s => {
      //return new TestSuiteResult(this.getRelativePath(s.suite.path), this.getGroups(s))
      return new TestSuiteResult(s.name, this.getGroups(s), undefined, s.output.map(e => { return e.Output.trimEnd() }))
    })

    return new TestRunResult(tr.path, suites, tr.time)
  }

  private getError(pkg: TestPackage, test: TestCase): TestCaseError | undefined {
    /*
      "error": Object {
        "details": "Error: Some error
    at Object.throwError (lib\\\\main.js:2:9)
    at Context.<anonymous> (test\\\\main.test.js:15:11)
    at processImmediate (internal/timers.js:461:21)",
        "line": 2,
        "message": "Some error",
        "path": "lib/main.js",
      },
    */
    if (!this.options.parseErrors || test.result != 'failed' || !test.output) {
      return undefined
    }

    const {trackedFiles} = this.options
    /*
    "Output":"    server_test.go:104: "
    "Output":"        \tError Trace:\tserver_test.go:104"
    "Output":"        \t            \t\t\t\tserver_test.go:142"
    "Output":"        \tError:      \t\"[{{some.domainname.com. TypeA ClassINET %!s(uint32=3600) %!s(uint16=4)} %!s(*dnsmessage.AResource=\u0026{[10 7 0 1]})}]\" should have 0 item(s), but has 1"
    "Output":"        \tTest:       \tTestDns/k=4/case=should_read_dnsmasq_'some.domainname.com'"
    */
    const out = test.output
      .filter(e => e.Output.startsWith("        \t"))
      .map(e => { return e.Output.trimRight().slice("        \t".length) })
    let stack: string[] = []
    let inBlock = false
    out.forEach((it, i) => {
      if(it.startsWith("Error Trace:\t")) {
        stack.push(it.split("\t", 2)[1])
        inBlock = true
      }
      else if(it.startsWith("Error:")) {
        inBlock = false
      }
      else if(inBlock) {
        stack.push(it.trim())
      }
    })

    let error: string[] = []
    out.forEach((it, i) => {
      if(it.startsWith("Error:")) {
        error.push(it.split("\t", 2)[1])
        inBlock = true
      }
      else if(it.startsWith("Test:")) {
        inBlock = false
      }
      else if(inBlock) {
        error.push(it.trim())
      }
    })
    const src = this.exceptionThrowSource(stack, trackedFiles, pkg)

    let path
    let line
    let message = error.join("\n")
    let details = out.join("\n")

    if (src !== undefined) {
      path = src.path
      line = src.line
    } else {
      /*
      const testStartPath = this.getRelativePath(testSuite.suite.path)
      if (trackedFiles.includes(testStartPath)) {
        path = testStartPath
        line = test.testStart.test.root_line ?? test.testStart.test.line ?? undefined
      }*/
    }

    return {
      path,
      line,
      message,
      details
    }
  }

  
  private exceptionThrowSource(lines: string[], trackedFiles: string[], pkg: TestPackage): {path: string; line: number} | undefined {

    // regexp to extract file path and line number from stack trace
    const re = /^(.+):(\d+)\s*/

    for (const str of lines) {
      const match = str.match(re)
      if (match !== null) {
        const [_, pathStr, lineStr] = match
        const path = normalizeFilePath(this.getRelativePath(`${pkg.name}/${pathStr}`))
        if (trackedFiles.includes(path)) {
          const line = parseInt(lineStr)
          return {path, line}
        }
      }
    }
  }

  private getRelativePath(path: string): string {
    const prefix = 'file://'
    if (path.startsWith(prefix)) {
      path = path.substr(prefix.length)
    }

    path = normalizeFilePath(path)
    const workDir = this.getWorkDir(path)
    if (workDir !== undefined && path.startsWith(workDir)) {
      path = path.substr(workDir.length)
    }
    return path
  }

  private getWorkDir(path: string): string | undefined {
    return (
      this.options.workDir ??
      this.assumedWorkDir ??
      (this.assumedWorkDir = getBasePath(path, this.options.trackedFiles))
    )
  }
}