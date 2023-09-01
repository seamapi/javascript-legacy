[seamapi](../README.md) / [Exports](../modules.md) / Device

# Interface: Device<Properties, Type\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Properties` | extends [`CommonDeviceProperties`](../modules.md#commondeviceproperties) |
| `Type` | [`DeviceType`](../modules.md#devicetype) |

## Table of contents

### Properties

- [capabilities\_supported](Device.md#capabilities_supported)
- [connected\_account\_id](Device.md#connected_account_id)
- [created\_at](Device.md#created_at)
- [device\_id](Device.md#device_id)
- [device\_type](Device.md#device_type)
- [errors](Device.md#errors)
- [is\_managed](Device.md#is_managed)
- [location](Device.md#location)
- [properties](Device.md#properties)
- [warnings](Device.md#warnings)
- [workspace\_id](Device.md#workspace_id)

## Properties

### capabilities\_supported

• **capabilities\_supported**: `unknown`[]

#### Defined in

[src/types/models.ts:186](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L186)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:185](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L185)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:189](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L189)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:180](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L180)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:184](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L184)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:187](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L187)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:190](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L190)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:183](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L183)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:182](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L182)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:188](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L188)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:181](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L181)
