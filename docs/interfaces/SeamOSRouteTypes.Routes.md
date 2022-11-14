[seamapi](../README.md) / [Exports](../modules.md) / [SeamOSRouteTypes](../modules/SeamOSRouteTypes.md) / Routes

# Interface: Routes

[SeamOSRouteTypes](../modules/SeamOSRouteTypes.md).Routes

## Table of contents

### Properties

- [/access\_codes/create](SeamOSRouteTypes.Routes.md#/access_codes/create)
- [/access\_codes/delete](SeamOSRouteTypes.Routes.md#/access_codes/delete)
- [/access\_codes/get](SeamOSRouteTypes.Routes.md#/access_codes/get)
- [/access\_codes/list](SeamOSRouteTypes.Routes.md#/access_codes/list)
- [/access\_codes/update](SeamOSRouteTypes.Routes.md#/access_codes/update)
- [/access\_passes/create](SeamOSRouteTypes.Routes.md#/access_passes/create)
- [/access\_passes/delete](SeamOSRouteTypes.Routes.md#/access_passes/delete)
- [/access\_passes/get](SeamOSRouteTypes.Routes.md#/access_passes/get)
- [/access\_passes/list](SeamOSRouteTypes.Routes.md#/access_passes/list)
- [/access\_passes/update](SeamOSRouteTypes.Routes.md#/access_passes/update)
- [/buildings/add\_device](SeamOSRouteTypes.Routes.md#/buildings/add_device)
- [/buildings/add\_user](SeamOSRouteTypes.Routes.md#/buildings/add_user)
- [/buildings/create](SeamOSRouteTypes.Routes.md#/buildings/create)
- [/buildings/delete](SeamOSRouteTypes.Routes.md#/buildings/delete)
- [/buildings/get](SeamOSRouteTypes.Routes.md#/buildings/get)
- [/buildings/list](SeamOSRouteTypes.Routes.md#/buildings/list)
- [/buildings/remove\_device](SeamOSRouteTypes.Routes.md#/buildings/remove_device)
- [/buildings/remove\_user](SeamOSRouteTypes.Routes.md#/buildings/remove_user)
- [/buildings/update](SeamOSRouteTypes.Routes.md#/buildings/update)
- [/device\_groups/add\_device](SeamOSRouteTypes.Routes.md#/device_groups/add_device)
- [/device\_groups/create](SeamOSRouteTypes.Routes.md#/device_groups/create)
- [/device\_groups/delete](SeamOSRouteTypes.Routes.md#/device_groups/delete)
- [/device\_groups/get](SeamOSRouteTypes.Routes.md#/device_groups/get)
- [/device\_groups/list](SeamOSRouteTypes.Routes.md#/device_groups/list)
- [/device\_groups/update](SeamOSRouteTypes.Routes.md#/device_groups/update)
- [/devices/delete](SeamOSRouteTypes.Routes.md#/devices/delete)
- [/devices/get](SeamOSRouteTypes.Routes.md#/devices/get)
- [/devices/list](SeamOSRouteTypes.Routes.md#/devices/list)
- [/devices/update](SeamOSRouteTypes.Routes.md#/devices/update)
- [/health](SeamOSRouteTypes.Routes.md#/health)
- [/login\_portals/create](SeamOSRouteTypes.Routes.md#/login_portals/create)
- [/login\_portals/delete](SeamOSRouteTypes.Routes.md#/login_portals/delete)
- [/login\_portals/get](SeamOSRouteTypes.Routes.md#/login_portals/get)
- [/login\_portals/list](SeamOSRouteTypes.Routes.md#/login_portals/list)
- [/organizations/create](SeamOSRouteTypes.Routes.md#/organizations/create)
- [/organizations/get](SeamOSRouteTypes.Routes.md#/organizations/get)
- [/organizations/invite\_user](SeamOSRouteTypes.Routes.md#/organizations/invite_user)
- [/organizations/remove\_user](SeamOSRouteTypes.Routes.md#/organizations/remove_user)
- [/organizations/update](SeamOSRouteTypes.Routes.md#/organizations/update)
- [/user\_groups/add\_user](SeamOSRouteTypes.Routes.md#/user_groups/add_user)
- [/user\_groups/create](SeamOSRouteTypes.Routes.md#/user_groups/create)
- [/user\_groups/delete](SeamOSRouteTypes.Routes.md#/user_groups/delete)
- [/user\_groups/get](SeamOSRouteTypes.Routes.md#/user_groups/get)
- [/user\_groups/list](SeamOSRouteTypes.Routes.md#/user_groups/list)
- [/user\_groups/remove\_user](SeamOSRouteTypes.Routes.md#/user_groups/remove_user)
- [/user\_groups/update](SeamOSRouteTypes.Routes.md#/user_groups/update)
- [/users/delete](SeamOSRouteTypes.Routes.md#/users/delete)
- [/users/get](SeamOSRouteTypes.Routes.md#/users/get)
- [/users/list](SeamOSRouteTypes.Routes.md#/users/list)
- [/users/update](SeamOSRouteTypes.Routes.md#/users/update)

## Properties

### /access\_codes/create

• **/access\_codes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  } |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/create"`` |

#### Defined in

[src/seam-os/routes.ts:13](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L13)

___

### /access\_codes/delete

• **/access\_codes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_code_id` | `string` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:44](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L44)

___

### /access\_codes/get

• **/access\_codes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_code_id` | `string` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  } |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/get"`` |

#### Defined in

[src/seam-os/routes.ts:56](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L56)

___

### /access\_codes/list

• **/access\_codes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.device_group_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_codes` | ({ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  })[] |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/list"`` |

#### Defined in

[src/seam-os/routes.ts:83](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L83)

___

### /access\_codes/update

• **/access\_codes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.access_code_id` | `string` |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id?` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/update"`` |

#### Defined in

[src/seam-os/routes.ts:114](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L114)

___

### /access\_passes/create

• **/access\_passes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | { `device_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } \| { `device_ids`: `string`[] ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } \| { `device_group_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } |
| `jsonResponse` | `Object` |
| `jsonResponse.access_pass` | `Object` |
| `jsonResponse.access_pass.access_methods` | ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/create"`` |

#### Defined in

[src/seam-os/routes.ts:131](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L131)

___

### /access\_passes/delete

• **/access\_passes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_pass_id` | `string` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:173](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L173)

___

### /access\_passes/get

• **/access\_passes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_pass_id` | `string` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_pass` | `Object` |
| `jsonResponse.access_pass.access_methods` | ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/get"`` |

#### Defined in

[src/seam-os/routes.ts:185](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L185)

___

### /access\_passes/list

• **/access\_passes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_passes` | { `access_methods`: ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] ; `access_pass_id`: `string`  }[] |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/list"`` |

#### Defined in

[src/seam-os/routes.ts:211](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L211)

___

### /access\_passes/update

• **/access\_passes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id?` | `string` |
| `jsonBody.device_id?` | `string`[] |
| `jsonBody.device_ids?` | `string`[] |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/update"`` |

#### Defined in

[src/seam-os/routes.ts:238](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L238)

___

### /buildings/add\_device

• **/buildings/add\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/add_device"`` |

#### Defined in

[src/seam-os/routes.ts:255](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L255)

___

### /buildings/add\_user

• **/buildings/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | { `building_id`: `string` ; `user_id`: `string`  } \| { `building_id`: `string` ; `email`: `string`  } |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:268](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L268)

___

### /buildings/create

• **/buildings/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.location?` | `any` |
| `jsonBody.name` | `string` |
| `jsonBody.owner_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.building` | `Object` |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.location?` | `any` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/create"`` |

#### Defined in

[src/seam-os/routes.ts:286](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L286)

___

### /buildings/delete

• **/buildings/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/delete"`` |

#### Defined in

[src/seam-os/routes.ts:307](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L307)

___

### /buildings/get

• **/buildings/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.building` | `Object` |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.location?` | `any` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/get"`` |

#### Defined in

[src/seam-os/routes.ts:319](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L319)

___

### /buildings/list

• **/buildings/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.buildings` | { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/list"`` |

#### Defined in

[src/seam-os/routes.ts:338](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L338)

___

### /buildings/remove\_device

• **/buildings/remove\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/remove_device"`` |

#### Defined in

[src/seam-os/routes.ts:355](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L355)

___

### /buildings/remove\_user

• **/buildings/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id` | `string` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:368](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L368)

___

### /buildings/update

• **/buildings/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id` | `string` |
| `jsonBody.name?` | `string` |
| `jsonBody.owner_id?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/update"`` |

#### Defined in

[src/seam-os/routes.ts:381](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L381)

___

### /device\_groups/add\_device

• **/device\_groups/add\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/add_device"`` |

#### Defined in

[src/seam-os/routes.ts:395](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L395)

___

### /device\_groups/create

• **/device\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_group` | `Object` |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:408](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L408)

___

### /device\_groups/delete

• **/device\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:426](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L426)

___

### /device\_groups/get

• **/device\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_group` | `Object` |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:438](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L438)

___

### /device\_groups/list

• **/device\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_groups` | { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:456](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L456)

___

### /device\_groups/update

• **/device\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:472](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L472)

___

### /devices/delete

• **/devices/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/delete"`` |

#### Defined in

[src/seam-os/routes.ts:485](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L485)

___

### /devices/get

• **/devices/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | { `device_id?`: `string`  } \| { `building_id`: `string` ; `device_name`: `string`  } |
| `jsonResponse` | `Object` |
| `jsonResponse.device` | `Object` |
| `jsonResponse.device.connected_account_id` | `string` |
| `jsonResponse.device.created_at` | `string` \| `Date` |
| `jsonResponse.device.device_id` | `string` |
| `jsonResponse.device.device_type` | `string` |
| `jsonResponse.device.name` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/get"`` |

#### Defined in

[src/seam-os/routes.ts:497](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L497)

___

### /devices/list

• **/devices/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id?` | `string` |
| `jsonBody.has_no_building?` | `boolean` |
| `jsonBody.user_group_id?` | `string` |
| `jsonBody.user_id?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.devices` | { `connected_account_id`: `string` ; `created_at`: `string` \| `Date` ; `device_id`: `string` ; `device_type`: `string` ; `name`: `string`  }[] |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/list"`` |

#### Defined in

[src/seam-os/routes.ts:521](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L521)

___

### /devices/update

• **/devices/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_id` | `string` |
| `jsonBody.location?` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/update"`` |

#### Defined in

[src/seam-os/routes.ts:543](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L543)

___

### /health

• **/health**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/health"`` |

#### Defined in

[src/seam-os/routes.ts:5](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L5)

___

### /login\_portals/create

• **/login\_portals/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.accepted_providers?` | `string`[] |
| `jsonBody.custom_redirect_failure_url?` | `string` |
| `jsonBody.custom_redirect_url?` | `string` |
| `jsonBody.device_selection_mode?` | ``"none"`` \| ``"single"`` \| ``"multiple"`` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portal` | `Object` |
| `jsonResponse.login_portal.connected_account_id` | ``null`` \| `string` |
| `jsonResponse.login_portal.connected_webview_id` | `string` |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/create"`` |

#### Defined in

[src/seam-os/routes.ts:557](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L557)

___

### /login\_portals/delete

• **/login\_portals/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.login_portal_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/delete"`` |

#### Defined in

[src/seam-os/routes.ts:578](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L578)

___

### /login\_portals/get

• **/login\_portals/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.login_portal_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portal` | `Object` |
| `jsonResponse.login_portal.connected_account_id` | ``null`` \| `string` |
| `jsonResponse.login_portal.connected_webview_id` | `string` |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/get"`` |

#### Defined in

[src/seam-os/routes.ts:590](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L590)

___

### /login\_portals/list

• **/login\_portals/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.since?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `jsonResponse.connect_webviews` | { `connected_account_id`: ``null`` \| `string` ; `connected_webview_id`: `string` ; `created_at`: `string` \| `Date` ; `organization_id`: `string`  }[] |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/list"`` |

#### Defined in

[src/seam-os/routes.ts:608](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L608)

___

### /organizations/create

• **/organizations/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `jsonResponse.organization` | `Object` |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/create"`` |

#### Defined in

[src/seam-os/routes.ts:626](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L626)

___

### /organizations/get

• **/organizations/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `jsonResponse.organization` | `Object` |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/get"`` |

#### Defined in

[src/seam-os/routes.ts:643](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L643)

___

### /organizations/invite\_user

• **/organizations/invite\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.email` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/invite_user"`` |

#### Defined in

[src/seam-os/routes.ts:658](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L658)

___

### /organizations/remove\_user

• **/organizations/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:670](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L670)

___

### /organizations/update

• **/organizations/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/update"`` |

#### Defined in

[src/seam-os/routes.ts:682](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L682)

___

### /user\_groups/add\_user

• **/user\_groups/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_group_id` | `string` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:694](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L694)

___

### /user\_groups/create

• **/user\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `jsonResponse.user_group` | `Object` |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:707](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L707)

___

### /user\_groups/delete

• **/user\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_group_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:725](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L725)

___

### /user\_groups/get

• **/user\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_group_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `jsonResponse.user_group` | `Object` |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:737](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L737)

___

### /user\_groups/list

• **/user\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `jsonResponse.user_groups` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:755](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L755)

___

### /user\_groups/remove\_user

• **/user\_groups/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_group_id` | `string` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:771](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L771)

___

### /user\_groups/update

• **/user\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonBody.user_group_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:784](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L784)

___

### /users/delete

• **/users/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/delete"`` |

#### Defined in

[src/seam-os/routes.ts:797](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L797)

___

### /users/get

• **/users/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `jsonResponse.user` | `Object` |
| `jsonResponse.user.created_at` | `string` \| `Date` |
| `jsonResponse.user.organization_id` | `string` |
| `jsonResponse.user.user_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/get"`` |

#### Defined in

[src/seam-os/routes.ts:809](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L809)

___

### /users/list

• **/users/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id?` | `string` |
| `jsonBody.user_group_id?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `jsonResponse.users` | { `created_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/list"`` |

#### Defined in

[src/seam-os/routes.ts:826](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L826)

___

### /users/update

• **/users/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.first_name?` | `string` |
| `jsonBody.last_name?` | `string` |
| `jsonBody.title?` | `string` |
| `jsonBody.user_id?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.ok` | `boolean` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/update"`` |

#### Defined in

[src/seam-os/routes.ts:844](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L844)
