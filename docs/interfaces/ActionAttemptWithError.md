[seamapi](../README.md) / [Exports](../modules.md) / ActionAttemptWithError

# Interface: ActionAttemptWithError<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](../modules.md#actiontype) |

## Hierarchy

- `ActionAttemptBase`<`T`\>

  ↳ **`ActionAttemptWithError`**

## Table of contents

### Properties

- [action\_attempt\_id](ActionAttemptWithError.md#action_attempt_id)
- [action\_type](ActionAttemptWithError.md#action_type)
- [error](ActionAttemptWithError.md#error)
- [result](ActionAttemptWithError.md#result)
- [status](ActionAttemptWithError.md#status)

## Properties

### action\_attempt\_id

• **action\_attempt\_id**: `string`

#### Inherited from

ActionAttemptBase.action\_attempt\_id

#### Defined in

[src/types/models.ts:246](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L246)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:247](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L247)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `type` | `string` |

#### Overrides

ActionAttemptBase.error

#### Defined in

[src/types/models.ts:264](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L264)

___

### result

• **result**: ``null``

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:263](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L263)

___

### status

• **status**: ``"error"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:262](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L262)
