// Taken from https://stackoverflow.com/a/59538756
export type Overloads<T> = T extends {
  (...args: infer A1): infer R1
  (...args: infer A2): infer R2
  (...args: infer A3): infer R3
  (...args: infer A4): infer R4
}
  ? [
      (...args: A1) => R1,
      (...args: A2) => R2,
      (...args: A3) => R3,
      (...args: A4) => R4
    ]
  : T extends {
      (...args: infer A1): infer R1
      (...args: infer A2): infer R2
      (...args: infer A3): infer R3
    }
  ? [(...args: A1) => R1, (...args: A2) => R2, (...args: A3) => R3]
  : T extends {
      (...args: infer A1): infer R1
      (...args: infer A2): infer R2
    }
  ? [(...args: A1) => R1, (...args: A2) => R2]
  : T extends {
      (...args: infer A1): infer R1
    }
  ? [(...args: A1) => R1]
  : any

export type OverloadedParameters<T> = Overloads<T> extends infer O
  ? { [K in keyof O]: Parameters<Extract<O[K], (...args: any) => any>> }
  : never
