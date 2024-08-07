[seamapi](../README.md) / [Exports](../modules.md) / SeamOS

# Class: SeamOS

## Table of contents

### Constructors

- [constructor](SeamOS.md#constructor)

### Properties

- [access\_codes](SeamOS.md#access_codes)
- [access\_passes](SeamOS.md#access_passes)
- [axios](SeamOS.md#axios)
- [buildings](SeamOS.md#buildings)
- [device\_groups](SeamOS.md#device_groups)
- [devices](SeamOS.md#devices)
- [events](SeamOS.md#events)
- [health](SeamOS.md#health)
- [incidents](SeamOS.md#incidents)
- [linked\_accounts](SeamOS.md#linked_accounts)
- [locks](SeamOS.md#locks)
- [login\_portals](SeamOS.md#login_portals)
- [organizations](SeamOS.md#organizations)
- [user\_groups](SeamOS.md#user_groups)
- [users](SeamOS.md#users)

### Methods

- [\_curriedGet](SeamOS.md#_curriedget)
- [\_curriedPost](SeamOS.md#_curriedpost)
- [\_getGrab](SeamOS.md#_getgrab)
- [\_postGrab](SeamOS.md#_postgrab)
- [get](SeamOS.md#get)
- [makeRequest](SeamOS.md#makerequest)
- [post](SeamOS.md#post)

## Constructors

### constructor

• **new SeamOS**(`apiKeyOrOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamOSClientOptions`](../interfaces/SeamOSClientOptions.md) |

#### Defined in

[src/seam-os/client.ts:52](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L52)

## Properties

### access\_codes

• `Readonly` **access\_codes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `code?`: `string` ; `device_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name?`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"time_bound"``  }\> |
| `delete` | (`data`: `undefined` \| { `access_code_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `access_code_id`: `string`  }) => `Promise`<{ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"time_bound"``  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `device_id?`: `string`  }) => `Promise`<({ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"time_bound"``  })[]\> |
| `update` | (`data`: `undefined` \| { `access_code_id`: `string` ; `code?`: `string` ; `device_id?`: `string` ; `ends_at?`: `string` \| `Date` ; `name?`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:179](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L179)

___

### access\_passes

• `Readonly` **access\_passes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `building_id?`: `string` ; `building_ids?`: `string`[] ; `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_group_id?`: `string` ; `devices?`: { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: `string` \| `Date` ; `grant_mixed_building_device_access?`: `boolean` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{ `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `access_pass_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `access_pass_id`: `string`  }) => `Promise`<{ `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }\> |
| `get_count_summary` | (`data`: `undefined` \| { `access_pass_id`: `string` ; `end?`: `string` \| `Date` ; `start`: `string` \| `Date`  }) => `Promise`<{ `total_uses`: `number` ; `uses_in_period`: `number`  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `device_id?`: `string` ; `query?`: `string`  }) => `Promise`<{ `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }[]\> |
| `list_accessible_devices` | (`data`: `undefined` \| { `access_pass_id`: `string`  }) => `Promise`<{ `access_code_id`: ``null`` \| `string` ; `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `code`: ``null`` \| `string` ; `device_id`: `string`  }[]\> |

#### Defined in

[src/seam-os/client.ts:187](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L187)

___

### axios

• **axios**: `AxiosInstance`

#### Defined in

[src/seam-os/client.ts:50](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L50)

___

### buildings

• `Readonly` **buildings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add_device` | (`data`: `undefined` \| { `building_id`: `string` ; `device_id`: `string`  }) => `Promise`<{}\> |
| `add_user` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/buildings/add_user"``\>) => `Promise`<{}\> |
| `create` | (`data`: `undefined` \| { `ext_google_place_id`: `string` ; `image_url?`: `string` ; `name`: `string` ; `timezone`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `building_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `building_id`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }\> |
| `get_count_summary` | (`data`: `undefined` \| { `building_id?`: `string` ; `end?`: `string` \| `Date` ; `start?`: `string` \| `Date`  }) => `Promise`<{ `active_access_passes`: `number` ; `device_incidents`: `number` ; `devices`: `number` ; `incidents`: `number` ; `low_battery_incidents`: `number` ; `offline_account_incidents`: `number`  }\> |
| `list` | (`data`: `undefined` \| { `query?`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }[]\> |
| `list_count_summaries` | (`data`: `undefined` \| { `building_ids`: `string`[]  }) => `Promise`<{ `active_access_passes`: `number` ; `devices`: `number` ; `incidents`: `number`  }[]\> |
| `remove_user` | (`data`: `undefined` \| { `building_id`: `string` ; `user_id`: `string`  }) => `Promise`<{}\> |
| `update` | (`data`: `undefined` \| { `building_id`: `string` ; `ext_google_place_id?`: `string` ; `image_url?`: `string` ; `name?`: `string` ; `timezone?`: `string`  }) => `Promise`<{}\> |
| `update_user_role` | (`data`: `undefined` \| { `building_id`: `string` ; `building_roles`: (``"building:manager"`` \| ``"building:operator"``)[] ; `user_id`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:203](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L203)

___

### device\_groups

• `Readonly` **device\_groups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `device_ids?`: `string`[] ; `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `device_group_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `device_group_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `device_group_id`: `string` ; `device_ids?`: `string`[] ; `name?`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:227](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L227)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`data`: `undefined` \| { `device_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `building_id?`: `string` ; `device_id?`: `string` ; `device_name?`: `string`  }) => `Promise`<{ `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { [x: string]: `unknown`;  } ; `warnings`: `unknown`[]  }\> |
| `get_count_summary` | (`data`: `undefined` \| { `device_id`: `string`  }) => `Promise`<{ `active_access_passes`: `number`  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `device_ids?`: `string`[] ; `has_no_building?`: `boolean` ; `linked_account_id?`: `string` ; `query?`: `string` ; `user_group_id?`: `string` ; `user_id?`: `string`  }) => `Promise`<{ `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { [x: string]: `unknown`;  } ; `warnings`: `unknown`[]  }[]\> |
| `list_counts` | (`data`: `undefined` \| { `building_id?`: `string` ; `linked_account_id?`: `string` ; `organization_id?`: `string` ; `queries`: `string`[]  }) => `Promise`<{ `count`: `number` ; `query`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/devices/update"``\>) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:238](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L238)

___

### events

• `Readonly` **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | (`data`: `undefined` \| { `access_pass_id?`: `string` ; `between?`: (`string` \| `Date`)[] ; `building_id?`: `string` ; `device_id?`: `string` ; `query?`: `string`  }) => `Promise`<({ `event_id`: `string` ; `event_type`: ``"linked_account.connected"`` ; `linked_account_id`: `string` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `event_id`: `string` ; `event_type`: ``"linked_account.completed_first_sync"`` ; `linked_account_id`: `string` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.connected"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.disconnected"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.tampered"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"access_pass"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"manual"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"keycode"`` \| ``"unknown"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"access_pass"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"manual"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"keycode"`` \| ``"unknown"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `battery_level`: `number` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.low_battery"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `event_id`: `string` ; `event_type`: ``"access_pass.used"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `access_code_id`: `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"access_code.created"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_code_id`: `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"access_code.deleted"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  })[]\> |

#### Defined in

[src/seam-os/client.ts:223](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L223)

___

### health

• **health**: (`data`: `undefined` \| {}) => `Promise`<{}\>

#### Type declaration

▸ (`data`): `Promise`<{}\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| {} |

##### Returns

`Promise`<{}\>

#### Defined in

[src/seam-os/client.ts:177](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L177)

___

### incidents

• `Readonly` **incidents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | (`data`: `undefined` \| { `access_code_id?`: `string` ; `access_pass_id?`: `string` ; `between?`: (`string` \| `Date`)[] ; `building_id?`: `string` ; `device_id?`: `string` ; `device_ids?`: `string`[] ; `is_resolved?`: `boolean` ; `linked_account_id?`: `string` ; `query?`: `string`  }) => `Promise`<{ `access_code_id`: ``null`` \| `string` ; `access_pass_id`: ``null`` \| `string` ; `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: ``null`` \| `string` ; `ended_at`: ``null`` \| `string` \| `Date` ; `incident_id`: `string` ; `incident_type`: `string` ; `is_resolved`: `boolean` ; `linked_account_id`: ``null`` \| `string` ; `organization_id`: `string` ; `started_at`: `string` \| `Date`  }[]\> |

#### Defined in

[src/seam-os/client.ts:250](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L250)

___

### linked\_accounts

• `Readonly` **linked\_accounts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`data`: `undefined` \| { `linked_account_id`: `string`  }) => `Promise`<{ `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `did_complete_first_sync`: `boolean` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }\> |
| `list` | (`data`: `undefined` \| { `query?`: `string` ; `since?`: `string` \| `Date`  }) => `Promise`<{ `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `did_complete_first_sync`: `boolean` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }[]\> |

#### Defined in

[src/seam-os/client.ts:254](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L254)

___

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lock` | (`data`: `undefined` \| { `access_pass_id?`: `string` ; `device_id`: `string`  }) => `Promise`<{}\> |
| `unlock` | (`data`: `undefined` \| { `access_pass_id?`: `string` ; `device_id`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:259](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L259)

___

### login\_portals

• `Readonly` **login\_portals**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `accepted_providers?`: `string`[] ; `custom_redirect_url?`: `string` ; `device_selection_mode?`: ``"none"`` \| ``"single"`` \| ``"multiple"``  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `login_portal_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `login_portal_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  }\> |

#### Defined in

[src/seam-os/client.ts:264](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L264)

___

### organizations

• `Readonly` **organizations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `is_sandbox?`: `boolean` ; `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `get` | (`data`: `undefined` \| { `organization_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `get_count_summary` | (`data`: `undefined` \| { `between`: (`string` \| `Date`)[] ; `organization_id`: `string`  }) => `Promise`<{ `incidents_in_period`: `number` ; `total_active_access_passes`: `number` ; `total_admins`: `number` ; `total_buildings`: `number` ; `total_devices`: `number` ; `total_linked_accounts`: `number` ; `total_members`: `number` ; `total_online_devices`: `number` ; `total_super_admins`: `number`  }\> |
| `invite_user` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/organizations/invite_user"``\>) => `Promise`<{}\> |
| `list` | (`data`: `undefined` \| { `query?`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  }[]\> |
| `pending_users` | `Object` |
| `pending_users.delete` | (`data`: `undefined` \| { `organization_invitation_id`: `string`  }) => `Promise`<{}\> |
| `pending_users.list` | (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `organization_id`: `string` ; `organization_invitation_id`: `string` ; `role`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` ; `status`: ``"pending"`` \| ``"accepted"`` \| ``"declined"`` ; `user_id`: ``null`` \| `string`  }[]\> |
| `pending_users.resend_invitation` | (`data`: `undefined` \| { `organization_invitation_id`: `string`  }) => `Promise`<{}\> |
| `pending_users.update` | (`data`: `undefined` \| { `organization_invitation_id`: `string` ; `role`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``  }) => `Promise`<{}\> |
| `remove_user` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{}\> |
| `update` | (`data`: `undefined` \| { `ext_seam_connect_api_key?`: `string` ; `name?`: `string`  }) => `Promise`<{}\> |
| `update_user_role` | (`data`: `undefined` \| { `can_view_all_buildings?`: `boolean` ; `organization_roles?`: (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] ; `user_id`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:154](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L154)

___

### user\_groups

• `Readonly` **user\_groups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add_user` | (`data`: `undefined` \| { `user_group_id`: `string` ; `user_id`: `string`  }) => `Promise`<{}\> |
| `create` | (`data`: `undefined` \| { `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `user_group_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `user_group_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[]\> |
| `remove_user` | (`data`: `undefined` \| { `user_group_id`: `string` ; `user_id`: `string`  }) => `Promise`<{}\> |
| `update` | (`data`: `undefined` \| { `name?`: `string` ; `user_group_id`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:270](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L270)

___

### users

• `Readonly` **users**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `first_name`: ``null`` \| `string` ; `last_name`: ``null`` \| `string` ; `organization_id?`: `string` ; `user_id`: `string`  }\> |
| `get_building_roles` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{ `building_id`: `string` ; `building_name`: `string` ; `building_roles`: (``"building:manager"`` \| ``"building:operator"``)[] ; `created_at`: `string`  }[]\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `user_group_id?`: `string` ; `user_id?`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `first_name`: ``null`` \| `string` ; `last_name`: ``null`` \| `string` ; `organization_id?`: `string` ; `user_id`: `string`  }[]\> |
| `list_organization_roles` | (`data`: `undefined` \| { `user_ids?`: `string`[]  }) => `Promise`<{ `can_view_all_buildings`: `boolean` ; `organization_roles`: (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] ; `user_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `first_name?`: `string` ; `last_name?`: `string` ; `user_id?`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:280](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L280)

## Methods

### \_curriedGet

▸ `Private` **_curriedGet**<`URL`\>(`url`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:146](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L146)

___

### \_curriedPost

▸ `Private` **_curriedPost**<`URL`\>(`url`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:108](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L108)

___

### \_getGrab

▸ `Private` **_getGrab**<`URL`, `InnerObject`\>(`url`, `innerObject`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `InnerObject` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `innerObject` | `InnerObject` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Defined in

[src/seam-os/client.ts:131](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L131)

___

### \_postGrab

▸ `Private` **_postGrab**<`URL`, `InnerObject`\>(`url`, `innerObject`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `InnerObject` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `innerObject` | `InnerObject` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Defined in

[src/seam-os/client.ts:116](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L116)

___

### get

▸ **get**<`URL`\>(`url`, `config?`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `config?` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, ``"GET"``\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:93](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L93)

___

### makeRequest

▸ **makeRequest**<`URL`, `Method`\>(`request`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `Method` | extends ``"POST"`` \| ``"DELETE"`` \| ``"GET"`` \| ``"PATCH"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, `Method`\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:83](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L83)

___

### post

▸ **post**<`URL`\>(`url`, `data`, `config?`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |
| `config?` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, ``"POST"``\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:100](https://github.com/seamapi/javascript-legacy/blob/main/src/seam-os/client.ts#L100)
