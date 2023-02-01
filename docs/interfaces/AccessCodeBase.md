[seamapi](../README.md) / [Exports](../modules.md) / AccessCodeBase

# Interface: AccessCodeBase

## Hierarchy

- **`AccessCodeBase`**

  ↳ [`OngoingAccessCode`](OngoingAccessCode.md)

  ↳ [`TimeBoundAccessCode`](TimeBoundAccessCode.md)

## Table of contents

### Properties

- [access\_code\_id](AccessCodeBase.md#access_code_id)
- [code](AccessCodeBase.md#code)
- [common\_code\_key](AccessCodeBase.md#common_code_key)
- [device\_id](AccessCodeBase.md#device_id)
- [errors](AccessCodeBase.md#errors)
- [is\_waiting\_for\_code\_assignment](AccessCodeBase.md#is_waiting_for_code_assignment)
- [name](AccessCodeBase.md#name)
- [warnings](AccessCodeBase.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Defined in

[src/types/models.ts:156](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L156)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:159](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L159)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:160](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L160)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:157](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L157)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Defined in

[src/types/models.ts:162](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L162)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Defined in

[src/types/models.ts:161](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L161)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:158](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L158)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:163](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L163)
