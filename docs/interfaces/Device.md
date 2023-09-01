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

[src/types/models.ts:198](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L198)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:197](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L197)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:201](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L201)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:192](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L192)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:196](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L196)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:199](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L199)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:202](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L202)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:195](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L195)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:194](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L194)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:200](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L200)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:193](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L193)
