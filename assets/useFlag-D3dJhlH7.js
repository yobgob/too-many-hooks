import{j as e,T as g,D as c,S as p,m as u,r as t}from"./iframe-D0cwLo6p.js";const d=`/**
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
`,y=`
Simply manage boolean state
`,F=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(c,{}),e.jsx(p,{code:d,language:"typescript"}),e.jsx(u,{})]}),f={page:F,description:{component:y}},m=a=>{const[o,n]=t.useState(a),s=t.useCallback(()=>n(!0),[]),l=t.useCallback(()=>n(!1),[]),r=t.useCallback(()=>n(i=>!i),[]);return[o,{set:n,flag:s,unflag:l,toggle:r}]};export{f as U,m as u};
