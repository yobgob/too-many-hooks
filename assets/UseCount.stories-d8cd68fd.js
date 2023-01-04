import{M as u,C as i,S as p}from"./index-c240466a.js";import{j as e,a as c,F as m}from"./jsx-runtime-670450c2.js";import{u as a}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b9ccba5d.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-6548bd9e.js";import"./chunk-XHUUYXNA-fe0fb147.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-639f2073.js";function d(r={}){const{wrapper:o}=Object.assign({},a(),r.components);return o?e(o,{...r,children:e(s,{})}):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},a(),r.components);return c(m,{children:[e(u,{title:"Example/UseCount"}),`
`,e(n.h1,{children:"useCount"}),`
`,e(n.p,{children:"Increment and decrement numeric state"}),`
`,e(n.h2,{children:"Types"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`/**
 * Arguments to the \`useCount\` hook
 *
 * @export
 * @interface UseCountArgs
 * @typedef {UseCountArgs}
 */
export interface UseCountArgs {
    /**
     * Initial \`count\`
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
 * Return values of the \`useCount\` hook
 *
 * @export
 * @typedef {UseCountReturn}
 */
export declare type UseCountReturn = [
    number,
    {
        /**
         * Sets \`count\` to the provided value
         *
         * @readonly
         * @type {React.Dispatch<React.SetStateAction<number>>}
         */
        readonly set: React.Dispatch<React.SetStateAction<number>>;
        /**
         * Adds the \`stepOverride\` or, if \`undefined\`, \`step\` to \`count\`
         *
         * @readonly
         * @type {(stepOverride?: number) => void}
         */
        readonly increment: (stepOverride?: number) => void;
        /**
         * Subtracts the \`stepOverride\` or, if \`undefined\`, \`step\` from \`count\`
         *
         * @readonly
         * @type {(stepOverride?: number) => void}
         */
        readonly decrement: (stepOverride?: number) => void;
        /**
         * Resets \`count\` to its initial value
         *
         * @readonly
         * @type {() => void}
         */
        readonly reset: () => void;
    }
];
/**
 * \`useCount\` hook type
 *
 * @export
 * @typedef {UseCount}
 * @param {UseCountArgs}
 * @returns {UseCountReturn}
 */
export declare type UseCount = (args: UseCountArgs) => UseCountReturn;
/**
 * Returns a numeric \`count\` and functions to set, increment, decrement, or reset it
 *
 * @example
 * To count up by 2s
 * \`\`\`ts
 * const [count, { increment }] = useCount({step: 2})
 * \`\`\`
 * @example
 * To count down by 1s
 * \`\`\`ts
 * const [count, { decrement }] = useCount()
 * \`\`\`
 * @implements {UseCount}
 * @param {UseCountArgs} { initial = 0, step = 1 }
 * @returns {UseCountReturn}
 */
export declare const useCount: UseCount;
`})}),`
`,e(n.h2,{children:"Examples"}),`
`,e(n.h3,{children:"Social Media"}),`
`,e(i,{withSource:"open",children:e(p,{id:"example-usecount--social-media-story"})})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Example/UseCount",tags:["mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const E=["__page"];export{E as __namedExportsOrder,l as __page,t as default};
//# sourceMappingURL=UseCount.stories-d8cd68fd.js.map
