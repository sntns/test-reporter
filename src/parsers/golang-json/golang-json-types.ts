

export interface Event {
  Action: 'skip' | 'output' | 'pass' | 'fail' | 'run'
  Package?: string
  Test?: string
  Time: number
}

export interface PackageEvent extends Event {
  Package: string
}

export interface OutputPackageEvent extends PackageEvent {
  Action: 'output'
  Output: string
}

export interface ResultPackageEvent extends PackageEvent {
  Action: 'skip' | 'pass' | 'fail'
  Elapsed: number
}

export interface TestEvent extends PackageEvent {
  Test: string
}

export interface OutputEvent extends Event {
  Action: 'output'
  Output: string
}

export interface ResultTestEvent extends TestEvent {
  Action: 'skip' | 'pass' | 'fail'
  Elapsed: number
}

export interface RunTestEvent extends TestEvent {
  Action: 'run'
}


export function isPackageEvent(event: Event): event is PackageEvent {
  return true
}

export function isTestEvent(event: Event): event is TestEvent {
  return event.Test !==undefined && (event.Action === 'run' || event.Action === "skip" || event.Action === "fail" || event.Action === "pass" || event.Action === "output")
}

export function isResultTestEvent(event: Event): event is ResultTestEvent {
  return event.Action === "skip" || event.Action === "fail" || event.Action === "pass"
}

export function isOutputTestEvent(event: Event): event is OutputEvent {
  return event.Action === "output"
}


export interface Package {
  name: string
}

export interface Group {
  rank: number
  name: string
}

export interface Test {
  rank: number
  name: string
}