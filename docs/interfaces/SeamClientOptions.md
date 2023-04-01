[seamapi](../README.md) / [Exports](../modules.md) / SeamClientOptions

# Interface: SeamClientOptions

## Table of contents

### Properties

- [apiKey](SeamClientOptions.md#apikey)
- [axiosOptions](SeamClientOptions.md#axiosoptions)
- [endpoint](SeamClientOptions.md#endpoint)
- [workspaceId](SeamClientOptions.md#workspaceid)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[src/seam-connect/client.ts:15](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L15)

___

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`<`any`\>

Extended options to pass to Axios

#### Defined in

[src/seam-connect/client.ts:28](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L28)

___

### endpoint

• `Optional` **endpoint**: `string`

Seam Endpoint to use, defaults to https://connect.getseam.com

#### Defined in

[src/seam-connect/client.ts:19](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L19)

___

### workspaceId

• `Optional` **workspaceId**: `string`

Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
or undefined

#### Defined in

[src/seam-connect/client.ts:24](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L24)
