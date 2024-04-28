import { useCallback, useEffect, useState } from 'react'

/**
 * `useMatchMedia` hook type
 *
 * @export
 * @typedef {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @returns {boolean}
 */
export type UseMatchMedia = (query: string, defaultValue?: boolean) => MediaQueryList

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
 * const isPrinting = useMatchMedia("print")
 * ```
 * @implements {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @returns {MediaQueryList}
 */
const useMatchMedia: UseMatchMedia = (query: string): MediaQueryList => {
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>(window.matchMedia(query))

  const onMediaQueryListChange = useCallback(
    () => setMediaQueryList(window.matchMedia(query)),
    [query],
  )

  useEffect(() => {
    const newMediaQueryList = window.matchMedia(query)
    setMediaQueryList(newMediaQueryList)
    newMediaQueryList.addEventListener('change', onMediaQueryListChange)
    return () => newMediaQueryList.removeEventListener('change', onMediaQueryListChange)
  }, [query, onMediaQueryListChange])

  return mediaQueryList
}

export default useMatchMedia
