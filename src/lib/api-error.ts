export interface SeamAPIErrorMetadata {
  type: string
  message: string
  data?: any
}

export class SeamAPIError extends Error {
  constructor(
    public status: number,
    public requestId: string,
    public metadata?: SeamAPIErrorMetadata
  ) {
    super(metadata?.message ?? "Unknown Error")

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  toString() {
    return `SeamAPIError: ${this.status}, ${this.metadata?.message} (${this.metadata?.type})`
  }
}

export class SeamActionAttemptError extends Error {
  constructor(
    public type: string,
    public message: string,
    public action_type: string
  ) {
    super(`${type} performing ${action_type}: ${message}`)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  toString() {
    return `SeamActionAttemptError: ${this.type} performing ${this.action_type}: ${this.message}`
  }
}

export class SeamMalformedInputError extends Error {
  constructor(public validationErrors: Record<string, unknown>) {
    super("Malformed input")

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  toString() {
    return `SeamMalformedInputError: ${JSON.stringify(this.validationErrors)}`
  }
}
