[seamapi](../README.md) / [Exports](../modules.md) / SeamClientOptions

# Interface: SeamClientOptions

## Table of contents

### Properties

- [apiKey](SeamClientOptions.md#apikey)
- [axiosOptions](SeamClientOptions.md#axiosoptions)
- [endpoint](SeamClientOptions.md#endpoint)
- [shouldReportExceptions](SeamClientOptions.md#shouldreportexceptions)
- [workspaceId](SeamClientOptions.md#workspaceid)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[src/client.ts:11](https://github.com/seamapi/javascript/blob/main/src/client.ts#L11)

___

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`<`any`\>

Extended options to pass to Axios

#### Defined in

[src/client.ts:29](https://github.com/seamapi/javascript/blob/main/src/client.ts#L29)

___

### endpoint

• `Optional` **endpoint**: `string`

Seam Endpoint to use, defaults to https://connect.getseam.com

#### Defined in

[src/client.ts:15](https://github.com/seamapi/javascript/blob/main/src/client.ts#L15)

___

### shouldReportExceptions

• `Optional` **shouldReportExceptions**: `boolean`

If true, SDK exceptions will be automatically reported to Seam. This defaults to `false` and is opt-in.

**`default`** false

#### Defined in

[src/client.ts:25](https://github.com/seamapi/javascript/blob/main/src/client.ts#L25)

___

### workspaceId

• `Optional` **workspaceId**: `string`

Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
or undefined

#### Defined in

[src/client.ts:20](https://github.com/seamapi/javascript/blob/main/src/client.ts#L20)
