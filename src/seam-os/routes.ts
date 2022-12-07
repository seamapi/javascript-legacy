export interface Routes {
  "/api/health": {
    route: "/api/health"
    method: "GET"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/internal/organizations/delete": {
    route: "/api/internal/organizations/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      organization_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/internal/organizations/list": {
    route: "/api/internal/organizations/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      organizations: {
        organization_id: string
        name: string
        created_at: string | Date
      }[]
    }
  }
  "/api/internal/user_sessions/create": {
    route: "/api/internal/user_sessions/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      auth0_id_token: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      session: {
        user_session_id: string
        organization_id: string
        session_key?: string | undefined
        expires_at: string | Date
        created_at: string | Date
      }
    }
  }
  "/api/internal/users/reset-password": {
    route: "/api/internal/users/reset-password"
    method: "POST"
    queryParams: {}
    jsonBody: {
      user_id?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/access_codes/create": {
    route: "/api/access_codes/create"
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
    formData: {}
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
    }
  }
  "/api/access_codes/delete": {
    route: "/api/access_codes/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/access_codes/get": {
    route: "/api/access_codes/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id: string
    }
    formData: {}
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
    }
  }
  "/api/access_codes/list": {
    route: "/api/access_codes/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      user_id?: string | undefined
      device_id?: string | undefined
      device_group_id?: string | undefined
    }
    formData: {}
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
    }
  }
  "/api/access_codes/update": {
    route: "/api/access_codes/update"
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
    formData: {}
    jsonResponse: {}
  }
  "/api/device_groups/add_device": {
    route: "/api/device_groups/add_device"
    method: "POST"
    queryParams: {}
    jsonBody: {
      device_group_id: string
      device_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/device_groups/create": {
    route: "/api/device_groups/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      device_group: {
        device_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
    }
  }
  "/api/device_groups/delete": {
    route: "/api/device_groups/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      device_group_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/device_groups/get": {
    route: "/api/device_groups/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      device_group_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      device_group: {
        device_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
    }
  }
  "/api/device_groups/list": {
    route: "/api/device_groups/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      device_groups: {
        device_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }[]
    }
  }
  "/api/device_groups/update": {
    route: "/api/device_groups/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      device_group_id: string
      name?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/devices/delete": {
    route: "/api/devices/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/devices/get": {
    route: "/api/devices/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id?: string | undefined
      device_name?: string | undefined
      building_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      device: {
        device_id: string
        name: string
        device_type: string
        linked_account_id: string
        created_at: string | Date
        building_id: string | null
        properties: {
          [x: string]: unknown
        }
        errors: unknown[]
      }
    }
  }
  "/api/devices/list": {
    route: "/api/devices/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      user_group_id?: string | undefined
      user_id?: string | undefined
      has_no_building?: boolean | undefined
    }
    formData: {}
    jsonResponse: {
      devices: {
        device_id: string
        name: string
        device_type: string
        linked_account_id: string
        created_at: string | Date
        building_id: string | null
        properties: {
          [x: string]: unknown
        }
        errors: unknown[]
      }[]
    }
  }
  "/api/devices/update": {
    route: "/api/devices/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      device_id: string
      name?: string | undefined
      location?: {} | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/access_passes/create": {
    route: "/api/access_passes/create"
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
    formData: {}
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
    }
  }
  "/api/access_passes/delete": {
    route: "/api/access_passes/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_pass_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/access_passes/get": {
    route: "/api/access_passes/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_pass_id: string
    }
    formData: {}
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
    }
  }
  "/api/access_passes/list": {
    route: "/api/access_passes/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      user_id?: string | undefined
    }
    formData: {}
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
    }
  }
  "/api/access_passes/update": {
    route: "/api/access_passes/update"
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
    formData: {}
    jsonResponse: {}
  }
  "/api/buildings/add_device": {
    route: "/api/buildings/add_device"
    method: "POST"
    queryParams: {}
    jsonBody: {
      building_id: string
      device_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/buildings/add_user": {
    route: "/api/buildings/add_user"
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
    formData: {}
    jsonResponse: {}
  }
  "/api/buildings/create": {
    route: "/api/buildings/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      owner_id: string
      name: string
      location?:
        | {
            [x: string]: any
          }
        | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      building: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        created_at: string | Date
      }
    }
  }
  "/api/buildings/delete": {
    route: "/api/buildings/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/buildings/get": {
    route: "/api/buildings/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
    }
    formData: {}
    jsonResponse: {
      building: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        created_at: string | Date
      }
    }
  }
  "/api/buildings/list": {
    route: "/api/buildings/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      buildings: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        created_at: string | Date
      }[]
    }
  }
  "/api/buildings/remove_device": {
    route: "/api/buildings/remove_device"
    method: "POST" | "DELETE"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
      device_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/buildings/remove_user": {
    route: "/api/buildings/remove_user"
    method: "POST" | "DELETE"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
      user_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/buildings/update": {
    route: "/api/buildings/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
      name?: string | undefined
      owner_id?: string | undefined
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/organizations/create": {
    route: "/api/organizations/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      organization: {
        organization_id: string
        name: string
        created_at: string | Date
      }
    }
  }
  "/api/organizations/get": {
    route: "/api/organizations/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      organization_id: string
    }
    formData: {}
    jsonResponse: {
      organization: {
        organization_id: string
        name: string
        created_at: string | Date
      }
    }
  }
  "/api/organizations/invite_user": {
    route: "/api/organizations/invite_user"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      email: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/organizations/remove_user": {
    route: "/api/organizations/remove_user"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      user_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/organizations/update": {
    route: "/api/organizations/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      name?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/login_portals/create": {
    route: "/api/login_portals/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      accepted_providers?: string[] | undefined
      device_selection_mode?: "none" | "single" | "multiple"
      custom_redirect_url?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      login_portal: {
        login_portal_id: string
        organization_id: string
        view_url: string
        created_at: string | Date
      }
    }
  }
  "/api/login_portals/delete": {
    route: "/api/login_portals/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      login_portal_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/login_portals/get": {
    route: "/api/login_portals/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      login_portal_id: string
    }
    formData: {}
    jsonResponse: {
      login_portal: {
        login_portal_id: string
        organization_id: string
        view_url: string
        created_at: string | Date
      }
    }
  }
  "/api/login_portals/list": {
    route: "/api/login_portals/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      since?: (string | Date) | undefined
    }
    formData: {}
    jsonResponse: {
      login_portals: {
        login_portal_id: string
        organization_id: string
        view_url: string
        created_at: string | Date
      }[]
    }
  }
  "/api/user_groups/add_user": {
    route: "/api/user_groups/add_user"
    method: "POST"
    queryParams: {}
    jsonBody: {
      user_group_id: string
      user_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/user_groups/create": {
    route: "/api/user_groups/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      user_group: {
        user_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
    }
  }
  "/api/user_groups/delete": {
    route: "/api/user_groups/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_group_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/user_groups/get": {
    route: "/api/user_groups/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_group_id: string
    }
    formData: {}
    jsonResponse: {
      user_group: {
        user_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }
    }
  }
  "/api/user_groups/list": {
    route: "/api/user_groups/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      user_groups: {
        user_group_id: string
        organization_id: string
        name: string
        created_at: string | Date
      }[]
    }
  }
  "/api/user_groups/remove_user": {
    route: "/api/user_groups/remove_user"
    method: "POST" | "DELETE" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_group_id: string
      user_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/api/user_groups/update": {
    route: "/api/user_groups/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      user_group_id: string
      name?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/users/delete": {
    route: "/api/users/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {
      user_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/api/users/get": {
    route: "/api/users/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      user_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      user: {
        user_id: string
        organization_id: string
        created_at: string | Date
      }
    }
  }
  "/api/users/list": {
    route: "/api/users/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {
      user_group_id?: string | undefined
      building_id?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      users: {
        user_id: string
        organization_id: string
        created_at: string | Date
      }[]
    }
  }
  "/api/users/update": {
    route: "/api/users/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      user_id?: string | undefined
      first_name?: string | undefined
      last_name?: string | undefined
      title?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
}

export type RouteResponse<Path extends keyof Routes> =
  Routes[Path]["jsonResponse"]

export type RouteRequestBody<Path extends keyof Routes> =
  Routes[Path]["jsonBody"] & Routes[Path]["commonParams"]

export type RouteRequestParams<Path extends keyof Routes> =
  Routes[Path]["queryParams"] & Routes[Path]["commonParams"]
