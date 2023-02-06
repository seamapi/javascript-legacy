[seamapi](../README.md) / [Exports](../modules.md) / LockProperties

# Interface: LockProperties

## Hierarchy

- [`CommonDeviceProperties`](../modules.md#commondeviceproperties)

  ↳ **`LockProperties`**

## Table of contents

### Properties

- [august\_metadata](LockProperties.md#august_metadata)
- [battery\_level](LockProperties.md#battery_level)
- [door\_open](LockProperties.md#door_open)
- [has\_direct\_power](LockProperties.md#has_direct_power)
- [locked](LockProperties.md#locked)
- [manufacturer](LockProperties.md#manufacturer)
- [name](LockProperties.md#name)
- [online](LockProperties.md#online)
- [schlage\_metadata](LockProperties.md#schlage_metadata)
- [smartthings\_metadata](LockProperties.md#smartthings_metadata)
- [supported\_code\_lengths](LockProperties.md#supported_code_lengths)

## Properties

### august\_metadata

• `Optional` **august\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `has_keypad` | `boolean` |
| `house_name` | `string` |
| `lock_id` | `string` |
| `lock_name` | `string` |
| `model?` | `string` |

#### Defined in

[src/types/models.ts:96](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L96)

___

### battery\_level

• `Optional` **battery\_level**: `number`

#### Defined in

[src/types/models.ts:84](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L84)

___

### door\_open

• `Optional` **door\_open**: `boolean`

#### Defined in

[src/types/models.ts:83](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L83)

___

### has\_direct\_power

• `Optional` **has\_direct\_power**: `boolean`

#### Defined in

[src/types/models.ts:85](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L85)

___

### locked

• **locked**: `boolean`

#### Defined in

[src/types/models.ts:82](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L82)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Defined in

[src/types/models.ts:86](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L86)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:62](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L62)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:63](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L63)

___

### schlage\_metadata

• `Optional` **schlage\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_length` | `number` |
| `device_id` | `string` |
| `device_name` | `string` |
| `model?` | `string` |

#### Defined in

[src/types/models.ts:89](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L89)

___

### smartthings\_metadata

• `Optional` **smartthings\_metadata**: `unknown`

#### Defined in

[src/types/models.ts:104](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L104)

___

### supported\_code\_lengths

• `Optional` **supported\_code\_lengths**: `number`[]

#### Defined in

[src/types/models.ts:87](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L87)
