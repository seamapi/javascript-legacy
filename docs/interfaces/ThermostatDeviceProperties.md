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

• **available\_hvac\_mode\_settings**: [`HvacModeSetting`](../modules.md#hvacmodesetting)[]

#### Defined in

[src/types/models.ts:65](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L65)

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

[src/types/models.ts:125](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L125)

___

### can\_enable\_automatic\_cooling

• **can\_enable\_automatic\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:66](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L66)

___

### can\_enable\_automatic\_heating

• **can\_enable\_automatic\_heating**: `boolean`

#### Defined in

[src/types/models.ts:67](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L67)

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
| `hvac_mode_setting` | [`HvacModeSetting`](../modules.md#hvacmodesetting) |
| `manual_override_allowed` | `boolean` |

#### Defined in

[src/types/models.ts:57](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L57)

___

### has\_direct\_power

• **has\_direct\_power**: `boolean`

#### Defined in

[src/types/models.ts:53](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L53)

___

### image\_alt\_text

• `Optional` **image\_alt\_text**: `string`

#### Inherited from

CommonDeviceProperties.image\_alt\_text

#### Defined in

[src/types/models.ts:130](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L130)

___

### image\_url

• `Optional` **image\_url**: `string`

#### Inherited from

CommonDeviceProperties.image\_url

#### Defined in

[src/types/models.ts:129](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L129)

___

### is\_cooling

• **is\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:50](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L50)

___

### is\_fan\_running

• **is\_fan\_running**: `boolean`

#### Defined in

[src/types/models.ts:52](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L52)

___

### is\_heating

• **is\_heating**: `boolean`

#### Defined in

[src/types/models.ts:51](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L51)

___

### is\_temporary\_manual\_override\_active

• **is\_temporary\_manual\_override\_active**: `boolean`

#### Defined in

[src/types/models.ts:68](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L68)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Inherited from

CommonDeviceProperties.manufacturer

#### Defined in

[src/types/models.ts:119](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L119)

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

[src/types/models.ts:120](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L120)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:118](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L118)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:124](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L124)

___

### relative\_humidity

• **relative\_humidity**: `number`

#### Defined in

[src/types/models.ts:54](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L54)

___

### temperature\_celsius

• **temperature\_celsius**: `number`

#### Defined in

[src/types/models.ts:55](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L55)

___

### temperature\_fahrenheit

• **temperature\_fahrenheit**: `number`

#### Defined in

[src/types/models.ts:56](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L56)
