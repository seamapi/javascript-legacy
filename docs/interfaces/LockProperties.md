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
- [code\_constraints](LockProperties.md#code_constraints)
- [door\_open](LockProperties.md#door_open)
- [has\_direct\_power](LockProperties.md#has_direct_power)
- [image\_alt\_text](LockProperties.md#image_alt_text)
- [image\_url](LockProperties.md#image_url)
- [keypad\_battery](LockProperties.md#keypad_battery)
- [locked](LockProperties.md#locked)
- [manufacturer](LockProperties.md#manufacturer)
- [max\_active\_codes\_supported](LockProperties.md#max_active_codes_supported)
- [model](LockProperties.md#model)
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

[src/types/models.ts:329](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L329)

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

[src/types/models.ts:229](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L229)

___

### battery\_level

• `Optional` **battery\_level**: `number`

#### Defined in

[src/types/models.ts:311](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L311)

___

### code\_constraints

• `Optional` **code\_constraints**: [`AccessCodeConstraint`](../modules.md#accesscodeconstraint)[]

#### Defined in

[src/types/models.ts:318](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L318)

___

### door\_open

• `Optional` **door\_open**: `boolean`

#### Defined in

[src/types/models.ts:310](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L310)

___

### has\_direct\_power

• `Optional` **has\_direct\_power**: `boolean`

#### Defined in

[src/types/models.ts:315](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L315)

___

### image\_alt\_text

• `Optional` **image\_alt\_text**: `string`

#### Inherited from

CommonDeviceProperties.image\_alt\_text

#### Defined in

[src/types/models.ts:234](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L234)

___

### image\_url

• `Optional` **image\_url**: `string`

#### Inherited from

CommonDeviceProperties.image\_url

#### Defined in

[src/types/models.ts:233](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L233)

___

### keypad\_battery

• `Optional` **keypad\_battery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Defined in

[src/types/models.ts:312](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L312)

___

### locked

• **locked**: `boolean`

#### Defined in

[src/types/models.ts:309](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L309)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Inherited from

CommonDeviceProperties.manufacturer

#### Defined in

[src/types/models.ts:223](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L223)

___

### max\_active\_codes\_supported

• `Optional` **max\_active\_codes\_supported**: `number`

#### Defined in

[src/types/models.ts:317](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L317)

___

### model

• **model**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display_name` | `string` |
| `manufacturer_display_name` | `string` |

#### Inherited from

CommonDeviceProperties.model

#### Defined in

[src/types/models.ts:224](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L224)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:222](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L222)

___

### nuki\_metadata

• `Optional` **nuki\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keypad_battery_critical?` | `boolean` |

#### Defined in

[src/types/models.ts:339](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L339)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:228](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L228)

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

[src/types/models.ts:321](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L321)

___

### serial\_number

• `Optional` **serial\_number**: `string`

#### Defined in

[src/types/models.ts:319](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L319)

___

### smartthings\_metadata

• `Optional` **smartthings\_metadata**: `unknown`

#### Defined in

[src/types/models.ts:343](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L343)

___

### supported\_code\_lengths

• `Optional` **supported\_code\_lengths**: `number`[]

#### Defined in

[src/types/models.ts:316](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L316)

___

### ttlock\_metadata

• `Optional` **ttlock\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lock_alias` | `string` |
| `lock_id` | `number` |

#### Defined in

[src/types/models.ts:345](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L345)
