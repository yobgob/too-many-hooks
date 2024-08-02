import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as s,af as r}from"./index-Be446UHo.js";import"./index-RYns6xqu.js";import"./iframe-BPhcqx7T.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./_baseIsEqual-BBkbHXCC.js";import"./_overArg-DNpLtsSq.js";import"./index-BAm4mo3T.js";import"./index-DrFu-skq.js";const d=`/**
 * Options for the \`useWindowListener\` hook
 *
 * @export
 * @interface UseWindowListenerOptions
 * @typedef {UseWindowListenerOptions}
 */
export interface UseWindowListenerOptions {
    /**
     * options to pass when calling \`addEventListener\`
     *
     * @type {?(boolean | AddEventListenerOptions)}
     */
    add?: boolean | AddEventListenerOptions;
    /**
     * Options to pass when calling \`removeEventListener\`
     *
     * @type {?(boolean | EventListenerOptions)}
     */
    remove?: boolean | EventListenerOptions;
}
/**
 * \`useWindowListener\` hook type
 *
 * @export
 * @typedef {UseWindowListener}
 * @param {string} type the type listener
 * @param {EventListenerOrEventListenerObject} listener
 */
export type UseWindowListener<K extends keyof WindowEventMap> = (type: K, listener: (this: Window, ev: WindowEventMap[K]) => unknown, options?: UseWindowListenerOptions) => void;
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
declare const useWindowListener: <K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => unknown, options?: UseWindowListenerOptions) => void;
export default useWindowListener;
`;function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"useWindowListener"}),`
`,n.jsx(e.h1,{id:"usewindowlistener",children:"useWindowListener"}),`
`,n.jsxs(e.p,{children:["Handles adding and removing a listener on the window in a ",n.jsx(e.code,{children:"useEffect"})]}),`
`,n.jsx(e.h2,{id:"types",children:"Types"}),`
`,n.jsx(r,{language:"ts",code:d})]})}function f(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{f as default};
