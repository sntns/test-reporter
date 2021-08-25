![Tests failed](https://img.shields.io/badge/tests-82%20passed%2C%208%20failed-critical)
## ❌ <a id="user-content-r0" href="#r0">fixtures/external/golang/sample2.json</a>
**92** tests were completed in **0ms** with **82** passed, **8** failed and **0** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|[github.com/dummy/sample2](#r0s0)||||0ms|
|[github.com/dummy/sample2/api](#r0s1)||||0ms|
|[github.com/dummy/sample2/cmd](#r0s2)||||0ms|
|[github.com/dummy/sample2/core](#r0s3)|9✔️|||40ms|
|[github.com/dummy/sample2/driver/dns](#r0s4)|7✔️|2❌||0ms|
|[github.com/dummy/sample2/driver/ntp](#r0s5)|5✔️|||0ms|
|[github.com/dummy/sample2/driver/stbp](#r0s6)|3✔️|||20ms|
|[github.com/dummy/sample2/driver/vpn](#r0s7)|3✔️|6❌||1s|
|[github.com/dummy/sample2/driver/vpn/vici](#r0s8)|55✔️|||6s|
|[github.com/dummy/sample2/driver/vpn/vici/conn](#r0s9)||||0ms|
|[github.com/dummy/sample2/driver/vpn/vici/conn/child](#r0s10)||||0ms|
|[github.com/dummy/sample2/integration_test](#r0s11)||||0ms|
### ✔️ <a id="user-content-r0s0" href="#r0s0">github.com/dummy/sample2</a>

<details><summary>output</summary>

```
?   	github.com/dummy/sample2	[no test files]
```

</details>


### ✔️ <a id="user-content-r0s1" href="#r0s1">github.com/dummy/sample2/api</a>

<details><summary>output</summary>

```
?   	github.com/dummy/sample2/api	[no test files]
```

</details>


### ✔️ <a id="user-content-r0s2" href="#r0s2">github.com/dummy/sample2/cmd</a>

<details><summary>output</summary>

```
?   	github.com/dummy/sample2/cmd	[no test files]
```

</details>


### ✔️ <a id="user-content-r0s3" href="#r0s3">github.com/dummy/sample2/core</a>

<details><summary>output</summary>

```
PASS
coverage: 17.3% of statements
ok  	github.com/dummy/sample2/core	0.081s	coverage: 17.3% of statements
```

</details>

#### ✔️ TestResolverSimple
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestResolverSimple
--- PASS: TestResolverSimple (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=simple_add</summary>
output:

```
=== RUN   TestResolverSimple/k=0/case=simple_add
    --- PASS: TestResolverSimple/k=0/case=simple_add (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=simple_add_and_get</summary>
output:

```
=== RUN   TestResolverSimple/k=0/case=simple_add_and_get
    --- PASS: TestResolverSimple/k=0/case=simple_add_and_get (0.00s)
```

</details>

#### ✔️ TestResolverWaiter
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestResolverWaiter
--- PASS: TestResolverWaiter (0.02s)
```

</details>
<details><summary>  ✔️ k=0/case=wait_forward</summary>
output:

```
=== RUN   TestResolverWaiter/k=0/case=wait_forward
    --- PASS: TestResolverWaiter/k=0/case=wait_forward (0.01s)
```

</details>
<details><summary>  ✔️ k=1/case=wait_reverse</summary>
output:

```
=== RUN   TestResolverWaiter/k=1/case=wait_reverse
    --- PASS: TestResolverWaiter/k=1/case=wait_reverse (0.01s)
```

</details>

#### ✔️ TestResolverWaiterExpiration
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestResolverWaiterExpiration
--- PASS: TestResolverWaiterExpiration (0.02s)
```

</details>
<details><summary>  ✔️ k=0/case=wait_forward_expired</summary>
output:

```
=== RUN   TestResolverWaiterExpiration/k=0/case=wait_forward_expired
    --- PASS: TestResolverWaiterExpiration/k=0/case=wait_forward_expired (0.01s)
```

</details>
<details><summary>  ✔️ k=1/case=wait_reverse_expired</summary>
output:

```
=== RUN   TestResolverWaiterExpiration/k=1/case=wait_reverse_expired
    --- PASS: TestResolverWaiterExpiration/k=1/case=wait_reverse_expired (0.01s)
```

</details>


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
```

output:

```
=== RUN   TestDns/k=4/case=should_read_dnsmasq_'some.domainname.com'
    server_test.go:104:
        	Error Trace:	server_test.go:104
        	            				server_test.go:142
        	Error:      	"[{{some.domainname.com. TypeA ClassINET %!s(uint32=3600) %!s(uint16=4)} %!s(*dnsmessage.AResource=&{[10 7 0 1]})}]" should have 0 item(s), but has 1
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


### ✔️ <a id="user-content-r0s5" href="#r0s5">github.com/dummy/sample2/driver/ntp</a>

<details><summary>output</summary>

```
PASS
coverage: 29.0% of statements
ok  	github.com/dummy/sample2/driver/ntp	0.060s	coverage: 29.0% of statements
```

</details>

#### ✔️ TestNtpPacket
<details><summary>   (main)</summary>
output:

```
=== RUN   TestNtpPacket
```

</details>
<details><summary>   k=0/case=should_serialize/deserialize_minimal_packet</summary>
output:

```
=== RUN   TestNtpPacket/k=0/case=should_serialize/deserialize_minimal_packet
230200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=== RUN   TestNtpPacket/k=1/case=should_serialize/deserialize_with_first_byte_more_complex
650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=== RUN   TestNtpPacket/k=2/case=should_serialize/deserialize_packet_with_time
230100000000000083aa7e8e0000000083aa7e891c172c9583aa7e8e1c17333900000000000000000000000000000000--- PASS: TestNtpPacket (0.00s)
    --- PASS: TestNtpPacket/k=0/case=should_serialize/deserialize_minimal_packet (0.00s)
    --- PASS: TestNtpPacket/k=1/case=should_serialize/deserialize_with_first_byte_more_complex (0.00s)
    --- PASS: TestNtpPacket/k=2/case=should_serialize/deserialize_packet_with_time (0.00s)
```

</details>

#### ✔️ TestSpyPacket
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyPacket
--- PASS: TestSpyPacket (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_read_ntpq_-p_packet</summary>
output:

```
=== RUN   TestSpyPacket/k=0/case=should_read_ntpq_-p_packet
    --- PASS: TestSpyPacket/k=0/case=should_read_ntpq_-p_packet (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_read_chrony_packet</summary>
output:

```
=== RUN   TestSpyPacket/k=1/case=should_read_chrony_packet
    --- PASS: TestSpyPacket/k=1/case=should_read_chrony_packet (0.00s)
```

</details>

#### ✔️ TestAccept
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestAccept
--- PASS: TestAccept (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_read_ntpq_-p_packet</summary>
output:

```
=== RUN   TestAccept/k=0/case=should_read_ntpq_-p_packet
    --- PASS: TestAccept/k=0/case=should_read_ntpq_-p_packet (0.00s)
```

</details>


### ✔️ <a id="user-content-r0s6" href="#r0s6">github.com/dummy/sample2/driver/stbp</a>

<details><summary>output</summary>

```
PASS
coverage: 67.4% of statements
ok  	github.com/dummy/sample2/driver/stbp	0.063s	coverage: 67.4% of statements
```

</details>

#### ✔️ TestBase
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestBase
--- PASS: TestBase (0.02s)
```

</details>
<details><summary>  ✔️ k=0/case=should_proxy_request</summary>
output:

```
=== RUN   TestBase/k=0/case=should_proxy_request
http://127.0.0.1:33645
time="2021-08-24T12:37:15Z" level=info msg="proxy is now using: http://127.0.0.1:33645"
time="2021-08-24T12:37:15Z" level=info msg="Starting STBP server on: [::]:35391"
time="2021-08-24T12:37:15Z" level=info msg="request completed" duration=4.717487ms method=GET size=0 status=200 uri=/
    --- PASS: TestBase/k=0/case=should_proxy_request (0.01s)
```

</details>
<details><summary>  ✔️ k=1/case=should_proxy_request_with_resolver</summary>
output:

```
=== RUN   TestBase/k=1/case=should_proxy_request_with_resolver
http://127.0.0.1:39105
time="2021-08-24T12:37:15Z" level=info msg="proxy is now using: http://127.0.0.1:39105"
time="2021-08-24T12:37:15Z" level=info msg="Starting STBP server on: [::]:37087"
time="2021-08-24T12:37:15Z" level=info msg="request completed" duration=2.622204ms method=GET size=0 status=200 uri=/
    --- PASS: TestBase/k=1/case=should_proxy_request_with_resolver (0.01s)
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


### ✔️ <a id="user-content-r0s8" href="#r0s8">github.com/dummy/sample2/driver/vpn/vici</a>

<details><summary>output</summary>

```
PASS
coverage: 52.1% of statements
ok  	github.com/dummy/sample2/driver/vpn/vici	6.539s	coverage: 52.1% of statements
```

</details>

#### ✔️ TestCert
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestCert
--- PASS: TestCert (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_parse_cert_CN=peerA</summary>
output:

```
=== RUN   TestCert/k=0/case=should_parse_cert_CN=peerA
    --- PASS: TestCert/k=0/case=should_parse_cert_CN=peerA (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_parse_server_certificate</summary>
output:

```
=== RUN   TestCert/k=1/case=should_parse_server_certificate
    --- PASS: TestCert/k=1/case=should_parse_server_certificate (0.00s)
```

</details>
<details><summary>  ✔️ k=2/case=should_parse_CA_certificate</summary>
output:

```
=== RUN   TestCert/k=2/case=should_parse_CA_certificate
    --- PASS: TestCert/k=2/case=should_parse_CA_certificate (0.00s)
```

</details>

#### ✔️ TestSpyCertList
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyCertList
--- PASS: TestSpyCertList (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_list_installed_certificates</summary>
output:

```
=== RUN   TestSpyCertList/k=0/case=should_list_installed_certificates
0 - 015> 0000000b03096c6973742d63657274
0 - 004* 00000001
0 - 001* 05
0 - 016> 0000000c000a6c6973742d6365727473
0 - 004* 000002f5
0 - 757* 07096c6973742d636572740304747970650004583530390304666c616700044e4f4e4503046461746102ca308202c6308201aea00302010202085016951ae800bae1300d06092a864886f70d01010b05003011310f300d06035504031306546573744341301e170d3231303433303130343832385a170d3234303432393130343832385a3010310e300c06035504031305706565724130820122300d06092a864886f70d01010105000382010f003082010a0282010100bc4b8a2be3c6937fc63d1de9ea667623da5a121f0d5bbafc69719ecbae4168af512fe3dd696c5072a0fc8fca3ae5644d8e07cd2f01addc73bbe307e08be8b084c9ce6e7da650ef8f808879b3f342dbd6e3af9b5063d111a4aa6a0dab59e82c78d2a909f074d921e37bb73f210e2867f772b22a2f2677795f2be4d74a557eea3edd7db397cf92e254825b860616365dc19cdd0bcfbb87f27b57e97a966c96623f84960b8d0dec016f178c5ecca1134b01cb1041a543664302ecd76155a93b572aaaa50f62ce40587d33b803a0002db211b43457305ee3b9f97ce410a6eae629a09ff419e8cbda2f8710992dbb153bf0f2c9f4565143f2e184ad5266d2a615d2770203010001a3233021301f0603551d23041830168014f297d6ef112d19ee556b64cf325ba17b2841691e300d06092a864886f70d01010b0500038201010073a5a5ee95023
82b1370abd521035bd99937a150411837a022244271fbf8e5f54039cc3d244377089c9597ce9d11a6e5833833e4f842389a64a7abdc39ef941d2a8a29e44027417a9b19e8229702c436d228df9248cda3a70dab8b720931044c036261bfc6c6df9e5a5a38264dc01e380406bf7140e67bb0544e84f6c702fa7f6ba6f596bd395816e8d9bf1f3cb075cf3b3b7e35f3a7a1bfdced907b771ed92b94e00765fd2d79e9ed5bf9728069ffc22fe043bff2dbd50ba219ef1cd10e7a86c7ce823d712fe46b55d9d17c6cda6f0ad33ee4115baf18a5a6f19e7252491748d77175f31e6a8f57215c4d5eb7552a2d82f17e2b3c6cec1e6e239a5ca956fe54
0 - 004* 0000030f
0 - 783* 07096c6973742d636572740304747970650004583530390304666c616700044e4f4e45030b6861735f707269766b6579000379657303046461746102d2308202ce308201b6a003020102020826da66b8941dc605300d06092a864886f70d01010b05003017311530130603550403130c546573745365727665724341301e170d3231303433303130343830385a170d3234303432393130343830385a30123110300e060355040313077365727665723130820122300d06092a864886f70d01010105000382010f003082010a0282010100b8b973af1d6bdfea98a4d63e4480c5294caf13213f4ae9fd274d1b5bbd787bb53368f6953254402cf45f8e39faa7d4c4d1d23e17c7fe681c41fd658163ccfcf0dd74b27518536c590cf8e3ff0104682fa87ace827f40d388c625d849cf9ddeb09ab977ec53c94407e6c544c5200c768fc69350402091c687c7402e060cb041371ef0457c0e8b63fcad66b3be2176b2ca82edea735e0020017f3761e2916901824825b8370ca8b17263391147ae02e9ecb3cbd082ba4501b3ae9512b49f7e882e9b192e02d4db1eea6841abbe383c992b9815bb673f59bd695fcdffa621eb039e4e8107dbd8c990762ee7be6809129eef3f702136d7fcbfcfc32ee5b4b15b331d0203010001a3233021301f0603551d23041830168014bc2c8b607a721509e59c000a51401dd12a2e5d833
00d06092a864886f70d01010b05000382010100b9ed6e266de66289b6a0165e85275041829bb6e12b0d819da93535b55b314b0fdda3640491ce454b92ecb5102ededa0f88388fdfc139d34440b97157f84a22e4718f79b6bf7363ff82d7469dda41d14b4b1a86c0ff4bbd8f98223245f17f71221e2388d91e7bc4f4fc3f042e9b2233c371cf8d4ecc544e54a356105ea1a3a906bfd450ef0486c04e5824aa56a1dda59855421bc46353c0c80ed1eec6bde1bd916e6aee8b98a507976da6bd0ca7acc5fddee11e91205a450e5275d21389f71bc1d8864c1e920ebf6b6242cfe37154ab1cbeaeefac7091750cbafd680f02707da6e0887e9d2120898e9f7dbe19383e5ab3abc1acd2218d3bc694c1856e75461340
0 - 004* 00000313
0 - 787* 07096c6973742d636572740304747970650004583530390304666c61670002434103046461746102ea308202e6308201cea00302010202084f8f15e67b683389300d06092a864886f70d01010b05003011310f300d06035504031306546573744341301e170d3231303433303130343831395a170d3234303432393130343831395a3011310f300d0603550403130654657374434130820122300d06092a864886f70d01010105000382010f003082010a0282010100c68785cb4136bc9c1b8907b304c8b06e1ebb5add31d535af4b2b09b94803792f300d50b0b58f25622f18342ddc57b37d70464d3248f41588139529ed23bbbc178bcb3199bf66a3d71e8352fe2b1fb7df2402cefd9db829b9a49a0611609e32de102c9cfff66d80830c8ef44d72195c76f70c492860205cb08d67e3f3dc6cfbdbe13aa3cfc7e95db8ed38e9df2595b316e218449f2078cbbe45b959fcbd8b88504ecc232f6c3a333fd51d75c4399ddc0708fec80b5e8d455e4d825a63564f1093817348c43f52d0a021c01e4328b443bed85e9023efe297c9acffcc107cabf6061c91f0716648ebf755f27f37bb9b21ced57159a0179a5e1fc24a6e7cff7c5ef90203010001a3423040300f0603551d130101ff040530030101ff300e0603551d0f0101ff040403020106301d0603551d0e04160414f297d6ef112d19ee556b64cf325ba17b2
841691e300d06092a864886f70d01010b050003820101008414a272b0073da922b987ce03f1ee269697239030c8e3c1fc7d3791338804b8dfed1f73ce7181c7baaafd5172ab31eef354977b75f3f5cb7685d20ccf138dbb7a81891d4f89fa9d8ef0fc003eaf87cee122b4fd90acb007b2e9bc00a326919ed988e22c20eae4592a13b59f563f81e7f3596af436dfe72353f3c7c65f2763c1c68f76b343c713c9deb02acb04d0a8f10216b24a89087be639c0cf2c782eec2a04f64c664a74846eace19d9d095d0efdbaa85dd6e97bcb988020b8c6f2cc1726728040938dcd8b084939a6e80c5e3bb97208cf40e3ff88893222eac45632c3e07a45080a782d0744eb6e5ae00a4d0f3b63c961454ebb542c3be6a6458cf80e69
0 - 004* 00000001
0 - 001* 01
0 - 015> 0000000b04096c6973742d63657274
0 - 004* 00000001
0 - 001* 05
    --- PASS: TestSpyCertList/k=0/case=should_list_installed_certificates (0.00s)
```

</details>

#### ✔️ TestSpyCertFlush
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyCertFlush
--- PASS: TestSpyCertFlush (0.02s)
```

</details>
<details><summary>  ✔️ k=0/case=should_flush_ANY_certificates</summary>
output:

```
=== RUN   TestSpyCertFlush/k=0/case=should_flush_ANY_certificates
0 - 028> 00000018000b666c7573682d63657274730304747970650003414e59
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyCertFlush/k=0/case=should_flush_ANY_certificates (0.00s)
```

</details>

#### ✔️ TestSpyClientLogEvent
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyClientLogEvent
--- PASS: TestSpyClientLogEvent (5.05s)
```

</details>
<details><summary>  ✔️ k=0/case=should_read_log_event</summary>
output:

```
=== RUN   TestSpyClientLogEvent/k=0/case=should_read_log_event
1 - 009> 0000000503036c6f67
1 - 004* 00000001
1 - 001* 05
1 - 017> 0000000d030b636f6e74726f6c2d6c6f67
1 - 004* 00000001
1 - 001* 05
1 - 004* 0000007e
1 - 126* 07036c6f67030567726f75700003494b4503056c6576656c000131030674687265616400023130030a696b6573612d6e616d6500086261636b626f6e65030e696b6573612d756e69717565696400013603036d7367002773656e64696e67206b65657020616c69766520746f203137322e31372e302e315b33343039305d
1 - 009> 0000000504036c6f67
    --- PASS: TestSpyClientLogEvent/k=0/case=should_read_log_event (5.01s)
```

</details>

#### ✔️ TestSpyClientChildEvent
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyClientChildEvent
--- PASS: TestSpyClientChildEvent (0.02s)
```

</details>
<details><summary>  ✔️ k=0/case=should_read_child-updown_UP_event</summary>
output:

```
=== RUN   TestSpyClientChildEvent/k=0/case=should_read_child-updown_UP_event
1 - 009> 0000000503036c6f67
1 - 004* 00000001
1 - 001* 05
1 - 017> 0000000d030b636f6e74726f6c2d6c6f67
1 - 004* 00000001
1 - 001* 05
1 - 018> 0000000e030c6368696c642d7570646f776e
1 - 004* 00000001
1 - 001* 05
1 - 004* 000003cc
1 - 972* 070c6368696c642d7570646f776e03027570000379657301086261636b626f6e650308756e69717565696400023137030776657273696f6e00013203057374617465000b45535441424c4953484544030a6c6f63616c2d686f7374000a3137322e31372e302e32030a6c6f63616c2d706f727400043435303003086c6f63616c2d6964000a434e3d73657276657231030b72656d6f74652d686f7374000a3137322e31372e302e31030b72656d6f74652d706f727400053433383435030972656d6f74652d69640008434e3d7065657241030d696e69746961746f722d737069001062323833313932333330306234333664030d726573706f6e6465722d73706900106531386562653162636632386435393003096e61742d6c6f63616c0003796573030a6e61742d72656d6f7465000379657303076e61742d616e7900037965730308656e63722d616c6700074145535f434243030c656e63722d6b657973697a6500033235360309696e7465672d616c670011484d41435f534841325f3235365f31323803077072662d616c6700115052465f484d41435f534841325f323536030864682d67726f757000074543505f323536030b65737461626c6973686564000130030a72656b65792d74696d6500053133383837040b72656d6f74652d7669707305000831302e362e302e3106040d7461736b732d70617
37369766505000c4348494c445f435245415445050011494b455f415554485f4c49464554494d4505000a494b455f4d4f42494b450601096368696c642d73617301066e65742d343803046e616d6500036e65740308756e6971756569640002343803057265716964000131030573746174650009494e5354414c4c454403046d6f6465000654554e4e454c030870726f746f636f6c00034553500305656e636170000379657303067370692d696e0008633433613138363503077370692d6f75740008633335313939383703066370692d696e00046533376203076370692d6f75740004356464320308656e63722d616c6700074145535f434243030c656e63722d6b657973697a6500033235360309696e7465672d616c670011484d41435f534841325f3235365f313238030862797465732d696e000130030a7061636b6574732d696e000130030962797465732d6f7574000130030b7061636b6574732d6f7574000130030a72656b65792d74696d6500043332373303096c6966652d74696d65000433393630030c696e7374616c6c2d74696d6500013004086c6f63616c2d747305000b31302e312e342e302f323406040972656d6f74652d747305000b31302e362e302e312f333206020202
time="2021-08-24T12:37:17Z" level=error msg="error reading event: context canceled"
1 - 009> 0000000504036c6f67
    --- PASS: TestSpyClientChildEvent/k=0/case=should_read_child-updown_UP_event (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_read_child-updown_DOWN_event</summary>
output:

```
=== RUN   TestSpyClientChildEvent/k=1/case=should_read_child-updown_DOWN_event
1 - 009> 0000000503036c6f67
1 - 004* 00000001
1 - 001* 05
1 - 017> 0000000d030b636f6e74726f6c2d6c6f67
1 - 004* 00000001
1 - 001* 05
1 - 018> 0000000e030c6368696c642d7570646f776e
1 - 004* 00000001
1 - 001* 05
1 - 004* 0000037b
1 - 891* 070c6368696c642d7570646f776e01086261636b626f6e650308756e69717565696400023138030776657273696f6e00013203057374617465000844454c4554494e47030a6c6f63616c2d686f7374000a3137322e31372e302e32030a6c6f63616c2d706f727400043435303003086c6f63616c2d6964000a434e3d73657276657231030b72656d6f74652d686f7374000a3137322e31372e302e31030b72656d6f74652d706f727400053431323631030972656d6f74652d69640008434e3d7065657241030d696e69746961746f722d737069001063383136333366393937653665323639030d726573706f6e6465722d73706900103635343462633239306238653432633103096e61742d6c6f63616c0003796573030a6e61742d72656d6f7465000379657303076e61742d616e7900037965730308656e63722d616c6700074145535f434243030c656e63722d6b657973697a6500033235360309696e7465672d616c670011484d41435f534841325f3235365f31323803077072662d616c6700115052465f484d41435f534841325f323536030864682d67726f757000074543505f323536040b72656d6f74652d7669707305000831302e362e302e3106040d7461736b732d7061737369766505000a494b455f44454c4554450601096368696c642d73617301066e65742d343903046e616d6500036e6
5740308756e6971756569640002343903057265716964000131030573746174650009494e5354414c4c454403046d6f6465000654554e4e454c030870726f746f636f6c00034553500305656e636170000379657303067370692d696e0008636665623063393903077370692d6f75740008636439643631643803066370692d696e00046137353003076370692d6f75740004633532390308656e63722d616c6700074145535f434243030c656e63722d6b657973697a6500033235360309696e7465672d616c670011484d41435f534841325f3235365f313238030862797465732d696e000130030a7061636b6574732d696e000130030962797465732d6f7574000130030b7061636b6574732d6f7574000130030a72656b65792d74696d6500043332333003096c6966652d74696d65000433393439030c696e7374616c6c2d74696d650002313104086c6f63616c2d747305000b31302e312e342e302f323406040972656d6f74652d747305000b31302e362e302e312f333206020202
    --- PASS: TestSpyClientChildEvent/k=1/case=should_read_child-updown_DOWN_event (0.00s)
time="2021-08-24T12:37:17Z" level=error msg="error reading event: context canceled"
1 - 009> 0000000504036c6f67
```

</details>

#### ✔️ TestSpyConnLoad
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyConnLoad
--- PASS: TestSpyConnLoad (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_install_sample_server_configuration</summary>
output:

```
=== RUN   TestSpyConnLoad/k=0/case=should_install_sample_server_configuration
0 - 1025> 000003fd00096c6f61642d636f6e6e0107666f6f6261723201056c6f63616c03046175746800067075626b6579040563657274730502d2308202ce308201b6a003020102020826da66b8941dc605300d06092a864886f70d01010b05003017311530130603550403130c546573745365727665724341301e170d3231303433303130343830385a170d3234303432393130343830385a30123110300e060355040313077365727665723130820122300d06092a864886f70d01010105000382010f003082010a0282010100b8b973af1d6bdfea98a4d63e4480c5294caf13213f4ae9fd274d1b5bbd787bb53368f6953254402cf45f8e39faa7d4c4d1d23e17c7fe681c41fd658163ccfcf0dd74b27518536c590cf8e3ff0104682fa87ace827f40d388c625d849cf9ddeb09ab977ec53c94407e6c544c5200c768fc69350402091c687c7402e060cb041371ef0457c0e8b63fcad66b3be2176b2ca82edea735e0020017f3761e2916901824825b8370ca8b17263391147ae02e9ecb3cbd082ba4501b3ae9512b49f7e882e9b192e02d4db1eea6841abbe383c992b9815bb673f59bd695fcdffa621eb039e4e8107dbd8c990762ee7be6809129eef3f702136d7fcbfcfc32ee5b4b15b331d0203010001a3233021301f0603551d23041830168014bc2c8b607a721509e59c000a51401dd12a2e5d83300d06092a86
4886f70d01010b05000382010100b9ed6e266de66289b6a0165e85275041829bb6e12b0d819da93535b55b314b0fdda3640491ce454b92ecb5102ededa0f88388fdfc139d34440b97157f84a22e4718f79b6bf7363ff82d7469dda41d14b4b1a86c0ff4bbd8f98223245f17f71221e2388d91e7bc4f4fc3f042e9b2233c371cf8d4ecc544e54a356105ea1a3a906bfd450ef0486c04e5824aa56a1dda59855421bc46353c0c80ed1eec6bde1bd916e6aee8b98a507976da6bd0ca7acc5fddee11e91205a450e5275d21389f71bc1d8864c1e920ebf6b6242cfe37154ab1cbeaeefac7091750cbafd680f02707da6e0887e9d2120898e9f7dbe19383e5ab3abc1acd2218d3bc694c1856e754613400602010672656d6f746503046175746800067075626b65790201086368696c6472656e01036e657404086c6f63616c5f747305000b31302e312e342e302f323406040d6573705f70726f706f73616c7305000d6165733235362d7368613235360603066970636f6d700003796573030a72656b65795f74696d6500053336303073030a696e61637469766974790004333030730202040b6c6f63616c5f616464727305000425616e7906030776657273696f6e000132040970726f706f73616c730500146165733235362d7368613235362d656370323536060306756e6971756500077265706c61636503066d6f62696b65
000379657302
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyConnLoad/k=0/case=should_install_sample_server_configuration (0.00s)
```

</details>

#### ✔️ TestSpyConnUnload
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyConnUnload
--- PASS: TestSpyConnUnload (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_unload_connection</summary>
output:

```
=== RUN   TestSpyConnUnload/k=0/case=should_unload_connection
0 - 033> 0000001d000b756e6c6f61642d636f6e6e03046e616d6500086261636b626f6e65
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyConnUnload/k=0/case=should_unload_connection (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_unload_unknown_connection</summary>
output:

```
=== RUN   TestSpyConnUnload/k=1/case=should_unload_unknown_connection
0 - 034> 0000001e000b756e6c6f61642d636f6e6e03046e616d650009666f6f626172585858
0 - 004* 00000040
0 - 064* 0103077375636365737300026e6f03066572726d73670028756e6c6f61643a20636f6e6e656374696f6e2027666f6f62617258585827206e6f7420666f756e64
    --- PASS: TestSpyConnUnload/k=1/case=should_unload_unknown_connection (0.00s)
```

</details>

#### ✔️ TestSpyConnList
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyConnList
--- PASS: TestSpyConnList (0.01s)
```

</details>
<details><summary>  ✔️ k=0/case=should_list_installed_configurations</summary>
output:

```
=== RUN   TestSpyConnList/k=0/case=should_list_installed_configurations
0 - 015> 0000000b00096765742d636f6e6e73
0 - 004* 00000014
0 - 020* 010405636f6e6e730500086261636b626f6e6506
    --- PASS: TestSpyConnList/k=0/case=should_list_installed_configurations (0.00s)
```

</details>

#### ✔️ TestSpyConnInitiate
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyConnInitiate
--- PASS: TestSpyConnInitiate (0.02s)
```

</details>
<details><summary>  ✔️ k=0/case=should_initiate_a_connection</summary>
output:

```
=== RUN   TestSpyConnInitiate/k=0/case=should_initiate_a_connection
0 - 041> 000000250008696e69746961746503056368696c6400036e65740303696b6500086261636b626f6e65
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyConnInitiate/k=0/case=should_initiate_a_connection (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_error_on_unknwown_connection</summary>
output:

```
=== RUN   TestSpyConnInitiate/k=1/case=should_error_on_unknwown_connection
0 - 039> 000000230008696e69746961746503056368696c6400036e65740303696b650006666f6f626172
0 - 004* 00000037
0 - 055* 0103077375636365737300026e6f03066572726d7367001f4348494c445f534120636f6e66696720276e657427206e6f7420666f756e64
    --- PASS: TestSpyConnInitiate/k=1/case=should_error_on_unknwown_connection (0.00s)
```

</details>

#### ✔️ TestSpyConnTerminate
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyConnTerminate
--- PASS: TestSpyConnTerminate (0.05s)
```

</details>
<details><summary>  ✔️ k=0/case=should_terminate_a_child</summary>
output:

```
=== RUN   TestSpyConnTerminate/k=0/case=should_terminate_a_child
0 - 042> 0000002600097465726d696e61746503056368696c6400036e65740303696b6500086261636b626f6e65
0 - 004* 0000002a
0 - 042* 01030773756363657373000379657303076d617463686573000131030a7465726d696e61746564000131
    --- PASS: TestSpyConnTerminate/k=0/case=should_terminate_a_child (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_terminate_an_ike</summary>
output:

```
=== RUN   TestSpyConnTerminate/k=1/case=should_terminate_an_ike
0 - 030> 0000001a00097465726d696e6174650303696b6500086261636b626f6e65
0 - 004* 0000002a
0 - 042* 01030773756363657373000379657303076d617463686573000131030a7465726d696e61746564000131
    --- PASS: TestSpyConnTerminate/k=1/case=should_terminate_an_ike (0.00s)
```

</details>
<details><summary>  ✔️ k=2/case=should_error_on_unknwown_connection</summary>
output:

```
=== RUN   TestSpyConnTerminate/k=2/case=should_error_on_unknwown_connection
0 - 040> 0000002400097465726d696e61746503056368696c6400036e65740303696b650006666f6f626172
0 - 004* 00000055
0 - 085* 0103077375636365737300026e6f03076d617463686573000130030a7465726d696e6174656400013003066572726d736700226e6f206d61746368696e672053417320746f207465726d696e61746520666f756e64
    --- PASS: TestSpyConnTerminate/k=2/case=should_error_on_unknwown_connection (0.00s)
```

</details>

#### ✔️ TestSpyKeyList
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyKeyList
--- PASS: TestSpyKeyList (0.01s)
```

</details>
<details><summary>  ✔️ k=0/case=should_list_keys</summary>
output:

```
=== RUN   TestSpyKeyList/k=0/case=should_list_keys
0 - 014> 0000000a00086765742d6b657973
0 - 004* 00000033
0 - 051* 0104046b6579730500286331306162666266376366383838323039356330663162346364653062653236666236343864653706
    --- PASS: TestSpyKeyList/k=0/case=should_list_keys (0.00s)
```

</details>

#### ✔️ TestSpyKeyUnload
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyKeyUnload
--- PASS: TestSpyKeyUnload (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_unload_valid_key</summary>
output:

```
=== RUN   TestSpyKeyUnload/k=0/case=should_unload_valid_key
0 - 062> 0000003a000a756e6c6f61642d6b657903026964002863313061626662663763663838383230393563306631623463646530626532366662363438646537
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyKeyUnload/k=0/case=should_unload_valid_key (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_unload_invalid_key</summary>
output:

```
=== RUN   TestSpyKeyUnload/k=1/case=should_unload_invalid_key
0 - 070> 00000042000a756e6c6f61642d6b6579030269640030633130616266626637636638383832303935633066316234636465306265323666623634386465374445414442454546
0 - 004* 00000025
0 - 037* 0103077375636365737300026e6f03066572726d7367000d6b6579206e6f7420666f756e64
    --- PASS: TestSpyKeyUnload/k=1/case=should_unload_invalid_key (0.00s)
```

</details>

#### ✔️ TestSpyKeyLoad
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyKeyLoad
--- PASS: TestSpyKeyLoad (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_load_new_key_empty</summary>
output:

```
=== RUN   TestSpyKeyLoad/k=0/case=should_load_new_key_empty
0 - 033> 0000001d00086c6f61642d6b657903047479706500037273610304646174610000
0 - 004* 00000028
0 - 040* 0103077375636365737300026e6f03066572726d736700106b65792064617461206d697373696e67
    --- PASS: TestSpyKeyLoad/k=0/case=should_load_new_key_empty (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_load_new_key</summary>
output:

```
=== RUN   TestSpyKeyLoad/k=1/case=should_load_new_key
0 - 1225> 000004c500086c6f61642d6b6579030474797065000372736103046461746104a8308204a40201000282010100b8b973af1d6bdfea98a4d63e4480c5294caf13213f4ae9fd274d1b5bbd787bb53368f6953254402cf45f8e39faa7d4c4d1d23e17c7fe681c41fd658163ccfcf0dd74b27518536c590cf8e3ff0104682fa87ace827f40d388c625d849cf9ddeb09ab977ec53c94407e6c544c5200c768fc69350402091c687c7402e060cb041371ef0457c0e8b63fcad66b3be2176b2ca82edea735e0020017f3761e2916901824825b8370ca8b17263391147ae02e9ecb3cbd082ba4501b3ae9512b49f7e882e9b192e02d4db1eea6841abbe383c992b9815bb673f59bd695fcdffa621eb039e4e8107dbd8c990762ee7be6809129eef3f702136d7fcbfcfc32ee5b4b15b331d02030100010282010067ee67a92a0b8cb34868cde5c0d3169b12fb19ef45d6176a88973882584b16872fc2a9a1edec3b234fe707759592a2028eef14627af2a78ee68df473653c6b3ff5c977b2ac1a1bc6caa6aa58ca30b991bee0419a689087b3d790696db5f363dcc760fc9929d6fe80d7953c0910ec1234f88bdfc604cd1fff3adae04a250f71d0e46e2b5700b4c7ef93f2b92442cd672008a064d2c7cdf32369079edaee9264c199649918c22833045e7a48c295a2942f02fd2701f29f8486c2e85f2109a53b15c3a415012a
914fe25772916e15b2ae00799265f239473ab4cb2ac38f115d94aa7716bec5af80f20edad39191d837159935459d28f88130d15db37a9c962b93bd02818100f1ea05da5cdbc7b3402010ce5598e9ac377500e65bfd426c38affc6d65810400eda43fe7b73d12d2fe28958191c0f29f676c3d39fcac06adab6043669957e4bede0c1a1c9e679b585af8ecea60f369035aa75a36e0718d881997ef4911d11c8af444d065ee4e597028f9adfca48f83ceccf30f0ccaf69b79266a625bc5b167db02818100c37af530b51c39b0ba94d33940438d8daf9e5669731e0dc366e71891e23dcb1d6799309f9ff37b27b654e8da31693e0eeff6d647ee4dff71af42b57b5ad46c9c1019f02b8f5271475dce8a3d14095d919245bf407f4722dcb6b8b521494e10344180f1a26735da5c2b6af7e8a26679b120c99ad5cd8d60a568b2b5ae8c085e670281804ae3676c71d297bfa5da475998a5fdb0927a660ce9ed3ce2c3a9b73b26710a0c3f84d943a23605ddcb5044f81766e3b4f50f4ce4e6935a7de8cfa40ddeea96a57f97bf7d9c8bf64b23de6b79230a373812983c1540e5e62a7bc1cd1191b26a6399bab3c8da3ce6f311bc39603c9130fc93f5aa730b61cc3f74e4fa0deee53c8102818100a06982539a0bb37bc760e18495abd9b96f682bd914d290d0ccdccf58c7a395ce67795a61634cd6bf5bec89b8a3db8d458cbdae5210c8
88daadcbbc49a1dbb7d4c991bf78bf8013dd50a970df7655c926f035b420255226d5a04c2ab74a04795fa8713bd8dd815fd34afdd8ba5aaa652a69918731f4201433289b9e63c21e0bf902818100d524739b0a71038e47a157f5cd5cc32f7bb692323bc514a365f7041629c9d5616fe315073a2982fd26bbd68290687ef3943dab394e4cb37f44e2d403a0cc046be2f3be4ec6b07367a144b36be6223381d1b6777ab82bfcb272a415f6621f163b2bce577451cffbbf07b47b28da002ece3ce3deed83dc922472394ffe06c7b75e
0 - 004* 0000003d
0 - 061* 01030773756363657373000379657303026964002863313061626662663763663838383230393563306631623463646530626532366662363438646537
    --- PASS: TestSpyKeyLoad/k=1/case=should_load_new_key (0.00s)
```

</details>

#### ✔️ TestSpyPool
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyPool
--- PASS: TestSpyPool (0.01s)
```

</details>
<details><summary>  ✔️ k=0/case=should_get_pool</summary>
output:

```
=== RUN   TestSpyPool/k=0/case=should_get_pool
0 - 050> 0000002e00096765742d706f6f6c7303066c656173657300026e6f03046e616d65000f7374616e64616c6f6e655f706f6f6c
0 - 004* 00000047
0 - 071* 01010f7374616e64616c6f6e655f706f6f6c030462617365000831302e362e302e30030473697a650005363535333403066f6e6c696e6500013103076f66666c696e6500013002
    --- PASS: TestSpyPool/k=0/case=should_get_pool (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_get_pool_with_lease</summary>
output:

```
=== RUN   TestSpyPool/k=1/case=should_get_pool_with_lease
0 - 051> 0000002f00096765742d706f6f6c7303066c6561736573000379657303046e616d65000f7374616e64616c6f6e655f706f6f6c
0 - 004* 0000008b
0 - 139* 01010f7374616e64616c6f6e655f706f6f6c030462617365000831302e362e302e30030473697a650005363535333403066f6e6c696e6500013103076f66666c696e6500013001066c6561736573010130030761646472657373000831302e362e302e3103086964656e746974790008434e3d7065657241030673746174757300066f6e6c696e65020202
    --- PASS: TestSpyPool/k=1/case=should_get_pool_with_lease (0.00s)
```

</details>
<details><summary>  ✔️ k=2/case=should_get_unknown_pool</summary>
output:

```
=== RUN   TestSpyPool/k=2/case=should_get_unknown_pool
0 - 042> 0000002600096765742d706f6f6c7303066c656173657300026e6f03046e616d650007756e6b6e6f776e
0 - 004* 00000047
0 - 071* 01010f7374616e64616c6f6e655f706f6f6c030462617365000831302e362e302e30030473697a650005363535333403066f6e6c696e6500013103076f66666c696e6500013002
    --- PASS: TestSpyPool/k=2/case=should_get_unknown_pool (0.00s)
```

</details>

#### ✔️ TestSpyPoolList
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyPoolList
--- PASS: TestSpyPoolList (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_list_pool</summary>
output:

```
=== RUN   TestSpyPoolList/k=0/case=should_list_pool
0 - 027> 0000001700096765742d706f6f6c7303066c656173657300026e6f
0 - 004* 00000047
0 - 071* 01010f7374616e64616c6f6e655f706f6f6c030462617365000831302e362e302e30030473697a650005363535333403066f6e6c696e6500013103076f66666c696e6500013002
map[standalone_pool:{standalone_pool 10.6.0.0/16 1 0 []}]
    --- PASS: TestSpyPoolList/k=0/case=should_list_pool (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_list_pool_with_lease</summary>
output:

```
=== RUN   TestSpyPoolList/k=1/case=should_list_pool_with_lease
0 - 028> 0000001800096765742d706f6f6c7303066c65617365730003796573
0 - 004* 0000008b
0 - 139* 01010f7374616e64616c6f6e655f706f6f6c030462617365000831302e362e302e30030473697a650005363535333403066f6e6c696e6500013103076f66666c696e6500013001066c6561736573010130030761646472657373000831302e362e302e3103086964656e746974790008434e3d7065657241030673746174757300066f6e6c696e65020202
map[standalone_pool:{standalone_pool 10.6.0.0/16 1 0 [{0 10.6.0.1 CN=peerA online}]}]
    --- PASS: TestSpyPoolList/k=1/case=should_list_pool_with_lease (0.00s)
```

</details>

#### ✔️ TestSpyPoolUnload
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyPoolUnload
--- PASS: TestSpyPoolUnload (0.01s)
```

</details>
<details><summary>  ✔️ k=0/case=should_unload_unknown_pool</summary>
output:

```
=== RUN   TestSpyPoolUnload/k=0/case=should_unload_unknown_pool
0 - 031> 0000001b000b756e6c6f61642d706f6f6c03046e616d650006666f6f626172
0 - 004* 00000028
0 - 040* 0103077375636365737300026e6f03066572726d73670010666f6f626172206e6f7420666f756e64
    --- PASS: TestSpyPoolUnload/k=0/case=should_unload_unknown_pool (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_unload_pool</summary>
output:

```
=== RUN   TestSpyPoolUnload/k=1/case=should_unload_pool
0 - 040> 00000024000b756e6c6f61642d706f6f6c03046e616d65000f7374616e64616c6f6e655f706f6f6c
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyPoolUnload/k=1/case=should_unload_pool (0.00s)
```

</details>
<details><summary>  ✔️ k=2/case=should_unload_pool_with_online_leases</summary>
output:

```
=== RUN   TestSpyPoolUnload/k=2/case=should_unload_pool_with_online_leases
0 - 040> 00000024000b756e6c6f61642d706f6f6c03046e616d65000f7374616e64616c6f6e655f706f6f6c
0 - 004* 0000004b
0 - 075* 0103077375636365737300026e6f03066572726d736700337374616e64616c6f6e655f706f6f6c20686173206f6e6c696e65206c65617365732c20756e61626c6520746f20756e6c6f6164
    --- PASS: TestSpyPoolUnload/k=2/case=should_unload_pool_with_online_leases (0.00s)
```

</details>

#### ✔️ TestSpyPoolLoad
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyPoolLoad
--- PASS: TestSpyPoolLoad (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_load_new_pool</summary>
output:

```
=== RUN   TestSpyPoolLoad/k=0/case=should_load_new_pool
0 - 044> 0000002800096c6f61642d706f6f6c0106666f6f62617203056164647273000b31302e302e302e302f323402
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyPoolLoad/k=0/case=should_load_new_pool (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_load_new_pool_with_attrs</summary>
output:

```
=== RUN   TestSpyPoolLoad/k=1/case=should_load_new_pool_with_attrs
0 - 073> 0000004500096c6f61642d706f6f6c0106666f6f62617a03056164647273000e3139322e3136382e302e302f32340403646e73050007382e382e382e38050007342e342e342e340602
0 - 004* 0000000f
0 - 015* 010307737563636573730003796573
    --- PASS: TestSpyPoolLoad/k=1/case=should_load_new_pool_with_attrs (0.00s)
```

</details>

#### ✔️ TestSpySaList
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpySaList
--- PASS: TestSpySaList (0.00s)
```

</details>
<details><summary>  ✔️ k=0/case=should_list_empty_SAS</summary>
output:

```
=== RUN   TestSpySaList/k=0/case=should_list_empty_SAS
0 - 013> 0000000903076c6973742d7361
0 - 004* 00000001
0 - 001* 05
0 - 028> 0000001800086c6973742d73617303076e6f626c6f636b0003796573
0 - 004* 00000001
0 - 001* 01
0 - 013> 0000000904076c6973742d7361
0 - 004* 00000001
0 - 001* 05
    --- PASS: TestSpySaList/k=0/case=should_list_empty_SAS (0.00s)
```

</details>
<details><summary>  ✔️ k=1/case=should_list_and_parse_SAS</summary>
output:

```
=== RUN   TestSpySaList/k=1/case=should_list_and_parse_SAS
0 - 013> 0000000903076c6973742d7361
0 - 004* 00000001
0 - 001* 05
0 - 028> 0000001800086c6973742d73617303076e6f626c6f636b0003796573
0 - 004* 0000037d
0 - 893* 07076c6973742d736101086261636b626f6e650308756e697175656964000131030776657273696f6e00013203057374617465000b45535441424c4953484544030a6c6f63616c2d686f7374000a3137322e31372e302e32030a6c6f63616c2d706f727400043435303003086c6f63616c2d6964000a434e3d73657276657231030b72656d6f74652d686f7374000a3137322e31372e302e31030b72656d6f74652d706f727400053435323330030972656d6f74652d69640008434e3d7065657241030d696e69746961746f722d737069001065396132303637343530333464346465030d726573706f6e6465722d73706900106337376563383736336634366338396503096e61742d6c6f63616c0003796573030a6e61742d72656d6f7465000379657303076e61742d616e7900037965730308656e63722d616c6700074145535f434243030c656e63722d6b657973697a6500033235360309696e7465672d616c670011484d41435f534841325f3235365f31323803077072662d616c6700115052465f484d41435f534841325f323536030864682d67726f757000074543505f323536030b65737461626c697368656400023332030a72656b65792d74696d6500053134313232040b72656d6f74652d7669707305000831302e362e302e310601096368696c642d73617301056e65742d3103046e616d650
0036e65740308756e69717565696400013103057265716964000131030573746174650009494e5354414c4c454403046d6f6465000654554e4e454c030870726f746f636f6c00034553500305656e636170000379657303067370692d696e0008636361376635343103077370692d6f75740008633365363030663103066370692d696e00043365626103076370692d6f75740004633864330308656e63722d616c6700074145535f434243030c656e63722d6b657973697a6500033235360309696e7465672d616c670011484d41435f534841325f3235365f313238030862797465732d696e000130030a7061636b6574732d696e000130030962797465732d6f7574000130030b7061636b6574732d6f7574000130030a72656b65792d74696d6500043332353803096c6966652d74696d65000433393238030c696e7374616c6c2d74696d650002333204086c6f63616c2d747305000b31302e312e342e302f323406040972656d6f74652d747305000b31302e362e302e312f333206020202
0 - 004* 00000001
0 - 001* 01
0 - 013> 0000000904076c6973742d7361
0 - 004* 00000001
0 - 001* 05
    --- PASS: TestSpySaList/k=1/case=should_list_and_parse_SAS (0.00s)
```

</details>

#### ✔️ TestSpyStats
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyStats
0 - 011> 0000000700057374617473
0 - 004* 00000182
0 - 386* 010106757074696d65030772756e6e696e670008323020686f757273030573696e636500144d61792030392031383a32373a30332032303231020107776f726b6572730305746f74616c00023136030469646c650002313101066163746976650308637269746963616c00013403046869676800013003066d656469756d00013103036c6f77000130020201067175657565730308637269746963616c00013003046869676800013003066d656469756d00013003036c6f770001300203097363686564756c65640001300106696b657361730305746f74616c000130030968616c662d6f70656e000130020407706c7567696e73050006636861726f6e0500036165730500047368613105000672616e646f6d0500056e6f6e6365050005706b637331050006706b6373313205000370656d0500076f70656e73736c050004686d616305000e6b65726e656c2d6e65746c696e6b05000e736f636b65742d64656661756c740500067374726f6b6505000476696369050008636f756e7465727306
--- PASS: TestSpyStats (0.00s)
```

</details>

#### ✔️ TestVersion
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestVersion
--- PASS: TestVersion (0.00s)
```

</details>

#### ✔️ TestSpyVersion
<details><summary>  ✔️ (main)</summary>
output:

```
=== RUN   TestSpyVersion
0 - 013> 00000009000776657273696f6e
0 - 004* 0000006b
0 - 107* 0103066461656d6f6e0006636861726f6e030776657273696f6e0005352e392e3203077379736e616d6500054c696e7578030772656c65617365001e352e342e37322d6d6963726f736f66742d7374616e646172642d57534c3203076d616368696e6500067838365f3634
--- PASS: TestSpyVersion (1.11s)
```

</details>


### ✔️ <a id="user-content-r0s9" href="#r0s9">github.com/dummy/sample2/driver/vpn/vici/conn</a>

<details><summary>output</summary>

```
?   	github.com/dummy/sample2/driver/vpn/vici/conn	[no test files]
```

</details>


### ✔️ <a id="user-content-r0s10" href="#r0s10">github.com/dummy/sample2/driver/vpn/vici/conn/child</a>

<details><summary>output</summary>

```
?   	github.com/dummy/sample2/driver/vpn/vici/conn/child	[no test files]
```

</details>


### ✔️ <a id="user-content-r0s11" href="#r0s11">github.com/dummy/sample2/integration_test</a>

<details><summary>output</summary>

```
panic: exit status 1

goroutine 1 [running]:
github.com/dummy/sample2/integration_test.init.0()
	/home/runner/work/sample2/sample2/integration_test/testbed_test.go:36 +0x585
FAIL	github.com/dummy/sample2/integration_test	1.162s
```

</details>
