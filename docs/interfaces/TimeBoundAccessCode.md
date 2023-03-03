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

[src/types/models.ts:194](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L194)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:197](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L197)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[common_code_key](AccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:198](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L198)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:212](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L212)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:195](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L195)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:215](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L215)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:200](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L200)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_waiting_for_code_assignment](AccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:199](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L199)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:196](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L196)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:214](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L214)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:213](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L213)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:211](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L211)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:201](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L201)
