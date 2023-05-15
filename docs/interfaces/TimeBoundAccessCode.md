[seamapi](../README.md) / [Exports](../modules.md) / TimeBoundAccessCode

# Interface: TimeBoundAccessCode

## Hierarchy

- [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ **`TimeBoundAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](TimeBoundAccessCode.md#access_code_id)
- [code](TimeBoundAccessCode.md#code)
- [common\_code\_key](TimeBoundAccessCode.md#common_code_key)
- [created\_at](TimeBoundAccessCode.md#created_at)
- [device\_id](TimeBoundAccessCode.md#device_id)
- [ends\_at](TimeBoundAccessCode.md#ends_at)
- [errors](TimeBoundAccessCode.md#errors)
- [is\_waiting\_for\_code\_assignment](TimeBoundAccessCode.md#is_waiting_for_code_assignment)
- [name](TimeBoundAccessCode.md#name)
- [starts\_at](TimeBoundAccessCode.md#starts_at)
- [status](TimeBoundAccessCode.md#status)
- [type](TimeBoundAccessCode.md#type)
- [warnings](TimeBoundAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[access_code_id](ManagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:237](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L237)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:240](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L240)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:246](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L246)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:258](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L258)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:238](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L238)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:261](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L261)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:241](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L241)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:247](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L247)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:239](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L239)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:260](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L260)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:259](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L259)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:257](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L257)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:242](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L242)
