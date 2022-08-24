import { CommonDeviceProperties, Provider } from "./models"

export interface ConnectWebviewCreateRequest {
  accepted_providers: Provider[]
}

export interface DevicesListRequest {
  connected_account_id?: string
  connect_webview_id?: string
  device_type?: string
}

export interface AccessCodeUpdateBaseRequest {
  device_id?: string
  access_code_id: string
}

export type AccessCodeUpdateOngoingRequest = {
  name?: string
  code?: string
  starts_at?: string
  ends_at?: string
} & AccessCodeUpdateBaseRequest
export type AccessCodeUpdateScheduledRequest = {
  name?: string
  code?: string
  starts_at?: string
  ends_at?: string
} & AccessCodeUpdateBaseRequest
export type AccessCodeUpdateRequest =
  | AccessCodeUpdateOngoingRequest
  | AccessCodeUpdateScheduledRequest

export type AccessCodeDeleteRequest = {
  device_id?: string
  access_code_id: string
}

export type DeviceGetRequest =
  | {
      device_id: string
    }
  | {
      name: string
    }

export type DeviceUpdateRequest = {
  device_id: string
  properties?: Partial<CommonDeviceProperties>
  name?: string
  location?: object
}

export type WebhookGetRequest = {
  webhook_id: string
}

export type WebhookCreateRequest = {
  url: string
}

export interface EventsListRequest {
  since?: string | Date
  device_ids?: string[]
  device_id?: string
  event_types?: string[]
  event_type?: string
}
