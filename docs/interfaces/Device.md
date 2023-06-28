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

[src/types/models.ts:121](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L121)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:120](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L120)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:124](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L124)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:115](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L115)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:119](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L119)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:122](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L122)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:125](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L125)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:118](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L118)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:117](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L117)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:123](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L123)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:116](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L116)
