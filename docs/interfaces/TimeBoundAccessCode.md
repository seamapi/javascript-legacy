[seamapi](../README.md) / [Exports](../modules.md) / TimeBoundAccessCode

# Interface: TimeBoundAccessCode

## Hierarchy

- [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ **`TimeBoundAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](TimeBoundAccessCode.md#access_code_id)
- [code](TimeBoundAccessCode.md#code)
- [common\_code\_key](TimeBoundAccessCode.md#common_code_key)
- [created\_at](TimeBoundAccessCode.md#created_at)
- [device\_id](TimeBoundAccessCode.md#device_id)
- [ends\_at](TimeBoundAccessCode.md#ends_at)
- [errors](TimeBoundAccessCode.md#errors)
- [is\_waiting\_for\_code\_assignment](TimeBoundAccessCode.md#is_waiting_for_code_assignment)
- [name](TimeBoundAccessCode.md#name)
- [starts\_at](TimeBoundAccessCode.md#starts_at)
- [status](TimeBoundAccessCode.md#status)
- [type](TimeBoundAccessCode.md#type)
- [warnings](TimeBoundAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[access_code_id](ManagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:198](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L198)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:201](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L201)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:207](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L207)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:219](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L219)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:199](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L199)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:222](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L222)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:202](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L202)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:208](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L208)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:200](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L200)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:221](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L221)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:220](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L220)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:218](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L218)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:203](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L203)
