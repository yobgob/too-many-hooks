import { useRef, useState } from 'react'
import useDeepCompareEffect from './useDeepCompareEffect'

/**
 * `useThrottleFunction` hook type
 *
 * @export
 * @template A extends unknown[]
 * @template R
 * @param {(...args: A) => R} func
 * @param {number} delay
 * @param {A} args
 * @returns {R | null}
 * @typedef {UseThrottleFunction}
 */
export type UseThrottleFunction = <A extends unknown[], R>(
  func: (...args: A) => R,
  delay: number,
  ...args: A
) => R | null

/**
 * Ensures a function is called whenever its args change, at most once every `delay`ms. Immediately calls then function then re-calls
 * the function and updates the result whenever the args change, at most once every `delay`ms.sdfgdf
 *
 * @template A extends unknown[]
 * @template R
 * @param {(...args: A) => R} func
 * @param {number} delay
 * @param {A} args
 * @returns {R | null}
 */
const useThrottleFunction: UseThrottleFunction = <A extends unknown[], R>(
  func: (...args: A) => R,
  delay: number,
  ...args: A
): R | null => {
  const [returnValue, setReturnValue] = useState<R | null>(null)
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const newArgs = useRef<A | null>(null)

  useDeepCompareEffect(() => {
    if (!timeout.current) {
      setReturnValue(func(...args))
      const onTimeout = () => {
        if (newArgs.current) {
          setReturnValue(func(...newArgs.current))
          newArgs.current = null
          timeout.current = setTimeout(onTimeout, delay)
        } else {
          timeout.current = null
        }
      }
      timeout.current = setTimeout(onTimeout, delay)
    } else {
      newArgs.current = args
    }
    // Only call the update callback when args change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, args)

  return returnValue
}

export default useThrottleFunction
