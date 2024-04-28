import { useCallback, useEffect, useState } from 'react'

/**
 * `useMatchMedia` hook type
 *
 * @export
 * @typedef {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @param {?boolean} [default=false] - default match value
 * @returns {boolean}
 */
export type UseMatchMedia = (query: string, defaultValue?: boolean) => boolean

/**
 * Returns a boolean indicating whether or not a media query matches
 *
 * @example
 * To check for a screen width <= 360px
 * ```ts
 * const isMobile = useMatchMedia("screen and (max-width: 360px)")
 * ```
 * @example
 * To check if the browser is printing the page
 * ```ts
 * const isPrinting = useMAtchMedia("print")
 * ```
 * @implements {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @param {?boolean} [default=false] - default match value
 * @returns {boolean}
 */
const useMatchMedia: UseMatchMedia = (query: string, defaultValue = false): boolean => {
  const [isMediaQueryMatching, setIsMediaQueryMatching] = useState<boolean>(defaultValue)

  const onMediaQueryListChange = useCallback(
    (e: MediaQueryListEvent) => setIsMediaQueryMatching(e.matches),
    [],
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    setIsMediaQueryMatching(mediaQueryList.matches)
    mediaQueryList.addEventListener('change', onMediaQueryListChange)
    return () => mediaQueryList.removeEventListener('change', onMediaQueryListChange)
  }, [query, onMediaQueryListChange])

  return isMediaQueryMatching
}

export default useMatchMedia
