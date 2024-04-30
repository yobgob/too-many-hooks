import { useEffect } from 'react'

/**
 * Options for the `useWindowListener` hook
 *
 * @export
 * @interface UseWindowListenerOptions
 * @typedef {UseWindowListenerOptions}
 */
export interface UseWindowListenerOptions {
  /**
   * options to pass when calling `addEventListener`
   *
   * @type {?(boolean | AddEventListenerOptions)}
   */
  add?: boolean | AddEventListenerOptions
  /**
   * Options to pass when calling `removeEventListener`
   *
   * @type {?(boolean | EventListenerOptions)}
   */
  remove?: boolean | EventListenerOptions
}

/**
 * `useWindowListener` hook type
 *
 * @export
 * @typedef {UseWindowListener}
 * @param {string} type the type listener
 * @param {EventListenerOrEventListenerObject} listener
 */
export type UseWindowListener<K extends keyof WindowEventMap> = (
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: UseWindowListenerOptions,
) => void

/**
 * A hook for adding a listener to the window
 *
 * @template K extends keyof WindowEventMap
 * @implements {UseWindowListener<K>}
 * @param {K} type
 * @param {(this: Window, ev: WindowEventMap[K]) => unknown} listener
 * @param {?UseWindowListenerOptions} [options]
 * @returns {unknown, options?: { add?: any; remove?: any; }) => void}
 */
const useWindowListener = <K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
  options?: UseWindowListenerOptions,
): void =>
  useEffect(() => {
    window.addEventListener(type, listener, options?.add)
    return () => window.removeEventListener(type, listener, options?.remove)
  })

export default useWindowListener
