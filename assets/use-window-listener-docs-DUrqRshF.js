import{j as n,T as e,D as t,S as o,m as s}from"./iframe-D0cwLo6p.js";const i=`/**
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
`,r="\nHandles adding and removing a listener on the window in a `useEffect`\n",p=()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{}),n.jsx(t,{}),n.jsx(o,{code:i,language:"typescript"}),n.jsx(s,{})]}),a={page:p,description:{component:r}};export{a as U};
