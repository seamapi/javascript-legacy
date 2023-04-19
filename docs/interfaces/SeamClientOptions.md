[seamapi](../README.md) / [Exports](../modules.md) / SeamClientOptions

# Interface: SeamClientOptions

## Table of contents

### Properties

- [apiKey](SeamClientOptions.md#apikey)
- [axiosOptions](SeamClientOptions.md#axiosoptions)
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

[src/seam-connect/client.ts:35](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L35)

___

### clientSessionToken

• `Optional` **clientSessionToken**: `string`

#### Defined in

[src/seam-connect/client.ts:22](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L22)

___

### endpoint

• `Optional` **endpoint**: `string`

Seam Endpoint to use, defaults to https://connect.getseam.com

#### Defined in

[src/seam-connect/client.ts:26](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L26)

___

### workspaceId

• `Optional` **workspaceId**: `string`

Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
or undefined

#### Defined in

[src/seam-connect/client.ts:31](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L31)
