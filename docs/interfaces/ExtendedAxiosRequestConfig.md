[seamapi](../README.md) / [Exports](../modules.md) / ExtendedAxiosRequestConfig

# Interface: ExtendedAxiosRequestConfig<URL, Method\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](SeamOSRouteTypes.Routes.md) |
| `Method` | extends [`Routes`](SeamOSRouteTypes.Routes.md)[`URL`][``"method"``] |

## Hierarchy

- `Omit`<`AxiosRequestConfig`, ``"url"`` \| ``"method"`` \| ``"data"``\>

  ↳ **`ExtendedAxiosRequestConfig`**

## Table of contents

### Properties

- [adapter](ExtendedAxiosRequestConfig.md#adapter)
- [auth](ExtendedAxiosRequestConfig.md#auth)
- [axios-retry](ExtendedAxiosRequestConfig.md#axios-retry)
- [baseURL](ExtendedAxiosRequestConfig.md#baseurl)
- [cancelToken](ExtendedAxiosRequestConfig.md#canceltoken)
- [data](ExtendedAxiosRequestConfig.md#data)
- [decompress](ExtendedAxiosRequestConfig.md#decompress)
- [headers](ExtendedAxiosRequestConfig.md#headers)
- [httpAgent](ExtendedAxiosRequestConfig.md#httpagent)
- [httpsAgent](ExtendedAxiosRequestConfig.md#httpsagent)
- [insecureHTTPParser](ExtendedAxiosRequestConfig.md#insecurehttpparser)
- [maxBodyLength](ExtendedAxiosRequestConfig.md#maxbodylength)
- [maxContentLength](ExtendedAxiosRequestConfig.md#maxcontentlength)
- [maxRedirects](ExtendedAxiosRequestConfig.md#maxredirects)
- [method](ExtendedAxiosRequestConfig.md#method)
- [params](ExtendedAxiosRequestConfig.md#params)
- [proxy](ExtendedAxiosRequestConfig.md#proxy)
- [responseEncoding](ExtendedAxiosRequestConfig.md#responseencoding)
- [responseType](ExtendedAxiosRequestConfig.md#responsetype)
- [signal](ExtendedAxiosRequestConfig.md#signal)
- [socketPath](ExtendedAxiosRequestConfig.md#socketpath)
- [timeout](ExtendedAxiosRequestConfig.md#timeout)
- [timeoutErrorMessage](ExtendedAxiosRequestConfig.md#timeouterrormessage)
- [transformRequest](ExtendedAxiosRequestConfig.md#transformrequest)
- [transformResponse](ExtendedAxiosRequestConfig.md#transformresponse)
- [transitional](ExtendedAxiosRequestConfig.md#transitional)
- [url](ExtendedAxiosRequestConfig.md#url)
- [validateStatus](ExtendedAxiosRequestConfig.md#validatestatus)
- [withCredentials](ExtendedAxiosRequestConfig.md#withcredentials)
- [xsrfCookieName](ExtendedAxiosRequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](ExtendedAxiosRequestConfig.md#xsrfheadername)

### Methods

- [onDownloadProgress](ExtendedAxiosRequestConfig.md#ondownloadprogress)
- [onUploadProgress](ExtendedAxiosRequestConfig.md#onuploadprogress)
- [paramsSerializer](ExtendedAxiosRequestConfig.md#paramsserializer)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapter`

#### Inherited from

Omit.adapter

#### Defined in

node_modules/axios/index.d.ts:89

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

Omit.auth

#### Defined in

node_modules/axios/index.d.ts:90

___

### axios-retry

• `Optional` **axios-retry**: `IAxiosRetryConfig`

#### Inherited from

Omit.axios-retry

#### Defined in

node_modules/axios-retry/index.d.ts:64

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Omit.baseURL

#### Defined in

node_modules/axios/index.d.ts:79

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

Omit.cancelToken

#### Defined in

node_modules/axios/index.d.ts:105

___

### data

• `Optional` **data**: [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>

#### Defined in

[src/seam-os/client.ts:46](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L46)

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

Omit.decompress

#### Defined in

node_modules/axios/index.d.ts:106

___

### headers

• `Optional` **headers**: `AxiosRequestHeaders`

#### Inherited from

Omit.headers

#### Defined in

node_modules/axios/index.d.ts:82

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

Omit.httpAgent

#### Defined in

node_modules/axios/index.d.ts:102

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

Omit.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:103

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

Omit.insecureHTTPParser

#### Defined in

node_modules/axios/index.d.ts:109

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

Omit.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:99

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

Omit.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:97

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

Omit.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:100

___

### method

• **method**: `Method`

#### Defined in

[src/seam-os/client.ts:44](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L44)

___

### params

• `Optional` **params**: [`RouteRequestParams`](../modules/SeamOSRouteTypes.md#routerequestparams)<`URL`\>

#### Overrides

Omit.params

#### Defined in

[src/seam-os/client.ts:45](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L45)

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

#### Inherited from

Omit.proxy

#### Defined in

node_modules/axios/index.d.ts:104

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

Omit.responseEncoding

#### Defined in

node_modules/axios/index.d.ts:92

___

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

Omit.responseType

#### Defined in

node_modules/axios/index.d.ts:91

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

Omit.signal

#### Defined in

node_modules/axios/index.d.ts:108

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

Omit.socketPath

#### Defined in

node_modules/axios/index.d.ts:101

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

node_modules/axios/index.d.ts:86

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

Omit.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:87

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

Omit.transformRequest

#### Defined in

node_modules/axios/index.d.ts:80

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

Omit.transformResponse

#### Defined in

node_modules/axios/index.d.ts:81

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

Omit.transitional

#### Defined in

node_modules/axios/index.d.ts:107

___

### url

• **url**: `URL`

#### Defined in

[src/seam-os/client.ts:43](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L43)

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

Omit.validateStatus

#### Defined in

node_modules/axios/index.d.ts:98

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

Omit.withCredentials

#### Defined in

node_modules/axios/index.d.ts:88

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

Omit.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:93

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

Omit.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:94

## Methods

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

Omit.onDownloadProgress

#### Defined in

node_modules/axios/index.d.ts:96

___

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

Omit.onUploadProgress

#### Defined in

node_modules/axios/index.d.ts:95

___

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`

#### Inherited from

Omit.paramsSerializer

#### Defined in

node_modules/axios/index.d.ts:84
