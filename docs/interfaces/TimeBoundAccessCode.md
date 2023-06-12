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

[src/types/models.ts:274](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L274)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:277](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L277)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:283](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L283)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:295](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L295)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:275](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L275)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:298](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L298)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:278](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L278)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:284](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L284)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:276](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L276)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:297](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L297)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:296](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L296)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:294](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L294)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:279](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L279)
