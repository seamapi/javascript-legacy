[seamapi](../README.md) / [Exports](../modules.md) / UnmanagedAccessCodeBase

# Interface: UnmanagedAccessCodeBase

## Hierarchy

- [`AccessCodeBase`](AccessCodeBase.md)

  ↳ **`UnmanagedAccessCodeBase`**

  ↳↳ [`UnmanagedOngoingAccessCode`](UnmanagedOngoingAccessCode.md)

  ↳↳ [`UnmanagedTimeBoundAccessCode`](UnmanagedTimeBoundAccessCode.md)

## Table of contents

### Properties

- [access\_code\_id](UnmanagedAccessCodeBase.md#access_code_id)
- [allow\_external\_modification](UnmanagedAccessCodeBase.md#allow_external_modification)
- [appearance](UnmanagedAccessCodeBase.md#appearance)
- [code](UnmanagedAccessCodeBase.md#code)
- [created\_at](UnmanagedAccessCodeBase.md#created_at)
- [device\_id](UnmanagedAccessCodeBase.md#device_id)
- [errors](UnmanagedAccessCodeBase.md#errors)
- [is\_backup](UnmanagedAccessCodeBase.md#is_backup)
- [is\_backup\_access\_code\_available](UnmanagedAccessCodeBase.md#is_backup_access_code_available)
- [name](UnmanagedAccessCodeBase.md#name)
- [pulled\_backup\_access\_code\_id](UnmanagedAccessCodeBase.md#pulled_backup_access_code_id)
- [status](UnmanagedAccessCodeBase.md#status)
- [warnings](UnmanagedAccessCodeBase.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[access_code_id](AccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:417](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L417)

___

### allow\_external\_modification

• `Optional` **allow\_external\_modification**: `boolean`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[allow_external_modification](AccessCodeBase.md#allow_external_modification)

#### Defined in

[src/types/models.ts:430](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L430)

___

### appearance

• **appearance**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[appearance](AccessCodeBase.md#appearance)

#### Defined in

[src/types/models.ts:426](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L426)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:420](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L420)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:457](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L457)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:418](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L418)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:424](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L424)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_backup](AccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:421](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L421)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_backup_access_code_available](AccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:423](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L423)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:419](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L419)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[pulled_backup_access_code_id](AccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:422](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L422)

___

### status

• **status**: ``"set"``

#### Defined in

[src/types/models.ts:456](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L456)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:425](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L425)
