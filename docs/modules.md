[seamapi](README.md) / Exports

# seamapi

## Table of contents

### Classes

- [SeamAPIError](classes/SeamAPIError.md)
- [default](classes/default.md)

### Interfaces

- [APIErrorResponse](interfaces/APIErrorResponse.md)
- [AccessCode](interfaces/AccessCode.md)
- [AccessCodeCreateRequest](interfaces/AccessCodeCreateRequest.md)
- [AccessCodesListResponse](interfaces/AccessCodesListResponse.md)
- [ActionAttempt](interfaces/ActionAttempt.md)
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
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [Workspace](interfaces/Workspace.md)
- [WorkspaceGetResponse](interfaces/WorkspaceGetResponse.md)
- [WorkspaceResetSandboxResponse](interfaces/WorkspaceResetSandboxResponse.md)
- [WorkspacesListResponse](interfaces/WorkspacesListResponse.md)

### Type aliases

- [APIResponse](modules.md#apiresponse)
- [AccessCodeCreateResponse](modules.md#accesscodecreateresponse)
- [AccountType](modules.md#accounttype)
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

### AccessCodeCreateResponse

Ƭ **AccessCodeCreateResponse**: [`ActionAttempt`](interfaces/ActionAttempt.md)

#### Defined in

[src/types/route-responses.ts:60](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-responses.ts#L60)

___

### AccountType

Ƭ **AccountType**: ``"august"`` \| ``"schlage"`` \| ``"smartthings"`` \| ``"noiseaware"``

#### Defined in

[src/types/models.ts:70](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L70)

___

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:9](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L9)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:39](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L39)

___

### LockDeviceType

Ƭ **LockDeviceType**: ``"august_lock"`` \| ``"schlage_lock"`` \| ``"yale_lock"``

#### Defined in

[src/types/models.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L7)

___

### LockLockDoorResponse

Ƭ **LockLockDoorResponse**: [`ActionAttempt`](interfaces/ActionAttempt.md)

#### Defined in

[src/types/route-responses.ts:32](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-responses.ts#L32)

___

### LockUnlockDoorResponse

Ƭ **LockUnlockDoorResponse**: [`ActionAttempt`](interfaces/ActionAttempt.md)

#### Defined in

[src/types/route-responses.ts:33](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/route-responses.ts#L33)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: ``"noiseaware_activity_zone"``

#### Defined in

[src/types/models.ts:8](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L8)

___

### Provider

Ƭ **Provider**: ``"august"`` \| ``"schlage"`` \| ``"yale"`` \| ``"noiseaware"``

#### Defined in

[src/types/models.ts:11](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L11)

___

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/globals.ts#L7)
