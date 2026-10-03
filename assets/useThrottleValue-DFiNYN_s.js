import{j as e,T as s,D as o,S as l,m as u,r as T}from"./iframe-D0cwLo6p.js";import{u as p}from"./useThrottleFunction-qpiba_z-.js";const c=`/**
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
`,m="\nUpdates a frequently-changing value only once every `delay`ms\n",i=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(o,{}),e.jsx(l,{code:c,language:"typescript"}),e.jsx(u,{})]}),h={page:i,description:{component:m}},x=(t,a)=>{const[n,r]=T.useState(t);return p(r,a,t),n};export{h as U,x as u};
