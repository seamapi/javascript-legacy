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

[src/types/models.ts:63](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L63)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:64](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L64)

___

### error

• **error**: ``null``

#### Overrides

ActionAttemptBase.error

#### Defined in

[src/types/models.ts:74](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L74)

___

### result

• **result**: ``null``

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:73](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L73)

___

### status

• **status**: ``"pending"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:72](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L72)
