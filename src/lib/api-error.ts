export interface SeamAPIErrorMetadata {
  type: string
  message: string
  data?: any
}

export class SeamAPIError extends Error {
  constructor(public status: number, public metadata?: SeamAPIErrorMetadata) {
    super(metadata?.message ?? "Unknown Error")

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  toString() {
    return `SeamAPIError: ${this.status}, ${this.metadata?.message} (${this.metadata?.type})`
  }
}
