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

[src/types/models.ts:401](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L401)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[code](UnmanagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:404](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L404)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[created_at](UnmanagedAccessCodeBase.md#created_at)

#### Defined in

[src/types/models.ts:436](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L436)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[device_id](UnmanagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:402](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L402)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:445](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L445)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[errors](UnmanagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:408](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L408)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup](UnmanagedAccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:405](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L405)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup_access_code_available](UnmanagedAccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:407](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L407)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[name](UnmanagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:403](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L403)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[pulled_backup_access_code_id](UnmanagedAccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:406](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L406)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:444](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L444)

___

### status

• **status**: ``"set"``

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[status](UnmanagedAccessCodeBase.md#status)

#### Defined in

[src/types/models.ts:435](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L435)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:443](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L443)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[warnings](UnmanagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:409](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L409)
