[seamapi](README.md) / Exports

# seamapi

## Table of contents

### References

- [default](modules.md#default)

### Enumerations

- [Provider](enums/Provider.md)

### Classes

- [Seam](classes/Seam.md)
- [SeamAPIError](classes/SeamAPIError.md)
- [SeamActionAttemptError](classes/SeamActionAttemptError.md)
- [SeamMalformedInputError](classes/SeamMalformedInputError.md)
- [SeamWebhook](classes/SeamWebhook.md)

### Interfaces

- [APIErrorResponse](interfaces/APIErrorResponse.md)
- [AccessCodeBase](interfaces/AccessCodeBase.md)
- [AccessCodeCreateBaseRequest](interfaces/AccessCodeCreateBaseRequest.md)
- [AccessCodeCreateOngoingRequest](interfaces/AccessCodeCreateOngoingRequest.md)
- [AccessCodeCreateScheduledRequest](interfaces/AccessCodeCreateScheduledRequest.md)
- [AccessCodeUpdateBaseRequest](interfaces/AccessCodeUpdateBaseRequest.md)
- [AccessCodesListResponse](interfaces/AccessCodesListResponse.md)
- [ActionAttemptCreateResponse](interfaces/ActionAttemptCreateResponse.md)
- [ActionAttemptGetResponse](interfaces/ActionAttemptGetResponse.md)
- [ActionAttemptResultTypeMap](interfaces/ActionAttemptResultTypeMap.md)
- [ActionAttemptWithError](interfaces/ActionAttemptWithError.md)
- [ConnectWebview](interfaces/ConnectWebview.md)
- [ConnectWebviewCreateRequest](interfaces/ConnectWebviewCreateRequest.md)
- [ConnectWebviewCreateResponse](interfaces/ConnectWebviewCreateResponse.md)
- [ConnectWebviewGetResponse](interfaces/ConnectWebviewGetResponse.md)
- [ConnectWebviewsListResponse](interfaces/ConnectWebviewsListResponse.md)
- [ConnectedAccount](interfaces/ConnectedAccount.md)
- [ConnectedAccountsGetResponse](interfaces/ConnectedAccountsGetResponse.md)
- [ConnectedAccountsListResponse](interfaces/ConnectedAccountsListResponse.md)
- [Device](interfaces/Device.md)
- [DeviceGetResponse](interfaces/DeviceGetResponse.md)
- [DevicesListRequest](interfaces/DevicesListRequest.md)
- [DevicesListResponse](interfaces/DevicesListResponse.md)
- [ErroredAPIResponse](interfaces/ErroredAPIResponse.md)
- [EventsGetRequest](interfaces/EventsGetRequest.md)
- [EventsGetResponse](interfaces/EventsGetResponse.md)
- [EventsListRequest](interfaces/EventsListRequest.md)
- [EventsListResponse](interfaces/EventsListResponse.md)
- [LockGetResponse](interfaces/LockGetResponse.md)
- [LockProperties](interfaces/LockProperties.md)
- [LocksListResponse](interfaces/LocksListResponse.md)
- [OngoingAccessCode](interfaces/OngoingAccessCode.md)
- [PendingActionAttempt](interfaces/PendingActionAttempt.md)
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [SeamClientOptions](interfaces/SeamClientOptions.md)
- [SuccessfulActionAttempt](interfaces/SuccessfulActionAttempt.md)
- [TimeBoundAccessCode](interfaces/TimeBoundAccessCode.md)
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
- [AccessCodeCreateRequest](modules.md#accesscodecreaterequest)
- [AccessCodeDeleteRequest](modules.md#accesscodedeleterequest)
- [AccessCodeUpdateOngoingRequest](modules.md#accesscodeupdateongoingrequest)
- [AccessCodeUpdateRequest](modules.md#accesscodeupdaterequest)
- [AccessCodeUpdateScheduledRequest](modules.md#accesscodeupdatescheduledrequest)
- [ActionAttempt](modules.md#actionattempt)
- [ActionType](modules.md#actiontype)
- [AnyDevice](modules.md#anydevice)
- [CommonDeviceProperties](modules.md#commondeviceproperties)
- [DeviceGetRequest](modules.md#devicegetrequest)
- [DeviceType](modules.md#devicetype)
- [DeviceUpdateRequest](modules.md#deviceupdaterequest)
- [Event](modules.md#event)
- [LockDevice](modules.md#lockdevice)
- [LockDeviceType](modules.md#lockdevicetype)
- [NoiseDetectionDeviceType](modules.md#noisedetectiondevicetype)
- [SeamWebhookEvent](modules.md#seamwebhookevent)
- [SuccessfulAPIResponse](modules.md#successfulapiresponse)
- [WebhookCreateRequest](modules.md#webhookcreaterequest)
- [WebhookGetRequest](modules.md#webhookgetrequest)

### Functions

- [getSeamClientOptionsWithDefaults](modules.md#getseamclientoptionswithdefaults)

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

[src/types/models.ts:157](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L157)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md) \| [`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:29](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L29)

___

### AccessCodeDeleteRequest

Ƭ **AccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:52](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L52)

___

### AccessCodeUpdateOngoingRequest

Ƭ **AccessCodeUpdateOngoingRequest**: `Except`<[`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:38](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L38)

___

### AccessCodeUpdateRequest

Ƭ **AccessCodeUpdateRequest**: [`AccessCodeUpdateOngoingRequest`](modules.md#accesscodeupdateongoingrequest) \| [`AccessCodeUpdateScheduledRequest`](modules.md#accesscodeupdatescheduledrequest)

#### Defined in

[src/types/route-requests.ts:48](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L48)

___

### AccessCodeUpdateScheduledRequest

Ƭ **AccessCodeUpdateScheduledRequest**: `Except`<[`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:43](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L43)

___

### ActionAttempt

Ƭ **ActionAttempt**<`T`\>: [`PendingActionAttempt`](interfaces/PendingActionAttempt.md)<`T`\> \| [`ActionAttemptWithError`](interfaces/ActionAttemptWithError.md)<`T`\> \| [`SuccessfulActionAttempt`](interfaces/SuccessfulActionAttempt.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](modules.md#actiontype) = [`ActionType`](modules.md#actiontype) |

#### Defined in

[src/types/models.ts:115](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L115)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"UPDATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:70](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L70)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:67](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L67)

___

### CommonDeviceProperties

Ƭ **CommonDeviceProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `online` | `boolean` |

#### Defined in

[src/types/models.ts:28](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L28)

___

### DeviceGetRequest

Ƭ **DeviceGetRequest**: { `device_id`: `string`  } \| { `name`: `string`  }

#### Defined in

[src/types/route-requests.ts:57](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L57)

___

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:15](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L15)

___

### DeviceUpdateRequest

Ƭ **DeviceUpdateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `location?` | `object` |
| `name?` | `string` |
| `properties?` | `Partial`<[`CommonDeviceProperties`](modules.md#commondeviceproperties)\> |

#### Defined in

[src/types/route-requests.ts:65](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L65)

___

### Event

Ƭ **Event**: `Flatten`<`SeamEvent`[``"event_type"``]\> & { `created_at`: `string` ; `event_id`: `string`  }

#### Defined in

[src/types/models.ts:180](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L180)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:68](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L68)

___

### LockDeviceType

Ƭ **LockDeviceType**: ``"august_lock"`` \| ``"schlage_lock"`` \| ``"yale_lock"`` \| ``"smartthings_lock"``

#### Defined in

[src/types/models.ts:9](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L9)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: ``"noiseaware_activity_zone"``

#### Defined in

[src/types/models.ts:14](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L14)

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

### WebhookCreateRequest

Ƭ **WebhookCreateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Defined in

[src/types/route-requests.ts:76](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L76)

___

### WebhookGetRequest

Ƭ **WebhookGetRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `webhook_id` | `string` |

#### Defined in

[src/types/route-requests.ts:72](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L72)

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

[src/client.ts:26](https://github.com/seamapi/javascript/blob/main/src/client.ts#L26)
