[seamapi](../README.md) / [Exports](../modules.md) / SuccessfulActionAttempt

# Interface: SuccessfulActionAttempt<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](../modules.md#actiontype) |

## Hierarchy

- `ActionAttemptBase`<`T`\>

  ↳ **`SuccessfulActionAttempt`**

## Table of contents

### Properties

- [action\_attempt\_id](SuccessfulActionAttempt.md#action_attempt_id)
- [action\_type](SuccessfulActionAttempt.md#action_type)
- [error](SuccessfulActionAttempt.md#error)
- [result](SuccessfulActionAttempt.md#result)
- [status](SuccessfulActionAttempt.md#status)

## Properties

### action\_attempt\_id

• **action\_attempt\_id**: `string`

#### Inherited from

ActionAttemptBase.action\_attempt\_id

#### Defined in

[src/types/models.ts:58](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L58)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:59](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L59)

___

### error

• **error**: ``null``

#### Overrides

ActionAttemptBase.error

#### Defined in

[src/types/models.ts:85](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L85)

___

### result

• **result**: [`ActionAttemptResultTypeMap`](ActionAttemptResultTypeMap.md)[`T`]

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:86](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L86)

___

### status

• **status**: ``"success"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:84](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L84)
