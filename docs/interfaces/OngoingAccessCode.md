[seamapi](../README.md) / [Exports](../modules.md) / OngoingAccessCode

# Interface: OngoingAccessCode

## Hierarchy

- [`AccessCodeBase`](AccessCodeBase.md)

  ↳ **`OngoingAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](OngoingAccessCode.md#access_code_id)
- [code](OngoingAccessCode.md#code)
- [common\_code\_key](OngoingAccessCode.md#common_code_key)
- [created\_at](OngoingAccessCode.md#created_at)
- [device\_id](OngoingAccessCode.md#device_id)
- [ends\_at](OngoingAccessCode.md#ends_at)
- [errors](OngoingAccessCode.md#errors)
- [is\_waiting\_for\_code\_assignment](OngoingAccessCode.md#is_waiting_for_code_assignment)
- [name](OngoingAccessCode.md#name)
- [starts\_at](OngoingAccessCode.md#starts_at)
- [status](OngoingAccessCode.md#status)
- [type](OngoingAccessCode.md#type)
- [warnings](OngoingAccessCode.md#warnings)

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

• **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[common_code_key](AccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:162](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L162)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:170](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L170)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:157](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L157)

___

### ends\_at

• **ends\_at**: ``null``

#### Overrides

[AccessCodeBase](AccessCodeBase.md).[ends_at](AccessCodeBase.md#ends_at)

#### Defined in

[src/types/models.ts:173](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L173)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:164](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L164)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_waiting_for_code_assignment](AccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:163](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L163)

___

### name

• **name**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:158](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L158)

___

### starts\_at

• **starts\_at**: ``null``

#### Overrides

[AccessCodeBase](AccessCodeBase.md).[starts_at](AccessCodeBase.md#starts_at)

#### Defined in

[src/types/models.ts:172](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L172)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"``

#### Defined in

[src/types/models.ts:171](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L171)

___

### type

• **type**: ``"ongoing"``

#### Defined in

[src/types/models.ts:169](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L169)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:165](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L165)
