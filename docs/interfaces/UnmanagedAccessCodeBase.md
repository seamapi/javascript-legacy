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

[src/types/models.ts:401](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L401)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:404](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L404)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:436](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L436)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:402](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L402)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:408](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L408)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_backup](AccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:405](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L405)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_backup_access_code_available](AccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:407](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L407)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:403](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L403)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[pulled_backup_access_code_id](AccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:406](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L406)

___

### status

• **status**: ``"set"``

#### Defined in

[src/types/models.ts:435](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L435)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:409](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L409)
