[seamapi](README.md) / Exports

# seamapi

## Table of contents

### Enumerations

- [Provider](enums/Provider.md)

### Classes

- [SeamAPIError](classes/SeamAPIError.md)
- [SeamActionAttemptError](classes/SeamActionAttemptError.md)
- [default](classes/default.md)

### Interfaces

- [APIErrorResponse](interfaces/APIErrorResponse.md)
- [AccessCode](interfaces/AccessCode.md)
- [AccessCodesListResponse](interfaces/AccessCodesListResponse.md)
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
- [DevicesListResponse](interfaces/DevicesListResponse.md)
- [ErroredAPIResponse](interfaces/ErroredAPIResponse.md)
- [LockGetResponse](interfaces/LockGetResponse.md)
- [LockProperties](interfaces/LockProperties.md)
- [LocksListResponse](interfaces/LocksListResponse.md)
- [PendingActionAttempt](interfaces/PendingActionAttempt.md)
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [SeamObjectTypeMap](interfaces/SeamObjectTypeMap.md)
- [SuccessfulActionAttempt](interfaces/SuccessfulActionAttempt.md)
- [Workspace](interfaces/Workspace.md)
- [WorkspaceGetResponse](interfaces/WorkspaceGetResponse.md)
- [WorkspaceResetSandboxResponse](interfaces/WorkspaceResetSandboxResponse.md)
- [WorkspacesListResponse](interfaces/WorkspacesListResponse.md)

### Type aliases

- [APIResponse](modules.md#apiresponse)
- [AccessCodeCreateOngoingRequest](modules.md#accesscodecreateongoingrequest)
- [AccessCodeCreateRequest](modules.md#accesscodecreaterequest)
- [AccessCodeCreateResponse](modules.md#accesscodecreateresponse)
- [AccessCodeCreateScheduledRequest](modules.md#accesscodecreatescheduledrequest)
- [AccessCodeDeleteRequest](modules.md#accesscodedeleterequest)
- [ActionAttempt](modules.md#actionattempt)
- [ActionType](modules.md#actiontype)
- [AnyDevice](modules.md#anydevice)
- [CommonDeviceProperties](modules.md#commondeviceproperties)
- [DeviceType](modules.md#devicetype)
- [DeviceUpdateRequest](modules.md#deviceupdaterequest)
- [LockDevice](modules.md#lockdevice)
- [LockDeviceType](modules.md#lockdevicetype)
- [LockLockDoorResponse](modules.md#locklockdoorresponse)
- [LockUnlockDoorResponse](modules.md#lockunlockdoorresponse)
- [NoiseDetectionDeviceType](modules.md#noisedetectiondevicetype)
- [SuccessfulAPIResponse](modules.md#successfulapiresponse)

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

### AccessCodeCreateOngoingRequest

Ƭ **AccessCodeCreateOngoingRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `device_id` | `string` |
| `name?` | `string` |

#### Defined in

[src/types/route-requests.ts:7](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L7)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](modules.md#accesscodecreateongoingrequest) \| [`AccessCodeCreateScheduledRequest`](modules.md#accesscodecreatescheduledrequest)

#### Defined in

[src/types/route-requests.ts:21](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L21)

___

### AccessCodeCreateResponse

Ƭ **AccessCodeCreateResponse**: [`ActionAttempt`](modules.md#actionattempt)

#### Defined in

[src/types/route-responses.ts:62](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-responses.ts#L62)

___

### AccessCodeCreateScheduledRequest

Ƭ **AccessCodeCreateScheduledRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `string` |
| `device_id` | `string` |
| `ends_at` | `string` \| `Date` |
| `name` | `string` |
| `starts_at` | `string` \| `Date` |

#### Defined in

[src/types/route-requests.ts:13](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L13)

___

### AccessCodeDeleteRequest

Ƭ **AccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:25](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L25)

___

### ActionAttempt

Ƭ **ActionAttempt**<`T`\>: [`PendingActionAttempt`](interfaces/PendingActionAttempt.md)<`T`\> \| [`ActionAttemptWithError`](interfaces/ActionAttemptWithError.md)<`T`\> \| [`SuccessfulActionAttempt`](interfaces/SuccessfulActionAttempt.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](modules.md#actiontype) = [`ActionType`](modules.md#actiontype) |

#### Defined in

[src/types/models.ts:101](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L101)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:63](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L63)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:60](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L60)

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

[src/types/route-requests.ts:30](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-requests.ts#L30)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:61](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L61)

___

### LockDeviceType

Ƭ **LockDeviceType**: ``"august_lock"`` \| ``"schlage_lock"`` \| ``"yale_lock"`` \| ``"smartthings_lock"``

#### Defined in

[src/types/models.ts:8](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L8)

___

### LockLockDoorResponse

Ƭ **LockLockDoorResponse**: [`ActionAttempt`](modules.md#actionattempt)

#### Defined in

[src/types/route-responses.ts:34](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-responses.ts#L34)

___

### LockUnlockDoorResponse

Ƭ **LockUnlockDoorResponse**: [`ActionAttempt`](modules.md#actionattempt)

#### Defined in

[src/types/route-responses.ts:35](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/route-responses.ts#L35)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: ``"noiseaware_activity_zone"``

#### Defined in

[src/types/models.ts:13](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L13)

___

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:7](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/globals.ts#L7)
