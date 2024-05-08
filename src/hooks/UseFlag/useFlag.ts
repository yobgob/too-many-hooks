import { useCallback, useState } from 'react'

/**
 * Return values of the `useFlag` hook
 *
 * @export
 * @typedef {UseFlagReturn}
 */
export type UseFlagReturn = [
  boolean,
  {
    /**
     * Sets the flag to a specific boolean value
     *
     * @readonly
     * @type {React.Dispatch<React.SetStateAction<boolean>>}
     */
    readonly set: React.Dispatch<React.SetStateAction<boolean>>
    /**
     * Sets the flag to true
     *
     * @readonly
     * @type {() => void}
     */
    readonly flag: () => void
    /**
     * Sets the flag to false
     *
     * @readonly
     * @type {() => void}
     */
    readonly unflag: () => void
    /**
     * Inverts the flag
     *
     * @readonly
     * @type {() => void}
     */
    readonly toggle: () => void
  },
]

/**
 * `useFlag` hook type
 *
 * @export
 * @typedef {UseFlag}
 * @param {boolean} initial
 * @returns {UseFlagReturn}
 */
export type UseFlag = (initial: boolean) => UseFlagReturn

/**
 * Simplifies boolean state management
 *
 * @implements {UseFlag}
 * @param {boolean} initial
 * @returns {UseFlagReturn}
 */
const useFlag: UseFlag = (
  /** Initial flag state, required */
  initial: boolean,
): UseFlagReturn => {
  const [value, set] = useState<boolean>(initial)

  const flag = useCallback(() => set(true), [])
  const unflag = useCallback(() => set(false), [])
  const toggle = useCallback(() => set(value => !value), [])

  return [
    value,
    {
      set,
      flag,
      unflag,
      toggle,
    },
  ]
}

export default useFlag
