import isEqual from 'lodash.isequal'
import type React from 'react'
import { useEffect, useMemo, useRef } from 'react'

const useDeepCompareMemoize = <T>(value: T) => {
  const ref = useRef<T>(value)
  const signal = useRef<number>(0)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  if (!isEqual(ref.current, value)) {
    ref.current = value
    signal.current += 1
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo<T>(() => ref.current, [signal.current])
}

/**
 * `useDeepCompareEffect` hook type
 *
 * @export
 * @typedef {UseDeepCompareEffect}
 * @param {React.EffectCallback} effect
 * @param {?React.DependencyList} [deps]
 */
export type UseDeepCompareEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => void

/**
 * Whenever dependencies are no longer deeply equal, calls an `effect` function that contains imperative, possibly effectful code
 *
 * @implements {UseDeepCompareEffect}
 * @param {React.EffectCallback} effect
 * @param {?React.DependencyList} [deps]
 * @returns {*}
 */
const useDeepCompareEffect: UseDeepCompareEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, useDeepCompareMemoize(deps))
}

export default useDeepCompareEffect
