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

[src/types/models.ts:458](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L458)

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

[src/types/models.ts:467](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L467)

___

### code

• **code**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:461](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L461)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:459](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L459)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Defined in

[src/types/models.ts:465](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L465)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Defined in

[src/types/models.ts:462](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L462)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Defined in

[src/types/models.ts:464](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L464)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/models.ts:460](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L460)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:463](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L463)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:466](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L466)
