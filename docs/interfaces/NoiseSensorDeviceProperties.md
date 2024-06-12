[seamapi](../README.md) / [Exports](../modules.md) / NoiseSensorDeviceProperties

# Interface: NoiseSensorDeviceProperties

## Hierarchy

- [`CommonDeviceProperties`](../modules.md#commondeviceproperties)

  ↳ **`NoiseSensorDeviceProperties`**

## Table of contents

### Properties

- [battery](NoiseSensorDeviceProperties.md#battery)
- [currently\_triggering\_noise\_threshold\_ids](NoiseSensorDeviceProperties.md#currently_triggering_noise_threshold_ids)
- [image\_alt\_text](NoiseSensorDeviceProperties.md#image_alt_text)
- [image\_url](NoiseSensorDeviceProperties.md#image_url)
- [manufacturer](NoiseSensorDeviceProperties.md#manufacturer)
- [minut\_metadata](NoiseSensorDeviceProperties.md#minut_metadata)
- [model](NoiseSensorDeviceProperties.md#model)
- [name](NoiseSensorDeviceProperties.md#name)
- [noise\_level\_decibels](NoiseSensorDeviceProperties.md#noise_level_decibels)
- [noiseaware\_metadata](NoiseSensorDeviceProperties.md#noiseaware_metadata)
- [online](NoiseSensorDeviceProperties.md#online)

## Properties

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

[src/types/models.ts:230](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L230)

___

### currently\_triggering\_noise\_threshold\_ids

• `Optional` **currently\_triggering\_noise\_threshold\_ids**: `string`[]

#### Defined in

[src/types/models.ts:48](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L48)

___

### image\_alt\_text

• `Optional` **image\_alt\_text**: `string`

#### Inherited from

CommonDeviceProperties.image\_alt\_text

#### Defined in

[src/types/models.ts:235](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L235)

___

### image\_url

• `Optional` **image\_url**: `string`

#### Inherited from

CommonDeviceProperties.image\_url

#### Defined in

[src/types/models.ts:234](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L234)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Inherited from

CommonDeviceProperties.manufacturer

#### Defined in

[src/types/models.ts:224](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L224)

___

### minut\_metadata

• `Optional` **minut\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `device_name` | `string` |
| `latest_sensor_values` | `Object` |
| `latest_sensor_values.accelerometer_z` | `Object` |
| `latest_sensor_values.accelerometer_z.time` | `string` |
| `latest_sensor_values.accelerometer_z.value` | `number` |
| `latest_sensor_values.humidity` | `Object` |
| `latest_sensor_values.humidity.time` | `string` |
| `latest_sensor_values.humidity.value` | `number` |
| `latest_sensor_values.pressure` | `Object` |
| `latest_sensor_values.pressure.time` | `string` |
| `latest_sensor_values.pressure.value` | `number` |
| `latest_sensor_values.sound` | `Object` |
| `latest_sensor_values.sound.time` | `string` |
| `latest_sensor_values.sound.value` | `number` |
| `latest_sensor_values.temperature` | `Object` |
| `latest_sensor_values.temperature.time` | `string` |
| `latest_sensor_values.temperature.value` | `number` |

#### Defined in

[src/types/models.ts:56](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L56)

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

[src/types/models.ts:225](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L225)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:223](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L223)

___

### noise\_level\_decibels

• `Optional` **noise\_level\_decibels**: `number`

#### Defined in

[src/types/models.ts:47](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L47)

___

### noiseaware\_metadata

• `Optional` **noiseaware\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `device_model` | ``"indoor"`` \| ``"outdoor"`` |
| `device_name` | `string` |
| `noise_level_decibel` | `number` |
| `noise_level_nrs` | `number` |

#### Defined in

[src/types/models.ts:49](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L49)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:229](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L229)
