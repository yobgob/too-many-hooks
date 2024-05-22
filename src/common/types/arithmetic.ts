// https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f
export type Length<T extends unknown[]> = T extends { length: infer L } ? L : never
export type UnknownTuple<L extends number, T extends unknown[] = []> = T extends { length: L }
  ? T
  : UnknownTuple<L, [...T, unknown]>
export type Subtract<Larger extends number, Smaller extends number> =
  UnknownTuple<Larger> extends [...infer Remainder, ...UnknownTuple<Smaller>]
    ? Length<Remainder>
    : never

export type IsPositive<N extends number> = `${N}` extends `-${number}` ? false : true
export type IsWhole<N extends number> = `${N}` extends `${number}.${number}` ? false : true

export type IsValid<N extends number> =
  IsPositive<N> extends true ? (IsWhole<N> extends true ? true : false) : false
export type AreValid<A extends number, B extends number> =
  IsValid<A> extends true ? (IsValid<B> extends true ? true : false) : false

export type SafeSubtract<A extends number, B extends number> =
  AreValid<A, B> extends true ? Subtract<A, B> : never
