[seamapi](../README.md) / [Exports](../modules.md) / Seam

# Class: Seam

## Hierarchy

- `Routes`

  ↳ **`Seam`**

## Table of contents

### Constructors

- [constructor](Seam.md#constructor)

### Properties

- [accessCodes](Seam.md#accesscodes)
- [actionAttempts](Seam.md#actionattempts)
- [client](Seam.md#client)
- [clientSessions](Seam.md#clientsessions)
- [connectWebviews](Seam.md#connectwebviews)
- [connectedAccounts](Seam.md#connectedaccounts)
- [deviceModels](Seam.md#devicemodels)
- [devices](Seam.md#devices)
- [events](Seam.md#events)
- [locks](Seam.md#locks)
- [noiseThresholds](Seam.md#noisethresholds)
- [thermostats](Seam.md#thermostats)
- [webhooks](Seam.md#webhooks)
- [workspaces](Seam.md#workspaces)

### Methods

- [makeRequest](Seam.md#makerequest)
- [getClientSessionToken](Seam.md#getclientsessiontoken)

## Constructors

### constructor

• **new Seam**(`apiKeyOrOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamClientOptions`](../interfaces/SeamClientOptions.md) |

#### Overrides

Routes.constructor

#### Defined in

[src/seam-connect/client.ts:73](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/client.ts#L73)

## Properties

### accessCodes

• `Readonly` **accessCodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`AccessCodeCreateOngoingRequest`](../interfaces/AccessCodeCreateOngoingRequest.md)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md)\>(`params`: [`AccessCodeCreateScheduledRequest`](../interfaces/AccessCodeCreateScheduledRequest.md)) => `Promise`<[`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)\> |
| `createMultiple` | (`params`: [`AccessCodeCreateMultipleOngoingRequest`](../interfaces/AccessCodeCreateMultipleOngoingRequest.md)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md)[]\>(`params`: [`AccessCodeCreateMultipleScheduledRequest`](../interfaces/AccessCodeCreateMultipleScheduledRequest.md)) => `Promise`<[`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)[]\> |
| `delete` | (`params`: [`AccessCodeDeleteRequest`](../modules.md#accesscodedeleterequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `generateCode` | (`params`: [`AccessCodeGenerateCodeRequest`](../modules.md#accesscodegeneratecoderequest)) => `Promise`<{ `code`: `string` ; `device_id`: `string`  }\> |
| `get` | (`params`: [`AccessCodeGetRequest`](../modules.md#accesscodegetrequest)) => `Promise`<[`AccessCode`](../modules.md#accesscode)\> |
| `list` | (`params`: [`AccessCodesListRequest`](../modules.md#accesscodeslistrequest)) => `Promise`<[`AccessCode`](../modules.md#accesscode)[]\> |
| `pullBackupAccessCode` | (`params`: [`PullBackupAccessCodeRequest`](../modules.md#pullbackupaccesscoderequest)) => `Promise`<[`AccessCode`](../modules.md#accesscode)\> |
| `unmanaged` | `Object` |
| `unmanaged.convertToManaged` | (`params`: [`UnmanagedAccessCodeConvertToManagedRequest`](../modules.md#unmanagedaccesscodeconverttomanagedrequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `unmanaged.delete` | (`params`: [`UnmanagedAccessCodeDeleteRequest`](../modules.md#unmanagedaccesscodedeleterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `unmanaged.get` | (`params`: [`UnmanagedAccessCodeGetRequest`](../modules.md#unmanagedaccesscodegetrequest)) => `Promise`<[`UnmanagedAccessCode`](../modules.md#unmanagedaccesscode)\> |
| `unmanaged.list` | (`params`: [`UnmanagedAccessCodesListRequest`](../modules.md#unmanagedaccesscodeslistrequest)) => `Promise`<[`UnmanagedAccessCode`](../modules.md#unmanagedaccesscode)[]\> |
| `unmanaged.update` | (`params`: [`UnmanagedAccessCodeUpdateRequest`](../modules.md#unmanagedaccesscodeupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `update` | (`params`: [`AccessCodeUpdateRequest`](../modules.md#accesscodeupdaterequest), `options?`: { `waitForCompletion?`: `boolean`  }) => `Promise`<[`ActionAttempt`](../modules.md#actionattempt)<``"UPDATE_ACCESS_CODE"``\>\> |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/seam-connect/routes.ts:328](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L328)

___

### actionAttempts

• `Readonly` **actionAttempts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | <T\>(`actionAttemptId`: `string`) => `Promise`<[`ActionAttempt`](../modules.md#actionattempt)<`T`\>\> |

#### Inherited from

Routes.actionAttempts

#### Defined in

[src/seam-connect/routes.ts:476](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L476)

___

### client

• **client**: `AxiosInstance`

#### Defined in

[src/seam-connect/client.ts:71](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/client.ts#L71)

___

### clientSessions

• `Readonly` **clientSessions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: [`ClientSessionsCreateRequest`](../modules.md#clientsessionscreaterequest)) => `Promise`<[`ClientSession`](../interfaces/ClientSession.md)\> |
| `delete` | (`params`: [`ClientSessionsDeleteRequest`](../modules.md#clientsessionsdeleterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`ClientSessionsGetRequest`](../modules.md#clientsessionsgetrequest)) => `Promise`<[`ClientSession`](../interfaces/ClientSession.md)\> |
| `getOrCreate` | (`data`: [`ClientSessionsCreateRequest`](../modules.md#clientsessionscreaterequest)) => `Promise`<[`ClientSession`](../interfaces/ClientSession.md)\> |
| `list` | (`params`: [`ClientSessionsListRequest`](../modules.md#clientsessionslistrequest)) => `Promise`<`Omit`<[`ClientSession`](../interfaces/ClientSession.md), ``"connected_account_ids"`` \| ``"connect_webview_ids"``\>[]\> |

#### Inherited from

Routes.clientSessions

#### Defined in

[src/seam-connect/routes.ts:542](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L542)

___

### connectWebviews

• `Readonly` **connectWebviews**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`ConnectWebviewCreateRequest`](../interfaces/ConnectWebviewCreateRequest.md)) => `Promise`<`Omit`<[`ConnectWebview`](../interfaces/ConnectWebview.md), ``"connected_account_id"``\> & { `custom_redirect_failure_url`: ``null`` \| `string` ; `custom_redirect_url`: ``null`` \| `string`  }\> |
| `delete` | (`params`: [`ConnectWebviewDeleteRequest`](../interfaces/ConnectWebviewDeleteRequest.md)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`connectWebviewId`: `string`) => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)\> |
| `list` | () => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)[]\> |

#### Inherited from

Routes.connectWebviews

#### Defined in

[src/seam-connect/routes.ts:296](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L296)

___

### connectedAccounts

• `Readonly` **connectedAccounts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`params`: [`ConnectedAccountsDeleteRequest`](../interfaces/ConnectedAccountsDeleteRequest.md)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`ConnectedAccountsGetRequest`](../interfaces/ConnectedAccountsGetRequest.md)) => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)\> |
| `list` | () => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)[]\> |

#### Inherited from

Routes.connectedAccounts

#### Defined in

[src/seam-connect/routes.ts:451](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L451)

___

### deviceModels

• `Readonly` **deviceModels**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | (`__namedParameters`: [`DeviceModelsListRequest`](../modules.md#devicemodelslistrequest) & { `acknowledge_intentional_use_of_internal_api?`: `boolean`  }) => `Promise`<[`DeviceModel`](../interfaces/DeviceModel.md)[]\> |

#### Inherited from

Routes.deviceModels

#### Defined in

[src/seam-connect/routes.ts:581](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L581)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`params`: [`DeviceDeleteRequest`](../modules.md#devicedeleterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`DeviceGetRequest`](../modules.md#devicegetrequest)) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), `string`\>\> |
| `list` | (`params?`: [`DevicesListRequest`](../interfaces/DevicesListRequest.md)) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), `string`\>[]\> |
| `listDeviceProviders` | (`params?`: [`DeviceProvidersListRequest`](../interfaces/DeviceProvidersListRequest.md)) => `Promise`<[`DeviceProvider`](../interfaces/DeviceProvider.md)[]\> |
| `unmanaged` | `Object` |
| `unmanaged.get` | (`params`: [`DeviceGetRequest`](../modules.md#devicegetrequest)) => `Promise`<[`UnmanagedDevice`](../modules.md#unmanageddevice)\> |
| `unmanaged.list` | (`params`: [`DevicesListRequest`](../interfaces/DevicesListRequest.md)) => `Promise`<[`UnmanagedDevice`](../modules.md#unmanageddevice)[]\> |
| `unmanaged.update` | (`params`: [`UnmanagedDeviceUpdateRequest`](../modules.md#unmanageddeviceupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `update` | (`params`: [`DeviceUpdateRequest`](../modules.md#deviceupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |

#### Inherited from

Routes.devices

#### Defined in

[src/seam-connect/routes.ts:226](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L226)

___

### events

• `Readonly` **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`params`: [`EventGetRequest`](../interfaces/EventGetRequest.md)) => `Promise`<[`Event`](../modules.md#event)\> |
| `list` | (`params?`: [`EventsListRequest`](../interfaces/EventsListRequest.md)) => `Promise`<[`Event`](../modules.md#event)[]\> |

#### Inherited from

Routes.events

#### Defined in

[src/seam-connect/routes.ts:278](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L278)

___

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)[]\> |
| `lockDoor` | (`deviceId`: `string`) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `unlockDoor` | (`deviceId`: `string`) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |

#### Inherited from

Routes.locks

#### Defined in

[src/seam-connect/routes.ts:191](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L191)

___

### noiseThresholds

• `Readonly` **noiseThresholds**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`NoiseThresholdsCreateRequest`](../modules.md#noisethresholdscreaterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `delete` | (`params`: [`NoiseThresholdsDeleteRequest`](../modules.md#noisethresholdsdeleterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `list` | (`params`: [`NoiseThresholdsListRequest`](../modules.md#noisethresholdslistrequest)) => `Promise`<[`NoiseThresholds`](../modules.md#noisethresholds)[]\> |
| `update` | (`params`: [`NoiseThresholdsUpdateRequest`](../modules.md#noisethresholdsupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |

#### Inherited from

Routes.noiseThresholds

#### Defined in

[src/seam-connect/routes.ts:486](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L486)

___

### thermostats

• `Readonly` **thermostats**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `climateSettingSchedules` | `Object` |
| `climateSettingSchedules.create` | (`data`: [`ClimateSettingScheduleBase`](../modules.md#climatesettingschedulebase)) => `Promise`<[`ClimateSettingSchedule`](../modules.md#climatesettingschedule)\> |
| `climateSettingSchedules.delete` | (`params`: [`ClimateSettingScheduleDeleteRequest`](../modules.md#climatesettingscheduledeleterequest)) => `Promise`<`void`\> |
| `climateSettingSchedules.get` | (`params`: [`ClimateSettingScheduleGetRequest`](../modules.md#climatesettingschedulegetrequest)) => `Promise`<[`ClimateSettingSchedule`](../modules.md#climatesettingschedule)\> |
| `climateSettingSchedules.list` | (`params`: [`ClimateSettingSchedulesListRequest`](../modules.md#climatesettingscheduleslistrequest)) => `Promise`<[`ClimateSettingSchedule`](../modules.md#climatesettingschedule)[]\> |
| `climateSettingSchedules.update` | (`params`: [`ClimateSettingScheduleUpdateRequest`](../modules.md#climatesettingscheduleupdaterequest)) => `Promise`<[`ClimateSettingSchedule`](../modules.md#climatesettingschedule)\> |
| `cool` | (`params`: [`ThermostatCoolRequest`](../modules.md#thermostatcoolrequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `delete` | (`params`: [`DeviceDeleteRequest`](../modules.md#devicedeleterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`DeviceGetRequest`](../modules.md#devicegetrequest)) => `Promise`<[`ThermostatDevice`](../modules.md#thermostatdevice)\> |
| `heat` | (`params`: [`ThermostatHeatRequest`](../modules.md#thermostatheatrequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `heatCool` | (`params`: [`ThermostatHeatCoolRequest`](../modules.md#thermostatheatcoolrequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `list` | (`params?`: [`DevicesListRequest`](../interfaces/DevicesListRequest.md)) => `Promise`<[`ThermostatDevice`](../modules.md#thermostatdevice)[]\> |
| `off` | (`params`: [`ThermostatOffRequest`](../modules.md#thermostatoffrequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `setFanMode` | (`params`: [`ThermostatSetFanModeRequest`](../modules.md#thermostatsetfanmoderequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `update` | (`params`: [`ThermostatUpdateRequest`](../modules.md#thermostatupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |

#### Inherited from

Routes.thermostats

#### Defined in

[src/seam-connect/routes.ts:601](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L601)

___

### webhooks

• `Readonly` **webhooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: [`WebhookCreateRequest`](../modules.md#webhookcreaterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `delete` | (`params`: [`WebhookGetRequest`](../modules.md#webhookgetrequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`WebhookGetRequest`](../modules.md#webhookgetrequest)) => `Promise`<[`Webhook`](../interfaces/Webhook.md)\> |
| `list` | () => `Promise`<[`Webhook`](../interfaces/Webhook.md)[]\> |

#### Inherited from

Routes.webhooks

#### Defined in

[src/seam-connect/routes.ts:517](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L517)

___

### workspaces

• `Readonly` **workspaces**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md) & { `connect_partner_name`: `string`  }\> |
| `list` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md)[]\> |
| `resetSandbox` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspaceResetSandboxResponse`](../interfaces/WorkspaceResetSandboxResponse.md)\>\> |

#### Inherited from

Routes.workspaces

#### Defined in

[src/seam-connect/routes.ts:175](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/routes.ts#L175)

## Methods

### makeRequest

▸ **makeRequest**<`T`\>(`request`): `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `AxiosRequestConfig`<`any`\> |

#### Returns

`Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Overrides

Routes.makeRequest

#### Defined in

[src/seam-connect/client.ts:110](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/client.ts#L110)

___

### getClientSessionToken

▸ `Static` **getClientSessionToken**(`options`): `Promise`<[`APIResponse`](../modules.md#apiresponse)<[`ClientSessionsCreateResponse`](../modules.md#clientsessionscreateresponse)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.apiKey?` | `string` |
| `options.endpoint?` | `string` |
| `options.publishableKey?` | `string` |
| `options.userIdentifierKey` | `string` |
| `options.workspaceId?` | `string` |

#### Returns

`Promise`<[`APIResponse`](../modules.md#apiresponse)<[`ClientSessionsCreateResponse`](../modules.md#clientsessionscreateresponse)\>\>

#### Defined in

[src/seam-connect/client.ts:116](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-connect/client.ts#L116)
