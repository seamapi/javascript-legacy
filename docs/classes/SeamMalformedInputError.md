[seamapi](../README.md) / [Exports](../modules.md) / SeamMalformedInputError

# Class: SeamMalformedInputError

## Hierarchy

- `Error`

  ↳ **`SeamMalformedInputError`**

## Table of contents

### Constructors

- [constructor](SeamMalformedInputError.md#constructor)

### Properties

- [message](SeamMalformedInputError.md#message)
- [name](SeamMalformedInputError.md#name)
- [stack](SeamMalformedInputError.md#stack)
- [validationErrors](SeamMalformedInputError.md#validationerrors)
- [prepareStackTrace](SeamMalformedInputError.md#preparestacktrace)
- [stackTraceLimit](SeamMalformedInputError.md#stacktracelimit)

### Methods

- [toString](SeamMalformedInputError.md#tostring)
- [captureStackTrace](SeamMalformedInputError.md#capturestacktrace)

## Constructors

### constructor

• **new SeamMalformedInputError**(`validationErrors`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `validationErrors` | `Record`<`string`, `unknown`\> |

#### Overrides

Error.constructor

#### Defined in

[src/lib/api-error.ts:44](https://github.com/seamapi/javascript/blob/main/src/lib/api-error.ts#L44)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

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

### validationErrors

• **validationErrors**: `Record`<`string`, `unknown`\>

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

[src/lib/api-error.ts:52](https://github.com/seamapi/javascript/blob/main/src/lib/api-error.ts#L52)

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
