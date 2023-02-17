export interface Routes {
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
    formData: {}
    jsonResponse: {
      access_code:
        | {
            access_code_id: string
            code: string | null
            status: "setting" | "set" | "unset" | "removing"
            created_at: string | Date
            type: "ongoing"
            starts_at: null
            ends_at: null
          }
        | {
            access_code_id: string
            code: string | null
            status: "setting" | "set" | "unset" | "removing"
            created_at: string | Date
            type: "time_bound"
            starts_at: string
            ends_at: string
          }
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
    formData: {}
    jsonResponse: {}
  }
  "/access_codes/get": {
    route: "/access_codes/get"
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
            code: string | null
            status: "setting" | "set" | "unset" | "removing"
            created_at: string | Date
            type: "ongoing"
            starts_at: null
            ends_at: null
          }
        | {
            access_code_id: string
            code: string | null
            status: "setting" | "set" | "unset" | "removing"
            created_at: string | Date
            type: "time_bound"
            starts_at: string
            ends_at: string
          }
    }
  }
  "/access_codes/list": {
    route: "/access_codes/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      device_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      access_codes: (
        | {
            access_code_id: string
            code: string | null
            status: "setting" | "set" | "unset" | "removing"
            created_at: string | Date
            type: "ongoing"
            starts_at: null
            ends_at: null
          }
        | {
            access_code_id: string
            code: string | null
            status: "setting" | "set" | "unset" | "removing"
            created_at: string | Date
            type: "time_bound"
            starts_at: string
            ends_at: string
          }
      )[]
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
    formData: {}
    jsonResponse: {}
  }
  "/access_passes/create": {
    route: "/access_passes/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
      building_id?: string | undefined
      building_ids?: string[] | undefined
      can_use_access_code?: boolean
      can_use_remote_unlock?: boolean
      grant_mixed_building_device_access?: boolean | undefined
      starts_at?: (string | Date) | undefined
      ends_at?: (string | Date) | undefined
      devices?:
        | {
            device_id: string
            can_use_access_code?: boolean | undefined
            can_use_remote_unlock?: boolean | undefined
          }[]
        | undefined
      device_group_id?: string | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      access_pass: {
        access_pass_id: string
        organization_id: string
        access_pass_name: string
        url: string
        starts_at: string | Date
        ends_at: (string | Date) | null
        does_not_end: boolean
        last_used_at: (string | Date) | null
        created_at: string | Date
      }
    }
  }
  "/access_passes/create_from_access_code": {
    route: "/access_passes/create_from_access_code"
    method: "POST"
    queryParams: {}
    jsonBody: {
      access_code_id: string
      can_use_remote_unlock?: boolean
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      access_pass: {
        access_pass_id: string
        organization_id: string
        access_pass_name: string
        url: string
        starts_at: string | Date
        ends_at: (string | Date) | null
        does_not_end: boolean
        last_used_at: (string | Date) | null
        created_at: string | Date
      }
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
    formData: {}
    jsonResponse: {}
  }
  "/access_passes/get": {
    route: "/access_passes/get"
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
        organization_id: string
        access_pass_name: string
        url: string
        starts_at: string | Date
        ends_at: (string | Date) | null
        does_not_end: boolean
        last_used_at: (string | Date) | null
        created_at: string | Date
      }
    }
  }
  "/access_passes/get_count_summary": {
    route: "/access_passes/get_count_summary"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      start: string | Date
      end?: (string | Date) | undefined
      access_pass_id: string
    }
    formData: {}
    jsonResponse: {
      access_pass_counts: {
        total_uses: number
        uses_in_period: number
      }
    }
  }
  "/access_passes/list": {
    route: "/access_passes/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      device_id?: string | undefined
      query?: string | undefined
    }
    formData: {}
    jsonResponse: {
      access_passes: {
        access_pass_id: string
        organization_id: string
        access_pass_name: string
        url: string
        starts_at: string | Date
        ends_at: (string | Date) | null
        does_not_end: boolean
        last_used_at: (string | Date) | null
        created_at: string | Date
      }[]
    }
  }
  "/access_passes/update": {
    route: "/access_passes/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody:
      | {
          access_pass_id: string
          starts_at?: (string | Date) | undefined
          ends_at?: ((string | Date) | null) | undefined
          devices?:
            | {
                device_id: string
                can_use_access_code?: boolean | undefined
                can_use_remote_unlock?: boolean | undefined
              }[]
            | undefined
          device_group_id?: string | undefined
          access_method_flags?:
            | {
                can_use_access_code: boolean
                can_use_remote_unlock: boolean
              }
            | undefined
        }
      | {
          access_pass_id: string
          starts_at?: (string | Date) | undefined
          ends_at?: ((string | Date) | null) | undefined
          devices: {
            device_id: string
            can_use_access_code?: boolean | undefined
            can_use_remote_unlock?: boolean | undefined
          }[]
        }
      | {
          access_pass_id: string
          starts_at?: (string | Date) | undefined
          ends_at?: ((string | Date) | null) | undefined
          device_group_id: string
          can_use_access_code: boolean
          can_use_remote_unlock: boolean
        }
    commonParams: {}
    formData: {}
    jsonResponse: {}
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
    formData: {}
    jsonResponse: {}
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
    formData: {}
    jsonResponse: {}
  }
  "/buildings/create": {
    route: "/buildings/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
      location?:
        | {
            [x: string]: any
          }
        | undefined
      timezone: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      building: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        timezone: string
        created_at: string | Date
      }
    }
  }
  "/buildings/delete": {
    route: "/buildings/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/buildings/get": {
    route: "/buildings/get"
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
        timezone: string
        created_at: string | Date
      }
    }
  }
  "/buildings/get_count_summary": {
    route: "/buildings/get_count_summary"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      start?: (string | Date) | undefined
      end?: (string | Date) | undefined
      building_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      building_count_summary: {
        devices: number
        incidents: number
        active_access_passes: number
        low_battery_incidents: number
        offline_account_incidents: number
        device_incidents: number
      }
    }
  }
  "/buildings/list": {
    route: "/buildings/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      query?: string | undefined
    }
    formData: {}
    jsonResponse: {
      buildings: {
        building_id: string
        organization_id: string
        name: string
        location?: any | null
        timezone: string
        created_at: string | Date
      }[]
    }
  }
  "/buildings/list_count_summaries": {
    route: "/buildings/list_count_summaries"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_ids: string[]
    }
    formData: {}
    jsonResponse: {
      building_count_summaries: {
        devices: number
        incidents: number
        active_access_passes: number
      }[]
    }
  }
  "/buildings/remove_device": {
    route: "/buildings/remove_device"
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
  "/buildings/remove_user": {
    route: "/buildings/remove_user"
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
  "/buildings/update": {
    route: "/buildings/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id: string
      name?: string | undefined
      timezone?: string | undefined
    }
    formData: {}
    jsonResponse: {}
  }
  "/buildings/update_user_role": {
    route: "/buildings/update_user_role"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_id: string
      building_id: string
      building_roles: ("building:manager" | "building:operator")[]
    }
    formData: {}
    jsonResponse: {}
  }
  "/device_groups/create": {
    route: "/device_groups/create"
    method: "POST"
    queryParams: {}
    jsonBody: {
      name: string
      device_ids?: string[] | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      device_group: {
        device_group_id: string
        organization_id: string
        name: string
        device_ids: string[]
        created_at: string | Date
      }
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
    formData: {}
    jsonResponse: {}
  }
  "/device_groups/get": {
    route: "/device_groups/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_group_id: string
    }
    formData: {}
    jsonResponse: {
      device_group: {
        device_group_id: string
        organization_id: string
        name: string
        device_ids: string[]
        created_at: string | Date
      }
    }
  }
  "/device_groups/list": {
    route: "/device_groups/list"
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
        device_ids: string[]
        created_at: string | Date
      }[]
    }
  }
  "/device_groups/update": {
    route: "/device_groups/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {
      device_group_id: string
      name?: string | undefined
      device_ids?: string[] | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/devices/delete": {
    route: "/devices/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/devices/get": {
    route: "/devices/get"
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
        created_at: string
        building_id: string | null
        properties: {
          [x: string]: unknown
        }
        warnings: unknown[]
        errors: unknown[]
      }
    }
  }
  "/devices/get_count_summary": {
    route: "/devices/get_count_summary"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
    }
    formData: {}
    jsonResponse: {
      device_count_summary: {
        active_access_passes: number
      }
    }
  }
  "/devices/list": {
    route: "/devices/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      device_ids?: string[] | undefined
      linked_account_id?: string | undefined
      user_group_id?: string | undefined
      user_id?: string | undefined
      has_no_building?: boolean | undefined
      query?: string | undefined
    }
    formData: {}
    jsonResponse: {
      devices: {
        device_id: string
        name: string
        device_type: string
        linked_account_id: string
        created_at: string
        building_id: string | null
        properties: {
          [x: string]: unknown
        }
        warnings: unknown[]
        errors: unknown[]
      }[]
    }
  }
  "/devices/list_counts": {
    route: "/devices/list_counts"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      queries: string[]
      building_id?: string | undefined
      linked_account_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      device_counts: {
        query: string
        count: number
      }[]
    }
  }
  "/devices/update": {
    route: "/devices/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody:
      | {
          name?: string | undefined
          location?: {} | undefined
          building_id?: string | undefined
          device_id: string
        }
      | {
          name?: string | undefined
          location?: {} | undefined
          building_id?: string | undefined
          device_ids: string[]
        }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/events/list": {
    route: "/events/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      building_id?: string | undefined
      device_id?: string | undefined
      between?: (string | Date)[] | undefined
      query?: string | undefined
    }
    formData: {}
    jsonResponse: {
      events: {
        event_id: string
        event_type: string
        occurred_at: string
        device_id: string | null
        building_id: string | null
        organization_id: string
        created_at: string
      }[]
    }
  }
  "/health": {
    route: "/health"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/incidents/list": {
    route: "/incidents/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id?: string | undefined
      access_pass_id?: string | undefined
      building_id?: string | undefined
      device_id?: string | undefined
      device_ids?: string[] | undefined
      linked_account_id?: string | undefined
      is_resolved?: boolean | undefined
      between?: (string | Date)[] | undefined
      query?: string | undefined
    }
    formData: {}
    jsonResponse: {
      incidents: {
        incident_id: string
        organization_id: string
        access_code_id: string | null
        access_pass_id: string | null
        building_id: string | null
        device_id: string | null
        incident_type: string
        linked_account_id: string | null
        started_at: string | Date
        ended_at: (string | Date) | null
        is_resolved: boolean
        created_at: string | Date
      }[]
    }
  }
  "/linked_accounts/get": {
    route: "/linked_accounts/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      linked_account_id: string
    }
    formData: {}
    jsonResponse: {
      linked_account: {
        linked_account_id: string
        organization_id: string
        device_count: number
        account_type: string
        user_identifier?: any
        ext_seam_connected_account_id: string
        errors: {
          message: string
          error_code: string
        }[]
        warnings: {
          message: string
          warning_code: string
        }[]
        created_at: string | Date
      }
    }
  }
  "/linked_accounts/get_counts": {
    route: "/linked_accounts/get_counts"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      queries: string[]
    }
    formData: {}
    jsonResponse: {
      counts: {
        query: string
        count: number
      }[]
    }
  }
  "/linked_accounts/list": {
    route: "/linked_accounts/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      query?: string | undefined
      since?: (string | Date) | undefined
    }
    formData: {}
    jsonResponse: {
      linked_accounts: {
        linked_account_id: string
        organization_id: string
        device_count: number
        account_type: string
        user_identifier?: any
        ext_seam_connected_account_id: string
        errors: {
          message: string
          error_code: string
        }[]
        warnings: {
          message: string
          warning_code: string
        }[]
        created_at: string | Date
      }[]
    }
  }
  "/locks/lock": {
    route: "/locks/lock"
    method: "POST"
    queryParams: {}
    jsonBody: {
      access_pass_id?: string | undefined
      device_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/locks/unlock": {
    route: "/locks/unlock"
    method: "POST"
    queryParams: {}
    jsonBody: {
      access_pass_id?: string | undefined
      device_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
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
    formData: {}
    jsonResponse: {
      login_portal: {
        login_portal_id: string
        organization_id: string
        view_url: string
        login_successful: boolean
        status: "pending" | "authorized"
        linked_account_id: string | null
        created_at: string | Date
      }
    }
  }
  "/login_portals/delete": {
    route: "/login_portals/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      login_portal_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/login_portals/get": {
    route: "/login_portals/get"
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
        login_successful: boolean
        status: "pending" | "authorized"
        linked_account_id: string | null
        created_at: string | Date
      }
    }
  }
  "/login_portals/list": {
    route: "/login_portals/list"
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
        login_successful: boolean
        status: "pending" | "authorized"
        linked_account_id: string | null
        created_at: string | Date
      }[]
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
    formData: {}
    jsonResponse: {
      organization: {
        organization_id: string
        name: string
        created_at: string | Date
      }
    }
  }
  "/organizations/get": {
    route: "/organizations/get"
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
  "/organizations/get_count_summary": {
    route: "/organizations/get_count_summary"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      between: (string | Date)[]
      organization_id: string
    }
    formData: {}
    jsonResponse: {
      organization_counts: {
        total_active_access_passes: number
        incidents_in_period: number
        total_online_devices: number
        total_devices: number
        total_buildings: number
        total_linked_accounts: number
        total_super_admins: number
        total_admins: number
        total_members: number
      }
    }
  }
  "/organizations/invite_user": {
    route: "/organizations/invite_user"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams:
      | {
          user_id?: string | undefined
          email: string
          role: "org:superadmin" | "org:admin" | "org:member"
        }
      | {
          user_id: string
          email?: string | undefined
          role: "org:superadmin" | "org:admin" | "org:member"
        }
    formData: {}
    jsonResponse: {}
  }
  "/organizations/list": {
    route: "/organizations/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      query?: string | undefined
    }
    formData: {}
    jsonResponse: {
      organizations: {
        organization_id: string
        name: string
        created_at: string | Date
      }[]
    }
  }
  "/organizations/pending_users/delete": {
    route: "/organizations/pending_users/delete"
    method: "POST" | "DELETE"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      organization_invitation_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/organizations/pending_users/list": {
    route: "/organizations/pending_users/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      pending_users: {
        organization_invitation_id: string
        organization_id: string
        email: string | null
        user_id: string | null
        status: "pending" | "accepted" | "declined"
        created_at: string | Date
      }[]
    }
  }
  "/organizations/pending_users/resend_invitation": {
    route: "/organizations/pending_users/resend_invitation"
    method: "POST"
    queryParams: {}
    jsonBody: {
      organization_invitation_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  "/organizations/pending_users/update": {
    route: "/organizations/pending_users/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      organization_invitation_id: string
      role: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/organizations/remove_user": {
    route: "/organizations/remove_user"
    method: "POST" | "DELETE"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/organizations/update": {
    route: "/organizations/update"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      name?: string | undefined
      ext_seam_connect_api_key?: string | undefined
    }
    formData: {}
    jsonResponse: {}
  }
  "/organizations/update_user_role": {
    route: "/organizations/update_user_role"
    method: "POST" | "PATCH"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_id: string
      organization_roles?:
        | ("org:superadmin" | "org:admin" | "org:member")[]
        | undefined
      can_view_all_buildings?: boolean | undefined
    }
    formData: {}
    jsonResponse: {}
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
    formData: {}
    jsonResponse: {}
  }
  "/user_groups/create": {
    route: "/user_groups/create"
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
  "/user_groups/delete": {
    route: "/user_groups/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_group_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/user_groups/get": {
    route: "/user_groups/get"
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
  "/user_groups/list": {
    route: "/user_groups/list"
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
  "/user_groups/remove_user": {
    route: "/user_groups/remove_user"
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
  "/user_groups/update": {
    route: "/user_groups/update"
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
  "/users/delete": {
    route: "/users/delete"
    method: "DELETE" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  "/users/get": {
    route: "/users/get"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_id: string
    }
    formData: {}
    jsonResponse: {
      user: {
        user_id: string
        email: string | null
        first_name: string | null
        last_name: string | null
        title: string | null
        organization_id: string
        created_at: string | Date
      }
    }
  }
  "/users/get_building_roles": {
    route: "/users/get_building_roles"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_id: string
    }
    formData: {}
    jsonResponse: {
      user_building_roles: {
        building_id: string
        building_name: string
        building_roles: ("building:manager" | "building:operator")[]
        created_at: string
      }[]
    }
  }
  "/users/list": {
    route: "/users/list"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_id?: string | undefined
      user_group_id?: string | undefined
      building_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      users: {
        user_id: string
        email: string | null
        first_name: string | null
        last_name: string | null
        title: string | null
        organization_id: string
        created_at: string | Date
      }[]
    }
  }
  "/users/list_organization_roles": {
    route: "/users/list_organization_roles"
    method: "GET" | "POST"
    queryParams: {}
    jsonBody: {}
    commonParams: {
      user_ids?: string[] | undefined
    }
    formData: {}
    jsonResponse: {
      user_organization_roles: {
        user_id: string
        organization_roles: ("org:superadmin" | "org:admin" | "org:member")[]
        can_view_all_buildings: boolean
      }[]
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
