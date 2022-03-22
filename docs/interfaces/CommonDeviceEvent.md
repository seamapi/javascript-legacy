[seamapi](../README.md) / [Exports](../modules.md) / CommonDeviceEvent

# Interface: CommonDeviceEvent<EventType, Payload\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventType` | extends `string` |
| `Payload` | extends `Record`<`string`, `unknown`\> \| {} = {} |

## Table of contents

### Properties

- [data](CommonDeviceEvent.md#data)
- [event\_type](CommonDeviceEvent.md#event_type)

## Properties

### data

• **data**: `Payload` & { `device_id`: `string` ; `workspace_id`: `string`  }

#### Defined in

[src/types/webhook-events.ts:7](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L7)

___

### event\_type

• **event\_type**: `EventType`

#### Defined in

[src/types/webhook-events.ts:6](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/webhook-events.ts#L6)
