export const paramsSerializer = (params: Record<string, any>) => {
  const searchParams = new URLSearchParams()

  for (const [name, value] of Object.entries(params)) {
    if (value == null) continue

    if (Array.isArray(value)) {
      if (value.length === 0) searchParams.set(name, "")
      if (value.length === 1 && value[0] === "") {
        throw new UnserializableParamError(
          name,
          `is a single element array containing the empty string which is unsupported because it serializes to the empty array`
        )
      }
      for (const v of value) {
        throwIfUnserializable(name, v)
        searchParams.append(name, v)
      }
      continue
    }

    throwIfUnserializable(name, value)
    searchParams.set(name, value)
  }

  searchParams.sort()
  return searchParams.toString()
}

const throwIfUnserializable = (k: string, v: unknown): void => {
  if (v == null) {
    throw new UnserializableParamError(k, `is ${v} or contains ${v}`)
  }

  if (typeof v === "function") {
    throw new UnserializableParamError(
      k,
      "is a function or contains a function"
    )
  }

  if (typeof v === "object") {
    throw new UnserializableParamError(k, "is an object or contains an object")
  }
}

export class UnserializableParamError extends Error {
  constructor(name: string, message: string) {
    super(`Could not serialize parameter: '${name}' ${message}`)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
