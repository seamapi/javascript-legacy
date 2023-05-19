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

[src/types/models.ts:286](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L286)

___

### AccessCodeConstraint

Ƭ **AccessCodeConstraint**: `SimpleAccessCodeConstraint` \| { `constraint_type`: ``"name_length"`` ; `max_length?`: `number` ; `min_length?`: `number`  }

#### Defined in

[src/types/models.ts:133](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L133)

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

[src/types/route-requests.ts:59](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L59)

___

### AccessCodeCreateMultipleRequest

Ƭ **AccessCodeCreateMultipleRequest**: [`AccessCodeCreateMultipleOngoingRequest`](interfaces/AccessCodeCreateMultipleOngoingRequest.md) \| [`AccessCodeCreateMultipleScheduledRequest`](interfaces/AccessCodeCreateMultipleScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:74](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L74)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md) \| [`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:55](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L55)

___

### AccessCodeDeleteRequest

Ƭ **AccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:101](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L101)

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

[src/types/route-requests.ts:106](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L106)

___

### AccessCodeUpdateOngoingRequest

Ƭ **AccessCodeUpdateOngoingRequest**: `Except`<[`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:83](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L83)

___

### AccessCodeUpdateRequest

Ƭ **AccessCodeUpdateRequest**: [`AccessCodeUpdateOngoingRequest`](modules.md#accesscodeupdateongoingrequest) \| [`AccessCodeUpdateScheduledRequest`](modules.md#accesscodeupdatescheduledrequest)

#### Defined in

[src/types/route-requests.ts:93](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L93)

___

### AccessCodeUpdateScheduledRequest

Ƭ **AccessCodeUpdateScheduledRequest**: `Except`<[`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:88](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L88)

___

### AccessCodesListRequest

Ƭ **AccessCodesListRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:97](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L97)

___

### ActionAttempt

Ƭ **ActionAttempt**<`T`\>: [`PendingActionAttempt`](interfaces/PendingActionAttempt.md)<`T`\> \| [`ActionAttemptWithError`](interfaces/ActionAttemptWithError.md)<`T`\> \| [`SuccessfulActionAttempt`](interfaces/SuccessfulActionAttempt.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](modules.md#actiontype) = [`ActionType`](modules.md#actiontype) |

#### Defined in

[src/types/models.ts:233](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L233)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"UPDATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:188](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L188)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:185](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L185)

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

[src/types/route-requests.ts:152](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L152)

___

### DeviceGetRequest

Ƭ **DeviceGetRequest**: { `device_id`: `string`  } \| { `name`: `string`  }

#### Defined in

[src/types/route-requests.ts:136](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L136)

___

### DeviceLocation

Ƭ **DeviceLocation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `location_name?` | `string` |
| `timezone?` | `string` |

#### Defined in

[src/types/models.ts:84](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L84)

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

[src/types/route-requests.ts:144](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L144)

___

### Event

Ƭ **Event**: `Flatten`<`SeamEvent`[``"event_type"``]\>

#### Defined in

[src/types/models.ts:337](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L337)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:186](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L186)

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

[src/types/models.ts:345](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L345)

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

[src/types/route-requests.ts:182](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L182)

___

### NoiseThresholdsDeleteRequest

Ƭ **NoiseThresholdsDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `noise_threshold_id` | `string` |

#### Defined in

[src/types/route-requests.ts:207](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L207)

___

### NoiseThresholdsListRequest

Ƭ **NoiseThresholdsListRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:178](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L178)

___

### NoiseThresholdsListResponse

Ƭ **NoiseThresholdsListResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `noise_thresholds` | [`NoiseThresholds`](modules.md#noisethresholds)[] |

#### Defined in

[src/types/route-responses.ts:135](https://github.com/seamapi/javascript/blob/main/src/types/route-responses.ts#L135)

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

[src/types/route-requests.ts:194](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L194)

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

[src/types/models.ts:302](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L302)

___

### UnmanagedAccessCodeConvertToManagedRequest

Ƭ **UnmanagedAccessCodeConvertToManagedRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |

#### Defined in

[src/types/route-requests.ts:132](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L132)

___

### UnmanagedAccessCodeDeleteRequest

Ƭ **UnmanagedAccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:118](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L118)

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

[src/types/route-requests.ts:112](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L112)

___

### UnmanagedAccessCodeUpdateRequest

Ƭ **UnmanagedAccessCodeUpdateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `is_managed` | ``true`` |

#### Defined in

[src/types/route-requests.ts:127](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L127)

___

### UnmanagedAccessCodesListRequest

Ƭ **UnmanagedAccessCodesListRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:123](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L123)

___

### UnmanagedDevice

Ƭ **UnmanagedDevice**: `Pick`<[`Device`](interfaces/Device.md)<[`CommonDeviceProperties`](modules.md#commondeviceproperties)\>, ``"device_id"`` \| ``"device_type"`` \| ``"connected_account_id"`` \| ``"workspace_id"`` \| ``"errors"`` \| ``"warnings"`` \| ``"created_at"``\>

#### Defined in

[src/types/models.ts:105](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L105)

___

### UnmanagedDeviceUpdateRequest

Ƭ **UnmanagedDeviceUpdateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `is_managed?` | `boolean` |

#### Defined in

[src/types/route-requests.ts:164](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L164)

___

### WebhookCreateRequest

Ƭ **WebhookCreateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Defined in

[src/types/route-requests.ts:160](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L160)

___

### WebhookGetRequest

Ƭ **WebhookGetRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `webhook_id` | `string` |

#### Defined in

[src/types/route-requests.ts:156](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L156)

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
