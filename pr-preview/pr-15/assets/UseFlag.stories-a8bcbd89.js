import"./chunk-MA2MUXQN-422b9eb8.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as p,C as l,S as s}from"./index-a2425209.js";import{j as e,a as m,F as c}from"./jsx-runtime-db36d5d6.js";import{u as i}from"./index-6950a61a.js";import"./preload-helper-41c905a7.js";import"./index-fef58a0a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-81e19262.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-c3be3091.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-aec3d0e7.js";import"./chunk-XHUUYXNA-05ea8a26.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-639f2073.js";function d(a={}){const{wrapper:o}=Object.assign({},i(),a.components);return o?e(o,{...a,children:e(r,{})}):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},i(),a.components);return m(c,{children:[e(p,{title:"Example/UseFlag"}),`
`,e(n.h1,{children:"useFlag"}),`
`,e(n.p,{children:"Simply manage boolean state"}),`
`,e(n.h2,{children:"Types"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`/**
 * Return values of the \`useFlag\` hook
 *
 * @export
 * @typedef {UseFlagReturn}
 */
export declare type UseFlagReturn = [
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
export declare type UseFlag = (initial: boolean) => UseFlagReturn;
/**
 * Simplifies boolean state management
 *
 * @implements {UseFlag}
 * @param {boolean} initial
 * @returns {UseFlagReturn}
 */
declare const useFlag: UseFlag;
`})}),`
`,e(n.h2,{children:"Examples"}),`
`,e(n.h3,{children:"Modal"}),`
`,e(l,{withSource:"open",children:e(s,{id:"example-useflag--modal-story"})}),`
`,e(n.h3,{children:"Form State"}),`
`,e(l,{withSource:"open",children:e(s,{id:"example-useflag--form-story"})})]})}}const g=()=>{throw new Error("Docs-only story")};g.parameters={docsOnly:!0};const t={title:"Example/UseFlag",tags:["mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const A=["__page"];export{A as __namedExportsOrder,g as __page,t as default};
//# sourceMappingURL=UseFlag.stories-a8bcbd89.js.map
