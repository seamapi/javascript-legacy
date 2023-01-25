[seamapi](../README.md) / [Exports](../modules.md) / AccessCodeCreateMultipleScheduledRequest

# Interface: AccessCodeCreateMultipleScheduledRequest

## Hierarchy

- [`AccessCodeCreateMultipleBaseRequest`](../modules.md#accesscodecreatemultiplebaserequest)

  ↳ **`AccessCodeCreateMultipleScheduledRequest`**

## Table of contents

### Properties

- [behavior\_when\_code\_cannot\_be\_shared](AccessCodeCreateMultipleScheduledRequest.md#behavior_when_code_cannot_be_shared)
- [device\_ids](AccessCodeCreateMultipleScheduledRequest.md#device_ids)
- [ends\_at](AccessCodeCreateMultipleScheduledRequest.md#ends_at)
- [name](AccessCodeCreateMultipleScheduledRequest.md#name)
- [starts\_at](AccessCodeCreateMultipleScheduledRequest.md#starts_at)

## Properties

### behavior\_when\_code\_cannot\_be\_shared

• `Optional` **behavior\_when\_code\_cannot\_be\_shared**: ``"throw"`` \| ``"create_random_code"``

#### Inherited from

AccessCodeCreateMultipleBaseRequest.behavior\_when\_code\_cannot\_be\_shared

#### Defined in

[src/types/route-requests.ts:56](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L56)

___

### device\_ids

• **device\_ids**: `string`[]

#### Inherited from

AccessCodeCreateMultipleBaseRequest.device\_ids

#### Defined in

[src/types/route-requests.ts:54](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L54)

___

### ends\_at

• `Optional` **ends\_at**: `string` \| `Date`

#### Defined in

[src/types/route-requests.ts:65](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L65)

___

### name

• `Optional` **name**: `string`

#### Inherited from

AccessCodeCreateMultipleBaseRequest.name

#### Defined in

[src/types/route-requests.ts:55](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L55)

___

### starts\_at

• **starts\_at**: `string` \| `Date`

#### Defined in

[src/types/route-requests.ts:64](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L64)
