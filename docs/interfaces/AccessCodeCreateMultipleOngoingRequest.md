[seamapi](../README.md) / [Exports](../modules.md) / AccessCodeCreateMultipleOngoingRequest

# Interface: AccessCodeCreateMultipleOngoingRequest

## Hierarchy

- [`AccessCodeCreateMultipleBaseRequest`](../modules.md#accesscodecreatemultiplebaserequest)

  ↳ **`AccessCodeCreateMultipleOngoingRequest`**

## Table of contents

### Properties

- [behavior\_when\_code\_cannot\_be\_shared](AccessCodeCreateMultipleOngoingRequest.md#behavior_when_code_cannot_be_shared)
- [device\_ids](AccessCodeCreateMultipleOngoingRequest.md#device_ids)
- [name](AccessCodeCreateMultipleOngoingRequest.md#name)

## Properties

### behavior\_when\_code\_cannot\_be\_shared

• `Optional` **behavior\_when\_code\_cannot\_be\_shared**: ``"throw"`` \| ``"create_random_code"``

#### Inherited from

AccessCodeCreateMultipleBaseRequest.behavior\_when\_code\_cannot\_be\_shared

#### Defined in

[src/types/route-requests.ts:63](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L63)

___

### device\_ids

• **device\_ids**: `string`[]

#### Inherited from

AccessCodeCreateMultipleBaseRequest.device\_ids

#### Defined in

[src/types/route-requests.ts:61](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L61)

___

### name

• `Optional` **name**: `string`

#### Inherited from

AccessCodeCreateMultipleBaseRequest.name

#### Defined in

[src/types/route-requests.ts:62](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L62)
