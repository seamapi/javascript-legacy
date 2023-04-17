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

[src/seam-connect/client.ts:20](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L20)

___

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`<`any`\>

Extended options to pass to Axios

#### Defined in

[src/seam-connect/client.ts:37](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L37)

___

### clientAccessToken

• `Optional` **clientAccessToken**: `string`

#### Defined in

[src/seam-connect/client.ts:22](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L22)

___

### clientSessionToken

• `Optional` **clientSessionToken**: `string`

#### Defined in

[src/seam-connect/client.ts:24](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L24)

___

### endpoint

• `Optional` **endpoint**: `string`

Seam Endpoint to use, defaults to https://connect.getseam.com

#### Defined in

[src/seam-connect/client.ts:28](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L28)

___

### workspaceId

• `Optional` **workspaceId**: `string`

Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
or undefined

#### Defined in

[src/seam-connect/client.ts:33](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L33)
