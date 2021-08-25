![Tests passed successfully](https://img.shields.io/badge/tests-67%20passed%2C%2012%20skipped-success)
## ✔️ <a id="user-content-r0" href="#r0">fixtures/external/SilentNotes.trx</a>
**79** tests were completed in **1s** with **67** passed, **0** failed and **12** skipped.
|Test suite|Passed|Failed|Skipped|Time|
|:---|---:|---:|---:|---:|
|[VanillaCloudStorageClientTest.CloudStorageCredentialsTest](#r0s0)|6✔️|||30ms|
|[VanillaCloudStorageClientTest.CloudStorageProviders.DropboxCloudStorageClientTest](#r0s1)|2✔️||3✖️|101ms|
|[VanillaCloudStorageClientTest.CloudStorageProviders.FtpCloudStorageClientTest](#r0s2)|4✔️||3✖️|166ms|
|[VanillaCloudStorageClientTest.CloudStorageProviders.GmxCloudStorageClientTest](#r0s3)|2✔️|||7ms|
|[VanillaCloudStorageClientTest.CloudStorageProviders.GoogleCloudStorageClientTest](#r0s4)|1✔️||3✖️|40ms|
|[VanillaCloudStorageClientTest.CloudStorageProviders.OnedriveCloudStorageClientTest](#r0s5)|1✔️||3✖️|15ms|
|[VanillaCloudStorageClientTest.CloudStorageProviders.WebdavCloudStorageClientTest](#r0s6)|5✔️|||16ms|
|[VanillaCloudStorageClientTest.CloudStorageTokenTest](#r0s7)|9✔️|||0ms|
|[VanillaCloudStorageClientTest.OAuth2.AuthorizationResponseErrorTest](#r0s8)|3✔️|||3ms|
|[VanillaCloudStorageClientTest.OAuth2.OAuth2UtilsTest](#r0s9)|9✔️|||12ms|
|[VanillaCloudStorageClientTest.OAuth2CloudStorageClientTest](#r0s10)|5✔️|||13ms|
|[VanillaCloudStorageClientTest.SecureStringExtensionsTest](#r0s11)|7✔️|||0ms|
|[VanillaCloudStorageClientTest.SerializeableCloudStorageCredentialsTest](#r0s12)|13✔️|||43ms|
### ✔️ <a id="user-content-r0s0" href="#r0s0">VanillaCloudStorageClientTest.CloudStorageCredentialsTest</a>

<details><summary>✔️ AreEqualWorksWithDifferentPassword</summary>
</details>
<details><summary>✔️ AreEqualWorksWithSameContent</summary>
</details>
<details><summary>✔️ CorrectlyConvertsSecureStringToString</summary>
</details>
<details><summary>✔️ CorrectlyConvertsStringToSecureString</summary>
</details>
<details><summary>✔️ ValidateAcceptsValidCredentials</summary>
</details>
<details><summary>✔️ ValidateRejectsInvalidCredentials</summary>
</details>


### ✔️ <a id="user-content-r0s1" href="#r0s1">VanillaCloudStorageClientTest.CloudStorageProviders.DropboxCloudStorageClientTest</a>

<details><summary>✔️ FileLifecycleWorks</summary>
</details>
<details><summary>✖️ ReallyDoFetchToken</summary>
</details>
<details><summary>✖️ ReallyDoOpenAuthorizationPageInBrowser</summary>
</details>
<details><summary>✖️ ReallyDoRefreshToken</summary>
</details>
<details><summary>✔️ ThrowsAccessDeniedExceptionWithInvalidToken</summary>
</details>


### ✔️ <a id="user-content-r0s2" href="#r0s2">VanillaCloudStorageClientTest.CloudStorageProviders.FtpCloudStorageClientTest</a>

<details><summary>✔️ FileLifecycleWorks</summary>
</details>
<details><summary>✔️ SanitizeCredentials_ChangesInvalidPrefix</summary>
</details>
<details><summary>✔️ SecureSslConnectionWorks</summary>
</details>
<details><summary>✔️ ThrowsWithHttpInsteadOfFtp</summary>
</details>
<details><summary>✖️ ThrowsWithInvalidPassword</summary>
</details>
<details><summary>✖️ ThrowsWithInvalidUrl</summary>
</details>
<details><summary>✖️ ThrowsWithInvalidUsername</summary>
</details>


### ✔️ <a id="user-content-r0s3" href="#r0s3">VanillaCloudStorageClientTest.CloudStorageProviders.GmxCloudStorageClientTest</a>

<details><summary>✔️ ChoosesCorrectUrlForGmxComEmail</summary>
</details>
<details><summary>✔️ ChoosesCorrectUrlForGmxNetEmail</summary>
</details>


### ✔️ <a id="user-content-r0s4" href="#r0s4">VanillaCloudStorageClientTest.CloudStorageProviders.GoogleCloudStorageClientTest</a>

<details><summary>✔️ FileLifecycleWorks</summary>
</details>
<details><summary>✖️ ReallyDoFetchToken</summary>
</details>
<details><summary>✖️ ReallyDoOpenAuthorizationPageInBrowser</summary>
</details>
<details><summary>✖️ ReallyDoRefreshToken</summary>
</details>


### ✔️ <a id="user-content-r0s5" href="#r0s5">VanillaCloudStorageClientTest.CloudStorageProviders.OnedriveCloudStorageClientTest</a>

<details><summary>✔️ FileLifecycleWorks</summary>
</details>
<details><summary>✖️ ReallyDoFetchToken</summary>
</details>
<details><summary>✖️ ReallyDoOpenAuthorizationPageInBrowser</summary>
</details>
<details><summary>✖️ ReallyDoRefreshToken</summary>
</details>


### ✔️ <a id="user-content-r0s6" href="#r0s6">VanillaCloudStorageClientTest.CloudStorageProviders.WebdavCloudStorageClientTest</a>

<details><summary>✔️ FileLifecycleWorks</summary>
</details>
<details><summary>✔️ ParseGmxWebdavResponseCorrectly</summary>
</details>
<details><summary>✔️ ParseStratoWebdavResponseCorrectly</summary>
</details>
<details><summary>✔️ ThrowsWithInvalidPath</summary>
</details>
<details><summary>✔️ ThrowsWithInvalidUsername</summary>
</details>


### ✔️ <a id="user-content-r0s7" href="#r0s7">VanillaCloudStorageClientTest.CloudStorageTokenTest</a>

<details><summary>✔️ AreEqualWorksWithNullDate</summary>
</details>
<details><summary>✔️ AreEqualWorksWithSameContent</summary>
</details>
<details><summary>✔️ NeedsRefreshReturnsFalseForTokenFlow</summary>
</details>
<details><summary>✔️ NeedsRefreshReturnsFalseIfNotExpired</summary>
</details>
<details><summary>✔️ NeedsRefreshReturnsTrueIfExpired</summary>
</details>
<details><summary>✔️ NeedsRefreshReturnsTrueIfNoExpirationDate</summary>
</details>
<details><summary>✔️ SetExpiryDateBySecondsWorks</summary>
</details>
<details><summary>✔️ SetExpiryDateBySecondsWorksWithNull</summary>
</details>
<details><summary>✔️ SetExpiryDateBySecondsWorksWithVeryShortPeriod</summary>
</details>


### ✔️ <a id="user-content-r0s8" href="#r0s8">VanillaCloudStorageClientTest.OAuth2.AuthorizationResponseErrorTest</a>

<details><summary>✔️ ParsesAllErrorCodesCorrectly</summary>
</details>
<details><summary>✔️ ParsesNullErrorCodeCorrectly</summary>
</details>
<details><summary>✔️ ParsesUnknownErrorCodeCorrectly</summary>
</details>


### ✔️ <a id="user-content-r0s9" href="#r0s9">VanillaCloudStorageClientTest.OAuth2.OAuth2UtilsTest</a>

<details><summary>✔️ BuildAuthorizationRequestUrlEscapesParameters</summary>
</details>
<details><summary>✔️ BuildAuthorizationRequestUrlLeavesOutOptionalParameters</summary>
</details>
<details><summary>✔️ BuildAuthorizationRequestUrlThrowsWithMissingRedirectUrlForTokenFlow</summary>
</details>
<details><summary>✔️ BuildAuthorizationRequestUrlUsesAllParameters</summary>
</details>
<details><summary>✔️ BuildAuthorizationRequestUrlUsesCodeVerifier</summary>
</details>
<details><summary>✔️ ParseRealWorldDropboxRejectResponse</summary>
</details>
<details><summary>✔️ ParseRealWorldDropboxSuccessResponse</summary>
</details>
<details><summary>✔️ ParseRealWorldGoogleRejectResponse</summary>
</details>
<details><summary>✔️ ParseRealWorldGoogleSuccessResponse</summary>
</details>


### ✔️ <a id="user-content-r0s10" href="#r0s10">VanillaCloudStorageClientTest.OAuth2CloudStorageClientTest</a>

<details><summary>✔️ BuildOAuth2AuthorizationRequestUrlWorks</summary>
</details>
<details><summary>✔️ FetchTokenCanInterpretGoogleResponse</summary>
</details>
<details><summary>✔️ FetchTokenReturnsNullForDeniedAccess</summary>
</details>
<details><summary>✔️ FetchTokenThrowsWithWrongState</summary>
</details>
<details><summary>✔️ RefreshTokenCanInterpretGoogleResponse</summary>
</details>


### ✔️ <a id="user-content-r0s11" href="#r0s11">VanillaCloudStorageClientTest.SecureStringExtensionsTest</a>

<details><summary>✔️ AreEqualsWorksCorrectly</summary>
</details>
<details><summary>✔️ CorrectlyConvertsSecureStringToString</summary>
</details>
<details><summary>✔️ CorrectlyConvertsSecureStringToUnicodeBytes</summary>
</details>
<details><summary>✔️ CorrectlyConvertsSecureStringToUtf8Bytes</summary>
</details>
<details><summary>✔️ CorrectlyConvertsStringToSecureString</summary>
</details>
<details><summary>✔️ CorrectlyConvertsUnicodeBytesToSecureString</summary>
</details>
<details><summary>✔️ CorrectlyConvertsUtf8BytesToSecureString</summary>
</details>


### ✔️ <a id="user-content-r0s12" href="#r0s12">VanillaCloudStorageClientTest.SerializeableCloudStorageCredentialsTest</a>

<details><summary>✔️ DecryptAfterDesrializationCanReadAllPropertiesBack</summary>
</details>
<details><summary>✔️ DecryptAfterDesrializationRespectsNullProperties</summary>
</details>
<details><summary>✔️ EncryptBeforeSerializationProtectsAllNecessaryProperties</summary>
</details>
<details><summary>✔️ EncryptBeforeSerializationRespectsNullProperties</summary>
</details>
<details><summary>✔️ SerializedDatacontractCanBeReadBack</summary>
</details>
<details><summary>✔️ SerializedDatacontractDoesNotContainNullProperties</summary>
</details>
<details><summary>✔️ SerializedDatacontractDoesNotContainPlaintextData</summary>
</details>
<details><summary>✔️ SerializedJsonCanBeReadBack</summary>
</details>
<details><summary>✔️ SerializedJsonDoesNotContainNullProperties</summary>
</details>
<details><summary>✔️ SerializedJsonDoesNotContainPlaintextData</summary>
</details>
<details><summary>✔️ SerializedXmlCanBeReadBack</summary>
</details>
<details><summary>✔️ SerializedXmlDoesNotContainNullProperties</summary>
</details>
<details><summary>✔️ SerializedXmlDoesNotContainPlaintextData</summary>
</details>

