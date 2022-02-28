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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `apiKey?` | `string` | `undefined` |
| `endpoint` | `string` | `"https://connect.getseam.com"` |

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
| `create` | (`params`: [`AccessCodeCreateRequest`](../modules.md#accesscodecreaterequest)) => `Promise`<[`AccessCode`](../interfaces/AccessCode.md)\> |
| `delete` | (`params`: [`AccessCodeDeleteRequest`](../modules.md#accesscodedeleterequest)) => `Promise`<[`Workspace`](../interfaces/Workspace.md) \| [`Workspace`](../interfaces/Workspace.md)[] \| [`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\> \| [`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\>[] \| [`ActionAttempt`](../modules.md#actionattempt)<`any`\> \| [`AccessCode`](../interfaces/AccessCode.md) \| [`AccessCode`](../interfaces/AccessCode.md)[] \| [`Device`](../interfaces/Device.md)<`any`, `any`\> \| [`Device`](../interfaces/Device.md)<`any`, `any`\>[] \| [`ConnectWebview`](../interfaces/ConnectWebview.md) \| [`ConnectWebview`](../interfaces/ConnectWebview.md)[] \| [`ConnectedAccount`](../interfaces/ConnectedAccount.md) \| [`ConnectedAccount`](../interfaces/ConnectedAccount.md)[]\> |
| `list` | (`deviceId`: `string`) => `Promise`<[`AccessCode`](../interfaces/AccessCode.md)[]\> |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/routes.ts:160](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L160)

___

### actionAttempts

• `Readonly` **actionAttempts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`actionAttemptId`: `string`) => `Promise`<[`ActionAttempt`](../modules.md#actionattempt)<`any`\>\> |

#### Inherited from

Routes.actionAttempts

#### Defined in

[src/routes.ts:219](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L219)

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
| `create` | (`params`: [`ConnectWebviewCreateRequest`](../interfaces/ConnectWebviewCreateRequest.md)) => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)\> |
| `get` | (`connectWebviewId`: `string`) => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)\> |
| `list` | () => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)[]\> |

#### Inherited from

Routes.connectWebviews

#### Defined in

[src/routes.ts:140](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L140)

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

[src/routes.ts:204](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L204)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<`any`, `any`\>\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<`any`, `any`\>[]\> |

#### Inherited from

Routes.devices

#### Defined in

[src/routes.ts:121](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L121)

___

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\>\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\>[]\> |
| `lockDoor` | (`deviceId`: `string`) => `Promise`<[`Workspace`](../interfaces/Workspace.md) \| [`Workspace`](../interfaces/Workspace.md)[] \| [`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\> \| [`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\>[] \| [`ActionAttempt`](../modules.md#actionattempt)<`any`\> \| [`AccessCode`](../interfaces/AccessCode.md) \| [`AccessCode`](../interfaces/AccessCode.md)[] \| [`Device`](../interfaces/Device.md)<`any`, `any`\> \| [`Device`](../interfaces/Device.md)<`any`, `any`\>[] \| [`ConnectWebview`](../interfaces/ConnectWebview.md) \| [`ConnectWebview`](../interfaces/ConnectWebview.md)[] \| [`ConnectedAccount`](../interfaces/ConnectedAccount.md) \| [`ConnectedAccount`](../interfaces/ConnectedAccount.md)[]\> |
| `unlockDoor` | (`deviceId`: `string`) => `Promise`<[`Workspace`](../interfaces/Workspace.md) \| [`Workspace`](../interfaces/Workspace.md)[] \| [`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\> \| [`Device`](../interfaces/Device.md)<[`LockProperties`](../interfaces/LockProperties.md), `any`\>[] \| [`ActionAttempt`](../modules.md#actionattempt)<`any`\> \| [`AccessCode`](../interfaces/AccessCode.md) \| [`AccessCode`](../interfaces/AccessCode.md)[] \| [`Device`](../interfaces/Device.md)<`any`, `any`\> \| [`Device`](../interfaces/Device.md)<`any`, `any`\>[] \| [`ConnectWebview`](../interfaces/ConnectWebview.md) \| [`ConnectWebview`](../interfaces/ConnectWebview.md)[] \| [`ConnectedAccount`](../interfaces/ConnectedAccount.md) \| [`ConnectedAccount`](../interfaces/ConnectedAccount.md)[]\> |

#### Inherited from

Routes.locks

#### Defined in

[src/routes.ts:86](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L86)

___

### workspaces

• `Readonly` **workspaces**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md)\> |
| `list` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md)[]\> |
| `resetSandbox` | () => `Promise`<{ `ok`: ``true``  }\> |

#### Inherited from

Routes.workspaces

#### Defined in

[src/routes.ts:70](https://github.com/hello-seam/seamapi-javascript/blob/main/src/routes.ts#L70)

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

[src/index.ts:30](https://github.com/hello-seam/seamapi-javascript/blob/main/src/index.ts#L30)
