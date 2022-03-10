import { Provider } from "./models"

export interface ConnectWebviewCreateRequest {
  accepted_providers: Provider[]
}

export interface AccessCodeCreateBaseRequest {
  device_id: string
  name?: string
  code?: string
}

export type AccessCodeCreateOngoingRequest = AccessCodeCreateBaseRequest

export interface AccessCodeCreateScheduledRequest
  extends AccessCodeCreateBaseRequest {
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
