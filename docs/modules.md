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
- [AccessCodesListResponse](interfaces/AccessCodesListResponse.md)
- [ActionAttemptCreateResponse](interfaces/ActionAttemptCreateResponse.md)
- [ActionAttemptGetResponse](interfaces/ActionAttemptGetResponse.md)
- [ActionAttemptResultTypeMap](interfaces/ActionAttemptResultTypeMap.md)
- [ActionAttemptWithError](interfaces/ActionAttemptWithError.md)
- [CommonDeviceEvent](interfaces/CommonDeviceEvent.md)
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
- [DevicesListResponse](interfaces/DevicesListResponse.md)
- [ErroredAPIResponse](interfaces/ErroredAPIResponse.md)
- [LockGetResponse](interfaces/LockGetResponse.md)
- [LockProperties](interfaces/LockProperties.md)
- [LocksListResponse](interfaces/LocksListResponse.md)
- [OngoingAccessCode](interfaces/OngoingAccessCode.md)
- [PendingActionAttempt](interfaces/PendingActionAttempt.md)
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [SeamClientOptions](interfaces/SeamClientOptions.md)
- [SuccessfulActionAttempt](interfaces/SuccessfulActionAttempt.md)
- [TimeBoundAccessCode](interfaces/TimeBoundAccessCode.md)
- [Workspace](interfaces/Workspace.md)
- [WorkspaceGetResponse](interfaces/WorkspaceGetResponse.md)
- [WorkspaceResetSandboxResponse](interfaces/WorkspaceResetSandboxResponse.md)
- [WorkspacesListResponse](interfaces/WorkspacesListResponse.md)

### Type aliases

- [APIResponse](modules.md#apiresponse)
- [AccessCode](modules.md#accesscode)
- [AccessCodeCreateRequest](modules.md#accesscodecreaterequest)
- [AccessCodeDeleteRequest](modules.md#accesscodedeleterequest)
- [ActionAttempt](modules.md#actionattempt)
- [ActionType](modules.md#actiontype)
- [AnyDevice](modules.md#anydevice)
- [CommonDeviceProperties](modules.md#commondeviceproperties)
- [CreateAccessCodeEvent](modules.md#createaccesscodeevent)
- [DeviceConnectedEvent](modules.md#deviceconnectedevent)
- [DeviceDisconnectEvent](modules.md#devicedisconnectevent)
- [DeviceLowBatteryEvent](modules.md#devicelowbatteryevent)
- [DeviceTamperEvent](modules.md#devicetamperevent)
- [DeviceType](modules.md#devicetype)
- [DeviceUpdateRequest](modules.md#deviceupdaterequest)
- [LockDevice](modules.md#lockdevice)
- [LockDeviceType](modules.md#lockdevicetype)
- [NoiseDetectedEvent](modules.md#noisedetectedevent)
- [NoiseDetectionDeviceType](modules.md#noisedetectiondevicetype)
- [SeamEvent](modules.md#seamevent)
- [SuccessfulAPIResponse](modules.md#successfulapiresponse)

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

[src/types/globals.ts:16](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/globals.ts#L16)

___

### AccessCode

Ƭ **AccessCode**: [`OngoingAccessCode`](interfaces/OngoingAccessCode.md) \| [`TimeBoundAccessCode`](interfaces/TimeBoundAccessCode.md)

#### Defined in

[src/types/models.ts:148](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L148)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md) \| [`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:22](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L22)

___

### AccessCodeDeleteRequest

Ƭ **AccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:26](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L26)

___

### ActionAttempt

Ƭ **ActionAttempt**<`T`\>: [`PendingActionAttempt`](interfaces/PendingActionAttempt.md)<`T`\> \| [`ActionAttemptWithError`](interfaces/ActionAttemptWithError.md)<`T`\> \| [`SuccessfulActionAttempt`](interfaces/SuccessfulActionAttempt.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](modules.md#actiontype) = [`ActionType`](modules.md#actiontype) |

#### Defined in

[src/types/models.ts:107](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L107)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:64](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L64)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:61](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L61)

___

### CommonDeviceProperties

Ƭ **CommonDeviceProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `online` | `boolean` |

#### Defined in

[src/types/models.ts:24](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L24)

___

### CreateAccessCodeEvent

Ƭ **CreateAccessCodeEvent**: [`CommonDeviceEvent`](interfaces/CommonDeviceEvent.md)<``"access_codes.created"``, { `access_code_id`: `string`  }\>

#### Defined in

[src/types/webhook-events.ts:21](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L21)

___

### DeviceConnectedEvent

Ƭ **DeviceConnectedEvent**: [`CommonDeviceEvent`](interfaces/CommonDeviceEvent.md)<``"device.connected"``\>

#### Defined in

[src/types/webhook-events.ts:14](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L14)

___

### DeviceDisconnectEvent

Ƭ **DeviceDisconnectEvent**: [`CommonDeviceEvent`](interfaces/CommonDeviceEvent.md)<``"devices.disconnected"``\>

#### Defined in

[src/types/webhook-events.ts:15](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L15)

___

### DeviceLowBatteryEvent

Ƭ **DeviceLowBatteryEvent**: [`CommonDeviceEvent`](interfaces/CommonDeviceEvent.md)<``"devices.triggered_low_battery"``\>

#### Defined in

[src/types/webhook-events.ts:17](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L17)

___

### DeviceTamperEvent

Ƭ **DeviceTamperEvent**: [`CommonDeviceEvent`](interfaces/CommonDeviceEvent.md)<``"devices.tampered"``\>

#### Defined in

[src/types/webhook-events.ts:16](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L16)

___

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:14](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L14)

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

[src/types/route-requests.ts:31](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L31)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:62](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L62)

___

### LockDeviceType

Ƭ **LockDeviceType**: ``"august_lock"`` \| ``"schlage_lock"`` \| ``"yale_lock"`` \| ``"smartthings_lock"``

#### Defined in

[src/types/models.ts:8](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L8)

___

### NoiseDetectedEvent

Ƭ **NoiseDetectedEvent**: [`CommonDeviceEvent`](interfaces/CommonDeviceEvent.md)<``"noise_thresholds.detected_noise"``\>

#### Defined in

[src/types/webhook-events.ts:29](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L29)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: ``"noiseaware_activity_zone"``

#### Defined in

[src/types/models.ts:13](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L13)

___

### SeamEvent

Ƭ **SeamEvent**: [`DeviceConnectedEvent`](modules.md#deviceconnectedevent) \| [`DeviceDisconnectEvent`](modules.md#devicedisconnectevent) \| [`DeviceTamperEvent`](modules.md#devicetamperevent) \| [`DeviceLowBatteryEvent`](modules.md#devicelowbatteryevent) \| [`CreateAccessCodeEvent`](modules.md#createaccesscodeevent) \| [`NoiseDetectedEvent`](modules.md#noisedetectedevent)

#### Defined in

[src/types/webhook-events.ts:32](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L32)

___

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:7](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/globals.ts#L7)

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

[src/client.ts:20](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L20)
