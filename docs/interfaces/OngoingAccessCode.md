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

[src/types/models.ts:153](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L153)

___

### code

• **code**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:156](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L156)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[common_code_key](AccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:157](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L157)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:164](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L164)

___

### device\_id

• `Optional` **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:154](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L154)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:158](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L158)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:155](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L155)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"``

#### Defined in

[src/types/models.ts:165](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L165)

___

### type

• **type**: ``"ongoing"``

#### Defined in

[src/types/models.ts:163](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L163)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:159](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L159)
