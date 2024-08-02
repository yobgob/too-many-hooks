import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import{ae as s,af as a}from"./index-Be446UHo.js";import"./index-RYns6xqu.js";import"./iframe-BPhcqx7T.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./_baseIsEqual-BBkbHXCC.js";import"./_overArg-DNpLtsSq.js";import"./index-BAm4mo3T.js";import"./index-DrFu-skq.js";const c=`/**
 * \`useThrottleFunction\` hook type
 *
 * @export
 * @template A extends unknown[]
 * @template R
 * @param {(...args: A) => R} func
 * @param {number} delay
 * @param {A} args
 * @returns {R | null}
 * @typedef {UseThrottleFunction}
 */
export type UseThrottleFunction = <A extends unknown[], R>(func: (...args: A) => R, delay: number, ...args: A) => R | null;
/**
 * Ensures a function is called whenever its args change, at most once every \`delay\`ms. Immediately calls then function then re-calls
 * the function and updates the result whenever the args change, at most once every \`delay\`ms.
 *
 * @template A extends unknown[]
 * @template R
 * @param {(...args: A) => R} func
 * @param {number} delay
 * @param {A} args
 * @returns {R | null}
 */
declare const useThrottleFunction: UseThrottleFunction;
export default useThrottleFunction;
`;function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"useThrottleFunction"}),`
`,e.jsx(n.h1,{id:"usethrottlefunction",children:"useThrottleFunction"}),`
`,e.jsxs(n.p,{children:["Ensures a function is called whenever its args change, at most once every ",e.jsx(n.code,{children:"delay"}),`ms.
Immediately calls then function then re-calls the function and updates the result whenever the args change, at most once every `,e.jsx(n.code,{children:"delay"}),"ms."]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(a,{language:"ts",code:c})]})}function R(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{R as default};
