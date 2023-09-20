[seamapi](../README.md) / [Exports](../modules.md) / AccessCodeBase

# Interface: AccessCodeBase

## Hierarchy

- **`AccessCodeBase`**

  ↳ [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ [`UnmanagedAccessCodeBase`](UnmanagedAccessCodeBase.md)

## Table of contents

### Properties

- [access\_code\_id](AccessCodeBase.md#access_code_id)
- [appearance](AccessCodeBase.md#appearance)
- [code](AccessCodeBase.md#code)
- [device\_id](AccessCodeBase.md#device_id)
- [errors](AccessCodeBase.md#errors)
- [is\_backup](AccessCodeBase.md#is_backup)
- [is\_backup\_access\_code\_available](AccessCodeBase.md#is_backup_access_code_available)
- [name](AccessCodeBase.md#name)
- [pulled\_backup\_access\_code\_id](AccessCodeBase.md#pulled_backup_access_code_id)
- [warnings](AccessCodeBase.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Defined in

[src/types/models.ts:417](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L417)

___

### appearance

• **appearance**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Defined in

[src/types/models.ts:426](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L426)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:420](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L420)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:418](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L418)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Defined in

[src/types/models.ts:424](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L424)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Defined in

[src/types/models.ts:421](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L421)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Defined in

[src/types/models.ts:423](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L423)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:419](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L419)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:422](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L422)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:425](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L425)
