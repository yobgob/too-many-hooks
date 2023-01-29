import { useCallback, useEffect, useState } from 'react'
import useArray from './useArray'
import useMutationObserver from './useMutationObserver'
import useWindowListener from './useWindowListener'

/**
 * The information returned about an element in a corner position
 *
 * @interface Corner
 * @typedef {Corner}
 * @template T extends HTMLElement
 */
export interface Corner<T extends HTMLElement> {
  /**
   * The index of the element in the array
   *
   * @type {number}
   */
  index: number
  /**
   * The element itself
   *
   * @type {T}
   */
  element: T
  /**
   * `true` if the element is hanging. For example, if the top row's leftmost element is not in the leftmost column.
   *
   * @type {boolean}
   */
  isHanging: boolean
}

/**
 * The return structure for element position information. There are two dimensions,
 * where the top-level object name is the primary position ie `left` is the leftmost column, and the
 * two `Corner`s in that object are the top and bottom elements in that column, even if they are not
 * in the topmost or bottommost rows
 *
 * @interface Corners
 * @typedef {Corners}
 * @template T extends HTMLElement
 */
export interface Corners<T extends HTMLElement> {
  /**
   * Information about elements contained in the topmost row
   *
   * @type {{
   *  left: Corner<T>
   *  right: Corner<T>
   * }}
   */
  top: {
    /**
     * The leftmost element in the topmost row
     *
     * @type {Corner<T>}
     */
    left: Corner<T>
    /**
     * The rightmost element in the topmost row
     *
     * @type {Corner<T>}
     */
    right: Corner<T>
  }
  /**
   * Information about elements contained in the rightmost column
   *
   * @type {{
   *  top: Corner<T>
   *  bottom: Corner<T>
   * }}
   */
  right: {
    /**
     * The topmost element in the rightmost column
     *
     * @type {Corner<T>}
     */
    top: Corner<T>
    /**
     * The bottommost element in the rightmost column
     *
     * @type {Corner<T>}
     */
    bottom: Corner<T>
  }
  /**
   * Information about elements contained in the bottommost row
   *
   * @type {{
   *  left: Corner<T>
   *  right: Corner<T>
   * }}
   */
  bottom: {
    /**
     * The leftmost element in the bottommost row
     *
     * @type {Corner<T>}
     */
    left: Corner<T>
    /**
     * The rightmost element in the bottommost row
     *
     * @type {Corner<T>}
     */
    right: Corner<T>
  }
  /**
   * Information about elements contained in the leftmost column
   *
   * @type {{
   *  top: Corner<T>
   *  bottom: Corner<T>
   * }}
   */
  left: {
    /**
     * The topmost element in the leftmost column
     *
     * @type {Corner<T>}
     */
    top: Corner<T>
    /**
     * The bottommost element in the leftmost column
     *
     * @type {Corner<T>}
     */
    bottom: Corner<T>
  }
}

/**
 * Return values of the `useFlexCorners` hook
 *
 * @export
 * @typedef {UseFlexCornersReturn}
 */
export interface UseFlexCornersReturn<T extends HTMLElement> {
  /**
   * Callback ref updater for tracking included elements
   *
   * @example
   * To get corner for an array of strings placed as `div`s
   * ```tsx
   * <div style={{display: "flex", flexWrap: "wrap"}}>
   *   {
   *     strings.map((s, i) => <div ref={element => setElement(i, element)}>{s}</div>)
   *   }
   * </div>
   * ```   *
   * @type {(index: number, element: T) => void}
   */
  setElement: (index: number, element: T) => void
  /**
   * Information about elements in corner positions
   *
   * @type {Corners<T>}
   */
  corners: Corners<T> | null
  /**
   * Function to recalculate corners on a resize other than the standard window event
   *
   * @type {() => void}
   */
  onResize: () => void
}

/**
 * `useFlexCorners` hook type
 *
 * @export
 * @typedef {UseFlexCorners}
 * @template T extends HTMLElement
 */
export type UseFlexCorners<T extends HTMLElement> = () => UseFlexCornersReturn<T>

/**
 * Dynamically locates corner elements of elements positioned with wrapping flex
 *
 * @implements {UseFlexCorners}
 * @template T extends HTMLElement
 * @returns {UseFlexCornersReturn<T>}
 */
const useFlexCorners = <T extends HTMLElement>(): UseFlexCornersReturn<T> => {
  const [elements, { updateAt: setElement }] = useArray<T>([])

  const mutationRecords = useMutationObserver(document, {
    attributes: true,
    subtree: true,
  })

  const findCorners = useCallback(() => {
    const elementsInDOM = elements.filter(element => document.body.contains(element))
    if (!elementsInDOM.length) return null

    const boundingClientRects = elementsInDOM.map(element => element.getBoundingClientRect())

    const firstCorner = { index: 0, element: elementsInDOM[0], isHanging: false }

    const corners = elementsInDOM.reduce<Corners<T>>(
      (curr, element, elementIndex) => {
        const newCorners: Corners<T> = { ...curr }
        const newCorner = { index: elementIndex, element, isHanging: false }

        // top.left
        if (
          boundingClientRects[elementIndex].top < boundingClientRects[curr.top.left.index].top ||
          (boundingClientRects[elementIndex].top === boundingClientRects[curr.top.left.index].top &&
            boundingClientRects[elementIndex].left < boundingClientRects[curr.top.left.index].left)
        )
          newCorners.top.left = newCorner
        // top.right
        if (
          boundingClientRects[elementIndex].top < boundingClientRects[curr.top.right.index].top ||
          (boundingClientRects[elementIndex].top ===
            boundingClientRects[curr.top.right.index].top &&
            boundingClientRects[elementIndex].right >
              boundingClientRects[curr.top.right.index].right)
        )
          newCorners.top.right = newCorner

        // right.top
        if (
          boundingClientRects[elementIndex].right >
            boundingClientRects[curr.right.top.index].right ||
          (boundingClientRects[elementIndex].right ===
            boundingClientRects[curr.right.top.index].right &&
            boundingClientRects[elementIndex].top < boundingClientRects[curr.right.top.index].top)
        )
          newCorners.right.top = newCorner
        // right.bottom
        if (
          boundingClientRects[elementIndex].right >
            boundingClientRects[curr.right.bottom.index].right ||
          (boundingClientRects[elementIndex].right ===
            boundingClientRects[curr.right.bottom.index].right &&
            boundingClientRects[elementIndex].bottom >
              boundingClientRects[curr.right.bottom.index].bottom)
        )
          newCorners.right.bottom = newCorner

        // bottom.left
        if (
          boundingClientRects[elementIndex].bottom >
            boundingClientRects[curr.bottom.left.index].bottom ||
          (boundingClientRects[elementIndex].bottom ===
            boundingClientRects[curr.bottom.left.index].bottom &&
            boundingClientRects[elementIndex].left <
              boundingClientRects[curr.bottom.left.index].left)
        )
          newCorners.bottom.left = newCorner
        // bottom.right
        if (
          boundingClientRects[elementIndex].bottom >
            boundingClientRects[curr.bottom.right.index].bottom ||
          (boundingClientRects[elementIndex].bottom ===
            boundingClientRects[curr.bottom.right.index].bottom &&
            boundingClientRects[elementIndex].right >
              boundingClientRects[curr.bottom.right.index].right)
        )
          newCorners.bottom.right = newCorner

        // left.top
        if (
          boundingClientRects[elementIndex].left < boundingClientRects[curr.left.top.index].left ||
          (boundingClientRects[elementIndex].left ===
            boundingClientRects[curr.left.top.index].left &&
            boundingClientRects[elementIndex].top < boundingClientRects[curr.left.top.index].top)
        )
          newCorners.left.top = newCorner
        // left.bottom
        if (
          boundingClientRects[elementIndex].left <
            boundingClientRects[curr.left.bottom.index].left ||
          (boundingClientRects[elementIndex].left ===
            boundingClientRects[curr.left.bottom.index].left &&
            boundingClientRects[elementIndex].bottom >
              boundingClientRects[curr.left.bottom.index].bottom)
        )
          newCorners.left.bottom = newCorner

        return newCorners
      },
      {
        top: {
          left: firstCorner,
          right: firstCorner,
        },
        right: {
          top: firstCorner,
          bottom: firstCorner,
        },
        bottom: {
          left: firstCorner,
          right: firstCorner,
        },
        left: {
          top: firstCorner,
          bottom: firstCorner,
        },
      },
    )

    if (corners.top.left.index !== corners.left.top.index) {
      corners.top.left.isHanging = true
      corners.left.top.isHanging = true
    }
    if (corners.top.right.index !== corners.right.top.index) {
      corners.top.right.isHanging = true
      corners.right.top.isHanging = true
    }
    if (corners.bottom.left.index !== corners.left.bottom.index) {
      corners.bottom.left.isHanging = true
      corners.left.bottom.isHanging = true
    }
    if (corners.bottom.right.index !== corners.right.bottom.index) {
      corners.bottom.right.isHanging = true
      corners.right.bottom.isHanging = true
    }

    return corners
    // must depend upon the mutationRecords so mutations to the document such as removing
    // elements cause re-calculation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutationRecords, elements])

  const [corners, setCorners] = useState<Corners<T> | null>(findCorners())

  const onResize = useCallback(() => {
    setCorners(findCorners())
  }, [findCorners])
  useEffect(onResize, [onResize])
  useWindowListener('resize', onResize)

  return {
    corners,
    setElement,
    onResize,
  }
}

export default useFlexCorners
