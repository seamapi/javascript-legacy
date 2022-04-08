[seamapi](../README.md) / [Exports](../modules.md) / SeamActionAttemptError

# Class: SeamActionAttemptError

## Hierarchy

- `Error`

  ↳ **`SeamActionAttemptError`**

## Table of contents

### Constructors

- [constructor](SeamActionAttemptError.md#constructor)

### Properties

- [action\_type](SeamActionAttemptError.md#action_type)
- [message](SeamActionAttemptError.md#message)
- [name](SeamActionAttemptError.md#name)
- [stack](SeamActionAttemptError.md#stack)
- [type](SeamActionAttemptError.md#type)
- [prepareStackTrace](SeamActionAttemptError.md#preparestacktrace)
- [stackTraceLimit](SeamActionAttemptError.md#stacktracelimit)

### Methods

- [toString](SeamActionAttemptError.md#tostring)
- [captureStackTrace](SeamActionAttemptError.md#capturestacktrace)

## Constructors

### constructor

• **new SeamActionAttemptError**(`type`, `message`, `action_type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `message` | `string` |
| `action_type` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/lib/api-error.ts:26](https://github.com/seamapi/seamapi-javascript/blob/main/src/lib/api-error.ts#L26)

## Properties

### action\_type

• **action\_type**: `string`

___

### message

• **message**: `string`

#### Inherited from

Error.message

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

### type

• **type**: `string`

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

[src/lib/api-error.ts:38](https://github.com/seamapi/seamapi-javascript/blob/main/src/lib/api-error.ts#L38)

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
