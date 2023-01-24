import React, { useCallback, useState } from 'react'

/**
 * Arguments to the `useCount` hook
 *
 * @export
 * @interface UseCountArgs
 * @typedef {UseCountArgs}
 */
export interface UseCountArgs {
  /**
   * Initial `count`
   *
   * @type {?number}
   * @default 0
   */
  initial?: number
  /** Amount to increment or decrement by */
  /**
   * Description placeholder
   *
   * @type {?number}
   * @default 1
   */
  step?: number
}

/**
 * Return values of the `useCount` hook
 *
 * @export
 * @typedef {UseCountReturn}
 */
export type UseCountReturn = [
  number,
  {
    /**
     * Sets `count` to the provided value
     *
     * @readonly
     * @type {React.Dispatch<React.SetStateAction<number>>}
     */
    readonly set: React.Dispatch<React.SetStateAction<number>>
    /**
     * Adds the `stepOverride` or, if `undefined`, `step` to `count`
     *
     * @readonly
     * @type {(stepOverride?: number) => void}
     * @param {number?} stepOverride
     */
    readonly increment: (stepOverride?: number) => void
    /**
     * Subtracts the `stepOverride` or, if `undefined`, `step` from `count`
     *
     * @readonly
     * @type {(stepOverride?: number) => void}
     * @param {number?} stepOverride
     */
    readonly decrement: (stepOverride?: number) => void
    /**
     * Resets `count` to its initial value
     *
     * @readonly
     * @type {() => void}
     */
    readonly reset: () => void
  },
]

/**
 * `useCount` hook type
 *
 * @export
 * @typedef {UseCount}
 * @param {UseCountArgs}
 * @returns {UseCountReturn}
 */
export type UseCount = (args: UseCountArgs) => UseCountReturn

/**
 * Returns a numeric `count` and functions to set, increment, decrement, or reset it
 *
 * @example
 * To count up by 2s
 * ```ts
 * const [count, { increment }] = useCount({step: 2})
 * ```
 * @example
 * To count down by 1s
 * ```ts
 * const [count, { decrement }] = useCount()
 * ```
 * @implements {UseCount}
 * @param {UseCountArgs} { initial = 0, step = 1 }
 * @returns {UseCountReturn}
 */
export const useCount: UseCount = ({ initial = 0, step = 1 }: UseCountArgs): UseCountReturn => {
  const [count, set] = useState<number>(initial)

  const increment = useCallback(
    (stepOverride?: number) => set(c => c + (stepOverride ?? step)),
    [step],
  )
  const decrement = useCallback(
    (stepOverride?: number) => set(c => c - (stepOverride ?? step)),
    [step],
  )
  const reset = useCallback(() => set(initial), [initial])

  return [
    count,
    {
      set,
      increment,
      decrement,
      reset,
    },
  ]
}

export default useCount
