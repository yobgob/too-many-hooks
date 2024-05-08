import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as a}from"./index-FeUjBnvO.js";import{M as l,d as r}from"./index--8NPz5zA.js";import"./index-uubelm5h.js";import"./iframe-odKl7_7b.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const s=`/// <reference types="react" />
/**
 * Return values of the \`useFlag\` hook
 *
 * @export
 * @typedef {UseFlagReturn}
 */
export type UseFlagReturn = [
    boolean,
    {
        /**
         * Sets the flag to a specific boolean value
         *
         * @readonly
         * @type {React.Dispatch<React.SetStateAction<boolean>>}
         */
        readonly set: React.Dispatch<React.SetStateAction<boolean>>;
        /**
         * Sets the flag to true
         *
         * @readonly
         * @type {() => void}
         */
        readonly flag: () => void;
        /**
         * Sets the flag to false
         *
         * @readonly
         * @type {() => void}
         */
        readonly unflag: () => void;
        /**
         * Inverts the flag
         *
         * @readonly
         * @type {() => void}
         */
        readonly toggle: () => void;
    }
];
/**
 * \`useFlag\` hook type
 *
 * @export
 * @typedef {UseFlag}
 * @param {boolean} initial
 * @returns {UseFlagReturn}
 */
export type UseFlag = (initial: boolean) => UseFlagReturn;
/**
 * Simplifies boolean state management
 *
 * @implements {UseFlag}
 * @param {boolean} initial
 * @returns {UseFlagReturn}
 */
declare const useFlag: UseFlag;
export default useFlag;
`;function o(e){const t={h1:"h1",h2:"h2",p:"p",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"useFlag"}),`
`,n.jsx(t.h1,{id:"useflag",children:"useFlag"}),`
`,n.jsx(t.p,{children:"Simply manage boolean state"}),`
`,n.jsx(t.h2,{id:"types",children:"Types"}),`
`,n.jsx(r,{language:"ts",code:s})]})}function R(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{R as default};
