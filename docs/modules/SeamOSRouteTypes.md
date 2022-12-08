[seamapi](../README.md) / [Exports](../modules.md) / SeamOSRouteTypes

# Namespace: SeamOSRouteTypes

## Table of contents

### Interfaces

- [Routes](../interfaces/SeamOSRouteTypes.Routes.md)

### Type aliases

- [RouteRequestBody](SeamOSRouteTypes.md#routerequestbody)
- [RouteRequestParams](SeamOSRouteTypes.md#routerequestparams)
- [RouteResponse](SeamOSRouteTypes.md#routeresponse)

## Type aliases

### RouteRequestBody

Ƭ **RouteRequestBody**<`Path`\>: [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`Path`][``"jsonBody"``] & [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`Path`][``"commonParams"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Defined in

[src/seam-os/routes.ts:940](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L940)

___

### RouteRequestParams

Ƭ **RouteRequestParams**<`Path`\>: [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`Path`][``"queryParams"``] & [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`Path`][``"commonParams"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Defined in

[src/seam-os/routes.ts:943](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L943)

___

### RouteResponse

Ƭ **RouteResponse**<`Path`\>: [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`Path`][``"jsonResponse"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Defined in

[src/seam-os/routes.ts:937](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L937)
