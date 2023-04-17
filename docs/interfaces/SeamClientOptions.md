[seamapi](../README.md) / [Exports](../modules.md) / SeamClientOptions

# Interface: SeamClientOptions

## Table of contents

### Properties

- [apiKey](SeamClientOptions.md#apikey)
- [axiosOptions](SeamClientOptions.md#axiosoptions)
- [clientAccessToken](SeamClientOptions.md#clientaccesstoken)
- [clientSessionToken](SeamClientOptions.md#clientsessiontoken)
- [endpoint](SeamClientOptions.md#endpoint)
- [workspaceId](SeamClientOptions.md#workspaceid)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[src/seam-connect/client.ts:19](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L19)

___

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`<`any`\>

Extended options to pass to Axios

#### Defined in

[src/seam-connect/client.ts:36](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L36)

___

### clientAccessToken

• `Optional` **clientAccessToken**: `string`

#### Defined in

[src/seam-connect/client.ts:21](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L21)

___

### clientSessionToken

• `Optional` **clientSessionToken**: `string`

#### Defined in

[src/seam-connect/client.ts:23](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L23)

___

### endpoint

• `Optional` **endpoint**: `string`

Seam Endpoint to use, defaults to https://connect.getseam.com

#### Defined in

[src/seam-connect/client.ts:27](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L27)

___

### workspaceId

• `Optional` **workspaceId**: `string`

Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
or undefined

#### Defined in

[src/seam-connect/client.ts:32](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L32)
