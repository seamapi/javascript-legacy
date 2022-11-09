[seamapi](../README.md) / [Exports](../modules.md) / SeamOS

# Class: SeamOS

## Table of contents

### Constructors

- [constructor](SeamOS.md#constructor)

### Properties

- [axios](SeamOS.md#axios)
- [organizations](SeamOS.md#organizations)

### Methods

- [get](SeamOS.md#get)
- [makeRequest](SeamOS.md#makerequest)
- [post](SeamOS.md#post)

## Constructors

### constructor

• **new SeamOS**(`apiKeyOrOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamOSClientOptions`](../interfaces/SeamOSClientOptions.md) |

#### Defined in

[src/seam-os/client.ts:52](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L52)

## Properties

### axios

• **axios**: `AxiosInstance`

#### Defined in

[src/seam-os/client.ts:50](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L50)

___

### organizations

• `Readonly` **organizations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | () => `Promise`<{ `ok`: `boolean` ; `organization`: { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }  }\> |

#### Defined in

[src/seam-os/client.ts:104](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L104)

## Methods

### get

▸ **get**<`URL`\>(`url`, `config?`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `config?` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, ``"GET"``\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:89](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L89)

___

### makeRequest

▸ **makeRequest**<`URL`, `Method`\>(`request`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `Method` | extends ``"GET"`` \| ``"POST"`` \| ``"DELETE"`` \| ``"PATCH"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, `Method`\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:83](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L83)

___

### post

▸ **post**<`URL`\>(`url`, `data`, `config?`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |
| `config?` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, ``"POST"``\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:96](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L96)
