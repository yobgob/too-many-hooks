import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import{ae as s,af as a}from"./index-Be446UHo.js";import"./index-RYns6xqu.js";import"./iframe-BPhcqx7T.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./_baseIsEqual-BBkbHXCC.js";import"./_overArg-DNpLtsSq.js";import"./index-BAm4mo3T.js";import"./index-DrFu-skq.js";const i=`/**
 * \`useMutationObserver\` hook type
 *
 * @export
 * @typedef {UseMutationObserver}
 * @param {(Node | null)} target
 * @param {?MutationObserverInit} [options]
 * @returns {(MutationRecord[] | undefined)}
 */
export type UseMutationObserver = (target: Node | null, options?: MutationObserverInit) => MutationRecord[] | undefined;
/**
 * Observes a node and returns the latest mutation record
 *
 * @implements {UseMutationObserver}
 * @param {(Node | null)} target
 * @param {?MutationObserverInit} [options]
 * @returns {(MutationRecord[] | undefined)}
 */
declare const useMutationObserver: UseMutationObserver;
export default useMutationObserver;
`;function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"useMutationObserver"}),`
`,e.jsx(t.h1,{id:"usemutationobserver",children:"useMutationObserver"}),`
`,e.jsxs(t.p,{children:["A wrapper of a ",e.jsx(t.code,{children:"MutationObserver"})," which returns an array of mutation records, allowing code to watch for changes to elements."]}),`
`,e.jsx(t.h2,{id:"types",children:"Types"}),`
`,e.jsx(a,{language:"ts",code:i})]})}function O(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{O as default};
