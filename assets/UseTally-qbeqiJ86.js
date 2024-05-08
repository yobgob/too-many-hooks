import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{M as s,d as a}from"./index--8NPz5zA.js";import"./index-uubelm5h.js";import"./iframe-odKl7_7b.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const o=`import { default as React } from 'react';

/**
 * Arguments to the \`useTally\` hook
 *
 * @export
 * @interface UseTallyArgs
 * @typedef {UseTallyArgs}
 */
export interface UseTallyArgs {
    /**
     * Initial \`tally\`
     *
     * @type {?number}
     * @default 0
     */
    initial?: number;
    /** Amount to increment or decrement by */
    /**
     * Description placeholder
     *
     * @type {?number}
     * @default 1
     */
    step?: number;
}
/**
 * Return values of the \`useTally\` hook
 *
 * @export
 * @typedef {UseTallyReturn}
 */
export type UseTallyReturn = [
    number,
    {
        /**
         * Sets \`tally\` to the provided value
         *
         * @readonly
         * @type {React.Dispatch<React.SetStateAction<number>>}
         */
        readonly set: React.Dispatch<React.SetStateAction<number>>;
        /**
         * Adds the \`stepOverride\` or, if \`undefined\`, \`step\` to \`tally\`
         *
         * @readonly
         * @type {(stepOverride?: number) => void}
         * @param {number?} stepOverride
         */
        readonly increment: (stepOverride?: number) => void;
        /**
         * Subtracts the \`stepOverride\` or, if \`undefined\`, \`step\` from \`tally\`
         *
         * @readonly
         * @type {(stepOverride?: number) => void}
         * @param {number?} stepOverride
         */
        readonly decrement: (stepOverride?: number) => void;
        /**
         * Resets \`tally\` to its initial value
         *
         * @readonly
         * @type {() => void}
         */
        readonly reset: () => void;
    }
];
/**
 * \`useTally\` hook type
 *
 * @export
 * @typedef {UseTally}
 * @param {UseTallyArgs}
 * @returns {UseTallyReturn}
 */
export type UseTally = (args: UseTallyArgs) => UseTallyReturn;
/**
 * Returns a numeric \`tally\` and functions to set, increment, decrement, or reset it
 *
 * @example
 * To increment by 2s
 * \`\`\`ts
 * const [tally, { increment }] = useTally({step: 2})
 * \`\`\`
 * @example
 * To decrement by 1s
 * \`\`\`ts
 * const [tally, { decrement }] = useTally()
 * \`\`\`
 * @implements {UseTally}
 * @param {UseTallyArgs} { initial = 0, step = 1 }
 * @returns {UseTallyReturn}
 */
export declare const useTally: UseTally;
export default useTally;
`;function r(n){const t={h1:"h1",h2:"h2",p:"p",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"useTally"}),`
`,e.jsx(t.h1,{id:"usetally",children:"useTally"}),`
`,e.jsx(t.p,{children:"Increment and decrement numeric state"}),`
`,e.jsx(t.h2,{id:"types",children:"Types"}),`
`,e.jsx(a,{language:"ts",code:o})]})}function b(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{b as default};
