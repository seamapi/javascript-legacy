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
- [ConnectWebviewListResponse](interfaces/ConnectWebviewListResponse.md)
- [Device](interfaces/Device.md)
- [DeviceGetResponse](interfaces/DeviceGetResponse.md)
- [DevicesListResponse](interfaces/DevicesListResponse.md)
- [ErroredAPIResponse](interfaces/ErroredAPIResponse.md)
- [LockGetResponse](interfaces/LockGetResponse.md)
- [LockProperties](interfaces/LockProperties.md)
- [LocksListResponse](interfaces/LocksListResponse.md)
- [ResetSandboxResponse](interfaces/ResetSandboxResponse.md)
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [Workspace](interfaces/Workspace.md)
- [WorkspaceGetResponse](interfaces/WorkspaceGetResponse.md)
- [WorkspacesListResponse](interfaces/WorkspacesListResponse.md)

### Type aliases

- [APIResponse](modules.md#apiresponse)
- [AccessCodeCreateResponse](modules.md#accesscodecreateresponse)
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
| :--- |
| `T`  |

#### Defined in

[src/types/globals.ts:16](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/globals.ts#L16)

---

### AccessCodeCreateResponse

Ƭ **AccessCodeCreateResponse**: [`ActionAttempt`](interfaces/ActionAttempt.md)

#### Defined in

[src/types/route-responses.ts:55](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/route-responses.ts#L55)

---

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:9](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/models.ts#L9)

---

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:39](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/models.ts#L39)

---

### LockDeviceType

Ƭ **LockDeviceType**: `"august_lock"` \| `"schlage_lock"` \| `"yale_lock"`

#### Defined in

[src/types/models.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/models.ts#L7)

---

### LockLockDoorResponse

Ƭ **LockLockDoorResponse**: [`ActionAttempt`](interfaces/ActionAttempt.md)

#### Defined in

[src/types/route-responses.ts:29](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/route-responses.ts#L29)

---

### LockUnlockDoorResponse

Ƭ **LockUnlockDoorResponse**: [`ActionAttempt`](interfaces/ActionAttempt.md)

#### Defined in

[src/types/route-responses.ts:30](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/route-responses.ts#L30)

---

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: `"noiseaware_activity_zone"`

#### Defined in

[src/types/models.ts:8](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/models.ts#L8)

---

### Provider

Ƭ **Provider**: `"august"` \| `"schlage"` \| `"yale"` \| `"noiseaware"`

#### Defined in

[src/types/models.ts:11](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/models.ts#L11)

---

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: `true` }

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types/globals.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/types/globals.ts#L7)
