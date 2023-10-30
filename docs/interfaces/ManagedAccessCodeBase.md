[seamapi](../README.md) / [Exports](../modules.md) / ManagedAccessCodeBase

# Interface: ManagedAccessCodeBase

## Hierarchy

- [`AccessCodeBase`](AccessCodeBase.md)

  ↳ **`ManagedAccessCodeBase`**

  ↳↳ [`OngoingAccessCode`](OngoingAccessCode.md)

  ↳↳ [`TimeBoundAccessCode`](TimeBoundAccessCode.md)

## Table of contents

### Properties

- [access\_code\_id](ManagedAccessCodeBase.md#access_code_id)
- [appearance](ManagedAccessCodeBase.md#appearance)
- [code](ManagedAccessCodeBase.md#code)
- [common\_code\_key](ManagedAccessCodeBase.md#common_code_key)
- [device\_id](ManagedAccessCodeBase.md#device_id)
- [errors](ManagedAccessCodeBase.md#errors)
- [is\_backup](ManagedAccessCodeBase.md#is_backup)
- [is\_backup\_access\_code\_available](ManagedAccessCodeBase.md#is_backup_access_code_available)
- [is\_external\_modification\_allowed](ManagedAccessCodeBase.md#is_external_modification_allowed)
- [is\_waiting\_for\_code\_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)
- [name](ManagedAccessCodeBase.md#name)
- [pulled\_backup\_access\_code\_id](ManagedAccessCodeBase.md#pulled_backup_access_code_id)
- [warnings](ManagedAccessCodeBase.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[access_code_id](AccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:418](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L418)

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

[src/types/models.ts:427](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L427)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:421](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L421)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:435](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L435)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:419](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L419)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:425](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L425)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_backup](AccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:422](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L422)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[is_backup_access_code_available](AccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:424](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L424)

___

### is\_external\_modification\_allowed

• **is\_external\_modification\_allowed**: `boolean`

#### Defined in

[src/types/models.ts:434](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L434)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Defined in

[src/types/models.ts:436](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L436)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:420](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L420)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[pulled_backup_access_code_id](AccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:423](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L423)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:426](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L426)
