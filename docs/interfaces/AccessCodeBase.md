[seamapi](../README.md) / [Exports](../modules.md) / AccessCodeBase

# Interface: AccessCodeBase

## Hierarchy

- **`AccessCodeBase`**

  ↳ [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ [`UnmanagedAccessCodeBase`](UnmanagedAccessCodeBase.md)

## Table of contents

### Properties

- [access\_code\_id](AccessCodeBase.md#access_code_id)
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

[src/types/models.ts:401](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L401)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:404](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L404)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:402](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L402)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Defined in

[src/types/models.ts:408](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L408)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Defined in

[src/types/models.ts:405](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L405)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Defined in

[src/types/models.ts:407](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L407)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:403](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L403)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:406](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L406)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:409](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L409)
