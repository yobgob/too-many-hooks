import React, { useCallback, useState } from 'react'

export interface UseCountArgs {
  /** Initial `count`, defaults to `0` */
  initial?: number
  /** Amount to increment or decrement by, defaults to `1` */
  step?: number
}

export type UseCountReturn = [
  number,
  {
    /** Sets `count` to the provided value */
    readonly set: React.Dispatch<React.SetStateAction<number>>
    /** Adds the `stepOverride` or, if `undefined`, `step` to `count` */
    readonly increment: (stepOverride?: number) => void
    /** Subtracts the `stepOverride` or, if `undefined`, `step` from `count` */
    readonly decrement: (stepOverride?: number) => void
    /** Resets `count` to its initial value */
    readonly reset: () => void
  },
]

/** Returns a numeric `count` and functions to set, increment, decrement, or reset it */
export type UseCount = (args: UseCountArgs) => UseCountReturn

const useCount: UseCount = ({ initial = 0, step = 1 }) => {
  const [count, setCount] = useState<number>(initial)

  const increment = useCallback(
    (stepOverride?: number) => setCount(v => v + (stepOverride ?? step)),
    [step],
  )
  const decrement = useCallback(
    (stepOverride?: number) => setCount(v => v - (stepOverride ?? step)),
    [step],
  )
  const reset = useCallback(() => setCount(initial), [initial])

  return [
    count,
    {
      set: setCount,
      increment,
      decrement,
      reset,
    },
  ]
}

export default useCount
