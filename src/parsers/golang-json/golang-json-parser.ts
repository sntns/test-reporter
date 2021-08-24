import * as path from 'path'
import {ParseOptions, TestParser} from '../../test-parser'

import {Event, OutputEvent, ResultTestEvent, PackageEvent, Group, isPackageEvent, isTestEvent, isResultTestEvent, isOutputTestEvent} from './golang-json-types'
import {normalizeFilePath} from '../../utils/path-utils'

import {
  TestExecutionResult,
  TestRunResult,
  TestSuiteResult,
  TestGroupResult,
  TestCaseResult,
  TestCaseError
} from '../../test-results'
import { isTestDoneEvent } from '../dart-json/dart-json-types'
import { INSPECT_MAX_BYTES } from 'buffer'

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
    return this.res !== undefined ? this.res.Elapsed : 0
  }
}

export class GolangJsonParser implements TestParser {
  readonly trackedFiles: {[fileName: string]: string[]}
  readonly separator: string = "/"

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
        return new TestCaseResult(testName != "" ? testName : group.group.name, tc.result, tc.time, error, tc.output.map(e => { return e.Output.trimEnd() }))
      })
      return new TestGroupResult(group.group.name, tests)
    })
  }

  private getError(pkg: TestPackage, test: TestCase): TestCaseError | undefined {
    return undefined
    /*
    if (!this.options.parseErrors || !test.error) {
      return undefined
    }

    const {trackedFiles} = this.options
    const stackTrace = test.error?.stackTrace ?? ''
    const print = test.print
      .filter(p => p.messageType === 'print')
      .map(p => p.message)
      .join('\n')
    const details = [print, stackTrace].filter(str => str !== '').join('\n')
    const src = this.exceptionThrowSource(details, trackedFiles)
    const message = this.getErrorMessage(test.error?.error ?? '', print)
    let path
    let line

    if (src !== undefined) {
      path = src.path
      line = src.line
    } else {
      const testStartPath = this.getRelativePath(testSuite.suite.path)
      if (trackedFiles.includes(testStartPath)) {
        path = testStartPath
        line = test.testStart.test.root_line ?? test.testStart.test.line ?? undefined
      }
    }

    return {
      path,
      line,
      message,
      details
    }
    */
  }

  private getTestRunResult(tr: TestRun): TestRunResult {
    const suites = tr.packages.map(s => {
      //return new TestSuiteResult(this.getRelativePath(s.suite.path), this.getGroups(s))
      return new TestSuiteResult(s.name, this.getGroups(s))
    })

    return new TestRunResult(tr.path, suites, tr.time)
  }

}