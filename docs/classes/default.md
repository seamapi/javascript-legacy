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
- [actionAttempts](default.md#actionattempts)
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

| Name | Type |
| :------ | :------ |
| `apiKey?` | `string` |
| `endpoint` | `string` |

#### Overrides

Routes.constructor

#### Defined in

[src/index.ts:9](https://github.com/hello-seam/seamapi-javascript/blob/main/src/index.ts#L9)

## Properties

### accessCodes

• `Readonly` **accessCodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`AccessCodeCreateBaseRequest`](../interfaces/AccessCodeCreateBaseRequest.md)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md)\> \| (`params`: [`AccessCodeCreateScheduledRequest`](../interfaces/AccessCodeCreateScheduledRequest.md)) => `Promise`<[`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)\> |
| `delete` | (`params`: [`AccessCodeDeleteRequest`](../modules.md#accesscodedeleterequest)) => `Promise`<`unknown`\> |
| `list` | (`params`: { `device_id`: `string`  }) => `Promise`<[`AccessCode`](../modules.md#accesscode)[]\> |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/routes.ts:190](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L190)

___

### actionAttempts

• `Readonly` **actionAttempts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | <T\>(`actionAttemptId`: `string`) => `Promise`<[`ActionAttempt`](../modules.md#actionattempt)<`T`\>\> |

#### Inherited from

Routes.actionAttempts

#### Defined in

[src/routes.ts:262](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L262)

___

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[src/index.ts:7](https://github.com/hello-seam/seamapi-javascript/blob/main/src/index.ts#L7)

___

### connectWebviews

• `Readonly` **connectWebviews**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`ConnectWebviewCreateRequest`](../interfaces/ConnectWebviewCreateRequest.md)) => `Promise`<`Omit`<[`ConnectWebview`](../interfaces/ConnectWebview.md), ``"connected_account_id"``\> & { `custom_redirect_url`: ``null`` \| `string`  }\> |
| `get` | (`connectWebviewId`: `string`) => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)\> |
| `list` | () => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)[]\> |

#### Inherited from

Routes.connectWebviews

#### Defined in

[src/routes.ts:164](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L164)

___

### connectedAccounts

• `Readonly` **connectedAccounts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`connectedAccountId`: `string`) => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)\> |
| `list` | () => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)[]\> |

#### Inherited from

Routes.connectedAccounts

#### Defined in

[src/routes.ts:241](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L241)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<`unknown`, [`DeviceType`](../modules.md#devicetype)\>\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<`unknown`, [`DeviceType`](../modules.md#devicetype)\>[]\> |

#### Inherited from

Routes.devices

#### Defined in

[src/routes.ts:145](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L145)

___

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)[]\> |
| `lockDoor` | (`deviceId`: `string`) => `Promise`<`unknown`\> |
| `unlockDoor` | (`deviceId`: `string`) => `Promise`<`unknown`\> |

#### Inherited from

Routes.locks

#### Defined in

[src/routes.ts:110](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L110)

___

### workspaces

• `Readonly` **workspaces**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md) & { `connect_partner_name`: `string`  }\> |
| `list` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md)[]\> |
| `resetSandbox` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspaceResetSandboxResponse`](../interfaces/WorkspaceResetSandboxResponse.md)\>\> |

#### Inherited from

Routes.workspaces

#### Defined in

[src/routes.ts:94](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L94)

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

[src/index.ts:33](https://github.com/hello-seam/seamapi-javascript/blob/main/src/index.ts#L33)
