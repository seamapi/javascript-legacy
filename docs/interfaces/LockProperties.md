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

#### Defined in

[src/types/models.ts:71](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L71)

___

### battery\_level

• `Optional` **battery\_level**: `number`

#### Defined in

[src/types/models.ts:61](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L61)

___

### door\_open

• `Optional` **door\_open**: `boolean`

#### Defined in

[src/types/models.ts:60](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L60)

___

### has\_direct\_power

• `Optional` **has\_direct\_power**: `boolean`

#### Defined in

[src/types/models.ts:62](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L62)

___

### locked

• **locked**: `boolean`

#### Defined in

[src/types/models.ts:59](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L59)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Defined in

[src/types/models.ts:63](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L63)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:39](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L39)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:40](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L40)

___

### schlage\_metadata

• `Optional` **schlage\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_length` | `number` |
| `device_id` | `string` |
| `device_name` | `string` |

#### Defined in

[src/types/models.ts:65](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L65)

___

### smartthings\_metadata

• `Optional` **smartthings\_metadata**: `unknown`

#### Defined in

[src/types/models.ts:78](https://github.com/hello-seam/seamapi-javascript/blob/main/src/types/models.ts#L78)
