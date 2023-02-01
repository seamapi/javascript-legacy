[seamapi](../README.md) / [Exports](../modules.md) / TimeBoundAccessCode

# Interface: TimeBoundAccessCode

## Hierarchy

- [`AccessCodeBase`](AccessCodeBase.md)

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

[AccessCodeBase](AccessCodeBase.md).[access_code_id](AccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:156](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L156)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:159](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L159)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[common_code_key](AccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:160](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L160)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:174](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L174)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:157](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L157)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:177](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L177)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:162](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L162)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_waiting_for_code_assignment](AccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:161](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L161)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:158](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L158)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:176](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L176)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"``

#### Defined in

[src/types/models.ts:175](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L175)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:173](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L173)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:163](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L163)
