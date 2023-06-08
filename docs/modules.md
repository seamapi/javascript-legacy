[seamapi](README.md) / Exports

# seamapi

## Table of contents

### References

- [default](modules.md#default)

### Namespaces

- [SeamOSRouteTypes](modules/SeamOSRouteTypes.md)

### Classes

- [Seam](classes/Seam.md)
- [SeamAPIError](classes/SeamAPIError.md)
- [SeamActionAttemptError](classes/SeamActionAttemptError.md)
- [SeamMalformedInputError](classes/SeamMalformedInputError.md)
- [SeamOS](classes/SeamOS.md)
- [SeamWebhook](classes/SeamWebhook.md)

### Interfaces

- [APIErrorResponse](interfaces/APIErrorResponse.md)
- [AccessCodeBase](interfaces/AccessCodeBase.md)
- [AccessCodeCreateBaseRequest](interfaces/AccessCodeCreateBaseRequest.md)
- [AccessCodeCreateMultipleOngoingRequest](interfaces/AccessCodeCreateMultipleOngoingRequest.md)
- [AccessCodeCreateMultipleResponse](interfaces/AccessCodeCreateMultipleResponse.md)
- [AccessCodeCreateMultipleScheduledRequest](interfaces/AccessCodeCreateMultipleScheduledRequest.md)
- [AccessCodeCreateOngoingRequest](interfaces/AccessCodeCreateOngoingRequest.md)
- [AccessCodeCreateResponse](interfaces/AccessCodeCreateResponse.md)
- [AccessCodeCreateScheduledRequest](interfaces/AccessCodeCreateScheduledRequest.md)
- [AccessCodeGetResponse](interfaces/AccessCodeGetResponse.md)
- [AccessCodeUpdateBaseRequest](interfaces/AccessCodeUpdateBaseRequest.md)
- [AccessCodesListResponse](interfaces/AccessCodesListResponse.md)
- [ActionAttemptCreateResponse](interfaces/ActionAttemptCreateResponse.md)
- [ActionAttemptGetResponse](interfaces/ActionAttemptGetResponse.md)
- [ActionAttemptResultTypeMap](interfaces/ActionAttemptResultTypeMap.md)
- [ActionAttemptWithError](interfaces/ActionAttemptWithError.md)
- [ClientSession](interfaces/ClientSession.md)
- [ClientSessionResponse](interfaces/ClientSessionResponse.md)
- [ConnectWebview](interfaces/ConnectWebview.md)
- [ConnectWebviewCreateRequest](interfaces/ConnectWebviewCreateRequest.md)
- [ConnectWebviewCreateResponse](interfaces/ConnectWebviewCreateResponse.md)
- [ConnectWebviewDeleteRequest](interfaces/ConnectWebviewDeleteRequest.md)
- [ConnectWebviewGetResponse](interfaces/ConnectWebviewGetResponse.md)
- [ConnectWebviewsListResponse](interfaces/ConnectWebviewsListResponse.md)
- [ConnectedAccount](interfaces/ConnectedAccount.md)
- [ConnectedAccountsDeleteRequest](interfaces/ConnectedAccountsDeleteRequest.md)
- [ConnectedAccountsGetRequest](interfaces/ConnectedAccountsGetRequest.md)
- [ConnectedAccountsGetResponse](interfaces/ConnectedAccountsGetResponse.md)
- [ConnectedAccountsListResponse](interfaces/ConnectedAccountsListResponse.md)
- [Device](interfaces/Device.md)
- [DeviceGetResponse](interfaces/DeviceGetResponse.md)
- [DeviceModel](interfaces/DeviceModel.md)
- [DeviceProvider](interfaces/DeviceProvider.md)
- [DeviceProvidersListRequest](interfaces/DeviceProvidersListRequest.md)
- [DeviceProvidersListResponse](interfaces/DeviceProvidersListResponse.md)
- [DevicesListRequest](interfaces/DevicesListRequest.md)
- [DevicesListResponse](interfaces/DevicesListResponse.md)
- [ErroredAPIResponse](interfaces/ErroredAPIResponse.md)
- [EventsListRequest](interfaces/EventsListRequest.md)
- [EventsListResponse](interfaces/EventsListResponse.md)
- [ExtendedAxiosRequestConfig](interfaces/ExtendedAxiosRequestConfig.md)
- [LockGetResponse](interfaces/LockGetResponse.md)
- [LockProperties](interfaces/LockProperties.md)
- [LocksListResponse](interfaces/LocksListResponse.md)
- [ManagedAccessCodeBase](interfaces/ManagedAccessCodeBase.md)
- [OngoingAccessCode](interfaces/OngoingAccessCode.md)
- [PendingActionAttempt](interfaces/PendingActionAttempt.md)
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [SeamClientOptions](interfaces/SeamClientOptions.md)
- [SeamError](interfaces/SeamError.md)
- [SeamOSClientOptions](interfaces/SeamOSClientOptions.md)
- [SeamWarning](interfaces/SeamWarning.md)
- [SuccessfulActionAttempt](interfaces/SuccessfulActionAttempt.md)
- [TimeBoundAccessCode](interfaces/TimeBoundAccessCode.md)
- [UnmanagedAccessCodeBase](interfaces/UnmanagedAccessCodeBase.md)
- [UnmanagedAccessCodesGetResponse](interfaces/UnmanagedAccessCodesGetResponse.md)
- [UnmanagedAccessCodesListResponse](interfaces/UnmanagedAccessCodesListResponse.md)
- [UnmanagedDeviceListResponse](interfaces/UnmanagedDeviceListResponse.md)
- [UnmanagedOngoingAccessCode](interfaces/UnmanagedOngoingAccessCode.md)
- [UnmanagedTimeBoundAccessCode](interfaces/UnmanagedTimeBoundAccessCode.md)
- [UserIdentifier](interfaces/UserIdentifier.md)
- [Webhook](interfaces/Webhook.md)
- [WebhookGetResponse](interfaces/WebhookGetResponse.md)
- [WebhookListResponse](interfaces/WebhookListResponse.md)
- [Workspace](interfaces/Workspace.md)
- [WorkspaceGetResponse](interfaces/WorkspaceGetResponse.md)
- [WorkspaceResetSandboxResponse](interfaces/WorkspaceResetSandboxResponse.md)
- [WorkspacesListResponse](interfaces/WorkspacesListResponse.md)

### Type aliases

- [APIResponse](modules.md#apiresponse)
- [AccessCode](modules.md#accesscode)
- [AccessCodeConstraint](modules.md#accesscodeconstraint)
- [AccessCodeCreateMultipleBaseRequest](modules.md#accesscodecreatemultiplebaserequest)
- [AccessCodeCreateMultipleRequest](modules.md#accesscodecreatemultiplerequest)
- [AccessCodeCreateRequest](modules.md#accesscodecreaterequest)
- [AccessCodeDeleteRequest](modules.md#accesscodedeleterequest)
- [AccessCodeGetRequest](modules.md#accesscodegetrequest)
- [AccessCodeUpdateOngoingRequest](modules.md#accesscodeupdateongoingrequest)
- [AccessCodeUpdateRequest](modules.md#accesscodeupdaterequest)
- [AccessCodeUpdateScheduledRequest](modules.md#accesscodeupdatescheduledrequest)
- [AccessCodesListRequest](modules.md#accesscodeslistrequest)
- [ActionAttempt](modules.md#actionattempt)
- [ActionType](modules.md#actiontype)
- [AnyDevice](modules.md#anydevice)
- [BatteryStatus](modules.md#batterystatus)
- [CommonDeviceProperties](modules.md#commondeviceproperties)
- [CustomMetadata](modules.md#custommetadata)
- [DeviceDeleteRequest](modules.md#devicedeleterequest)
- [DeviceGetRequest](modules.md#devicegetrequest)
- [DeviceLocation](modules.md#devicelocation)
- [DeviceModelsListRequest](modules.md#devicemodelslistrequest)
- [DeviceModelsListResponse](modules.md#devicemodelslistresponse)
- [DeviceType](modules.md#devicetype)
- [DeviceUpdateRequest](modules.md#deviceupdaterequest)
- [Event](modules.md#event)
- [LockDevice](modules.md#lockdevice)
- [LockDeviceType](modules.md#lockdevicetype)
- [NoiseDetectionDeviceType](modules.md#noisedetectiondevicetype)
- [NoiseThresholds](modules.md#noisethresholds)
- [NoiseThresholdsCreateRequest](modules.md#noisethresholdscreaterequest)
- [NoiseThresholdsDeleteRequest](modules.md#noisethresholdsdeleterequest)
- [NoiseThresholdsListRequest](modules.md#noisethresholdslistrequest)
- [NoiseThresholdsListResponse](modules.md#noisethresholdslistresponse)
- [NoiseThresholdsUpdateRequest](modules.md#noisethresholdsupdaterequest)
- [Provider](modules.md#provider)
- [ProviderCategory](modules.md#providercategory)
- [SeamWebhookEvent](modules.md#seamwebhookevent)
- [SuccessfulAPIResponse](modules.md#successfulapiresponse)
- [UnmanagedAccessCode](modules.md#unmanagedaccesscode)
- [UnmanagedAccessCodeConvertToManagedRequest](modules.md#unmanagedaccesscodeconverttomanagedrequest)
- [UnmanagedAccessCodeDeleteRequest](modules.md#unmanagedaccesscodedeleterequest)
- [UnmanagedAccessCodeGetRequest](modules.md#unmanagedaccesscodegetrequest)
- [UnmanagedAccessCodeUpdateRequest](modules.md#unmanagedaccesscodeupdaterequest)
- [UnmanagedAccessCodesListRequest](modules.md#unmanagedaccesscodeslistrequest)
- [UnmanagedDevice](modules.md#unmanageddevice)
- [UnmanagedDeviceUpdateRequest](modules.md#unmanageddeviceupdaterequest)
- [WebhookCreateRequest](modules.md#webhookcreaterequest)
- [WebhookGetRequest](modules.md#webhookgetrequest)

### Variables

- [LOCK\_DEVICE\_TYPES](modules.md#lock_device_types)
- [NOISE\_DETECTION\_DEVICE\_TYPES](modules.md#noise_detection_device_types)
- [PROVIDERS](modules.md#providers)

### Functions

- [getSeamClientOptionsWithDefaults](modules.md#getseamclientoptionswithdefaults)
- [getSeamOSClientOptionsWithDefaults](modules.md#getseamosclientoptionswithdefaults)

## References

### default

Renames and re-exports [Seam](classes/Seam.md)

## Type aliases

### APIResponse

Ƭ **APIResponse**<`T`\>: [`SuccessfulAPIResponse`](modules.md#successfulapiresponse)<`T`\> \| [`ErroredAPIResponse`](interfaces/ErroredAPIResponse.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:16](https://github.com/seamapi/javascript/blob/main/src/types/globals.ts#L16)

___

### AccessCode

Ƭ **AccessCode**: [`OngoingAccessCode`](interfaces/OngoingAccessCode.md) \| [`TimeBoundAccessCode`](interfaces/TimeBoundAccessCode.md)

#### Defined in

[src/types/models.ts:295](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L295)

___

### AccessCodeConstraint

Ƭ **AccessCodeConstraint**: `SimpleAccessCodeConstraint` \| { `constraint_type`: ``"name_length"`` ; `max_length?`: `number` ; `min_length?`: `number`  }

#### Defined in

[src/types/models.ts:142](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L142)

___

### AccessCodeCreateMultipleBaseRequest

Ƭ **AccessCodeCreateMultipleBaseRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `behavior_when_code_cannot_be_shared?` | ``"throw"`` \| ``"create_random_code"`` |
| `device_ids` | `string`[] |
| `name?` | `string` |

#### Defined in

[src/types/route-requests.ts:61](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L61)

___

### AccessCodeCreateMultipleRequest

Ƭ **AccessCodeCreateMultipleRequest**: [`AccessCodeCreateMultipleOngoingRequest`](interfaces/AccessCodeCreateMultipleOngoingRequest.md) \| [`AccessCodeCreateMultipleScheduledRequest`](interfaces/AccessCodeCreateMultipleScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:76](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L76)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md) \| [`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:57](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L57)

___

### AccessCodeDeleteRequest

Ƭ **AccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:103](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L103)

___

### AccessCodeGetRequest

Ƭ **AccessCodeGetRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id?` | `string` |
| `code?` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:108](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L108)

___

### AccessCodeUpdateOngoingRequest

Ƭ **AccessCodeUpdateOngoingRequest**: `Except`<[`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:85](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L85)

___

### AccessCodeUpdateRequest

Ƭ **AccessCodeUpdateRequest**: [`AccessCodeUpdateOngoingRequest`](modules.md#accesscodeupdateongoingrequest) \| [`AccessCodeUpdateScheduledRequest`](modules.md#accesscodeupdatescheduledrequest)

#### Defined in

[src/types/route-requests.ts:95](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L95)

___

### AccessCodeUpdateScheduledRequest

Ƭ **AccessCodeUpdateScheduledRequest**: `Except`<[`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:90](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L90)

___

### AccessCodesListRequest

Ƭ **AccessCodesListRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:99](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L99)

___

### ActionAttempt

Ƭ **ActionAttempt**<`T`\>: [`PendingActionAttempt`](interfaces/PendingActionAttempt.md)<`T`\> \| [`ActionAttemptWithError`](interfaces/ActionAttemptWithError.md)<`T`\> \| [`SuccessfulActionAttempt`](interfaces/SuccessfulActionAttempt.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](modules.md#actiontype) = [`ActionType`](modules.md#actiontype) |

#### Defined in

[src/types/models.ts:242](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L242)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"UPDATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:197](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L197)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:194](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L194)

___

### BatteryStatus

Ƭ **BatteryStatus**: ``"critical"`` \| ``"low"`` \| ``"good"`` \| ``"full"``

#### Defined in

[src/types/models.ts:72](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L72)

___

### CommonDeviceProperties

Ƭ **CommonDeviceProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `battery?` | `Object` |
| `battery.level` | `number` |
| `battery.status` | [`BatteryStatus`](modules.md#batterystatus) |
| `image_alt_text?` | `string` |
| `image_url?` | `string` |
| `name` | `string` |
| `online` | `boolean` |

#### Defined in

[src/types/models.ts:74](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L74)

___

### CustomMetadata

Ƭ **CustomMetadata**: `Record`<`string`, `string` \| `number` \| `boolean` \| ``null``\>

#### Defined in

[src/types/globals.ts:18](https://github.com/seamapi/javascript/blob/main/src/types/globals.ts#L18)

___

### DeviceDeleteRequest

Ƭ **DeviceDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:154](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L154)

___

### DeviceGetRequest

Ƭ **DeviceGetRequest**: { `device_id`: `string`  } \| { `name`: `string`  }

#### Defined in

[src/types/route-requests.ts:138](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L138)

___

### DeviceLocation

Ƭ **DeviceLocation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `location_name?` | `string` |
| `timezone?` | `string` |

#### Defined in

[src/types/models.ts:85](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L85)

___

### DeviceModelsListRequest

Ƭ **DeviceModelsListRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `brand?` | `string` |
| `main_category?` | `string` |
| `support_level?` | `string` |
| `text_search?` | `string` |

#### Defined in

[src/types/route-requests.ts:214](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L214)

___

### DeviceModelsListResponse

Ƭ **DeviceModelsListResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_models` | [`DeviceModel`](interfaces/DeviceModel.md)[] |

#### Defined in

[src/types/route-responses.ts:140](https://github.com/seamapi/javascript/blob/main/src/types/route-responses.ts#L140)

___

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:37](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L37)

___

### DeviceUpdateRequest

Ƭ **DeviceUpdateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `is_managed?` | `boolean` |
| `location?` | `object` |
| `name?` | `string` |
| `properties?` | `Partial`<[`CommonDeviceProperties`](modules.md#commondeviceproperties)\> |

#### Defined in

[src/types/route-requests.ts:146](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L146)

___

### Event

Ƭ **Event**: `Flatten`<`SeamEvent`[``"event_type"``]\>

#### Defined in

[src/types/models.ts:346](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L346)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:195](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L195)

___

### LockDeviceType

Ƭ **LockDeviceType**: typeof [`LOCK_DEVICE_TYPES`](modules.md#lock_device_types)[`number`]

#### Defined in

[src/types/models.ts:28](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L28)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: typeof [`NOISE_DETECTION_DEVICE_TYPES`](modules.md#noise_detection_device_types)[`number`]

#### Defined in

[src/types/models.ts:34](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L34)

___

### NoiseThresholds

Ƭ **NoiseThresholds**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `device_id` | `string` | - |
| `ends_daily_at` | `string` | - |
| `name` | `string` | - |
| `noise_threshold_decibels` | `number` | - |
| `noise_threshold_id` | `string` | - |
| `noise_threshold_nrs?` | `number` | Only present if the noise threshold is from Noiseaware |
| `starts_daily_at` | `string` | - |

#### Defined in

[src/types/models.ts:354](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L354)

___

### NoiseThresholdsCreateRequest

Ƭ **NoiseThresholdsCreateRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `device_id` | `string` | - |
| `ends_daily_at` | `string` | - |
| `name?` | `string` | - |
| `noise_threshold_decibels?` | `number` | - |
| `noise_threshold_nrs?` | `number` | only available for NoiseAware devices |
| `starts_daily_at` | `string` | - |

#### Defined in

[src/types/route-requests.ts:184](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L184)

___

### NoiseThresholdsDeleteRequest

Ƭ **NoiseThresholdsDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `noise_threshold_id` | `string` |

#### Defined in

[src/types/route-requests.ts:209](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L209)

___

### NoiseThresholdsListRequest

Ƭ **NoiseThresholdsListRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:180](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L180)

___

### NoiseThresholdsListResponse

Ƭ **NoiseThresholdsListResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `noise_thresholds` | [`NoiseThresholds`](modules.md#noisethresholds)[] |

#### Defined in

[src/types/route-responses.ts:136](https://github.com/seamapi/javascript/blob/main/src/types/route-responses.ts#L136)

___

### NoiseThresholdsUpdateRequest

Ƭ **NoiseThresholdsUpdateRequest**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `device_id` | `string` | - |
| `ends_daily_at?` | `string` | - |
| `name?` | `string` | - |
| `noise_threshold_decibels?` | `number` | - |
| `noise_threshold_id` | `string` | - |
| `noise_threshold_nrs?` | `number` | only available for NoiseAware devices |
| `starts_daily_at?` | `string` | - |

#### Defined in

[src/types/route-requests.ts:196](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L196)

___

### Provider

Ƭ **Provider**: typeof [`PROVIDERS`](modules.md#providers)[`number`]

#### Defined in

[src/types/models.ts:57](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L57)

___

### ProviderCategory

Ƭ **ProviderCategory**: ``"stable"``

This type can allow for other provider categories as they are added

#### Defined in

[src/types/models.ts:60](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L60)

___

### SeamWebhookEvent

Ƭ **SeamWebhookEvent**: `Distribute`<`SeamEvent`[``"event_type"``]\>

#### Defined in

[src/types/webhook-events.ts:10](https://github.com/seamapi/javascript/blob/main/src/types/webhook-events.ts#L10)

___

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:7](https://github.com/seamapi/javascript/blob/main/src/types/globals.ts#L7)

___

### UnmanagedAccessCode

Ƭ **UnmanagedAccessCode**: [`UnmanagedOngoingAccessCode`](interfaces/UnmanagedOngoingAccessCode.md) \| [`UnmanagedTimeBoundAccessCode`](interfaces/UnmanagedTimeBoundAccessCode.md)

#### Defined in

[src/types/models.ts:311](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L311)

___

### UnmanagedAccessCodeConvertToManagedRequest

Ƭ **UnmanagedAccessCodeConvertToManagedRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |

#### Defined in

[src/types/route-requests.ts:134](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L134)

___

### UnmanagedAccessCodeDeleteRequest

Ƭ **UnmanagedAccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:120](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L120)

___

### UnmanagedAccessCodeGetRequest

Ƭ **UnmanagedAccessCodeGetRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id?` | `string` |
| `code?` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:114](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L114)

___

### UnmanagedAccessCodeUpdateRequest

Ƭ **UnmanagedAccessCodeUpdateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `is_managed` | ``true`` |

#### Defined in

[src/types/route-requests.ts:129](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L129)

___

### UnmanagedAccessCodesListRequest

Ƭ **UnmanagedAccessCodesListRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:125](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L125)

___

### UnmanagedDevice

Ƭ **UnmanagedDevice**: `Pick`<[`Device`](interfaces/Device.md)<[`CommonDeviceProperties`](modules.md#commondeviceproperties)\>, ``"device_id"`` \| ``"device_type"`` \| ``"connected_account_id"`` \| ``"workspace_id"`` \| ``"errors"`` \| ``"warnings"`` \| ``"created_at"``\> & { `properties`: `UnmanagedDeviceProperties`  }

#### Defined in

[src/types/models.ts:106](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L106)

___

### UnmanagedDeviceUpdateRequest

Ƭ **UnmanagedDeviceUpdateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `is_managed?` | `boolean` |

#### Defined in

[src/types/route-requests.ts:166](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L166)

___

### WebhookCreateRequest

Ƭ **WebhookCreateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Defined in

[src/types/route-requests.ts:162](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L162)

___

### WebhookGetRequest

Ƭ **WebhookGetRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `webhook_id` | `string` |

#### Defined in

[src/types/route-requests.ts:158](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L158)

## Variables

### LOCK\_DEVICE\_TYPES

• `Const` **LOCK\_DEVICE\_TYPES**: `string`[]

#### Defined in

[src/types/models.ts:11](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L11)

___

### NOISE\_DETECTION\_DEVICE\_TYPES

• `Const` **NOISE\_DETECTION\_DEVICE\_TYPES**: `string`[]

#### Defined in

[src/types/models.ts:30](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L30)

___

### PROVIDERS

• `Const` **PROVIDERS**: `string`[]

#### Defined in

[src/types/models.ts:39](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L39)

## Functions

### getSeamClientOptionsWithDefaults

▸ **getSeamClientOptionsWithDefaults**(`apiKeyOrOptions?`): [`SeamClientOptions`](interfaces/SeamClientOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamClientOptions`](interfaces/SeamClientOptions.md) |

#### Returns

[`SeamClientOptions`](interfaces/SeamClientOptions.md)

#### Defined in

[src/seam-connect/client.ts:38](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L38)

___

### getSeamOSClientOptionsWithDefaults

▸ **getSeamOSClientOptionsWithDefaults**(`apiKeyOrOptions?`): [`SeamOSClientOptions`](interfaces/SeamOSClientOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamOSClientOptions`](interfaces/SeamOSClientOptions.md) |

#### Returns

[`SeamOSClientOptions`](interfaces/SeamOSClientOptions.md)

#### Defined in

[src/seam-os/client.ts:24](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L24)
