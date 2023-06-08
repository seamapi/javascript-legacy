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

[src/types/models.ts:205](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L205)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:206](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L206)

___

### error

• **error**: ``null``

#### Overrides

ActionAttemptBase.error

#### Defined in

[src/types/models.ts:216](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L216)

___

### result

• **result**: ``null``

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:215](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L215)

___

### status

• **status**: ``"pending"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:214](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L214)
