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

[src/types/models.ts:362](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L362)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:365](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L365)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:363](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L363)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Defined in

[src/types/models.ts:369](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L369)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Defined in

[src/types/models.ts:366](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L366)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Defined in

[src/types/models.ts:368](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L368)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:364](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L364)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:367](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L367)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:370](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L370)
