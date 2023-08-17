[seamapi](../README.md) / [Exports](../modules.md) / UnmanagedTimeBoundAccessCode

# Interface: UnmanagedTimeBoundAccessCode

## Hierarchy

- [`UnmanagedAccessCodeBase`](UnmanagedAccessCodeBase.md)

  ↳ **`UnmanagedTimeBoundAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](UnmanagedTimeBoundAccessCode.md#access_code_id)
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

[src/types/models.ts:350](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L350)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[code](UnmanagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:353](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L353)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[created_at](UnmanagedAccessCodeBase.md#created_at)

#### Defined in

[src/types/models.ts:385](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L385)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[device_id](UnmanagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:351](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L351)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:394](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L394)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[errors](UnmanagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:357](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L357)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup](UnmanagedAccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:354](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L354)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup_access_code_available](UnmanagedAccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:356](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L356)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[name](UnmanagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:352](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L352)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[pulled_backup_access_code_id](UnmanagedAccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:355](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L355)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:393](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L393)

___

### status

• **status**: ``"set"``

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[status](UnmanagedAccessCodeBase.md#status)

#### Defined in

[src/types/models.ts:384](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L384)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:392](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L392)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[warnings](UnmanagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:358](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L358)
