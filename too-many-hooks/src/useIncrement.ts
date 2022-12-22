import { useCallback, useState } from 'react'

export interface UseIncrementArgs {
  /** Initial `count`, defaults to `0` */
  initial?: number
  /** Amount to increment or decrement by, defaults to `1` */
  step?: number
}

export type UseIncrementReturn = [
  number,
  {
    /** Adds the `stepOverride` or, if `undefined`, `step` to `count` */
    readonly increment: (stepOverride?: number) => void
    /** Subtracts the `stepOverride` or, if `undefined`, `step` from `count` */
    readonly decrement: (stepOverride?: number) => void
  },
]

/** Returns a numeric `count` and functions to increment or decrement it */
export type UseIncrement = (args: UseIncrementArgs) => UseIncrementReturn

const useIncrement: UseIncrement = ({ initial = 0, step = 1 }) => {
  const [value, setValue] = useState<number>(initial)

  const increment = useCallback(
    (stepOverride?: number) => setValue(v => v + (stepOverride ?? step)),
    [step],
  )
  const decrement = useCallback(
    (stepOverride?: number) => setValue(v => v - (stepOverride ?? step)),
    [step],
  )

  return [
    value,
    {
      increment,
      decrement,
    },
  ]
}

export default useIncrement
