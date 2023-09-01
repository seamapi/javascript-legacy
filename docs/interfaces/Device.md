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

[src/types/models.ts:160](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L160)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:159](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L159)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:163](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L163)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:154](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L154)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:158](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L158)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:161](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L161)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:164](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L164)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:157](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L157)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:156](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L156)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:162](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L162)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:155](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L155)
