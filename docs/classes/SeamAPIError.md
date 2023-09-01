[seamapi](../README.md) / [Exports](../modules.md) / SeamAPIError

# Class: SeamAPIError

## Hierarchy

- `Error`

  ↳ **`SeamAPIError`**

## Table of contents

### Constructors

- [constructor](SeamAPIError.md#constructor)

### Properties

- [cause](SeamAPIError.md#cause)
- [message](SeamAPIError.md#message)
- [metadata](SeamAPIError.md#metadata)
- [name](SeamAPIError.md#name)
- [requestId](SeamAPIError.md#requestid)
- [stack](SeamAPIError.md#stack)
- [status](SeamAPIError.md#status)
- [prepareStackTrace](SeamAPIError.md#preparestacktrace)
- [stackTraceLimit](SeamAPIError.md#stacktracelimit)

### Methods

- [toString](SeamAPIError.md#tostring)
- [captureStackTrace](SeamAPIError.md#capturestacktrace)

## Constructors

### constructor

• **new SeamAPIError**(`status`, `requestId`, `metadata?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `requestId` | `string` |
| `metadata?` | [`SeamAPIErrorMetadata`](../interfaces/SeamAPIErrorMetadata.md) |

#### Overrides

Error.constructor

#### Defined in

[src/lib/api-error.ts:8](https://github.com/seamapi/javascript/blob/main/src/lib/api-error.ts#L8)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### metadata

• `Optional` **metadata**: [`SeamAPIErrorMetadata`](../interfaces/SeamAPIErrorMetadata.md)

#### Defined in

[src/lib/api-error.ts:11](https://github.com/seamapi/javascript/blob/main/src/lib/api-error.ts#L11)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### requestId

• **requestId**: `string`

#### Defined in

[src/lib/api-error.ts:10](https://github.com/seamapi/javascript/blob/main/src/lib/api-error.ts#L10)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### status

• **status**: `number`

#### Defined in

[src/lib/api-error.ts:9](https://github.com/seamapi/javascript/blob/main/src/lib/api-error.ts#L9)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/lib/api-error.ts:20](https://github.com/seamapi/javascript/blob/main/src/lib/api-error.ts#L20)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
