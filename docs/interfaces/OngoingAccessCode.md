[seamapi](../README.md) / [Exports](../modules.md) / OngoingAccessCode

# Interface: OngoingAccessCode

## Hierarchy

- [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ **`OngoingAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](OngoingAccessCode.md#access_code_id)
- [appearance](OngoingAccessCode.md#appearance)
- [code](OngoingAccessCode.md#code)
- [common\_code\_key](OngoingAccessCode.md#common_code_key)
- [created\_at](OngoingAccessCode.md#created_at)
- [device\_id](OngoingAccessCode.md#device_id)
- [errors](OngoingAccessCode.md#errors)
- [is\_backup](OngoingAccessCode.md#is_backup)
- [is\_backup\_access\_code\_available](OngoingAccessCode.md#is_backup_access_code_available)
- [is\_external\_modification\_allowed](OngoingAccessCode.md#is_external_modification_allowed)
- [is\_waiting\_for\_code\_assignment](OngoingAccessCode.md#is_waiting_for_code_assignment)
- [name](OngoingAccessCode.md#name)
- [pulled\_backup\_access\_code\_id](OngoingAccessCode.md#pulled_backup_access_code_id)
- [status](OngoingAccessCode.md#status)
- [type](OngoingAccessCode.md#type)
- [warnings](OngoingAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[access_code_id](ManagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:459](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L459)

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

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[appearance](ManagedAccessCodeBase.md#appearance)

#### Defined in

[src/types/models.ts:468](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L468)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:462](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L462)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:476](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L476)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:482](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L482)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:460](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L460)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:466](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L466)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_backup](ManagedAccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:463](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L463)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_backup_access_code_available](ManagedAccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:465](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L465)

___

### is\_external\_modification\_allowed

• **is\_external\_modification\_allowed**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_external_modification_allowed](ManagedAccessCodeBase.md#is_external_modification_allowed)

#### Defined in

[src/types/models.ts:475](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L475)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:477](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L477)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:461](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L461)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[pulled_backup_access_code_id](ManagedAccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:464](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L464)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:483](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L483)

___

### type

• **type**: ``"ongoing"``

#### Defined in

[src/types/models.ts:481](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L481)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:467](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L467)
