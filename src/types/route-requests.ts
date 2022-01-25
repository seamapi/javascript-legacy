import { Provider } from "./models"

export interface ConnectWebviewCreateRequest {
  accepted_providers: Provider[]
}

export interface AccessCodeCreateRequest {
  name: string
  code: string
}
