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
- [AccessCodeBase](interfaces/AccessCodeBase.md)
- [AccessCodeCreateBaseRequest](interfaces/AccessCodeCreateBaseRequest.md)
- [AccessCodeCreateScheduledRequest](interfaces/AccessCodeCreateScheduledRequest.md)
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
- [DevicesListResponse](interfaces/DevicesListResponse.md)
- [ErroredAPIResponse](interfaces/ErroredAPIResponse.md)
- [LockGetResponse](interfaces/LockGetResponse.md)
- [LockProperties](interfaces/LockProperties.md)
- [LocksListResponse](interfaces/LocksListResponse.md)
- [OngoingAccessCode](interfaces/OngoingAccessCode.md)
- [PendingActionAttempt](interfaces/PendingActionAttempt.md)
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [SuccessfulActionAttempt](interfaces/SuccessfulActionAttempt.md)
- [TimeBoundAccessCode](interfaces/TimeBoundAccessCode.md)
- [Workspace](interfaces/Workspace.md)
- [WorkspaceGetResponse](interfaces/WorkspaceGetResponse.md)
- [WorkspaceResetSandboxResponse](interfaces/WorkspaceResetSandboxResponse.md)
- [WorkspacesListResponse](interfaces/WorkspacesListResponse.md)

### Type aliases

- [APIResponse](modules.md#apiresponse)
- [AccessCode](modules.md#accesscode)
- [AccessCodeCreateOngoingRequest](modules.md#accesscodecreateongoingrequest)
- [AccessCodeCreateRequest](modules.md#accesscodecreaterequest)
- [AccessCodeDeleteRequest](modules.md#accesscodedeleterequest)
- [ActionAttempt](modules.md#actionattempt)
- [ActionType](modules.md#actiontype)
- [AnyDevice](modules.md#anydevice)
- [DeviceType](modules.md#devicetype)
- [LockDevice](modules.md#lockdevice)
- [LockDeviceType](modules.md#lockdevicetype)
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

[src/types/globals.ts:16](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/globals.ts#L16)

___

### AccessCode

Ƭ **AccessCode**: [`OngoingAccessCode`](interfaces/OngoingAccessCode.md) \| [`TimeBoundAccessCode`](interfaces/TimeBoundAccessCode.md)

#### Defined in

[src/types/models.ts:143](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L143)

___

### AccessCodeCreateOngoingRequest

Ƭ **AccessCodeCreateOngoingRequest**: [`AccessCodeCreateBaseRequest`](interfaces/AccessCodeCreateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:13](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-requests.ts#L13)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](modules.md#accesscodecreateongoingrequest) \| [`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:21](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-requests.ts#L21)

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

[src/types/models.ts:102](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L102)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:59](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L59)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:56](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L56)

___

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:14](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L14)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:57](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L57)

___

### LockDeviceType

Ƭ **LockDeviceType**: ``"august_lock"`` \| ``"schlage_lock"`` \| ``"yale_lock"`` \| ``"smartthings_lock"``

#### Defined in

[src/types/models.ts:8](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L8)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: ``"noiseaware_activity_zone"``

#### Defined in

[src/types/models.ts:13](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L13)

___

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/globals.ts#L7)
