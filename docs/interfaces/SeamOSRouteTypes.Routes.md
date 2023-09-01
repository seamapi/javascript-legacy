[seamapi](../README.md) / [Exports](../modules.md) / [SeamOSRouteTypes](../modules/SeamOSRouteTypes.md) / Routes

# Interface: Routes

[SeamOSRouteTypes](../modules/SeamOSRouteTypes.md).Routes

## Table of contents

### Properties

- [/access\_codes/create](SeamOSRouteTypes.Routes.md#/access_codes/create)
- [/access\_codes/delete](SeamOSRouteTypes.Routes.md#/access_codes/delete)
- [/access\_codes/get](SeamOSRouteTypes.Routes.md#/access_codes/get)
- [/access\_codes/list](SeamOSRouteTypes.Routes.md#/access_codes/list)
- [/access\_codes/unmanaged/delete](SeamOSRouteTypes.Routes.md#/access_codes/unmanaged/delete)
- [/access\_codes/unmanaged/list](SeamOSRouteTypes.Routes.md#/access_codes/unmanaged/list)
- [/access\_codes/unmanaged/update](SeamOSRouteTypes.Routes.md#/access_codes/unmanaged/update)
- [/access\_codes/update](SeamOSRouteTypes.Routes.md#/access_codes/update)
- [/access\_passes/create](SeamOSRouteTypes.Routes.md#/access_passes/create)
- [/access\_passes/create\_from\_access\_code](SeamOSRouteTypes.Routes.md#/access_passes/create_from_access_code)
- [/access\_passes/delete](SeamOSRouteTypes.Routes.md#/access_passes/delete)
- [/access\_passes/get](SeamOSRouteTypes.Routes.md#/access_passes/get)
- [/access\_passes/get\_count\_summary](SeamOSRouteTypes.Routes.md#/access_passes/get_count_summary)
- [/access\_passes/list](SeamOSRouteTypes.Routes.md#/access_passes/list)
- [/access\_passes/list\_accessible\_devices](SeamOSRouteTypes.Routes.md#/access_passes/list_accessible_devices)
- [/access\_passes/update](SeamOSRouteTypes.Routes.md#/access_passes/update)
- [/buildings/add\_device](SeamOSRouteTypes.Routes.md#/buildings/add_device)
- [/buildings/add\_user](SeamOSRouteTypes.Routes.md#/buildings/add_user)
- [/buildings/create](SeamOSRouteTypes.Routes.md#/buildings/create)
- [/buildings/delete](SeamOSRouteTypes.Routes.md#/buildings/delete)
- [/buildings/get](SeamOSRouteTypes.Routes.md#/buildings/get)
- [/buildings/get\_count\_summary](SeamOSRouteTypes.Routes.md#/buildings/get_count_summary)
- [/buildings/list](SeamOSRouteTypes.Routes.md#/buildings/list)
- [/buildings/list\_count\_summaries](SeamOSRouteTypes.Routes.md#/buildings/list_count_summaries)
- [/buildings/remove\_device](SeamOSRouteTypes.Routes.md#/buildings/remove_device)
- [/buildings/remove\_user](SeamOSRouteTypes.Routes.md#/buildings/remove_user)
- [/buildings/update](SeamOSRouteTypes.Routes.md#/buildings/update)
- [/buildings/update\_user\_role](SeamOSRouteTypes.Routes.md#/buildings/update_user_role)
- [/device\_groups/create](SeamOSRouteTypes.Routes.md#/device_groups/create)
- [/device\_groups/delete](SeamOSRouteTypes.Routes.md#/device_groups/delete)
- [/device\_groups/get](SeamOSRouteTypes.Routes.md#/device_groups/get)
- [/device\_groups/list](SeamOSRouteTypes.Routes.md#/device_groups/list)
- [/device\_groups/update](SeamOSRouteTypes.Routes.md#/device_groups/update)
- [/devices/delete](SeamOSRouteTypes.Routes.md#/devices/delete)
- [/devices/get](SeamOSRouteTypes.Routes.md#/devices/get)
- [/devices/get\_count\_summary](SeamOSRouteTypes.Routes.md#/devices/get_count_summary)
- [/devices/list](SeamOSRouteTypes.Routes.md#/devices/list)
- [/devices/list\_counts](SeamOSRouteTypes.Routes.md#/devices/list_counts)
- [/devices/update](SeamOSRouteTypes.Routes.md#/devices/update)
- [/events/get\_count\_summary](SeamOSRouteTypes.Routes.md#/events/get_count_summary)
- [/events/list](SeamOSRouteTypes.Routes.md#/events/list)
- [/health](SeamOSRouteTypes.Routes.md#/health)
- [/incidents/list](SeamOSRouteTypes.Routes.md#/incidents/list)
- [/linked\_accounts/delete](SeamOSRouteTypes.Routes.md#/linked_accounts/delete)
- [/linked\_accounts/get](SeamOSRouteTypes.Routes.md#/linked_accounts/get)
- [/linked\_accounts/get\_counts](SeamOSRouteTypes.Routes.md#/linked_accounts/get_counts)
- [/linked\_accounts/list](SeamOSRouteTypes.Routes.md#/linked_accounts/list)
- [/locks/lock](SeamOSRouteTypes.Routes.md#/locks/lock)
- [/locks/unlock](SeamOSRouteTypes.Routes.md#/locks/unlock)
- [/login\_portals/create](SeamOSRouteTypes.Routes.md#/login_portals/create)
- [/login\_portals/delete](SeamOSRouteTypes.Routes.md#/login_portals/delete)
- [/login\_portals/get](SeamOSRouteTypes.Routes.md#/login_portals/get)
- [/login\_portals/list](SeamOSRouteTypes.Routes.md#/login_portals/list)
- [/organizations/create](SeamOSRouteTypes.Routes.md#/organizations/create)
- [/organizations/get](SeamOSRouteTypes.Routes.md#/organizations/get)
- [/organizations/get\_count\_summary](SeamOSRouteTypes.Routes.md#/organizations/get_count_summary)
- [/organizations/invite\_user](SeamOSRouteTypes.Routes.md#/organizations/invite_user)
- [/organizations/list](SeamOSRouteTypes.Routes.md#/organizations/list)
- [/organizations/pending\_users/delete](SeamOSRouteTypes.Routes.md#/organizations/pending_users/delete)
- [/organizations/pending\_users/list](SeamOSRouteTypes.Routes.md#/organizations/pending_users/list)
- [/organizations/pending\_users/resend\_invitation](SeamOSRouteTypes.Routes.md#/organizations/pending_users/resend_invitation)
- [/organizations/pending\_users/update](SeamOSRouteTypes.Routes.md#/organizations/pending_users/update)
- [/organizations/remove\_user](SeamOSRouteTypes.Routes.md#/organizations/remove_user)
- [/organizations/update](SeamOSRouteTypes.Routes.md#/organizations/update)
- [/organizations/update\_user\_role](SeamOSRouteTypes.Routes.md#/organizations/update_user_role)
- [/user\_groups/add\_user](SeamOSRouteTypes.Routes.md#/user_groups/add_user)
- [/user\_groups/create](SeamOSRouteTypes.Routes.md#/user_groups/create)
- [/user\_groups/delete](SeamOSRouteTypes.Routes.md#/user_groups/delete)
- [/user\_groups/get](SeamOSRouteTypes.Routes.md#/user_groups/get)
- [/user\_groups/list](SeamOSRouteTypes.Routes.md#/user_groups/list)
- [/user\_groups/remove\_user](SeamOSRouteTypes.Routes.md#/user_groups/remove_user)
- [/user\_groups/update](SeamOSRouteTypes.Routes.md#/user_groups/update)
- [/users/delete](SeamOSRouteTypes.Routes.md#/users/delete)
- [/users/get](SeamOSRouteTypes.Routes.md#/users/get)
- [/users/get\_building\_roles](SeamOSRouteTypes.Routes.md#/users/get_building_roles)
- [/users/list](SeamOSRouteTypes.Routes.md#/users/list)
- [/users/list\_my\_organizations](SeamOSRouteTypes.Routes.md#/users/list_my_organizations)
- [/users/list\_organization\_roles](SeamOSRouteTypes.Routes.md#/users/list_organization_roles)
- [/users/update](SeamOSRouteTypes.Routes.md#/users/update)

## Properties

### /access\_codes/create

• **/access\_codes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `code?`: `string` ; `device_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name?`: `string` ; `starts_at?`: `string` \| `Date`  } |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | { `access_code`: { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  }  } |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  } |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/access_codes/create"`` |

#### Defined in

[src/seam-os/routes.ts:2](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L2)

___

### /access\_codes/delete

• **/access\_codes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_code_id`: `string`  } |
| `commonParams.access_code_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/access_codes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:39](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L39)

___

### /access\_codes/get

• **/access\_codes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_code_id`: `string`  } |
| `commonParams.access_code_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `access_code`: { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  }  } |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  } |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/access_codes/get"`` |

#### Defined in

[src/seam-os/routes.ts:50](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L50)

___

### /access\_codes/list

• **/access\_codes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `device_id?`: `string`  } |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `access_codes`: ({ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  })[]  } |
| `jsonResponse.access_codes` | ({ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  })[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/access_codes/list"`` |

#### Defined in

[src/seam-os/routes.ts:83](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L83)

___

### /access\_codes/unmanaged/delete

• **/access\_codes/unmanaged/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_code_id`: `string` ; `device_id?`: `string`  } |
| `commonParams.access_code_id` | `string` |
| `commonParams.device_id?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/access_codes/unmanaged/delete"`` |

#### Defined in

[src/seam-os/routes.ts:118](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L118)

___

### /access\_codes/unmanaged/list

• **/access\_codes/unmanaged/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `device_id?`: `string`  } |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `access_codes`: ({ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  })[]  } |
| `jsonResponse.access_codes` | ({ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `is_managed`: `boolean` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `is_managed`: `boolean` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"removing"`` \| ``"unset"`` ; `type`: ``"time_bound"``  })[] |
| `method` | ``"GET"`` |
| `queryParams` | { `device_id`: `string`  } |
| `queryParams.device_id` | `string` |
| `route` | ``"/access_codes/unmanaged/list"`` |

#### Defined in

[src/seam-os/routes.ts:130](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L130)

___

### /access\_codes/unmanaged/update

• **/access\_codes/unmanaged/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_code_id`: `string` ; `is_managed`: `boolean`  } |
| `commonParams.access_code_id` | `string` |
| `commonParams.is_managed` | `boolean` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/access_codes/unmanaged/update"`` |

#### Defined in

[src/seam-os/routes.ts:167](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L167)

___

### /access\_codes/update

• **/access\_codes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `access_code_id`: `string` ; `code?`: `string` ; `device_id?`: `string` ; `ends_at?`: `string` \| `Date` ; `name?`: `string` ; `starts_at?`: `string` \| `Date`  } |
| `jsonBody.access_code_id` | `string` |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id?` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/access_codes/update"`` |

#### Defined in

[src/seam-os/routes.ts:179](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L179)

___

### /access\_passes/create

• **/access\_passes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `building_id?`: `string` ; `building_ids?`: `string`[] ; `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_group_id?`: `string` ; `devices?`: { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: `string` \| `Date` ; `grant_mixed_building_device_access?`: `boolean` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } |
| `jsonBody.building_id?` | `string` |
| `jsonBody.building_ids?` | `string`[] |
| `jsonBody.can_use_access_code?` | `boolean` |
| `jsonBody.can_use_remote_unlock?` | `boolean` |
| `jsonBody.device_group_id?` | `string` |
| `jsonBody.devices?` | { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.grant_mixed_building_device_access?` | `boolean` |
| `jsonBody.name` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | { `access_pass`: { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }  } |
| `jsonResponse.access_pass` | { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  } |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `jsonResponse.access_pass.access_pass_name` | `string` |
| `jsonResponse.access_pass.created_at` | `string` \| `Date` |
| `jsonResponse.access_pass.device_count` | `number` |
| `jsonResponse.access_pass.does_not_end` | `boolean` |
| `jsonResponse.access_pass.ends_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.last_used_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.organization_id` | `string` |
| `jsonResponse.access_pass.starts_at` | `string` \| `Date` |
| `jsonResponse.access_pass.url` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/create"`` |

#### Defined in

[src/seam-os/routes.ts:195](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L195)

___

### /access\_passes/create\_from\_access\_code

• **/access\_passes/create\_from\_access\_code**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `access_code_id`: `string` ; `can_use_remote_unlock?`: `boolean`  } |
| `jsonBody.access_code_id` | `string` |
| `jsonBody.can_use_remote_unlock?` | `boolean` |
| `jsonResponse` | { `access_pass`: { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }  } |
| `jsonResponse.access_pass` | { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  } |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `jsonResponse.access_pass.access_pass_name` | `string` |
| `jsonResponse.access_pass.created_at` | `string` \| `Date` |
| `jsonResponse.access_pass.device_count` | `number` |
| `jsonResponse.access_pass.does_not_end` | `boolean` |
| `jsonResponse.access_pass.ends_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.last_used_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.organization_id` | `string` |
| `jsonResponse.access_pass.starts_at` | `string` \| `Date` |
| `jsonResponse.access_pass.url` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/create_from_access_code"`` |

#### Defined in

[src/seam-os/routes.ts:234](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L234)

___

### /access\_passes/delete

• **/access\_passes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_pass_id`: `string`  } |
| `commonParams.access_pass_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:259](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L259)

___

### /access\_passes/get

• **/access\_passes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_pass_id`: `string`  } |
| `commonParams.access_pass_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `access_pass`: { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }  } |
| `jsonResponse.access_pass` | { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  } |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `jsonResponse.access_pass.access_pass_name` | `string` |
| `jsonResponse.access_pass.created_at` | `string` \| `Date` |
| `jsonResponse.access_pass.device_count` | `number` |
| `jsonResponse.access_pass.does_not_end` | `boolean` |
| `jsonResponse.access_pass.ends_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.last_used_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.organization_id` | `string` |
| `jsonResponse.access_pass.starts_at` | `string` \| `Date` |
| `jsonResponse.access_pass.url` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/get"`` |

#### Defined in

[src/seam-os/routes.ts:270](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L270)

___

### /access\_passes/get\_count\_summary

• **/access\_passes/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_pass_id`: `string` ; `end?`: `string` \| `Date` ; `start`: `string` \| `Date`  } |
| `commonParams.access_pass_id` | `string` |
| `commonParams.end?` | `string` \| `Date` |
| `commonParams.start` | `string` \| `Date` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `access_pass_counts`: { `total_uses`: `number` ; `uses_in_period`: `number`  }  } |
| `jsonResponse.access_pass_counts` | { `total_uses`: `number` ; `uses_in_period`: `number`  } |
| `jsonResponse.access_pass_counts.total_uses` | `number` |
| `jsonResponse.access_pass_counts.uses_in_period` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:294](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L294)

___

### /access\_passes/list

• **/access\_passes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `device_id?`: `string` ; `query?`: `string`  } |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `access_passes`: { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }[]  } |
| `jsonResponse.access_passes` | { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/list"`` |

#### Defined in

[src/seam-os/routes.ts:312](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L312)

___

### /access\_passes/list\_accessible\_devices

• **/access\_passes/list\_accessible\_devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_pass_id`: `string`  } |
| `commonParams.access_pass_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `accessible_devices`: { `access_code_id`: ``null`` \| `string` ; `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `code`: ``null`` \| `string` ; `device_id`: `string`  }[]  } |
| `jsonResponse.accessible_devices` | { `access_code_id`: ``null`` \| `string` ; `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `code`: ``null`` \| `string` ; `device_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/list_accessible_devices"`` |

#### Defined in

[src/seam-os/routes.ts:338](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L338)

___

### /access\_passes/update

• **/access\_passes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `access_method_flags?`: { `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean`  } ; `access_pass_id`: `string` ; `device_group_id?`: `string` ; `devices?`: { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } \| { `access_pass_id`: `string` ; `devices`: { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } \| { `access_pass_id`: `string` ; `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `device_group_id`: `string` ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/access_passes/update"`` |

#### Defined in

[src/seam-os/routes.ts:357](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L357)

___

### /buildings/add\_device

• **/buildings/add\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `building_id`: `string` ; `device_id`: `string`  } |
| `jsonBody.building_id` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/add_device"`` |

#### Defined in

[src/seam-os/routes.ts:403](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L403)

___

### /buildings/add\_user

• **/buildings/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `building_id`: `string` ; `user_id`: `string`  } \| { `building_id`: `string` ; `email`: `string`  } |
| `jsonResponse` | {} |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:415](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L415)

___

### /buildings/create

• **/buildings/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `ext_google_place_id`: `string` ; `image_url?`: `string` ; `name`: `string` ; `timezone`: `string`  } |
| `jsonBody.ext_google_place_id` | `string` |
| `jsonBody.image_url?` | `string` |
| `jsonBody.name` | `string` |
| `jsonBody.timezone` | `string` |
| `jsonResponse` | { `building`: { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }  } |
| `jsonResponse.building` | { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  } |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.image_url` | ``null`` \| `string` |
| `jsonResponse.building.location` | { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } |
| `jsonResponse.building.location.addr1` | `string` |
| `jsonResponse.building.location.addr2` | ``null`` \| `string` |
| `jsonResponse.building.location.city` | `string` |
| `jsonResponse.building.location.country` | `string` |
| `jsonResponse.building.location.ext_google_place_id` | ``null`` \| `string` |
| `jsonResponse.building.location.full_address_string` | `string` |
| `jsonResponse.building.location.latitude` | `number` |
| `jsonResponse.building.location.longitude` | `number` |
| `jsonResponse.building.location.state` | `string` |
| `jsonResponse.building.location.zip_code` | `string` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.building.timezone` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/create"`` |

#### Defined in

[src/seam-os/routes.ts:432](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L432)

___

### /buildings/delete

• **/buildings/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id`: `string`  } |
| `commonParams.building_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/delete"`` |

#### Defined in

[src/seam-os/routes.ts:467](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L467)

___

### /buildings/get

• **/buildings/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id`: `string`  } |
| `commonParams.building_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `building`: { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }  } |
| `jsonResponse.building` | { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  } |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.image_url` | ``null`` \| `string` |
| `jsonResponse.building.location` | { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } |
| `jsonResponse.building.location.addr1` | `string` |
| `jsonResponse.building.location.addr2` | ``null`` \| `string` |
| `jsonResponse.building.location.city` | `string` |
| `jsonResponse.building.location.country` | `string` |
| `jsonResponse.building.location.ext_google_place_id` | ``null`` \| `string` |
| `jsonResponse.building.location.full_address_string` | `string` |
| `jsonResponse.building.location.latitude` | `number` |
| `jsonResponse.building.location.longitude` | `number` |
| `jsonResponse.building.location.state` | `string` |
| `jsonResponse.building.location.zip_code` | `string` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.building.timezone` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/get"`` |

#### Defined in

[src/seam-os/routes.ts:478](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L478)

___

### /buildings/get\_count\_summary

• **/buildings/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `end?`: `string` \| `Date` ; `start?`: `string` \| `Date`  } |
| `commonParams.building_id?` | `string` |
| `commonParams.end?` | `string` \| `Date` |
| `commonParams.start?` | `string` \| `Date` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `building_count_summary`: { `active_access_passes`: `number` ; `device_incidents`: `number` ; `devices`: `number` ; `incidents`: `number` ; `low_battery_incidents`: `number` ; `offline_account_incidents`: `number`  }  } |
| `jsonResponse.building_count_summary` | { `active_access_passes`: `number` ; `device_incidents`: `number` ; `devices`: `number` ; `incidents`: `number` ; `low_battery_incidents`: `number` ; `offline_account_incidents`: `number`  } |
| `jsonResponse.building_count_summary.active_access_passes` | `number` |
| `jsonResponse.building_count_summary.device_incidents` | `number` |
| `jsonResponse.building_count_summary.devices` | `number` |
| `jsonResponse.building_count_summary.incidents` | `number` |
| `jsonResponse.building_count_summary.low_battery_incidents` | `number` |
| `jsonResponse.building_count_summary.offline_account_incidents` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:510](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L510)

___

### /buildings/list

• **/buildings/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `query?`: `string`  } |
| `commonParams.query?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `buildings`: { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }[]  } |
| `jsonResponse.buildings` | { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `image_url`: ``null`` \| `string` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/list"`` |

#### Defined in

[src/seam-os/routes.ts:532](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L532)

___

### /buildings/list\_count\_summaries

• **/buildings/list\_count\_summaries**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_ids`: `string`[]  } |
| `commonParams.building_ids` | `string`[] |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `building_count_summaries`: { `active_access_passes`: `number` ; `devices`: `number` ; `incidents`: `number`  }[]  } |
| `jsonResponse.building_count_summaries` | { `active_access_passes`: `number` ; `devices`: `number` ; `incidents`: `number`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/list_count_summaries"`` |

#### Defined in

[src/seam-os/routes.ts:564](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L564)

___

### /buildings/remove\_device

• **/buildings/remove\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id`: `string` ; `device_id`: `string`  } |
| `commonParams.building_id` | `string` |
| `commonParams.device_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/remove_device"`` |

#### Defined in

[src/seam-os/routes.ts:581](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L581)

___

### /buildings/remove\_user

• **/buildings/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id`: `string` ; `user_id`: `string`  } |
| `commonParams.building_id` | `string` |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:593](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L593)

___

### /buildings/update

• **/buildings/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id`: `string` ; `ext_google_place_id?`: `string` ; `image_url?`: `string` ; `name?`: `string` ; `timezone?`: `string`  } |
| `commonParams.building_id` | `string` |
| `commonParams.ext_google_place_id?` | `string` |
| `commonParams.image_url?` | `string` |
| `commonParams.name?` | `string` |
| `commonParams.timezone?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/update"`` |

#### Defined in

[src/seam-os/routes.ts:605](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L605)

___

### /buildings/update\_user\_role

• **/buildings/update\_user\_role**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id`: `string` ; `building_roles`: (``"building:manager"`` \| ``"building:operator"``)[] ; `user_id`: `string`  } |
| `commonParams.building_id` | `string` |
| `commonParams.building_roles` | (``"building:manager"`` \| ``"building:operator"``)[] |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/buildings/update_user_role"`` |

#### Defined in

[src/seam-os/routes.ts:620](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L620)

___

### /device\_groups/create

• **/device\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `device_ids?`: `string`[] ; `name`: `string`  } |
| `jsonBody.device_ids?` | `string`[] |
| `jsonBody.name` | `string` |
| `jsonResponse` | { `device_group`: { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }  } |
| `jsonResponse.device_group` | { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  } |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.device_ids` | `string`[] |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/device_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:633](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L633)

___

### /device\_groups/delete

• **/device\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `device_group_id`: `string`  } |
| `jsonBody.device_group_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/device_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:653](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L653)

___

### /device\_groups/get

• **/device\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `device_group_id`: `string`  } |
| `commonParams.device_group_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `device_group`: { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }  } |
| `jsonResponse.device_group` | { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  } |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.device_ids` | `string`[] |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/device_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:664](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L664)

___

### /device\_groups/list

• **/device\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `device_groups`: { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }[]  } |
| `jsonResponse.device_groups` | { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/device_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:683](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L683)

___

### /device\_groups/update

• **/device\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `device_group_id`: `string` ; `device_ids?`: `string`[] ; `name?`: `string`  } |
| `jsonBody.device_group_id` | `string` |
| `jsonBody.device_ids?` | `string`[] |
| `jsonBody.name?` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/device_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:700](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L700)

___

### /devices/delete

• **/devices/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `device_id`: `string`  } |
| `commonParams.device_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/devices/delete"`` |

#### Defined in

[src/seam-os/routes.ts:713](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L713)

___

### /devices/get

• **/devices/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `device_id?`: `string` ; `device_name?`: `string`  } |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.device_name?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `device`: { `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { `[x: string]`: `unknown`;  } ; `warnings`: `unknown`[]  }  } |
| `jsonResponse.device` | { `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { `[x: string]`: `unknown`;  } ; `warnings`: `unknown`[]  } |
| `jsonResponse.device.building_id` | ``null`` \| `string` |
| `jsonResponse.device.created_at` | `string` |
| `jsonResponse.device.device_id` | `string` |
| `jsonResponse.device.device_type` | `string` |
| `jsonResponse.device.errors` | `unknown`[] |
| `jsonResponse.device.linked_account_id` | `string` |
| `jsonResponse.device.name` | `string` |
| `jsonResponse.device.properties` | { `[x: string]`: `unknown`;  } |
| `jsonResponse.device.warnings` | `unknown`[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/devices/get"`` |

#### Defined in

[src/seam-os/routes.ts:724](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L724)

___

### /devices/get\_count\_summary

• **/devices/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `device_id`: `string`  } |
| `commonParams.device_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `device_count_summary`: { `active_access_passes`: `number`  }  } |
| `jsonResponse.device_count_summary` | { `active_access_passes`: `number`  } |
| `jsonResponse.device_count_summary.active_access_passes` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/devices/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:751](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L751)

___

### /devices/list

• **/devices/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `device_ids?`: `string`[] ; `has_no_building?`: `boolean` ; `linked_account_id?`: `string` ; `query?`: `string` ; `user_group_id?`: `string` ; `user_id?`: `string`  } |
| `commonParams.building_id?` | `string` |
| `commonParams.device_ids?` | `string`[] |
| `commonParams.has_no_building?` | `boolean` |
| `commonParams.linked_account_id?` | `string` |
| `commonParams.query?` | `string` |
| `commonParams.user_group_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `devices`: { `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { `[x: string]`: `unknown`;  } ; `warnings`: `unknown`[]  }[]  } |
| `jsonResponse.devices` | { `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { `[x: string]`: `unknown`;  } ; `warnings`: `unknown`[]  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/devices/list"`` |

#### Defined in

[src/seam-os/routes.ts:766](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L766)

___

### /devices/list\_counts

• **/devices/list\_counts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `linked_account_id?`: `string` ; `organization_id?`: `string` ; `queries`: `string`[]  } |
| `commonParams.building_id?` | `string` |
| `commonParams.linked_account_id?` | `string` |
| `commonParams.organization_id?` | `string` |
| `commonParams.queries` | `string`[] |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `device_counts`: { `count`: `number` ; `query`: `string`  }[]  } |
| `jsonResponse.device_counts` | { `count`: `number` ; `query`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/devices/list_counts"`` |

#### Defined in

[src/seam-os/routes.ts:797](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L797)

___

### /devices/update

• **/devices/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `building_id?`: `string` ; `device_id`: `string` ; `location?`: {} ; `name?`: `string`  } \| { `building_id?`: `string` ; `device_ids`: `string`[] ; `location?`: {} ; `name?`: `string`  } |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/devices/update"`` |

#### Defined in

[src/seam-os/routes.ts:816](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L816)

___

### /events/get\_count\_summary

• **/events/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_pass_id?`: `string` ; `between?`: (`string` \| `Date`)[] ; `building_id?`: `string` ; `device_id?`: `string` ; `query?`: `string`  } |
| `commonParams.access_pass_id?` | `string` |
| `commonParams.between?` | (`string` \| `Date`)[] |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `event_count_summary`: { `access_pass_events`: `number` ; `battery_events`: `number` ; `connection_events`: `number` ; `lock_unlock_events`: `number`  }  } |
| `jsonResponse.event_count_summary` | { `access_pass_events`: `number` ; `battery_events`: `number` ; `connection_events`: `number` ; `lock_unlock_events`: `number`  } |
| `jsonResponse.event_count_summary.access_pass_events` | `number` |
| `jsonResponse.event_count_summary.battery_events` | `number` |
| `jsonResponse.event_count_summary.connection_events` | `number` |
| `jsonResponse.event_count_summary.lock_unlock_events` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/events/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:837](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L837)

___

### /events/list

• **/events/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_pass_id?`: `string` ; `between?`: (`string` \| `Date`)[] ; `building_id?`: `string` ; `device_id?`: `string` ; `query?`: `string`  } |
| `commonParams.access_pass_id?` | `string` |
| `commonParams.between?` | (`string` \| `Date`)[] |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `events`: ({ `event_id`: `string` ; `event_type`: ``"linked_account.connected"`` ; `linked_account_id`: `string` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `event_id`: `string` ; `event_type`: ``"linked_account.completed_first_sync"`` ; `linked_account_id`: `string` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.connected"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.disconnected"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.tampered"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"access_pass"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"manual"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"unknown"`` \| ``"keycode"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"access_pass"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"manual"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"unknown"`` \| ``"keycode"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `battery_level`: `number` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.low_battery"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `event_id`: `string` ; `event_type`: ``"access_pass.used"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `access_code_id`: `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"access_code.created"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_code_id`: `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"access_code.deleted"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  })[]  } |
| `jsonResponse.events` | ({ `event_id`: `string` ; `event_type`: ``"linked_account.connected"`` ; `linked_account_id`: `string` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `event_id`: `string` ; `event_type`: ``"linked_account.completed_first_sync"`` ; `linked_account_id`: `string` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.connected"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.disconnected"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.tampered"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"access_pass"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"manual"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.unlocked"`` ; `method`: ``"unknown"`` \| ``"keycode"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"access_pass"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"manual"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  } \| { `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.locked"`` ; `method`: ``"unknown"`` \| ``"keycode"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `battery_level`: `number` ; `building_id`: ``null`` \| `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"device.low_battery"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_pass_id`: `string` ; `building_id`: ``null`` \| `string` ; `event_id`: `string` ; `event_type`: ``"access_pass.used"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: ``null`` \| `string`  } \| { `access_code_id`: `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"access_code.created"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  } \| { `access_code_id`: `string` ; `device_id`: `string` ; `event_id`: `string` ; `event_type`: ``"access_code.deleted"`` ; `occurred_at`: `string` \| `Date` ; `organization_id`: `string`  })[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/events/list"`` |

#### Defined in

[src/seam-os/routes.ts:859](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L859)

___

### /health

• **/health**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/health"`` |

#### Defined in

[src/seam-os/routes.ts:1008](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1008)

___

### /incidents/list

• **/incidents/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `access_code_id?`: `string` ; `access_pass_id?`: `string` ; `between?`: (`string` \| `Date`)[] ; `building_id?`: `string` ; `device_id?`: `string` ; `device_ids?`: `string`[] ; `is_resolved?`: `boolean` ; `linked_account_id?`: `string` ; `query?`: `string`  } |
| `commonParams.access_code_id?` | `string` |
| `commonParams.access_pass_id?` | `string` |
| `commonParams.between?` | (`string` \| `Date`)[] |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.device_ids?` | `string`[] |
| `commonParams.is_resolved?` | `boolean` |
| `commonParams.linked_account_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `incidents`: { `access_code_id`: ``null`` \| `string` ; `access_pass_id`: ``null`` \| `string` ; `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: ``null`` \| `string` ; `ended_at`: ``null`` \| `string` \| `Date` ; `incident_id`: `string` ; `incident_type`: `string` ; `is_resolved`: `boolean` ; `linked_account_id`: ``null`` \| `string` ; `organization_id`: `string` ; `started_at`: `string` \| `Date`  }[]  } |
| `jsonResponse.incidents` | { `access_code_id`: ``null`` \| `string` ; `access_pass_id`: ``null`` \| `string` ; `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: ``null`` \| `string` ; `ended_at`: ``null`` \| `string` \| `Date` ; `incident_id`: `string` ; `incident_type`: `string` ; `is_resolved`: `boolean` ; `linked_account_id`: ``null`` \| `string` ; `organization_id`: `string` ; `started_at`: `string` \| `Date`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/incidents/list"`` |

#### Defined in

[src/seam-os/routes.ts:1017](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1017)

___

### /linked\_accounts/delete

• **/linked\_accounts/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `linked_account_id`: `string`  } |
| `jsonBody.linked_account_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/linked_accounts/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1051](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1051)

___

### /linked\_accounts/get

• **/linked\_accounts/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `linked_account_id`: `string`  } |
| `commonParams.linked_account_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `linked_account`: { `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `did_complete_first_sync`: `boolean` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }  } |
| `jsonResponse.linked_account` | { `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `did_complete_first_sync`: `boolean` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  } |
| `jsonResponse.linked_account.account_type` | `string` |
| `jsonResponse.linked_account.created_at` | `string` \| `Date` |
| `jsonResponse.linked_account.device_count` | `number` |
| `jsonResponse.linked_account.did_complete_first_sync` | `boolean` |
| `jsonResponse.linked_account.errors` | { `error_code`: `string` ; `message`: `string`  }[] |
| `jsonResponse.linked_account.ext_seam_connected_account_id` | `string` |
| `jsonResponse.linked_account.linked_account_id` | `string` |
| `jsonResponse.linked_account.organization_id` | `string` |
| `jsonResponse.linked_account.user_identifier?` | `any` |
| `jsonResponse.linked_account.warnings` | { `message`: `string` ; `warning_code`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/linked_accounts/get"`` |

#### Defined in

[src/seam-os/routes.ts:1062](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1062)

___

### /linked\_accounts/get\_counts

• **/linked\_accounts/get\_counts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `queries`: `string`[]  } |
| `commonParams.queries` | `string`[] |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `counts`: { `count`: `number` ; `query`: `string`  }[]  } |
| `jsonResponse.counts` | { `count`: `number` ; `query`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/linked_accounts/get_counts"`` |

#### Defined in

[src/seam-os/routes.ts:1092](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1092)

___

### /linked\_accounts/list

• **/linked\_accounts/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `query?`: `string` ; `since?`: `string` \| `Date`  } |
| `commonParams.query?` | `string` |
| `commonParams.since?` | `string` \| `Date` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `linked_accounts`: { `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `did_complete_first_sync`: `boolean` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }[]  } |
| `jsonResponse.linked_accounts` | { `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `did_complete_first_sync`: `boolean` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/linked_accounts/list"`` |

#### Defined in

[src/seam-os/routes.ts:1108](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1108)

___

### /locks/lock

• **/locks/lock**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `access_pass_id?`: `string` ; `device_id`: `string`  } |
| `jsonBody.access_pass_id?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/locks/lock"`` |

#### Defined in

[src/seam-os/routes.ts:1139](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1139)

___

### /locks/unlock

• **/locks/unlock**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `access_pass_id?`: `string` ; `device_id`: `string`  } |
| `jsonBody.access_pass_id?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/locks/unlock"`` |

#### Defined in

[src/seam-os/routes.ts:1151](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1151)

___

### /login\_portals/create

• **/login\_portals/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `accepted_providers?`: `string`[] ; `custom_redirect_url?`: `string` ; `device_selection_mode?`: ``"none"`` \| ``"single"`` \| ``"multiple"``  } |
| `jsonBody.accepted_providers?` | `string`[] |
| `jsonBody.custom_redirect_url?` | `string` |
| `jsonBody.device_selection_mode?` | ``"none"`` \| ``"single"`` \| ``"multiple"`` |
| `jsonResponse` | { `login_portal`: { `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  }  } |
| `jsonResponse.login_portal` | { `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  } |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.linked_account_id` | ``null`` \| `string` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.login_successful` | `boolean` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.status` | ``"pending"`` \| ``"authorized"`` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/login_portals/create"`` |

#### Defined in

[src/seam-os/routes.ts:1163](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1163)

___

### /login\_portals/delete

• **/login\_portals/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `login_portal_id`: `string`  } |
| `commonParams.login_portal_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/login_portals/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1186](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1186)

___

### /login\_portals/get

• **/login\_portals/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `login_portal_id`: `string`  } |
| `commonParams.login_portal_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `login_portal`: { `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  }  } |
| `jsonResponse.login_portal` | { `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  } |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.linked_account_id` | ``null`` \| `string` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.login_successful` | `boolean` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.status` | ``"pending"`` \| ``"authorized"`` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/login_portals/get"`` |

#### Defined in

[src/seam-os/routes.ts:1197](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1197)

___

### /login\_portals/list

• **/login\_portals/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `since?`: `string` \| `Date`  } |
| `commonParams.since?` | `string` \| `Date` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `login_portals`: { `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  }[]  } |
| `jsonResponse.login_portals` | { `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/login_portals/list"`` |

#### Defined in

[src/seam-os/routes.ts:1218](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1218)

___

### /organizations/create

• **/organizations/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `is_sandbox?`: `boolean` ; `name`: `string`  } |
| `jsonBody.is_sandbox?` | `boolean` |
| `jsonBody.name` | `string` |
| `jsonResponse` | { `organization`: { `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  }  } |
| `jsonResponse.organization` | { `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  } |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.created_by` | ``null`` \| `string` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/create"`` |

#### Defined in

[src/seam-os/routes.ts:1239](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1239)

___

### /organizations/get

• **/organizations/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `organization_id`: `string`  } |
| `commonParams.organization_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `organization`: { `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  }  } |
| `jsonResponse.organization` | { `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  } |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.created_by` | ``null`` \| `string` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/get"`` |

#### Defined in

[src/seam-os/routes.ts:1258](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1258)

___

### /organizations/get\_count\_summary

• **/organizations/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `between`: (`string` \| `Date`)[] ; `organization_id`: `string`  } |
| `commonParams.between` | (`string` \| `Date`)[] |
| `commonParams.organization_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `organization_counts`: { `incidents_in_period`: `number` ; `total_active_access_passes`: `number` ; `total_admins`: `number` ; `total_buildings`: `number` ; `total_devices`: `number` ; `total_linked_accounts`: `number` ; `total_members`: `number` ; `total_online_devices`: `number` ; `total_super_admins`: `number`  }  } |
| `jsonResponse.organization_counts` | { `incidents_in_period`: `number` ; `total_active_access_passes`: `number` ; `total_admins`: `number` ; `total_buildings`: `number` ; `total_devices`: `number` ; `total_linked_accounts`: `number` ; `total_members`: `number` ; `total_online_devices`: `number` ; `total_super_admins`: `number`  } |
| `jsonResponse.organization_counts.incidents_in_period` | `number` |
| `jsonResponse.organization_counts.total_active_access_passes` | `number` |
| `jsonResponse.organization_counts.total_admins` | `number` |
| `jsonResponse.organization_counts.total_buildings` | `number` |
| `jsonResponse.organization_counts.total_devices` | `number` |
| `jsonResponse.organization_counts.total_linked_accounts` | `number` |
| `jsonResponse.organization_counts.total_members` | `number` |
| `jsonResponse.organization_counts.total_online_devices` | `number` |
| `jsonResponse.organization_counts.total_super_admins` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:1276](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1276)

___

### /organizations/invite\_user

• **/organizations/invite\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `email`: `string` ; `role`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` ; `user_id?`: `string`  } \| { `email?`: `string` ; `role`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` ; `user_id`: `string`  } |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/invite_user"`` |

#### Defined in

[src/seam-os/routes.ts:1300](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1300)

___

### /organizations/list

• **/organizations/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `query?`: `string`  } |
| `commonParams.query?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `organizations`: { `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  }[]  } |
| `jsonResponse.organizations` | { `created_at`: `string` \| `Date` ; `created_by`: ``null`` \| `string` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/list"`` |

#### Defined in

[src/seam-os/routes.ts:1319](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1319)

___

### /organizations/pending\_users/delete

• **/organizations/pending\_users/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `organization_invitation_id`: `string`  } |
| `commonParams.organization_invitation_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/pending_users/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1337](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1337)

___

### /organizations/pending\_users/list

• **/organizations/pending\_users/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `pending_users`: { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `organization_id`: `string` ; `organization_invitation_id`: `string` ; `role`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` ; `status`: ``"pending"`` \| ``"accepted"`` \| ``"declined"`` ; `user_id`: ``null`` \| `string`  }[]  } |
| `jsonResponse.pending_users` | { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `organization_id`: `string` ; `organization_invitation_id`: `string` ; `role`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` ; `status`: ``"pending"`` \| ``"accepted"`` \| ``"declined"`` ; `user_id`: ``null`` \| `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/pending_users/list"`` |

#### Defined in

[src/seam-os/routes.ts:1348](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1348)

___

### /organizations/pending\_users/resend\_invitation

• **/organizations/pending\_users/resend\_invitation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `organization_invitation_id`: `string`  } |
| `jsonBody.organization_invitation_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/pending_users/resend_invitation"`` |

#### Defined in

[src/seam-os/routes.ts:1367](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1367)

___

### /organizations/pending\_users/update

• **/organizations/pending\_users/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `organization_invitation_id`: `string` ; `role`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``  } |
| `commonParams.organization_invitation_id` | `string` |
| `commonParams.role` | ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/pending_users/update"`` |

#### Defined in

[src/seam-os/routes.ts:1378](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1378)

___

### /organizations/remove\_user

• **/organizations/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_id`: `string`  } |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:1390](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1390)

___

### /organizations/update

• **/organizations/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `ext_seam_connect_api_key?`: `string` ; `name?`: `string`  } |
| `commonParams.ext_seam_connect_api_key?` | `string` |
| `commonParams.name?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/update"`` |

#### Defined in

[src/seam-os/routes.ts:1401](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1401)

___

### /organizations/update\_user\_role

• **/organizations/update\_user\_role**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `can_view_all_buildings?`: `boolean` ; `organization_roles?`: (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] ; `user_id`: `string`  } |
| `commonParams.can_view_all_buildings?` | `boolean` |
| `commonParams.organization_roles?` | (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/organizations/update_user_role"`` |

#### Defined in

[src/seam-os/routes.ts:1413](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1413)

___

### /user\_groups/add\_user

• **/user\_groups/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `user_group_id`: `string` ; `user_id`: `string`  } |
| `jsonBody.user_group_id` | `string` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/user_groups/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:1428](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1428)

___

### /user\_groups/create

• **/user\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `name`: `string`  } |
| `jsonBody.name` | `string` |
| `jsonResponse` | { `user_group`: { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }  } |
| `jsonResponse.user_group` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  } |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | {} |
| `route` | ``"/user_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:1440](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1440)

___

### /user\_groups/delete

• **/user\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_group_id`: `string`  } |
| `commonParams.user_group_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/user_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1458](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1458)

___

### /user\_groups/get

• **/user\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_group_id`: `string`  } |
| `commonParams.user_group_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `user_group`: { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }  } |
| `jsonResponse.user_group` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  } |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/user_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:1469](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1469)

___

### /user\_groups/list

• **/user\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `user_groups`: { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[]  } |
| `jsonResponse.user_groups` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/user_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:1487](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1487)

___

### /user\_groups/remove\_user

• **/user\_groups/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_group_id`: `string` ; `user_id`: `string`  } |
| `commonParams.user_group_id` | `string` |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/user_groups/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:1503](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1503)

___

### /user\_groups/update

• **/user\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `name?`: `string` ; `user_group_id`: `string`  } |
| `jsonBody.name?` | `string` |
| `jsonBody.user_group_id` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/user_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:1515](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1515)

___

### /users/delete

• **/users/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_id`: `string`  } |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | {} |
| `route` | ``"/users/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1527](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1527)

___

### /users/get

• **/users/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_id`: `string`  } |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `user`: { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `first_name`: ``null`` \| `string` ; `last_name`: ``null`` \| `string` ; `organization_id?`: `string` ; `user_id`: `string`  }  } |
| `jsonResponse.user` | { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `first_name`: ``null`` \| `string` ; `last_name`: ``null`` \| `string` ; `organization_id?`: `string` ; `user_id`: `string`  } |
| `jsonResponse.user.created_at` | `string` \| `Date` |
| `jsonResponse.user.email` | ``null`` \| `string` |
| `jsonResponse.user.first_name` | ``null`` \| `string` |
| `jsonResponse.user.last_name` | ``null`` \| `string` |
| `jsonResponse.user.organization_id?` | `string` |
| `jsonResponse.user.user_id` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/users/get"`` |

#### Defined in

[src/seam-os/routes.ts:1538](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1538)

___

### /users/get\_building\_roles

• **/users/get\_building\_roles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_id`: `string`  } |
| `commonParams.user_id` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `user_building_roles`: { `building_id`: `string` ; `building_name`: `string` ; `building_roles`: (``"building:manager"`` \| ``"building:operator"``)[] ; `created_at`: `string`  }[]  } |
| `jsonResponse.user_building_roles` | { `building_id`: `string` ; `building_name`: `string` ; `building_roles`: (``"building:manager"`` \| ``"building:operator"``)[] ; `created_at`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/users/get_building_roles"`` |

#### Defined in

[src/seam-os/routes.ts:1558](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1558)

___

### /users/list

• **/users/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `building_id?`: `string` ; `user_group_id?`: `string` ; `user_id?`: `string`  } |
| `commonParams.building_id?` | `string` |
| `commonParams.user_group_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `users`: { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `first_name`: ``null`` \| `string` ; `last_name`: ``null`` \| `string` ; `organization_id?`: `string` ; `user_id`: `string`  }[]  } |
| `jsonResponse.users` | { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `first_name`: ``null`` \| `string` ; `last_name`: ``null`` \| `string` ; `organization_id?`: `string` ; `user_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/users/list"`` |

#### Defined in

[src/seam-os/routes.ts:1576](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1576)

___

### /users/list\_my\_organizations

• **/users/list\_my\_organizations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `organizations_with_roles`: { `organization_id`: `string` ; `organization_name`: `string` ; `user_organization_roles`: `string`[]  }[]  } |
| `jsonResponse.organizations_with_roles` | { `organization_id`: `string` ; `organization_name`: `string` ; `user_organization_roles`: `string`[]  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/users/list_my_organizations"`` |

#### Defined in

[src/seam-os/routes.ts:1598](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1598)

___

### /users/list\_organization\_roles

• **/users/list\_organization\_roles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `user_ids?`: `string`[]  } |
| `commonParams.user_ids?` | `string`[] |
| `formData` | {} |
| `jsonBody` | {} |
| `jsonResponse` | { `user_organization_roles`: { `can_view_all_buildings`: `boolean` ; `organization_roles`: (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] ; `user_id`: `string`  }[]  } |
| `jsonResponse.user_organization_roles` | { `can_view_all_buildings`: `boolean` ; `organization_roles`: (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] ; `user_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | {} |
| `route` | ``"/users/list_organization_roles"`` |

#### Defined in

[src/seam-os/routes.ts:1613](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1613)

___

### /users/update

• **/users/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | {} |
| `formData` | {} |
| `jsonBody` | { `first_name?`: `string` ; `last_name?`: `string` ; `user_id?`: `string`  } |
| `jsonBody.first_name?` | `string` |
| `jsonBody.last_name?` | `string` |
| `jsonBody.user_id?` | `string` |
| `jsonResponse` | {} |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | {} |
| `route` | ``"/users/update"`` |

#### Defined in

[src/seam-os/routes.ts:1630](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1630)
