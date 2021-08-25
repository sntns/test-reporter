import * as fs from 'fs'
import * as path from 'path'

import {GolangJsonParser} from '../src/parsers/golang-json/golang-json-parser'
import {ParseOptions} from '../src/test-parser'
import {getReport} from '../src/report/get-report'
import {normalizeFilePath} from '../src/utils/path-utils'

describe('golang-json tests', () => {
  it('produces empty test run result when there are no test cases', async () => {
    const fixturePath = path.join(__dirname, 'fixtures', 'empty', 'golang.json')
    const filePath = normalizeFilePath(path.relative(__dirname, fixturePath))
    const fileContent = fs.readFileSync(fixturePath, {encoding: 'utf8'})

    const opts: ParseOptions = {
      parseErrors: true,
      trackedFiles: []
    }

    const parser = new GolangJsonParser(opts)
    const result = await parser.parse(filePath, fileContent)
    expect(result.tests).toBe(0)
    expect(result.result).toBe('success')
  })

  it('report from sample1 test results matches snapshot', async () => {
    const fixturePath = path.join(__dirname, 'fixtures', 'external', 'golang', 'sample1.json')
    const outputPath = path.join(__dirname, '__outputs__', 'golang-json.sample1.md')
    const filePath = normalizeFilePath(path.relative(__dirname, fixturePath))
    const fileContent = fs.readFileSync(fixturePath, {encoding: 'utf8'})

    const trackedFilesPath = path.join(__dirname, 'fixtures', 'external', 'golang', 'sample1-files.txt')
    const trackedFiles = fs.readFileSync(trackedFilesPath, {encoding: 'utf8'}).split(/\n\r?/g)
    
    const opts: ParseOptions = {
      parseErrors: true,
      trackedFiles,
    }

    const parser = new GolangJsonParser(opts)
    const result = await parser.parse(filePath, fileContent)
    expect(result).toMatchSnapshot()

    const report = getReport([result])
    fs.mkdirSync(path.dirname(outputPath), {recursive: true})
    fs.writeFileSync(outputPath, report)
  })

  it('report from sample2 test results matches snapshot', async () => {
    const fixturePath = path.join(__dirname, 'fixtures', 'external', 'golang', 'sample2.json')
    const outputPath = path.join(__dirname, '__outputs__', 'golang-json.sample2.md')
    const filePath = normalizeFilePath(path.relative(__dirname, fixturePath))
    const fileContent = fs.readFileSync(fixturePath, {encoding: 'utf8'})

    const trackedFilesPath = path.join(__dirname, 'fixtures', 'external', 'golang', 'sample2-files.txt')
    const trackedFiles = fs.readFileSync(trackedFilesPath, {encoding: 'utf8'}).split(/\n\r?/g)
    
    const opts: ParseOptions = {
      parseErrors: true,
      trackedFiles,
    }

    const parser = new GolangJsonParser(opts)
    const result = await parser.parse(filePath, fileContent)
    expect(result).toMatchSnapshot()

    const report = getReport([result])
    fs.mkdirSync(path.dirname(outputPath), {recursive: true})
    fs.writeFileSync(outputPath, report)
  })

  it('report from spf13/cobra single suite test results matches snapshot', async () => {
    const fixturePath = path.join(__dirname, 'fixtures', 'external', 'golang', 'spf13-cobra.json')
    const outputPath = path.join(__dirname, '__outputs__', 'spf13-cobra.md')
    const filePath = normalizeFilePath(path.relative(__dirname, fixturePath))
    const fileContent = fs.readFileSync(fixturePath, {encoding: 'utf8'})

    const opts: ParseOptions = {
      parseErrors: true,
      trackedFiles: [],
    }

    const parser = new GolangJsonParser(opts)
    const result = await parser.parse(filePath, fileContent)
    expect(result).toMatchSnapshot()

    const report = getReport([result])
    fs.mkdirSync(path.dirname(outputPath), {recursive: true})
    fs.writeFileSync(outputPath, report)
  })

  it('report from spf13/cobra single suite test results matches snapshot (verbose)', async () => {
    const fixturePath = path.join(__dirname, 'fixtures', 'external', 'golang', 'spf13-cobra-verbose.json')
    const outputPath = path.join(__dirname, '__outputs__', 'spf13-cobra-verbose.md')
    const filePath = normalizeFilePath(path.relative(__dirname, fixturePath))
    const fileContent = fs.readFileSync(fixturePath, {encoding: 'utf8'})

    const opts: ParseOptions = {
      parseErrors: true,
      trackedFiles: [],
    }

    const parser = new GolangJsonParser(opts)
    const result = await parser.parse(filePath, fileContent)
    expect(result).toMatchSnapshot()

    const report = getReport([result])
    fs.mkdirSync(path.dirname(outputPath), {recursive: true})
    fs.writeFileSync(outputPath, report)
  })
})
