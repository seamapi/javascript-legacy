[seamapi](../README.md) / [Exports](../modules.md) / Seam

# Class: Seam

## Hierarchy

- `Routes`

  ↳ **`Seam`**

## Table of contents

### Constructors

- [constructor](Seam.md#constructor)

### Properties

- [accessCodes](Seam.md#accesscodes)
- [actionAttempts](Seam.md#actionattempts)
- [client](Seam.md#client)
- [connectWebviews](Seam.md#connectwebviews)
- [connectedAccounts](Seam.md#connectedaccounts)
- [devices](Seam.md#devices)
- [locks](Seam.md#locks)
- [workspaces](Seam.md#workspaces)

### Methods

- [makeRequest](Seam.md#makerequest)

## Constructors

### constructor

• **new Seam**(`apiKeyOrOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamClientOptions`](../interfaces/SeamClientOptions.md) |

#### Overrides

Routes.constructor

#### Defined in

[src/client.ts:38](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L38)

## Properties

### accessCodes

• `Readonly` **accessCodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`AccessCodeCreateOngoingRequest`](../interfaces/AccessCodeCreateOngoingRequest.md)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md)\>(`params`: [`AccessCodeCreateScheduledRequest`](../interfaces/AccessCodeCreateScheduledRequest.md)) => `Promise`<[`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)\> |
| `delete` | (`params`: [`AccessCodeDeleteRequest`](../modules.md#accesscodedeleterequest)) => `Promise`<`unknown`\> |
| `list` | (`params`: { `device_id`: `string`  }) => `Promise`<[`AccessCode`](../modules.md#accesscode)[]\> |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/routes.ts:197](https://github.com/seamapi/seamapi-javascript/blob/main/src/routes.ts#L197)

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

[src/routes.ts:268](https://github.com/seamapi/seamapi-javascript/blob/main/src/routes.ts#L268)

___

### client

• `Private` **client**: `AxiosInstance`

#### Defined in

[src/client.ts:36](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L36)

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

[src/routes.ts:171](https://github.com/seamapi/seamapi-javascript/blob/main/src/routes.ts#L171)

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

[src/routes.ts:247](https://github.com/seamapi/seamapi-javascript/blob/main/src/routes.ts#L247)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), [`DeviceType`](../modules.md#devicetype)\>\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), [`DeviceType`](../modules.md#devicetype)\>[]\> |
| `update` | (`params`: [`DeviceUpdateRequest`](../modules.md#deviceupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |

#### Inherited from

Routes.devices

#### Defined in

[src/routes.ts:146](https://github.com/seamapi/seamapi-javascript/blob/main/src/routes.ts#L146)

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

[src/routes.ts:111](https://github.com/seamapi/seamapi-javascript/blob/main/src/routes.ts#L111)

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

[src/routes.ts:95](https://github.com/seamapi/seamapi-javascript/blob/main/src/routes.ts#L95)

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

[src/client.ts:68](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L68)
