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

[src/types/models.ts:198](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L198)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:201](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L201)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:202](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L202)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:199](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L199)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Defined in

[src/types/models.ts:204](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L204)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Defined in

[src/types/models.ts:203](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L203)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:200](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L200)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:205](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L205)
