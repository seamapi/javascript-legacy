[seamapi](../README.md) / [Exports](../modules.md) / BaseThermostatDeviceProperties

# Interface: BaseThermostatDeviceProperties

## Hierarchy

- [`CommonDeviceProperties`](../modules.md#commondeviceproperties)

  ↳ **`BaseThermostatDeviceProperties`**

## Table of contents

### Properties

- [active\_climate\_setting\_schedule](BaseThermostatDeviceProperties.md#active_climate_setting_schedule)
- [available\_hvac\_mode\_settings](BaseThermostatDeviceProperties.md#available_hvac_mode_settings)
- [battery](BaseThermostatDeviceProperties.md#battery)
- [can\_enable\_automatic\_cooling](BaseThermostatDeviceProperties.md#can_enable_automatic_cooling)
- [can\_enable\_automatic\_heating](BaseThermostatDeviceProperties.md#can_enable_automatic_heating)
- [current\_climate\_setting](BaseThermostatDeviceProperties.md#current_climate_setting)
- [default\_climate\_setting](BaseThermostatDeviceProperties.md#default_climate_setting)
- [fan\_mode\_setting](BaseThermostatDeviceProperties.md#fan_mode_setting)
- [image\_alt\_text](BaseThermostatDeviceProperties.md#image_alt_text)
- [image\_url](BaseThermostatDeviceProperties.md#image_url)
- [is\_climate\_setting\_schedule\_active](BaseThermostatDeviceProperties.md#is_climate_setting_schedule_active)
- [is\_cooling](BaseThermostatDeviceProperties.md#is_cooling)
- [is\_fan\_running](BaseThermostatDeviceProperties.md#is_fan_running)
- [is\_heating](BaseThermostatDeviceProperties.md#is_heating)
- [is\_temporary\_manual\_override\_active](BaseThermostatDeviceProperties.md#is_temporary_manual_override_active)
- [manufacturer](BaseThermostatDeviceProperties.md#manufacturer)
- [model](BaseThermostatDeviceProperties.md#model)
- [name](BaseThermostatDeviceProperties.md#name)
- [online](BaseThermostatDeviceProperties.md#online)
- [relative\_humidity](BaseThermostatDeviceProperties.md#relative_humidity)
- [temperature\_celsius](BaseThermostatDeviceProperties.md#temperature_celsius)
- [temperature\_fahrenheit](BaseThermostatDeviceProperties.md#temperature_fahrenheit)

## Properties

### active\_climate\_setting\_schedule

• `Optional` **active\_climate\_setting\_schedule**: [`ClimateSettingSchedule`](../modules.md#climatesettingschedule)

#### Defined in

[src/types/models.ts:119](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L119)

___

### available\_hvac\_mode\_settings

• **available\_hvac\_mode\_settings**: [`HvacModeSetting`](../modules.md#hvacmodesetting)[]

#### Defined in

[src/types/models.ts:110](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L110)

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

[src/types/models.ts:230](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L230)

___

### can\_enable\_automatic\_cooling

• **can\_enable\_automatic\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:109](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L109)

___

### can\_enable\_automatic\_heating

• **can\_enable\_automatic\_heating**: `boolean`

#### Defined in

[src/types/models.ts:108](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L108)

___

### current\_climate\_setting

• **current\_climate\_setting**: [`ClimateSetting`](../modules.md#climatesetting)

#### Defined in

[src/types/models.ts:116](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L116)

___

### default\_climate\_setting

• `Optional` **default\_climate\_setting**: [`ClimateSetting`](../modules.md#climatesetting)

#### Defined in

[src/types/models.ts:117](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L117)

___

### fan\_mode\_setting

• **fan\_mode\_setting**: [`FanModeSetting`](../modules.md#fanmodesetting)

#### Defined in

[src/types/models.ts:114](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L114)

___

### image\_alt\_text

• `Optional` **image\_alt\_text**: `string`

#### Inherited from

CommonDeviceProperties.image\_alt\_text

#### Defined in

[src/types/models.ts:235](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L235)

___

### image\_url

• `Optional` **image\_url**: `string`

#### Inherited from

CommonDeviceProperties.image\_url

#### Defined in

[src/types/models.ts:234](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L234)

___

### is\_climate\_setting\_schedule\_active

• **is\_climate\_setting\_schedule\_active**: `boolean`

#### Defined in

[src/types/models.ts:118](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L118)

___

### is\_cooling

• **is\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:112](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L112)

___

### is\_fan\_running

• **is\_fan\_running**: `boolean`

#### Defined in

[src/types/models.ts:113](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L113)

___

### is\_heating

• **is\_heating**: `boolean`

#### Defined in

[src/types/models.ts:111](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L111)

___

### is\_temporary\_manual\_override\_active

• **is\_temporary\_manual\_override\_active**: `boolean`

#### Defined in

[src/types/models.ts:115](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L115)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Inherited from

CommonDeviceProperties.manufacturer

#### Defined in

[src/types/models.ts:224](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L224)

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

[src/types/models.ts:225](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L225)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:223](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L223)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:229](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L229)

___

### relative\_humidity

• **relative\_humidity**: `number`

#### Defined in

[src/types/models.ts:107](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L107)

___

### temperature\_celsius

• **temperature\_celsius**: `number`

#### Defined in

[src/types/models.ts:106](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L106)

___

### temperature\_fahrenheit

• **temperature\_fahrenheit**: `number`

#### Defined in

[src/types/models.ts:105](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L105)
