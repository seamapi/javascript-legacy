[seamapi](../README.md) / [Exports](../modules.md) / PendingActionAttempt

# Interface: PendingActionAttempt<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](../modules.md#actiontype) |

## Hierarchy

- `ActionAttemptBase`<`T`\>

  ↳ **`PendingActionAttempt`**

## Table of contents

### Properties

- [action\_attempt\_id](PendingActionAttempt.md#action_attempt_id)
- [action\_type](PendingActionAttempt.md#action_type)
- [error](PendingActionAttempt.md#error)
- [result](PendingActionAttempt.md#result)
- [status](PendingActionAttempt.md#status)

## Properties

### action\_attempt\_id

• **action\_attempt\_id**: `string`

#### Inherited from

ActionAttemptBase.action\_attempt\_id

#### Defined in

[src/types/models.ts:241](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L241)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:242](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L242)

___

### error

• **error**: ``null``

#### Overrides

ActionAttemptBase.error

#### Defined in

[src/types/models.ts:252](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L252)

___

### result

• **result**: ``null``

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:251](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L251)

___

### status

• **status**: ``"pending"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:250](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L250)
