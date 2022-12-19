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

[src/client.ts:10](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L10)

___

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`<`any`\>

Extended options to pass to Axios

#### Defined in

[src/client.ts:23](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L23)

___

### endpoint

• `Optional` **endpoint**: `string`

Seam Endpoint to use, defaults to https://connect.getseam.com

#### Defined in

[src/client.ts:14](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L14)

___

### workspaceId

• `Optional` **workspaceId**: `string`

Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
or undefined

#### Defined in

[src/client.ts:19](https://github.com/seamapi/seamapi-javascript/blob/main/src/client.ts#L19)
