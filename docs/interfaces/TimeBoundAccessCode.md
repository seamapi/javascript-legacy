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

[src/types/models.ts:288](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L288)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:291](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L291)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:297](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L297)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:309](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L309)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:289](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L289)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:312](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L312)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:292](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L292)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:298](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L298)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:290](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L290)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:311](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L311)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:310](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L310)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:308](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L308)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:293](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L293)
