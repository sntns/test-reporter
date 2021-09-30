![Tests failed](https://img.shields.io/badge/tests-82%20passed%2C%208%20failed-critical)
## ❌ <a id="user-content-r0" href="#r0">fixtures/external/golang/sample2.json</a>
**92** tests were completed in **0ms** with **82** passed, **8** failed and **0** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|github.com/dummy/sample2||||0ms|
|github.com/dummy/sample2/api||||0ms|
|github.com/dummy/sample2/cmd||||0ms|
|github.com/dummy/sample2/core|9✔️|||40ms|
|[github.com/dummy/sample2/driver/dns](#r0s4)|7✔️|2❌||0ms|
|github.com/dummy/sample2/driver/ntp|5✔️|||0ms|
|github.com/dummy/sample2/driver/stbp|3✔️|||20ms|
|[github.com/dummy/sample2/driver/vpn](#r0s7)|3✔️|6❌||1s|
|github.com/dummy/sample2/driver/vpn/vici|55✔️|||6s|
|github.com/dummy/sample2/driver/vpn/vici/conn||||0ms|
|github.com/dummy/sample2/driver/vpn/vici/conn/child||||0ms|
|github.com/dummy/sample2/integration_test||||0ms|
### ❌ <a id="user-content-r0s4" href="#r0s4">github.com/dummy/sample2/driver/dns</a>

<details><summary>output</summary>

```
FAIL
coverage: 34.6% of statements
FAIL	github.com/dummy/sample2/driver/dns	0.033s
```

</details>

#### ✔️ TestUnpack
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestUnpack
--- PASS: TestUnpack (0.00s)
```

</details>

#### ❌ TestDns
<details><summary>  ❌ (main)</summary>
output:

```
=== RUN   TestDns
--- FAIL: TestDns (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_read_'dig_ntpABCDE.example.fr'</summary>
output:

```
=== RUN   TestDns/k=0/case=should_read_'dig_ntpABCDE.example.fr'
time="2021-08-24T12:37:11Z" level=warning msg="request for ntpABCDE.example.fr. TypeA, no value"
    --- PASS: TestDns/k=0/case=should_read_'dig_ntpABCDE.example.fr' (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_read_'dig_ntp.example.fr'</summary>
output:

```
=== RUN   TestDns/k=1/case=should_read_'dig_ntp.example.fr'
time="2021-08-24T12:37:11Z" level=warning msg="request for ntp.example.fr. TypeA, no value"
    --- PASS: TestDns/k=1/case=should_read_'dig_ntp.example.fr' (0.00s)
```

</details>
<details><summary>  ✔️ k=2/case=should_read_&_answer_'dig_ntp.example.fr'</summary>
output:

```
=== RUN   TestDns/k=2/case=should_read_&_answer_'dig_ntp.example.fr'
    --- PASS: TestDns/k=2/case=should_read_&_answer_'dig_ntp.example.fr' (0.00s)
```

</details>
<details><summary>  ✔️ k=3/case=should_read_'dig_ntp.google.com'</summary>
output:

```
=== RUN   TestDns/k=3/case=should_read_'dig_ntp.google.com'
time="2021-08-24T12:37:11Z" level=warning msg="request for ntp.google.com., not authoritative"
    --- PASS: TestDns/k=3/case=should_read_'dig_ntp.google.com' (0.00s)
```

</details>
<details><summary>  ❌ k=4/case=should_read_dnsmasq_'some.domainname.com'</summary>
error:

```
"[{{some.domainname.com. TypeA ClassINET %!s(uint32=3600) %!s(uint16=4)} %!s(*dnsmessage.AResource=&{[10 7 0 1]})}]" should have 0 item(s), but has 1
Error line 2, with a very long description
```

output:

```
=== RUN   TestDns/k=4/case=should_read_dnsmasq_'some.domainname.com'
    server_test.go:104:
        	Error Trace:	server_test.go:104
        	            				server_test.go:142
        	Error:      	"[{{some.domainname.com. TypeA ClassINET %!s(uint32=3600) %!s(uint16=4)} %!s(*dnsmessage.AResource=&{[10 7 0 1]})}]" should have 0 item(s), but has 1
        	            	Error line 2, with a very long description
        	Test:       	TestDns/k=4/case=should_read_dnsmasq_'some.domainname.com'
    --- FAIL: TestDns/k=4/case=should_read_dnsmasq_'some.domainname.com' (0.00s)
```

</details>

#### ✔️ TestStore
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestStore
--- PASS: TestStore (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_read_'dig_ntpABCDE.example.fr'</summary>
output:

```
=== RUN   TestStore/k=0/case=should_read_'dig_ntpABCDE.example.fr'
time="2021-08-24T12:37:11Z" level=warning msg="request for ntpABCDE.example.fr. TypeA, no value"
    --- PASS: TestStore/k=0/case=should_read_'dig_ntpABCDE.example.fr' (0.00s)
```

</details>


### ❌ <a id="user-content-r0s7" href="#r0s7">github.com/dummy/sample2/driver/vpn</a>

<details><summary>output</summary>

```
=== CONT
    testing.go:1092: race detected during execution of test
FAIL
coverage: 41.0% of statements
FAIL	github.com/dummy/sample2/driver/vpn	1.091s
```

</details>

#### ✔️ TestSet
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSet
--- PASS: TestSet (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_set_simple</summary>
output:

```
=== RUN   TestSet/k=0/case=should_set_simple
    --- PASS: TestSet/k=0/case=should_set_simple (0.00s)
```

</details>

#### ❌ TestCommand
<details><summary>  ❌ (main)</summary>
output:

```
=== RUN   TestCommand
=== CONT  TestCommand
    testing.go:1092: race detected during execution of test
--- FAIL: TestCommand (0.05s)
```

</details>
<details><summary>  ❌ k=0/case=should_run_the_command_and_grab_stdout</summary>
error:

```
"[{%!s(*logrus.Logger=&{{} map[0:[0xc000162060] 1:[0xc000162060] 2:[0xc000162060] 3:[0xc000162060] 4:[0xc000162060] 5:[0xc000162060] 6:[0xc000162060]] 0xc0000a6960 false 4 {{0 0} false} {{} 0xc000076000 2 <nil> 0 <nil>} 0x4f3080}) map[] 2021-08-24 12:37:12.368578945 +0000 UTC m=+0.007192461 info %!s(*runtime.Frame=<nil>) Starting Charon process: sh <nil> <nil> }]" should have 2 item(s), but has 1
```

output:

```
=== RUN   TestCommand/k=0/case=should_run_the_command_and_grab_stdout
==================
WARNING: DATA RACE
Read at 0x00c0001404c0 by goroutine 10:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:111 +0x5a7
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Previous write at 0x00c0001404c0 by goroutine 14:
  os/exec.(*Cmd).Start()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec/exec.go:422 +0x8f0
  github.com/dummy/sample2/driver/vpn.(*Daemon).run()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:150 +0x224
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve.func1()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:98 +0xb4

Goroutine 10 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  github.com/dummy/sample2/driver/vpn.TestCommand()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:51 +0x348
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 14 (running) created at:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:96 +0x544
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
==================
==================
WARNING: DATA RACE
Read at 0x00c0000204b0 by goroutine 10:
  os.(*Process).signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_unix.go:63 +0x64
  os.(*Process).Signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:135 +0x699
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:112 +0x639
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Previous write at 0x00c0000204b0 by goroutine 14:
  os.newProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:29 +0x5f2
  os.startProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_posix.go:62 +0x66c
  os.StartProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:106 +0x92
  os/exec.(*Cmd).Start()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec/exec.go:422 +0x8a8
  github.com/dummy/sample2/driver/vpn.(*Daemon).run()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:150 +0x224
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve.func1()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:98 +0xb4

Goroutine 10 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  github.com/dummy/sample2/driver/vpn.TestCommand()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:51 +0x348
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 14 (running) created at:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:96 +0x544
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
==================
==================
WARNING: DATA RACE
Read at 0x00c0000204c0 by goroutine 10:
  sync/atomic.LoadInt32()
      /opt/hostedtoolcache/go/1.16.7/x64/src/runtime/race_amd64.s:213 +0xb
  os.(*Process).done()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:39 +0x210
  os.(*Process).signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_unix.go:71 +0x216
  os.(*Process).Signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:135 +0x699
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:112 +0x639
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Previous write at 0x00c0000204c0 by goroutine 14:
  os.newProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:29 +0x5f2
  os.startProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_posix.go:62 +0x66c
  os.StartProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:106 +0x92
  os/exec.(*Cmd).Start()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec/exec.go:422 +0x8a8
  github.com/dummy/sample2/driver/vpn.(*Daemon).run()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:150 +0x224
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve.func1()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:98 +0xb4

Goroutine 10 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  github.com/dummy/sample2/driver/vpn.TestCommand()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:51 +0x348
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 14 (running) created at:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:96 +0x544
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
==================
    daemon_test.go:27:
        	Error Trace:	daemon_test.go:27
        	            				daemon_test.go:71
        	Error:      	"[{%!s(*logrus.Logger=&{{} map[0:[0xc000162060] 1:[0xc000162060] 2:[0xc000162060] 3:[0xc000162060] 4:[0xc000162060] 5:[0xc000162060] 6:[0xc000162060]] 0xc0000a6960 false 4 {{0 0} false} {{} 0xc000076000 2 <nil> 0 <nil>} 0x4f3080}) map[] 2021-08-24 12:37:12.368578945 +0000 UTC m=+0.007192461 info %!s(*runtime.Frame=<nil>) Starting Charon process: sh <nil> <nil> }]" should have 2 item(s), but has 1
        	Test:       	TestCommand/k=0/case=should_run_the_command_and_grab_stdout
    testing.go:1092: race detected during execution of test
    --- FAIL: TestCommand/k=0/case=should_run_the_command_and_grab_stdout (0.03s)
```

</details>
<details><summary>  ✔️ k=1/case=should_run_the_command_and_grab_stderr</summary>
output:

```
=== RUN   TestCommand/k=1/case=should_run_the_command_and_grab_stderr
    --- PASS: TestCommand/k=1/case=should_run_the_command_and_grab_stderr (0.01s)
```

</details>
<details><summary>  ❌ k=2/case=should_retry_a_failed_command</summary>
error:

```
WARNING: DATA RACE (1)
```

output:

```
=== RUN   TestCommand/k=2/case=should_retry_a_failed_command
==================
WARNING: DATA RACE
Read at 0x00c00020801b by goroutine 27:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve.func1()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:99 +0xe9

Previous write at 0x00c00020801b by goroutine 22:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:110 +0x57a
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 27 (running) created at:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:96 +0x544
  github.com/dummy/sample2/driver/vpn.TestCommand.func4()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:66 +0x3fa
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 22 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  github.com/dummy/sample2/driver/vpn.TestCommand()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:51 +0x348
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
==================
    testing.go:1092: race detected during execution of test
    --- FAIL: TestCommand/k=2/case=should_retry_a_failed_command (0.01s)
```

</details>

#### ❌ TestStop
<details><summary>  ❌ (main)</summary>
output:

```
=== RUN   TestStop
=== CONT  TestStop
    testing.go:1092: race detected during execution of test
--- FAIL: TestStop (1.02s)
```

</details>
<details><summary>  ❌ k=0/case=should_run_and_stop_the_command</summary>
error:

```
WARNING: DATA RACE (3)
```

output:

```
=== RUN   TestStop/k=0/case=should_run_and_stop_the_command
==================
WARNING: DATA RACE
Read at 0x00c0001b40a0 by goroutine 29:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:111 +0x5a7
  github.com/dummy/sample2/driver/vpn.TestStop.func2()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:107 +0x3f3
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Previous write at 0x00c0001b40a0 by goroutine 32:
  os/exec.(*Cmd).Start()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec/exec.go:422 +0x8f0
  github.com/dummy/sample2/driver/vpn.(*Daemon).run()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:150 +0x224
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve.func1()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:98 +0xb4

Goroutine 29 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  github.com/dummy/sample2/driver/vpn.TestStop()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:92 +0x28e
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 32 (running) created at:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:96 +0x544
  github.com/dummy/sample2/driver/vpn.TestStop.func2()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:107 +0x3f3
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
==================
==================
WARNING: DATA RACE
Read at 0x00c000020720 by goroutine 29:
  os.(*Process).signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_unix.go:63 +0x64
  os.(*Process).Signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:135 +0x699
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:112 +0x639
  github.com/dummy/sample2/driver/vpn.TestStop.func2()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:107 +0x3f3
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Previous write at 0x00c000020720 by goroutine 32:
  os.newProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:29 +0x5f2
  os.startProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_posix.go:62 +0x66c
  os.StartProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:106 +0x92
  os/exec.(*Cmd).Start()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec/exec.go:422 +0x8a8
  github.com/dummy/sample2/driver/vpn.(*Daemon).run()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:150 +0x224
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve.func1()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:98 +0xb4

Goroutine 29 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  github.com/dummy/sample2/driver/vpn.TestStop()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:92 +0x28e
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 32 (running) created at:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:96 +0x544
  github.com/dummy/sample2/driver/vpn.TestStop.func2()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:107 +0x3f3
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
==================
==================
WARNING: DATA RACE
Read at 0x00c000020730 by goroutine 29:
  sync/atomic.LoadInt32()
      /opt/hostedtoolcache/go/1.16.7/x64/src/runtime/race_amd64.s:213 +0xb
  os.(*Process).done()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:39 +0x210
  os.(*Process).signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_unix.go:71 +0x216
  os.(*Process).Signal()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:135 +0x699
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:112 +0x639
  github.com/dummy/sample2/driver/vpn.TestStop.func2()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:107 +0x3f3
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Previous write at 0x00c000020730 by goroutine 32:
  os.newProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:29 +0x5f2
  os.startProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec_posix.go:62 +0x66c
  os.StartProcess()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec.go:106 +0x92
  os/exec.(*Cmd).Start()
      /opt/hostedtoolcache/go/1.16.7/x64/src/os/exec/exec.go:422 +0x8a8
  github.com/dummy/sample2/driver/vpn.(*Daemon).run()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:150 +0x224
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve.func1()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:98 +0xb4

Goroutine 29 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  github.com/dummy/sample2/driver/vpn.TestStop()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:92 +0x28e
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 32 (running) created at:
  github.com/dummy/sample2/driver/vpn.(*Daemon).Serve()
      /home/runner/work/sample2/sample2/driver/vpn/daemon.go:96 +0x544
  github.com/dummy/sample2/driver/vpn.TestStop.func2()
      /home/runner/work/sample2/sample2/driver/vpn/daemon_test.go:107 +0x3f3
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
==================
    testing.go:1092: race detected during execution of test
    --- FAIL: TestStop/k=0/case=should_run_and_stop_the_command (1.02s)
```

</details>

#### ❌ TestChildUpDown
<details><summary>  ❌ (main)</summary>
error:

```
WARNING: DATA RACE (1)
```

output:

```
=== RUN   TestChildUpDown
==================
WARNING: DATA RACE
Write at 0x00c000010070 by goroutine 35:
  github.com/dummy/sample2/driver/vpn.TestChildUpDown.func1()
      /home/runner/work/sample2/sample2/driver/vpn/vici_test.go:33 +0x46
  runtime.call64()
      /opt/hostedtoolcache/go/1.16.7/x64/src/runtime/asm_amd64.s:552 +0x3d
  reflect.Value.Call()
      /opt/hostedtoolcache/go/1.16.7/x64/src/reflect/value.go:337 +0xd8
  github.com/golang/mock/gomock.(*Call).Do.func1()
      /home/runner/work/sample2/sample2/vendor/github.com/golang/mock/gomock/call.go:155 +0x4ed
  github.com/golang/mock/gomock.(*Controller).Call()
      /home/runner/work/sample2/sample2/vendor/github.com/golang/mock/gomock/controller.go:251 +0x152
  github.com/dummy/sample2/driver/vpn/vici.(*MockClient).Run()
      /home/runner/work/sample2/sample2/driver/vpn/vici/client.mock.go:283 +0x187
  github.com/dummy/sample2/driver/vpn.(*Vici).runWithClient()
      /home/runner/work/sample2/sample2/driver/vpn/vici.go:96 +0x182
  github.com/dummy/sample2/driver/vpn.TestChildUpDown.func2()
      /home/runner/work/sample2/sample2/driver/vpn/vici_test.go:44 +0xc4

Previous read at 0x00c000010070 by goroutine 34:
  github.com/dummy/sample2/driver/vpn.TestChildUpDown()
      /home/runner/work/sample2/sample2/driver/vpn/vici_test.go:50 +0xac4
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 35 (running) created at:
  github.com/dummy/sample2/driver/vpn.TestChildUpDown()
      /home/runner/work/sample2/sample2/driver/vpn/vici_test.go:41 +0xa53
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202

Goroutine 34 (running) created at:
  testing.(*T).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1238 +0x5d7
  testing.runTests.func1()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1511 +0xa6
  testing.tRunner()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1193 +0x202
  testing.runTests()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1509 +0x612
  testing.(*M).Run()
      /opt/hostedtoolcache/go/1.16.7/x64/src/testing/testing.go:1417 +0x3b3
  main.main()
      _testmain.go:109 +0x356
==================
    testing.go:1092: race detected during execution of test
--- FAIL: TestChildUpDown (0.00s)
```

</details>

