[seamapi](../README.md) / [Exports](../modules.md) / SeamAPIError

# Class: SeamAPIError

## Hierarchy

- `Error`

  ↳ **`SeamAPIError`**

## Table of contents

### Constructors

- [constructor](SeamAPIError.md#constructor)

### Properties

- [message](SeamAPIError.md#message)
- [metadata](SeamAPIError.md#metadata)
- [name](SeamAPIError.md#name)
- [stack](SeamAPIError.md#stack)
- [status](SeamAPIError.md#status)
- [prepareStackTrace](SeamAPIError.md#preparestacktrace)
- [stackTraceLimit](SeamAPIError.md#stacktracelimit)

### Methods

- [toString](SeamAPIError.md#tostring)
- [captureStackTrace](SeamAPIError.md#capturestacktrace)

## Constructors

### constructor

• **new SeamAPIError**(`status`, `metadata?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `metadata?` | [`SeamAPIErrorMetadata`](../interfaces/SeamAPIErrorMetadata.md) |

#### Overrides

Error.constructor

#### Defined in

[src/lib/api-error.ts:8](https://github.com/seamapi/seamapi-javascript/blob/main/src/lib/api-error.ts#L8)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### metadata

• `Optional` **metadata**: [`SeamAPIErrorMetadata`](../interfaces/SeamAPIErrorMetadata.md)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### status

• **status**: `number`

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

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

[src/lib/api-error.ts:16](https://github.com/seamapi/seamapi-javascript/blob/main/src/lib/api-error.ts#L16)

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
