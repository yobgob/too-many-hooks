import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s,d as a}from"./index--8NPz5zA.js";import"./index-uubelm5h.js";import"./iframe-odKl7_7b.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const i=`/**
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
