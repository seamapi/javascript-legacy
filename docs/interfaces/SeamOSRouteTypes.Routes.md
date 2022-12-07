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
- [/internal/organizations/delete](SeamOSRouteTypes.Routes.md#/internal/organizations/delete)
- [/internal/organizations/list](SeamOSRouteTypes.Routes.md#/internal/organizations/list)
- [/internal/user\_sessions/create](SeamOSRouteTypes.Routes.md#/internal/user_sessions/create)
- [/internal/users/reset-password](SeamOSRouteTypes.Routes.md#/internal/users/reset-password)
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
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  } |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/create"`` |

#### Defined in

[src/seam-os/routes.ts:70](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L70)

___

### /access\_codes/delete

• **/access\_codes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_code_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:101](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L101)

___

### /access\_codes/get

• **/access\_codes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_code_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  } |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/get"`` |

#### Defined in

[src/seam-os/routes.ts:112](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L112)

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
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_codes` | ({ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  })[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/list"`` |

#### Defined in

[src/seam-os/routes.ts:139](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L139)

___

### /access\_codes/update

• **/access\_codes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.access_code_id` | `string` |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id?` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/update"`` |

#### Defined in

[src/seam-os/routes.ts:170](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L170)

___

### /access\_passes/create

• **/access\_passes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | { `device_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } \| { `device_ids`: `string`[] ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } \| { `device_group_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } |
| `jsonResponse` | `Object` |
| `jsonResponse.access_pass` | `Object` |
| `jsonResponse.access_pass.access_methods` | ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/create"`` |

#### Defined in

[src/seam-os/routes.ts:350](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L350)

___

### /access\_passes/delete

• **/access\_passes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_pass_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:392](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L392)

___

### /access\_passes/get

• **/access\_passes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_pass_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_pass` | `Object` |
| `jsonResponse.access_pass.access_methods` | ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/get"`` |

#### Defined in

[src/seam-os/routes.ts:403](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L403)

___

### /access\_passes/list

• **/access\_passes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_passes` | { `access_methods`: ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] ; `access_pass_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/list"`` |

#### Defined in

[src/seam-os/routes.ts:429](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L429)

___

### /access\_passes/update

• **/access\_passes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id?` | `string` |
| `jsonBody.device_id?` | `string`[] |
| `jsonBody.device_ids?` | `string`[] |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/update"`` |

#### Defined in

[src/seam-os/routes.ts:456](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L456)

___

### /buildings/add\_device

• **/buildings/add\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/add_device"`` |

#### Defined in

[src/seam-os/routes.ts:472](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L472)

___

### /buildings/add\_user

• **/buildings/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | { `building_id`: `string` ; `user_id`: `string`  } \| { `building_id`: `string` ; `email`: `string`  } |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:484](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L484)

___

### /buildings/create

• **/buildings/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.location?` | `Object` |
| `jsonBody.name` | `string` |
| `jsonBody.owner_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.building` | `Object` |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.location?` | `any` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/create"`` |

#### Defined in

[src/seam-os/routes.ts:501](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L501)

___

### /buildings/delete

• **/buildings/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/delete"`` |

#### Defined in

[src/seam-os/routes.ts:526](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L526)

___

### /buildings/get

• **/buildings/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.building` | `Object` |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.location?` | `any` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/get"`` |

#### Defined in

[src/seam-os/routes.ts:537](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L537)

___

### /buildings/list

• **/buildings/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.buildings` | { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/list"`` |

#### Defined in

[src/seam-os/routes.ts:556](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L556)

___

### /buildings/remove\_device

• **/buildings/remove\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.device_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/remove_device"`` |

#### Defined in

[src/seam-os/routes.ts:573](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L573)

___

### /buildings/remove\_user

• **/buildings/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:585](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L585)

___

### /buildings/update

• **/buildings/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.name?` | `string` |
| `commonParams.owner_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/update"`` |

#### Defined in

[src/seam-os/routes.ts:597](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L597)

___

### /device\_groups/add\_device

• **/device\_groups/add\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/add_device"`` |

#### Defined in

[src/seam-os/routes.ts:186](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L186)

___

### /device\_groups/create

• **/device\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_group` | `Object` |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:198](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L198)

___

### /device\_groups/delete

• **/device\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:216](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L216)

___

### /device\_groups/get

• **/device\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_group` | `Object` |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:227](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L227)

___

### /device\_groups/list

• **/device\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_groups` | { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:245](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L245)

___

### /device\_groups/update

• **/device\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:261](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L261)

___

### /devices/delete

• **/devices/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.device_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/delete"`` |

#### Defined in

[src/seam-os/routes.ts:273](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L273)

___

### /devices/get

• **/devices/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.device_name?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device` | `Object` |
| `jsonResponse.device.building_id` | ``null`` \| `string` |
| `jsonResponse.device.created_at` | `string` \| `Date` |
| `jsonResponse.device.device_id` | `string` |
| `jsonResponse.device.device_type` | `string` |
| `jsonResponse.device.errors` | `unknown`[] |
| `jsonResponse.device.linked_account_id` | `string` |
| `jsonResponse.device.name` | `string` |
| `jsonResponse.device.properties` | `Object` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/get"`` |

#### Defined in

[src/seam-os/routes.ts:284](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L284)

___

### /devices/list

• **/devices/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.has_no_building?` | `boolean` |
| `commonParams.user_group_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.devices` | { `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { [x: string]: `unknown`;  }  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/list"`` |

#### Defined in

[src/seam-os/routes.ts:310](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L310)

___

### /devices/update

• **/devices/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_id` | `string` |
| `jsonBody.location?` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/update"`` |

#### Defined in

[src/seam-os/routes.ts:337](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L337)

___

### /health

• **/health**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/health"`` |

#### Defined in

[src/seam-os/routes.ts:5](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L5)

___

### /internal/organizations/delete

• **/internal/organizations/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.organization_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/organizations/delete"`` |

#### Defined in

[src/seam-os/routes.ts:14](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L14)

___

### /internal/organizations/list

• **/internal/organizations/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.organizations` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/organizations/list"`` |

#### Defined in

[src/seam-os/routes.ts:25](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L25)

___

### /internal/user\_sessions/create

• **/internal/user\_sessions/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.auth0_id_token` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.session` | `Object` |
| `jsonResponse.session.created_at` | `string` \| `Date` |
| `jsonResponse.session.expires_at` | `string` \| `Date` |
| `jsonResponse.session.organization_id` | `string` |
| `jsonResponse.session.session_key?` | `string` |
| `jsonResponse.session.user_session_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/user_sessions/create"`` |

#### Defined in

[src/seam-os/routes.ts:40](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L40)

___

### /internal/users/reset-password

• **/internal/users/reset-password**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/users/reset-password"`` |

#### Defined in

[src/seam-os/routes.ts:59](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L59)

___

### /login\_portals/create

• **/login\_portals/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.accepted_providers?` | `string`[] |
| `jsonBody.custom_redirect_url?` | `string` |
| `jsonBody.device_selection_mode?` | ``"none"`` \| ``"single"`` \| ``"multiple"`` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portal` | `Object` |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/create"`` |

#### Defined in

[src/seam-os/routes.ts:677](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L677)

___

### /login\_portals/delete

• **/login\_portals/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.login_portal_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/delete"`` |

#### Defined in

[src/seam-os/routes.ts:697](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L697)

___

### /login\_portals/get

• **/login\_portals/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.login_portal_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portal` | `Object` |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/get"`` |

#### Defined in

[src/seam-os/routes.ts:708](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L708)

___

### /login\_portals/list

• **/login\_portals/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.since?` | `string` \| `Date` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portals` | { `created_at`: `string` \| `Date` ; `login_portal_id`: `string` ; `organization_id`: `string` ; `view_url`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/list"`` |

#### Defined in

[src/seam-os/routes.ts:726](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L726)

___

### /organizations/create

• **/organizations/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.organization` | `Object` |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/create"`` |

#### Defined in

[src/seam-os/routes.ts:610](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L610)

___

### /organizations/get

• **/organizations/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.organization_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.organization` | `Object` |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/get"`` |

#### Defined in

[src/seam-os/routes.ts:627](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L627)

___

### /organizations/invite\_user

• **/organizations/invite\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.email` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/invite_user"`` |

#### Defined in

[src/seam-os/routes.ts:644](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L644)

___

### /organizations/remove\_user

• **/organizations/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:655](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L655)

___

### /organizations/update

• **/organizations/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/update"`` |

#### Defined in

[src/seam-os/routes.ts:666](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L666)

___

### /user\_groups/add\_user

• **/user\_groups/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_group_id` | `string` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:744](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L744)

___

### /user\_groups/create

• **/user\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_group` | `Object` |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:756](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L756)

___

### /user\_groups/delete

• **/user\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_group_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:774](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L774)

___

### /user\_groups/get

• **/user\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_group_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_group` | `Object` |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:785](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L785)

___

### /user\_groups/list

• **/user\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_groups` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:803](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L803)

___

### /user\_groups/remove\_user

• **/user\_groups/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_group_id` | `string` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:819](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L819)

___

### /user\_groups/update

• **/user\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonBody.user_group_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:831](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L831)

___

### /users/delete

• **/users/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"DELETE"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/delete"`` |

#### Defined in

[src/seam-os/routes.ts:843](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L843)

___

### /users/get

• **/users/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.user` | `Object` |
| `jsonResponse.user.created_at` | `string` \| `Date` |
| `jsonResponse.user.organization_id` | `string` |
| `jsonResponse.user.user_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/get"`` |

#### Defined in

[src/seam-os/routes.ts:854](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L854)

___

### /users/list

• **/users/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id?` | `string` |
| `jsonBody.user_group_id?` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.users` | { `created_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/list"`` |

#### Defined in

[src/seam-os/routes.ts:871](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L871)

___

### /users/update

• **/users/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.first_name?` | `string` |
| `jsonBody.last_name?` | `string` |
| `jsonBody.title?` | `string` |
| `jsonBody.user_id?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/update"`` |

#### Defined in

[src/seam-os/routes.ts:889](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L889)
