[seamapi](../README.md) / [Exports](../modules.md) / default

# Class: default

## Hierarchy

- `Routes`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [accessCodes](default.md#accesscodes)
- [client](default.md#client)
- [connectWebviews](default.md#connectwebviews)
- [devices](default.md#devices)
- [endpoint](default.md#endpoint)
- [locks](default.md#locks)
- [workspaces](default.md#workspaces)

### Methods

- [makeRequest](default.md#makerequest)

## Constructors

### constructor

• **new default**(`apiKey?`)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `apiKey?` | `string` |

#### Overrides

Routes.constructor

#### Defined in

[src/index.ts:14](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/index.ts#L14)

## Properties

### accessCodes

• `Readonly` **accessCodes**: `Object`

#### Type declaration

| Name     | Type                                                                                                                                                                                                                                      |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | (`deviceId`: `string`, `params`: [`AccessCodeCreateRequest`](../interfaces/AccessCodeCreateRequest.md)) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ActionAttempt`](../interfaces/ActionAttempt.md)\>\> |
| `list`   | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`AccessCodesListResponse`](../interfaces/AccessCodesListResponse.md)\>\>                                                              |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/routes.ts:118](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/routes.ts#L118)

---

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[src/index.ts:12](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/index.ts#L12)

---

### connectWebviews

• `Readonly` **connectWebviews**: `Object`

#### Type declaration

| Name     | Type                                                                                                                                                                                                                                                      |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | (`params`: [`ConnectWebviewCreateRequest`](../interfaces/ConnectWebviewCreateRequest.md)) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectWebviewCreateResponse`](../interfaces/ConnectWebviewCreateResponse.md)\>\> |
| `get`    | (`connectWebviewId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectWebviewGetResponse`](../interfaces/ConnectWebviewGetResponse.md)\>\>                                                                  |
| `list`   | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectWebviewListResponse`](../interfaces/ConnectWebviewListResponse.md)\>\>                                                                                            |

#### Inherited from

Routes.connectWebviews

#### Defined in

[src/routes.ts:98](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/routes.ts#L98)

---

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name   | Type                                                                                                                                                                            |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `get`  | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`LockGetResponse`](../interfaces/LockGetResponse.md)\>\>                    |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`DevicesListResponse`](../interfaces/DevicesListResponse.md)\>\> |

#### Inherited from

Routes.devices

#### Defined in

[src/routes.ts:79](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/routes.ts#L79)

---

### endpoint

• `Private` **endpoint**: `string` = `"https://connect.getseam.com"`

#### Defined in

[src/index.ts:11](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/index.ts#L11)

---

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name         | Type                                                                                                                                                                        |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `get`        | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`LockGetResponse`](../interfaces/LockGetResponse.md)\>\>                |
| `list`       | (`connectedAccountId?`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`LocksListResponse`](../interfaces/LocksListResponse.md)\>\> |
| `lockDoor`   | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ActionAttempt`](../interfaces/ActionAttempt.md)\>\>                    |
| `unlockDoor` | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ActionAttempt`](../interfaces/ActionAttempt.md)\>\>                    |

#### Inherited from

Routes.locks

#### Defined in

[src/routes.ts:44](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/routes.ts#L44)

---

### workspaces

• `Readonly` **workspaces**: `Object`

#### Type declaration

| Name           | Type                                                                                                                                                   |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `get`          | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspaceGetResponse`](../interfaces/WorkspaceGetResponse.md)\>\>     |
| `list`         | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspacesListResponse`](../interfaces/WorkspacesListResponse.md)\>\> |
| `resetSandbox` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ResetSandboxResponse`](../interfaces/ResetSandboxResponse.md)\>\>     |

#### Inherited from

Routes.workspaces

#### Defined in

[src/routes.ts:28](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/routes.ts#L28)

## Methods

### makeRequest

▸ **makeRequest**<`T`\>(`request`): `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                         |
| :-------- | :--------------------------- |
| `request` | `AxiosRequestConfig`<`any`\> |

#### Returns

`Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Overrides

Routes.makeRequest

#### Defined in

[src/index.ts:35](https://github.com/hello-seam/seamapi-javascript/blob/617170d/src/index.ts#L35)
