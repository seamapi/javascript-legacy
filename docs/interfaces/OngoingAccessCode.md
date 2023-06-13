[seamapi](../README.md) / [Exports](../modules.md) / OngoingAccessCode

# Interface: OngoingAccessCode

## Hierarchy

- [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ **`OngoingAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](OngoingAccessCode.md#access_code_id)
- [code](OngoingAccessCode.md#code)
- [common\_code\_key](OngoingAccessCode.md#common_code_key)
- [created\_at](OngoingAccessCode.md#created_at)
- [device\_id](OngoingAccessCode.md#device_id)
- [errors](OngoingAccessCode.md#errors)
- [is\_waiting\_for\_code\_assignment](OngoingAccessCode.md#is_waiting_for_code_assignment)
- [name](OngoingAccessCode.md#name)
- [status](OngoingAccessCode.md#status)
- [type](OngoingAccessCode.md#type)
- [warnings](OngoingAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[access_code_id](ManagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:291](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L291)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:294](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L294)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:300](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L300)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:306](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L306)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:292](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L292)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:295](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L295)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:301](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L301)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:293](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L293)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:307](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L307)

___

### type

• **type**: ``"ongoing"``

#### Defined in

[src/types/models.ts:305](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L305)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:296](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L296)
