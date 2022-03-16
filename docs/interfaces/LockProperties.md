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
- [locked](LockProperties.md#locked)
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
| `house_name` | `string` |
| `lock_id` | `string` |
| `lock_name` | `string` |

#### Defined in

[src/types/models.ts:52](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L52)

___

### battery\_level

• `Optional` **battery\_level**: `number`

#### Defined in

[src/types/models.ts:45](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L45)

___

### door\_open

• `Optional` **door\_open**: `boolean`

#### Defined in

[src/types/models.ts:44](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L44)

___

### locked

• **locked**: `boolean`

#### Defined in

[src/types/models.ts:43](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L43)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:25](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L25)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:26](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L26)

___

### schlage\_metadata

• `Optional` **schlage\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `device_name` | `string` |

#### Defined in

[src/types/models.ts:47](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L47)

___

### smartthings\_metadata

• `Optional` **smartthings\_metadata**: `unknown`

#### Defined in

[src/types/models.ts:58](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L58)
