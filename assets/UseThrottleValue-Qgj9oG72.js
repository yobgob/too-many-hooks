import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as a,d as l}from"./index-DWTMcsc5.js";import"./index-uubelm5h.js";import"./iframe-dLXmHPBn.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const s=`/**
 * \`useThrottleValue\` hook type
 *
 * @export
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 * @typedef {UseThrottleValue}
 */
export type UseThrottleValue = <T>(value: T, delay: number) => T;
/**
 * Limits stateful updates to a frequently-changing value to once every \`delay\`ms
 *
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 */
declare const useThrottleValue: <T>(value: T, delay: number) => T;
export default useThrottleValue;
`;function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"useThrottleValue"}),`
`,e.jsx(t.h1,{id:"usethrottlevalue",children:"useThrottleValue"}),`
`,e.jsxs(t.p,{children:["Updates a frequently-changing value only once every ",e.jsx(t.code,{children:"delay"}),"ms"]}),`
`,e.jsx(t.h2,{id:"types",children:"Types"}),`
`,e.jsx(l,{language:"ts",code:s})]})}function v(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{v as default};
