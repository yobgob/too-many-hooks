import { useState } from 'react'
import useThrottleFunction from '../UseThrottleFunction/useThrottleFunction'

/**
 * `useThrottleValue` hook type
 *
 * @export
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 * @typedef {UseThrottleValue}
 */
export type UseThrottleValue = <T>(value: T, delay: number) => T

/**
 * Limits stateful updates to a frequently-changing value to once every `delay`ms
 *
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 */
const useThrottleValue = <T>(value: T, delay: number) => {
  const [throttledValue, setThrottledValue] = useState<T>(value)

  useThrottleFunction(setThrottledValue, delay, value)

  return throttledValue
}

export default useThrottleValue
