[seamapi](../README.md) / [Exports](../modules.md) / UnmanagedTimeBoundAccessCode

# Interface: UnmanagedTimeBoundAccessCode

## Hierarchy

- [`UnmanagedAccessCodeBase`](UnmanagedAccessCodeBase.md)

  ↳ **`UnmanagedTimeBoundAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](UnmanagedTimeBoundAccessCode.md#access_code_id)
- [allow\_external\_modification](UnmanagedTimeBoundAccessCode.md#allow_external_modification)
- [appearance](UnmanagedTimeBoundAccessCode.md#appearance)
- [code](UnmanagedTimeBoundAccessCode.md#code)
- [created\_at](UnmanagedTimeBoundAccessCode.md#created_at)
- [device\_id](UnmanagedTimeBoundAccessCode.md#device_id)
- [ends\_at](UnmanagedTimeBoundAccessCode.md#ends_at)
- [errors](UnmanagedTimeBoundAccessCode.md#errors)
- [is\_backup](UnmanagedTimeBoundAccessCode.md#is_backup)
- [is\_backup\_access\_code\_available](UnmanagedTimeBoundAccessCode.md#is_backup_access_code_available)
- [name](UnmanagedTimeBoundAccessCode.md#name)
- [pulled\_backup\_access\_code\_id](UnmanagedTimeBoundAccessCode.md#pulled_backup_access_code_id)
- [starts\_at](UnmanagedTimeBoundAccessCode.md#starts_at)
- [status](UnmanagedTimeBoundAccessCode.md#status)
- [type](UnmanagedTimeBoundAccessCode.md#type)
- [warnings](UnmanagedTimeBoundAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[access_code_id](UnmanagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:417](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L417)

___

### allow\_external\_modification

• `Optional` **allow\_external\_modification**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[allow_external_modification](UnmanagedAccessCodeBase.md#allow_external_modification)

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

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[appearance](UnmanagedAccessCodeBase.md#appearance)

#### Defined in

[src/types/models.ts:426](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L426)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[code](UnmanagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:420](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L420)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[created_at](UnmanagedAccessCodeBase.md#created_at)

#### Defined in

[src/types/models.ts:457](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L457)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[device_id](UnmanagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:418](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L418)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:466](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L466)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[errors](UnmanagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:424](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L424)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup](UnmanagedAccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:421](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L421)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup_access_code_available](UnmanagedAccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:423](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L423)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[name](UnmanagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:419](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L419)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[pulled_backup_access_code_id](UnmanagedAccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:422](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L422)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:465](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L465)

___

### status

• **status**: ``"set"``

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[status](UnmanagedAccessCodeBase.md#status)

#### Defined in

[src/types/models.ts:456](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L456)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:464](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L464)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[warnings](UnmanagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:425](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L425)
