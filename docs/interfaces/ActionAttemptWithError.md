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

[src/types/models.ts:283](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L283)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:284](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L284)

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

[src/types/models.ts:301](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L301)

___

### result

• **result**: ``null``

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:300](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L300)

___

### status

• **status**: ``"error"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:299](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L299)
