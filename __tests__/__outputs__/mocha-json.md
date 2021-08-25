![Tests failed](https://img.shields.io/badge/tests-1%20passed%2C%204%20failed%2C%201%20skipped-critical)
## ❌ <a id="user-content-r0" href="#r0">fixtures/mocha-json.json</a>
**6** tests were completed in **12ms** with **1** passed, **4** failed and **1** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|[test/main.test.js](#r0s0)|1✔️|3❌||1ms|
|[test/second.test.js](#r0s1)||1❌|1✖️|8ms|
### ❌ <a id="user-content-r0s0" href="#r0s0">test/main.test.js</a>

#### ✔️ Test 1
<details><summary>  ✔️ Passing test</summary>
</details>

#### ❌ Test 1 Test 1.1
<details><summary>  ❌ Exception in target unit</summary>
error:

```
Some error
```

</details>
<details><summary>  ❌ Failing test</summary>
error:

```
Expected values to be strictly equal:

false !== true

```

</details>

#### ❌ Test 2
<details><summary>  ❌ Exception in test</summary>
error:

```
Some error
```

</details>


### ❌ <a id="user-content-r0s1" href="#r0s1">test/second.test.js</a>
<details><summary>✖️ Skipped test</summary>
</details>
<details><summary>❌ Timeout test</summary>
error:

```
Timeout of 1ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (C:\Users\Michal\Workspace\dorny\test-reporter\reports\mocha\test\second.test.js)
```

</details>

