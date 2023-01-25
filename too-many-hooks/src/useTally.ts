import React, { useCallback, useState } from 'react'

/**
 * Arguments to the `useTally` hook
 *
 * @export
 * @interface UseTallyArgs
 * @typedef {UseTallyArgs}
 */
export interface UseTallyArgs {
  /**
   * Initial `tally`
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
 * Return values of the `useTally` hook
 *
 * @export
 * @typedef {UseTallyReturn}
 */
export type UseTallyReturn = [
  number,
  {
    /**
     * Sets `tally` to the provided value
     *
     * @readonly
     * @type {React.Dispatch<React.SetStateAction<number>>}
     */
    readonly set: React.Dispatch<React.SetStateAction<number>>
    /**
     * Adds the `stepOverride` or, if `undefined`, `step` to `tally`
     *
     * @readonly
     * @type {(stepOverride?: number) => void}
     * @param {number?} stepOverride
     */
    readonly increment: (stepOverride?: number) => void
    /**
     * Subtracts the `stepOverride` or, if `undefined`, `step` from `tally`
     *
     * @readonly
     * @type {(stepOverride?: number) => void}
     * @param {number?} stepOverride
     */
    readonly decrement: (stepOverride?: number) => void
    /**
     * Resets `tally` to its initial value
     *
     * @readonly
     * @type {() => void}
     */
    readonly reset: () => void
  },
]

/**
 * `useTally` hook type
 *
 * @export
 * @typedef {UseTally}
 * @param {UseTallyArgs}
 * @returns {UseTallyReturn}
 */
export type UseTally = (args: UseTallyArgs) => UseTallyReturn

/**
 * Returns a numeric `tally` and functions to set, increment, decrement, or reset it
 *
 * @example
 * To increment by 2s
 * ```ts
 * const [tally, { increment }] = useTally({step: 2})
 * ```
 * @example
 * To decrement by 1s
 * ```ts
 * const [tally, { decrement }] = useTally()
 * ```
 * @implements {UseTally}
 * @param {UseTallyArgs} { initial = 0, step = 1 }
 * @returns {UseTallyReturn}
 */
export const useTally: UseTally = ({ initial = 0, step = 1 }: UseTallyArgs): UseTallyReturn => {
  const [tally, set] = useState<number>(initial)

  const increment = useCallback(
    (stepOverride?: number) => set(t => t + (stepOverride ?? step)),
    [step],
  )
  const decrement = useCallback(
    (stepOverride?: number) => set(t => t - (stepOverride ?? step)),
    [step],
  )
  const reset = useCallback(() => set(initial), [initial])

  return [
    tally,
    {
      set,
      increment,
      decrement,
      reset,
    },
  ]
}

export default useTally
