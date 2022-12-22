import { useCallback, useState } from 'react'

/** A simple wrapper for managing boolean state */
const useFlag = (
  /** Initial flag state, required */
  initial: boolean,
) => {
  const [value, set] = useState<boolean>(initial)

  const flag = useCallback(() => set(true), [])
  const unflag = useCallback(() => set(false), [])
  const toggle = useCallback(() => set(value => !value), [])

  return [
    value,
    {
      /** Sets the flag to a specific boolean value */
      set,
      /** Sets the flag to true */
      flag,
      /** Sets the flag to false */
      unflag,
      /** Inverts the flag */
      toggle,
    },
  ] as const
}

export default useFlag
