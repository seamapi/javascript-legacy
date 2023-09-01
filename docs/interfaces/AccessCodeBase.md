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

[src/types/models.ts:388](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L388)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:391](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L391)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:389](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L389)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Defined in

[src/types/models.ts:395](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L395)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Defined in

[src/types/models.ts:392](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L392)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Defined in

[src/types/models.ts:394](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L394)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:390](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L390)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:393](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L393)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:396](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L396)
