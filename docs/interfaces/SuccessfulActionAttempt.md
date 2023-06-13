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

[src/types/models.ts:230](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L230)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:231](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L231)

___

### error

• **error**: ``null``

#### Overrides

ActionAttemptBase.error

#### Defined in

[src/types/models.ts:263](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L263)

___

### result

• **result**: [`ActionAttemptResultTypeMap`](ActionAttemptResultTypeMap.md)[`T`]

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:264](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L264)

___

### status

• **status**: ``"success"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:262](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L262)
