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

[src/types/models.ts:257](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L257)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:256](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L256)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:260](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L260)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:251](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L251)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:255](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L255)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:258](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L258)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:261](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L261)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:254](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L254)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:253](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L253)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:259](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L259)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:252](https://github.com/seamapi/javascript-legacy/blob/main/src/types/models.ts#L252)
