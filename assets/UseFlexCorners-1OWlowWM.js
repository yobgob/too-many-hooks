import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as s,d as m}from"./index-iNG66WTU.js";import"./index-uubelm5h.js";import"./iframe-DLVtTsMU.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const i=`/**
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
    index: number;
    /**
     * The element itself
     *
     * @type {T}
     */
    element: T;
    /**
     * \`true\` if the element is hanging. For example, if the top row's leftmost element is not in the leftmost column.
     *
     * @type {boolean}
     */
    isHanging: boolean;
}
/**
 * The return structure for element position information. There are two dimensions,
 * where the top-level object name is the primary position ie \`left\` is the leftmost column, and the
 * two \`Corner\`s in that object are the top and bottom elements in that column, even if they are not
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
        left: Corner<T>;
        /**
         * The rightmost element in the topmost row
         *
         * @type {Corner<T>}
         */
        right: Corner<T>;
    };
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
        top: Corner<T>;
        /**
         * The bottommost element in the rightmost column
         *
         * @type {Corner<T>}
         */
        bottom: Corner<T>;
    };
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
        left: Corner<T>;
        /**
         * The rightmost element in the bottommost row
         *
         * @type {Corner<T>}
         */
        right: Corner<T>;
    };
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
        top: Corner<T>;
        /**
         * The bottommost element in the leftmost column
         *
         * @type {Corner<T>}
         */
        bottom: Corner<T>;
    };
}
/**
 * Return values of the \`useFlexCorners\` hook
 *
 * @export
 * @typedef {UseFlexCornersReturn}
 */
export interface UseFlexCornersReturn<T extends HTMLElement> {
    /**
     * Callback ref updater for tracking included elements
     *
     * @example
     * To get corner for an array of strings placed as \`div\`s
     * \`\`\`tsx
     * <div style={{display: "flex", flexWrap: "wrap"}}>
     *   {
     *     strings.map((s, i) => <div ref={element => setElement(i, element)}>{s}</div>)
     *   }
     * </div>
     * \`\`\`   *
     * @type {(index: number, element: T) => void}
     */
    setElement: (index: number, element: T) => void;
    /**
     * Information about elements in corner positions
     *
     * @type {Corners<T>}
     */
    corners: Corners<T> | null;
    /**
     * Function to recalculate corners on a resize other than the standard window event
     *
     * @type {() => void}
     */
    onResize: () => void;
}
/**
 * \`useFlexCorners\` hook type
 *
 * @export
 * @typedef {UseFlexCorners}
 * @template T extends HTMLElement
 */
export type UseFlexCorners<T extends HTMLElement> = () => UseFlexCornersReturn<T>;
/**
 * Dynamically locates corner elements of elements positioned with wrapping flex
 *
 * @implements {UseFlexCorners}
 * @template T extends HTMLElement
 * @returns {UseFlexCornersReturn<T>}
 */
declare const useFlexCorners: <T extends HTMLElement>() => UseFlexCornersReturn<T>;
export default useFlexCorners;
`;function o(e){const t={h1:"h1",h2:"h2",p:"p",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"useFlexCorners"}),`
`,n.jsx(t.h1,{id:"useflexcorners",children:"useFlexCorners"}),`
`,n.jsx(t.p,{children:"Dynamic selection of elements laid out with wrapping flex, enabling styling elements that are not selectable with CSS alone."}),`
`,n.jsx(t.h2,{id:"types",children:"Types"}),`
`,n.jsx(m,{language:"ts",code:i})]})}function b(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{b as default};
