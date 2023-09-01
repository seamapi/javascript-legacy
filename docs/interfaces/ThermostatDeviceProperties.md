[seamapi](../README.md) / [Exports](../modules.md) / ThermostatDeviceProperties

# Interface: ThermostatDeviceProperties

## Hierarchy

- [`CommonDeviceProperties`](../modules.md#commondeviceproperties)

  ↳ **`ThermostatDeviceProperties`**

## Table of contents

### Properties

- [available\_hvac\_mode\_settings](ThermostatDeviceProperties.md#available_hvac_mode_settings)
- [battery](ThermostatDeviceProperties.md#battery)
- [can\_enable\_automatic\_cooling](ThermostatDeviceProperties.md#can_enable_automatic_cooling)
- [can\_enable\_automatic\_heating](ThermostatDeviceProperties.md#can_enable_automatic_heating)
- [current\_climate\_setting](ThermostatDeviceProperties.md#current_climate_setting)
- [has\_direct\_power](ThermostatDeviceProperties.md#has_direct_power)
- [image\_alt\_text](ThermostatDeviceProperties.md#image_alt_text)
- [image\_url](ThermostatDeviceProperties.md#image_url)
- [is\_cooling](ThermostatDeviceProperties.md#is_cooling)
- [is\_fan\_running](ThermostatDeviceProperties.md#is_fan_running)
- [is\_heating](ThermostatDeviceProperties.md#is_heating)
- [is\_temporary\_manual\_override\_active](ThermostatDeviceProperties.md#is_temporary_manual_override_active)
- [manufacturer](ThermostatDeviceProperties.md#manufacturer)
- [model](ThermostatDeviceProperties.md#model)
- [name](ThermostatDeviceProperties.md#name)
- [online](ThermostatDeviceProperties.md#online)
- [relative\_humidity](ThermostatDeviceProperties.md#relative_humidity)
- [temperature\_celsius](ThermostatDeviceProperties.md#temperature_celsius)
- [temperature\_fahrenheit](ThermostatDeviceProperties.md#temperature_fahrenheit)

## Properties

### available\_hvac\_mode\_settings

• **available\_hvac\_mode\_settings**: [``"off"``, ``"cool"``, ``"heat"``, ``"heat_cool"``]

#### Defined in

[src/types/models.ts:63](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L63)

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

[src/types/models.ts:123](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L123)

___

### can\_enable\_automatic\_cooling

• **can\_enable\_automatic\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:64](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L64)

___

### can\_enable\_automatic\_heating

• **can\_enable\_automatic\_heating**: `boolean`

#### Defined in

[src/types/models.ts:65](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L65)

___

### current\_climate\_setting

• **current\_climate\_setting**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `automatic_cooling_enabled` | `boolean` |
| `automatic_heating_enabled` | `boolean` |
| `cooling_set_point_celsius` | `number` |
| `cooling_set_point_fahrenheit` | `number` |
| `hvac_mode_setting` | ``"off"`` \| ``"heat"`` \| ``"cool"`` \| ``"heat_cool"`` |
| `manual_override_allowed` | `boolean` |

#### Defined in

[src/types/models.ts:55](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L55)

___

### has\_direct\_power

• **has\_direct\_power**: `boolean`

#### Defined in

[src/types/models.ts:51](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L51)

___

### image\_alt\_text

• `Optional` **image\_alt\_text**: `string`

#### Inherited from

CommonDeviceProperties.image\_alt\_text

#### Defined in

[src/types/models.ts:128](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L128)

___

### image\_url

• `Optional` **image\_url**: `string`

#### Inherited from

CommonDeviceProperties.image\_url

#### Defined in

[src/types/models.ts:127](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L127)

___

### is\_cooling

• **is\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:48](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L48)

___

### is\_fan\_running

• **is\_fan\_running**: `boolean`

#### Defined in

[src/types/models.ts:50](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L50)

___

### is\_heating

• **is\_heating**: `boolean`

#### Defined in

[src/types/models.ts:49](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L49)

___

### is\_temporary\_manual\_override\_active

• **is\_temporary\_manual\_override\_active**: `boolean`

#### Defined in

[src/types/models.ts:66](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L66)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Inherited from

CommonDeviceProperties.manufacturer

#### Defined in

[src/types/models.ts:117](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L117)

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

[src/types/models.ts:118](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L118)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:116](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L116)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:122](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L122)

___

### relative\_humidity

• **relative\_humidity**: `number`

#### Defined in

[src/types/models.ts:52](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L52)

___

### temperature\_celsius

• **temperature\_celsius**: `number`

#### Defined in

[src/types/models.ts:53](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L53)

___

### temperature\_fahrenheit

• **temperature\_fahrenheit**: `number`

#### Defined in

[src/types/models.ts:54](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L54)
