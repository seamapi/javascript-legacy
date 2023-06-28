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

[src/types/models.ts:312](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L312)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:315](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L315)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:313](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L313)

___

### errors

• `Optional` **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Defined in

[src/types/models.ts:319](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L319)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Defined in

[src/types/models.ts:316](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L316)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Defined in

[src/types/models.ts:318](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L318)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:314](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L314)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:317](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L317)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:320](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L320)
