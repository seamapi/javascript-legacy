[seamapi](../README.md) / [Exports](../modules.md) / SeamWebhook

# Class: SeamWebhook

Parse and verify webhook payloads.

## Table of contents

### Constructors

- [constructor](SeamWebhook.md#constructor)

### Properties

- [wh](SeamWebhook.md#wh)

### Methods

- [verify](SeamWebhook.md#verify)

## Constructors

### constructor

• **new SeamWebhook**(`secret`)

Create a new instance of SeamWebhook.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secret` | `string` | your webhook secret from the dashboard |

#### Defined in

[src/webhooks.ts:14](https://github.com/seamapi/javascript-legacy/blob/main/src/webhooks.ts#L14)

## Properties

### wh

• `Private` **wh**: `Webhook`

#### Defined in

[src/webhooks.ts:8](https://github.com/seamapi/javascript-legacy/blob/main/src/webhooks.ts#L8)

## Methods

### verify

▸ **verify**(`payload`, `headers`): [`SeamWebhookEvent`](../modules.md#seamwebhookevent)

Verify a payload received from a webhook and return the typed event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `string` | must be a string (should not be the parsed JSON object) |
| `headers` | `Record`<`string`, `string`\> | request headers (used to verify against the secret) |

#### Returns

[`SeamWebhookEvent`](../modules.md#seamwebhookevent)

event

#### Defined in

[src/webhooks.ts:24](https://github.com/seamapi/javascript-legacy/blob/main/src/webhooks.ts#L24)
