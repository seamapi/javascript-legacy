[seamapi](README.md) / Exports

# seamapi

## Table of contents

### Classes

- [SeamAPIError](classes/SeamAPIError.md)
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
- [DeviceType](modules.md#devicetype)
- [LockDevice](modules.md#lockdevice)
- [LockDeviceType](modules.md#lockdevicetype)
- [LockLockDoorResponse](modules.md#locklockdoorresponse)
- [LockUnlockDoorResponse](modules.md#lockunlockdoorresponse)
- [NoiseDetectionDeviceType](modules.md#noisedetectiondevicetype)
- [Provider](modules.md#provider)
- [SuccessfulAPIResponse](modules.md#successfulapiresponse)

## Type aliases

### APIResponse

Ƭ **APIResponse**<`T`\>: [`SuccessfulAPIResponse`](modules.md#successfulapiresponse)<`T`\> \| [`ErroredAPIResponse`](interfaces/ErroredAPIResponse.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:16](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/globals.ts#L16)

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

[src/types/route-requests.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-requests.ts#L7)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](modules.md#accesscodecreateongoingrequest) \| [`AccessCodeCreateScheduledRequest`](modules.md#accesscodecreatescheduledrequest)

#### Defined in

[src/types/route-requests.ts:21](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-requests.ts#L21)

___

### AccessCodeCreateResponse

Ƭ **AccessCodeCreateResponse**: [`ActionAttempt`](modules.md#actionattempt)

#### Defined in

[src/types/route-responses.ts:61](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-responses.ts#L61)

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

[src/types/route-requests.ts:13](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-requests.ts#L13)

___

### AccessCodeDeleteRequest

Ƭ **AccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:25](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-requests.ts#L25)

___

### ActionAttempt

Ƭ **ActionAttempt**<`T`\>: [`PendingActionAttempt`](interfaces/PendingActionAttempt.md)<`T`\> \| [`ActionAttemptWithError`](interfaces/ActionAttemptWithError.md)<`T`\> \| [`SuccessfulActionAttempt`](interfaces/SuccessfulActionAttempt.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](modules.md#actiontype) = [`ActionType`](modules.md#actiontype) |

#### Defined in

[src/types/models.ts:89](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L89)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:51](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L51)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:48](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L48)

___

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:10](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L10)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:49](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L49)

___

### LockDeviceType

Ƭ **LockDeviceType**: ``"august_lock"`` \| ``"schlage_lock"`` \| ``"yale_lock"``

#### Defined in

[src/types/models.ts:8](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L8)

___

### LockLockDoorResponse

Ƭ **LockLockDoorResponse**: [`ActionAttempt`](modules.md#actionattempt)

#### Defined in

[src/types/route-responses.ts:33](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-responses.ts#L33)

___

### LockUnlockDoorResponse

Ƭ **LockUnlockDoorResponse**: [`ActionAttempt`](modules.md#actionattempt)

#### Defined in

[src/types/route-responses.ts:34](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-responses.ts#L34)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: ``"noiseaware_activity_zone"``

#### Defined in

[src/types/models.ts:9](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L9)

___

### Provider

Ƭ **Provider**: ``"august"`` \| ``"schlage"`` \| ``"yale"`` \| ``"noiseaware"`` \| ``"smartthings"``

#### Defined in

[src/types/models.ts:12](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L12)

___

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/globals.ts#L7)
