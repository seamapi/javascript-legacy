// @Seam devs: This mapping is generated from the seamos-backend project, run
// `yarn build:route-types` to update it
// TODO automatically pull this from @seamapi/public-types
export interface Routes {
  "/health": {
    route: "/health"
    method: "GET"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    jsonResponse: {}
  }
  "/access_codes/create": {
    route: "/access_codes/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name?: string | undefined
      device_id: string
      starts_at?: (string | Date) | undefined
      ends_at?: (string | Date) | undefined
      code?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      access_code:
        | {
            access_code_id: string
            code: string
            type: "ongoing"
            created_at: string | Date
          }
        | {
            access_code_id: string
            code: string
            type: "time_bound"
            created_at: string | Date
            starts_at: string | Date
            ends_at: string | Date
          }
      ok: boolean
    }
  }
  "/access_codes/delete": {
    route: "/access_codes/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id: string
    }
    jsonResponse: {
      ok: boolean
    }
  }
  "/access_codes/get": {
    route: "/access_codes/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id: string
    }
    jsonResponse: {
      access_code:
        | {
            access_code_id: string
            code: string
            type: "ongoing"
            created_at: string | Date
          }
        | {
            access_code_id: string
            code: string
            type: "time_bound"
            created_at: string | Date
            starts_at: string | Date
            ends_at: string | Date
          }
      ok: boolean
    }
  }
  "/access_codes/list": {
    route: "/access_codes/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      user_id?: string | undefined
      device_id?: string | undefined
      device_group_id?: string | undefined
    }
    jsonResponse: {
      access_codes: (
        | {
            access_code_id: string
            code: string
            type: "ongoing"
            created_at: string | Date
          }
        | {
            access_code_id: string
            code: string
            type: "time_bound"
            created_at: string | Date
            starts_at: string | Date
            ends_at: string | Date
          }
      )[]
      ok: boolean
    }
  }
  "/access_codes/update": {
    route: "/access_codes/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      access_code_id: string
      name?: string | undefined
      code?: string | undefined
      starts_at?: (string | Date) | undefined
      ends_at?: (string | Date) | undefined
      device_id?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/access_passes/create": {
    route: "/access_passes/create"
    method: "POST"
    queryParams: {}
    jsonBody:
      | {
          name: string
          starts_at?: (string | Date) | undefined
          ends_at?: (string | Date) | undefined
          device_id: string
        }
      | {
          name: string
          starts_at?: (string | Date) | undefined
          ends_at?: (string | Date) | undefined
          device_ids: string[]
        }
      | {
          name: string
          starts_at?: (string | Date) | undefined
          ends_at?: (string | Date) | undefined
          device_group_id: string
        }
    commonParams: {}
    jsonResponse: {
      access_pass: {
        access_pass_id: string
        access_methods: (
          | {
              access_method: "remote_unlock"
              device_id: string
            }
          | {
              access_method: "access_code"
              device_id: string
              code: string
            }
        )[]
      }
      ok: boolean
    }
  }
  "/access_passes/delete": {
    route: "/access_passes/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_pass_id: string
    }
    jsonResponse: {
      ok: boolean
    }
  }
  "/access_passes/get": {
    route: "/access_passes/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_pass_id: string
    }
    jsonResponse: {
      access_pass: {
        access_pass_id: string
        access_methods: (
          | {
              access_method: "remote_unlock"
              device_id: string
            }
          | {
              access_method: "access_code"
              device_id: string
              code: string
            }
        )[]
      }
      ok: boolean
    }
  }
  "/access_passes/list": {
    route: "/access_passes/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      user_id?: string | undefined
    }
    jsonResponse: {
      access_passes: {
        access_pass_id: string
        access_methods: (
          | {
              access_method: "remote_unlock"
              device_id: string
            }
          | {
              access_method: "access_code"
              device_id: string
              code: string
            }
        )[]
      }[]
      ok: boolean
    }
  }
  "/access_passes/update": {
    route: "/access_passes/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      name: string
      starts_at?: (string | Date) | undefined
      ends_at?: (string | Date) | undefined
      device_id?: string[] | undefined
      device_ids?: string[] | undefined
      device_group_id?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/buildings/add_device": {
    route: "/buildings/add_device"
    method: "POST"
    queryParams: {}
    jsonBody: {
      building_id: string
      device_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/buildings/add_user": {
    route: "/buildings/add_user"
    method: "POST"
    queryParams: {}
    jsonBody:
      | {
          building_id: string
          user_id: string
        }
      | {
          building_id: string
          email: string
        }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/buildings/create": {
    route: "/buildings/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      owner_id: string
      name: string
      location?: any | undefined
    }
    commonParams: {}
    jsonResponse: {
      building: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/buildings/delete": {
    route: "/buildings/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      building_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/buildings/get": {
    route: "/buildings/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
    }
    jsonResponse: {
      building: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/buildings/list": {
    route: "/buildings/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    jsonResponse: {
      buildings: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        created_at: string | Date
      }[]
      ok: boolean
    }
  }
  "/buildings/remove_device": {
    route: "/buildings/remove_device"
    method: "POST" | "DELETE"
    queryParams: {}
    jsonBody: {
      building_id: string
      device_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/buildings/remove_user": {
    route: "/buildings/remove_user"
    method: "POST" | "DELETE"
    queryParams: {}
    jsonBody: {
      building_id: string
      user_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/buildings/update": {
    route: "/buildings/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      building_id: string
      name?: string | undefined
      owner_id?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/device_groups/add_device": {
    route: "/device_groups/add_device"
    method: "POST"
    queryParams: {}
    jsonBody: {
      device_group_id: string
      device_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/device_groups/create": {
    route: "/device_groups/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
    }
    commonParams: {}
    jsonResponse: {
      device_group: {
        device_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/device_groups/delete": {
    route: "/device_groups/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      device_group_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/device_groups/get": {
    route: "/device_groups/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      device_group_id: string
    }
    commonParams: {}
    jsonResponse: {
      device_group: {
        device_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/device_groups/list": {
    route: "/device_groups/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    jsonResponse: {
      device_groups: {
        device_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }[]
      ok: boolean
    }
  }
  "/device_groups/update": {
    route: "/device_groups/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      device_group_id: string
      name?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/devices/delete": {
    route: "/devices/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      device_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/devices/get": {
    route: "/devices/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody:
      | {
          device_id?: string | undefined
        }
      | {
          device_name: string
          building_id: string
        }
    commonParams: {}
    jsonResponse: {
      device: {
        device_id: string
        name: string
        device_type: string
        connected_account_id: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/devices/list": {
    route: "/devices/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      building_id?: string | undefined
      user_group_id?: string | undefined
      user_id?: string | undefined
      has_no_building?: boolean | undefined
    }
    commonParams: {}
    jsonResponse: {
      devices: {
        device_id: string
        name: string
        device_type: string
        connected_account_id: string
        created_at: string | Date
      }[]
      ok: boolean
    }
  }
  "/devices/update": {
    route: "/devices/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      device_id: string
      name?: string | undefined
      location?: {} | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/login_portals/create": {
    route: "/login_portals/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      accepted_providers?: string[] | undefined
      device_selection_mode?: "none" | "single" | "multiple"
      custom_redirect_url?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      login_portal: {
        connected_webview_id: string
        connected_account_id: string | null
        organization_id: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/login_portals/delete": {
    route: "/login_portals/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      login_portal_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/login_portals/get": {
    route: "/login_portals/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      login_portal_id: string
    }
    commonParams: {}
    jsonResponse: {
      login_portal: {
        connected_webview_id: string
        connected_account_id: string | null
        organization_id: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/login_portals/list": {
    route: "/login_portals/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      since?: (string | Date) | undefined
    }
    commonParams: {}
    jsonResponse: {
      connect_webviews: {
        connected_webview_id: string
        connected_account_id: string | null
        organization_id: string
        created_at: string | Date
      }[]
      ok: boolean
    }
  }
  "/organizations/create": {
    route: "/organizations/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
    }
    commonParams: {}
    jsonResponse: {
      organization: {
        organization_id: string
        name: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/organizations/get": {
    route: "/organizations/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    jsonResponse: {
      organization: {
        organization_id: string
        name: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/organizations/invite_user": {
    route: "/organizations/invite_user"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      email: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/organizations/remove_user": {
    route: "/organizations/remove_user"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      user_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/organizations/update": {
    route: "/organizations/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      name?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/user_groups/add_user": {
    route: "/user_groups/add_user"
    method: "POST"
    queryParams: {}
    jsonBody: {
      user_group_id: string
      user_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/user_groups/create": {
    route: "/user_groups/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
    }
    commonParams: {}
    jsonResponse: {
      user_group: {
        user_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/user_groups/delete": {
    route: "/user_groups/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      user_group_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/user_groups/get": {
    route: "/user_groups/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      user_group_id: string
    }
    commonParams: {}
    jsonResponse: {
      user_group: {
        user_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/user_groups/list": {
    route: "/user_groups/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    jsonResponse: {
      user_groups: {
        user_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }[]
      ok: boolean
    }
  }
  "/user_groups/remove_user": {
    route: "/user_groups/remove_user"
    method: "POST" | "DELETE" | "PATCH"
    queryParams: {}
    jsonBody: {
      user_group_id: string
      user_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/user_groups/update": {
    route: "/user_groups/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      user_group_id: string
      name?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/users/delete": {
    route: "/users/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      user_id: string
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
  "/users/get": {
    route: "/users/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      user_id: string
    }
    commonParams: {}
    jsonResponse: {
      user: {
        user_id: string
        organization_id: string
        created_at: string | Date
      }
      ok: boolean
    }
  }
  "/users/list": {
    route: "/users/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      user_group_id?: string | undefined
      building_id?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      users: {
        user_id: string
        organization_id: string
        created_at: string | Date
      }[]
      ok: boolean
    }
  }
  "/users/update": {
    route: "/users/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      user_id?: string | undefined
      first_name?: string | undefined
      last_name?: string | undefined
      title?: string | undefined
    }
    commonParams: {}
    jsonResponse: {
      ok: boolean
    }
  }
}

export type RouteResponse<Path extends keyof Routes> =
  Routes[Path]["jsonResponse"]

export type RouteRequestBody<Path extends keyof Routes> =
  Routes[Path]["jsonBody"] & Routes[Path]["commonParams"]

export type RouteRequestParams<Path extends keyof Routes> =
  Routes[Path]["queryParams"] & Routes[Path]["commonParams"]
