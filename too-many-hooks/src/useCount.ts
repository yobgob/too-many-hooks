import { useCallback, useState } from 'react'

export interface UseCountArgs {
  /** Initial `count`, defaults to `0` */
  initial?: number
  /** Amount to increment or decrement by, defaults to `1` */
  step?: number
}

/** Returns a numeric `count` and functions to increment or decrement it */
const useCount = ({ initial = 0, step = 1 }: UseCountArgs) => {
  const [count, setCount] = useState<number>(initial)

  const increment = useCallback(
    (stepOverride?: number) => setCount(c => c + (stepOverride ?? step)),
    [step],
  )
  const decrement = useCallback(
    (stepOverride?: number) => setCount(c => c - (stepOverride ?? step)),
    [step],
  )

  return {
    count,
    /** Adds the `stepOverride` or, if `undefined`, `step` to `count` */
    increment,
    /** Subtracts the `stepOverride` or, if `undefined`, `step` from `count` */
    decrement,
  } as const
}

export default useCount
