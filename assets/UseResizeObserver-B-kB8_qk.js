import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as t}from"./index-FeUjBnvO.js";import{M as o,d as i}from"./index-iNG66WTU.js";import"./index-uubelm5h.js";import"./iframe-DLVtTsMU.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const p=`/**
 * \`useResizeObserver\` hook type
 *
 * @export
 * @typedef {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
export type UseResizeObserver = (target: Element | null, options?: ResizeObserverOptions) => ResizeObserverEntry[] | undefined;
/**
 * Wraps a resize observer on an element
 *
 * @implements {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
declare const useResizeObserver: UseResizeObserver;
export default useResizeObserver;
`;function s(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"useResizeObserver"}),`
`,e.jsx(r.h1,{id:"useresizeobserver",children:"useResizeObserver"}),`
`,e.jsxs(r.p,{children:["Handles adding and removing a ",e.jsx(r.code,{children:"ResizeObserver"})," to observe an element and return the most recent ",e.jsx(r.code,{children:"ResizeObserverEntry"})]}),`
`,e.jsx(r.h2,{id:"types",children:"Types"}),`
`,e.jsx(i,{language:"ts",code:p})]})}function h(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
