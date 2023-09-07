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

[src/types/models.ts:74](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L74)

___

### available\_hvac\_mode\_settings

• **available\_hvac\_mode\_settings**: [`HvacModeSetting`](../modules.md#hvacmodesetting)[]

#### Defined in

[src/types/models.ts:66](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L66)

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

[src/types/models.ts:172](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L172)

___

### can\_enable\_automatic\_cooling

• **can\_enable\_automatic\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:65](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L65)

___

### can\_enable\_automatic\_heating

• **can\_enable\_automatic\_heating**: `boolean`

#### Defined in

[src/types/models.ts:64](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L64)

___

### current\_climate\_setting

• **current\_climate\_setting**: [`ClimateSetting`](../modules.md#climatesetting)

#### Defined in

[src/types/models.ts:71](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L71)

___

### default\_climate\_setting

• `Optional` **default\_climate\_setting**: [`ClimateSetting`](../modules.md#climatesetting)

#### Defined in

[src/types/models.ts:72](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L72)

___

### image\_alt\_text

• `Optional` **image\_alt\_text**: `string`

#### Inherited from

CommonDeviceProperties.image\_alt\_text

#### Defined in

[src/types/models.ts:177](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L177)

___

### image\_url

• `Optional` **image\_url**: `string`

#### Inherited from

CommonDeviceProperties.image\_url

#### Defined in

[src/types/models.ts:176](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L176)

___

### is\_climate\_setting\_schedule\_active

• **is\_climate\_setting\_schedule\_active**: `boolean`

#### Defined in

[src/types/models.ts:73](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L73)

___

### is\_cooling

• **is\_cooling**: `boolean`

#### Defined in

[src/types/models.ts:68](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L68)

___

### is\_fan\_running

• **is\_fan\_running**: `boolean`

#### Defined in

[src/types/models.ts:69](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L69)

___

### is\_heating

• **is\_heating**: `boolean`

#### Defined in

[src/types/models.ts:67](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L67)

___

### is\_temporary\_manual\_override\_active

• **is\_temporary\_manual\_override\_active**: `boolean`

#### Defined in

[src/types/models.ts:70](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L70)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Inherited from

CommonDeviceProperties.manufacturer

#### Defined in

[src/types/models.ts:166](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L166)

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

[src/types/models.ts:167](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L167)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:165](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L165)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:171](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L171)

___

### relative\_humidity

• **relative\_humidity**: `number`

#### Defined in

[src/types/models.ts:63](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L63)

___

### temperature\_celsius

• **temperature\_celsius**: `number`

#### Defined in

[src/types/models.ts:62](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L62)

___

### temperature\_fahrenheit

• **temperature\_fahrenheit**: `number`

#### Defined in

[src/types/models.ts:61](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L61)
