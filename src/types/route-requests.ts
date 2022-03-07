import { CommonDeviceProperties, Provider } from "./models"

export interface ConnectWebviewCreateRequest {
  accepted_providers: Provider[]
}

export type AccessCodeCreateOngoingRequest = {
  device_id: string
  name: string
  code?: string
}

export type AccessCodeCreateScheduledRequest = {
  device_id: string
  name: string
  code?: string
  starts_at: string | Date
  ends_at: string | Date
}

export type AccessCodeCreateRequest =
  | AccessCodeCreateOngoingRequest
  | AccessCodeCreateScheduledRequest

export type AccessCodeDeleteRequest = {
  device_id?: string
  access_code_id: string
}

export type DeviceUpdateRequest = {
  device_id: string
  properties?: Partial<CommonDeviceProperties>
  name?: string
  location?: object
}
