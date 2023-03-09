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
- [errors](OngoingAccessCode.md#errors)
- [is\_waiting\_for\_code\_assignment](OngoingAccessCode.md#is_waiting_for_code_assignment)
- [name](OngoingAccessCode.md#name)
- [status](OngoingAccessCode.md#status)
- [type](OngoingAccessCode.md#type)
- [warnings](OngoingAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[access_code_id](AccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:195](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L195)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:198](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L198)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[common_code_key](AccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:199](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L199)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:207](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L207)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:196](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L196)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:201](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L201)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_waiting_for_code_assignment](AccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:200](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L200)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:197](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L197)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:208](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L208)

___

### type

• **type**: ``"ongoing"``

#### Defined in

[src/types/models.ts:206](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L206)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:202](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L202)
