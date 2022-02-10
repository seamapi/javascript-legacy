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
- [connectedAccounts](default.md#connectedaccounts)
- [devices](default.md#devices)
- [locks](default.md#locks)
- [workspaces](default.md#workspaces)

### Methods

- [makeRequest](default.md#makerequest)

## Constructors

### constructor

• **new default**(`apiKey?`, `endpoint?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `apiKey?` | `string` | `undefined` |
| `endpoint` | `string` | `"https://connect.getseam.com"` |

#### Overrides

Routes.constructor

#### Defined in

[src/index.ts:13](https://github.com/hello-seam/seamapi-javascript/blob/main/src/index.ts#L13)

## Properties

### accessCodes

• `Readonly` **accessCodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`deviceId`: `string`, `params`: [`AccessCodeCreateRequest`](../interfaces/AccessCodeCreateRequest.md)) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ActionAttempt`](../interfaces/ActionAttempt.md)\>\> |
| `list` | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`AccessCodesListResponse`](../interfaces/AccessCodesListResponse.md)\>\> |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/routes.ts:120](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L120)

___

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[src/index.ts:11](https://github.com/hello-seam/seamapi-javascript/blob/main/src/index.ts#L11)

___

### connectWebviews

• `Readonly` **connectWebviews**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`ConnectWebviewCreateRequest`](../interfaces/ConnectWebviewCreateRequest.md)) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectWebviewCreateResponse`](../interfaces/ConnectWebviewCreateResponse.md)\>\> |
| `get` | (`connectWebviewId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectWebviewGetResponse`](../interfaces/ConnectWebviewGetResponse.md)\>\> |
| `list` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectWebviewsListResponse`](../interfaces/ConnectWebviewsListResponse.md)\>\> |

#### Inherited from

Routes.connectWebviews

#### Defined in

[src/routes.ts:100](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L100)

___

### connectedAccounts

• `Readonly` **connectedAccounts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`connected_account_id`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectedAccountsGetResponse`](../interfaces/ConnectedAccountsGetResponse.md)\>\> |
| `list` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ConnectedAccountsListResponse`](../interfaces/ConnectedAccountsListResponse.md)\>\> |

#### Inherited from

Routes.connectedAccounts

#### Defined in

[src/routes.ts:140](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L140)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`LockGetResponse`](../interfaces/LockGetResponse.md)\>\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`DevicesListResponse`](../interfaces/DevicesListResponse.md)\>\> |

#### Inherited from

Routes.devices

#### Defined in

[src/routes.ts:81](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L81)

___

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`LockGetResponse`](../interfaces/LockGetResponse.md)\>\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`LocksListResponse`](../interfaces/LocksListResponse.md)\>\> |
| `lockDoor` | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ActionAttempt`](../interfaces/ActionAttempt.md)\>\> |
| `unlockDoor` | (`deviceId`: `string`) => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`ActionAttempt`](../interfaces/ActionAttempt.md)\>\> |

#### Inherited from

Routes.locks

#### Defined in

[src/routes.ts:46](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L46)

___

### workspaces

• `Readonly` **workspaces**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspaceGetResponse`](../interfaces/WorkspaceGetResponse.md)\>\> |
| `list` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspacesListResponse`](../interfaces/WorkspacesListResponse.md)\>\> |
| `resetSandbox` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspaceResetSandboxResponse`](../interfaces/WorkspaceResetSandboxResponse.md)\>\> |

#### Inherited from

Routes.workspaces

#### Defined in

[src/routes.ts:30](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L30)

## Methods

### makeRequest

▸ **makeRequest**<`T`\>(`request`): `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `AxiosRequestConfig`<`any`\> |

#### Returns

`Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Overrides

Routes.makeRequest

#### Defined in

[src/index.ts:34](https://github.com/hello-seam/seamapi-javascript/blob/main/src/index.ts#L34)
