import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import{ae as a,af as l}from"./index-Be446UHo.js";import"./index-RYns6xqu.js";import"./iframe-BPhcqx7T.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./_baseIsEqual-BBkbHXCC.js";import"./_overArg-DNpLtsSq.js";import"./index-BAm4mo3T.js";import"./index-DrFu-skq.js";const s=`/**
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
