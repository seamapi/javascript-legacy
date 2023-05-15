[seamapi](../README.md) / [Exports](../modules.md) / LockProperties

# Interface: LockProperties

## Hierarchy

- [`CommonDeviceProperties`](../modules.md#commondeviceproperties)

  ↳ **`LockProperties`**

## Table of contents

### Properties

- [august\_metadata](LockProperties.md#august_metadata)
- [battery](LockProperties.md#battery)
- [battery\_level](LockProperties.md#battery_level)
- [door\_open](LockProperties.md#door_open)
- [has\_direct\_power](LockProperties.md#has_direct_power)
- [image\_url](LockProperties.md#image_url)
- [locked](LockProperties.md#locked)
- [manufacturer](LockProperties.md#manufacturer)
- [max\_active\_codes\_supported](LockProperties.md#max_active_codes_supported)
- [name](LockProperties.md#name)
- [nuki\_metadata](LockProperties.md#nuki_metadata)
- [online](LockProperties.md#online)
- [schlage\_metadata](LockProperties.md#schlage_metadata)
- [serial\_number](LockProperties.md#serial_number)
- [smartthings\_metadata](LockProperties.md#smartthings_metadata)
- [supported\_code\_lengths](LockProperties.md#supported_code_lengths)
- [ttlock\_metadata](LockProperties.md#ttlock_metadata)

## Properties

### august\_metadata

• `Optional` **august\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `has_keypad` | `boolean` |
| `house_id?` | `string` |
| `house_name` | `string` |
| `keypad_battery_level?` | `string` |
| `lock_id` | `string` |
| `lock_name` | `string` |
| `model?` | `string` |

#### Defined in

[src/types/models.ts:141](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L141)

___

### battery

• `Optional` **battery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `status` | [`BatteryStatus`](../modules.md#batterystatus) |

#### Inherited from

CommonDeviceProperties.battery

#### Defined in

[src/types/models.ts:77](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L77)

___

### battery\_level

• `Optional` **battery\_level**: `number`

#### Defined in

[src/types/models.ts:126](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L126)

___

### door\_open

• `Optional` **door\_open**: `boolean`

#### Defined in

[src/types/models.ts:125](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L125)

___

### has\_direct\_power

• `Optional` **has\_direct\_power**: `boolean`

#### Defined in

[src/types/models.ts:127](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L127)

___

### image\_url

• `Optional` **image\_url**: `string`

#### Inherited from

CommonDeviceProperties.image\_url

#### Defined in

[src/types/models.ts:81](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L81)

___

### locked

• **locked**: `boolean`

#### Defined in

[src/types/models.ts:124](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L124)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Defined in

[src/types/models.ts:128](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L128)

___

### max\_active\_codes\_supported

• `Optional` **max\_active\_codes\_supported**: `number`

#### Defined in

[src/types/models.ts:130](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L130)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:75](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L75)

___

### nuki\_metadata

• `Optional` **nuki\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keypad_battery_critical?` | `boolean` |

#### Defined in

[src/types/models.ts:151](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L151)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:76](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L76)

___

### schlage\_metadata

• `Optional` **schlage\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_length` | `number` |
| `device_id` | `string` |
| `device_name` | `string` |
| `location_id?` | `string` |
| `model?` | `string` |

#### Defined in

[src/types/models.ts:133](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L133)

___

### serial\_number

• `Optional` **serial\_number**: `string`

#### Defined in

[src/types/models.ts:131](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L131)

___

### smartthings\_metadata

• `Optional` **smartthings\_metadata**: `unknown`

#### Defined in

[src/types/models.ts:155](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L155)

___

### supported\_code\_lengths

• `Optional` **supported\_code\_lengths**: `number`[]

#### Defined in

[src/types/models.ts:129](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L129)

___

### ttlock\_metadata

• `Optional` **ttlock\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lock_alias` | `string` |
| `lock_id` | `number` |

#### Defined in

[src/types/models.ts:157](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L157)
