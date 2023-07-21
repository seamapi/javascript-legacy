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

[src/types/models.ts:127](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L127)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:126](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L126)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:130](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L130)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:121](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L121)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:125](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L125)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:128](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L128)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:131](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L131)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:124](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L124)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:123](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L123)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:129](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L129)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:122](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L122)
