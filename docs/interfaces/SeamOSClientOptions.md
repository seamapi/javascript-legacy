[seamapi](../README.md) / [Exports](../modules.md) / SeamOSClientOptions

# Interface: SeamOSClientOptions

## Table of contents

### Properties

- [apiKey](SeamOSClientOptions.md#apikey)
- [axiosOptions](SeamOSClientOptions.md#axiosoptions)
- [endpoint](SeamOSClientOptions.md#endpoint)
- [organizationId](SeamOSClientOptions.md#organizationid)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[src/seam-os/client.ts:8](https://github.com/hello-seam/seamapi-javascript/blob/main/src/seam-os/client.ts#L8)

___

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`<`any`\>

Extended options to pass to Axios

#### Defined in

[src/seam-os/client.ts:21](https://github.com/hello-seam/seamapi-javascript/blob/main/src/seam-os/client.ts#L21)

___

### endpoint

• `Optional` **endpoint**: `string`

Seam Endpoint to use, defaults to https://connect.getseam.com

#### Defined in

[src/seam-os/client.ts:12](https://github.com/hello-seam/seamapi-javascript/blob/main/src/seam-os/client.ts#L12)

___

### organizationId

• `Optional` **organizationId**: `string`

Organization if using session authentication, defaults to SEAM_ORGANIZATION_ID
or undefined

#### Defined in

[src/seam-os/client.ts:17](https://github.com/hello-seam/seamapi-javascript/blob/main/src/seam-os/client.ts#L17)
