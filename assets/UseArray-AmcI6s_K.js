import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as a}from"./index-FeUjBnvO.js";import{M as s,d as i}from"./index-iNG66WTU.js";import"./index-uubelm5h.js";import"./iframe-DLVtTsMU.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const d=`/// <reference types="react" />
/**
 * Return values of the \`useArray\` hook
 *
 * @export
 * @typedef {UseArrayReturn}
 * @template T
 */
export type UseArrayReturn<T> = [
    T[],
    {
        /**
         * The default React state setter for the entire array
         *
         * @readonly
         * @type {React.Dispatch<React.SetStateAction<T[]>>}
         */
        readonly set: React.Dispatch<React.SetStateAction<T[]>>;
        /**
         * Empties the array
         *
         * @type {() => void}
         */
        readonly clear: () => void;
        /**
         * Resets the array to its initial value
         *
         * @type {() => void}
         */
        readonly reset: () => void;
        /**
         * Adds element(s) to the end of the array
         *
         * @readonly
         * @type {(...elements: T[]) => void}
         * @param {T[]} ...elements
         */
        readonly push: (...elements: T[]) => void;
        /**
         * Inserts element(s) at an index, shifting the remaining elements right.
         * If the index is out of range the elements are pushed to the end.
         *
         * @readonly
         * @type {(index: number, ...elements: T[]) => void}
         * @param {number} index
         * @param {T[]} elements
         */
        readonly insertAt: (index: number, ...elements: T[]) => void;
        /**
         * Removes an element at an index, shifting the remaining elements left.
         * If the index is out of range, no change occurs.
         *
         * @readonly
         * @type {(index: number) => void}
         * @param {number} index
         *
         */
        readonly removeAt: (index: number) => void;
        /**
         * Removes elements from the array that meet a condition.
         * Like JS \`Array.filter\` with the results applied to the array state.
         *
         * @readonly
         * @type {(predicate: (element: T) => boolean) => void}
         * @param {predicate: (element: T) => boolean} predicate
         */
        readonly removeWhere: (predicate: (element: T) => boolean) => void;
        /**
         * Removes elements from the array outside of a certain range.
         * Like JS \`Array.slice\` with the results applied to the array state.
         *
         * @readonly
         * @type {(start?: number, end?: number) => void}
         * @param {number?} start
         * @param {number?} end
         */
        readonly trimToRange: (start?: number, end?: number) => void;
        /**
         * Updates element(s) at an index. For each additional element, subsequent elements are updated.
         *
         * @example
         * Updating \`['a', 'b', 'c']\` to \`['a', 'd', 'e']
         * \`\`\`ts
         * updateAt(1, 'd', 'e')
         * \`\`\`
         *
         * @readonly
         * @type {(index: number, ...elements: React.SetStateAction<T>[]) => void}
         * @param {number} index
         * @param {React.SetStateAction<T>[]} elements
         */
        readonly updateAt: (index: number, ...elements: React.SetStateAction<T>[]) => void;
        /**
         * Updates element(s) that match a predicate
         *
         * @example
         * Updating records with \`lastUpdated\` before Dec 23 2022 to have \`isCurrent\`=\`false\`
         * \`\`\`ts
         * const oldestCurrentDate = new Date('12-23-2022')
         * updateWhere((record) => record.lastUpdated < oldestCurrentDate, )
         * \`\`\`
         *
         * @readonly
         * @type {(predicate: (element: T) => boolean, newElement: React.SetStateAction<T>) => void}
         * @param {predicate: (element: T) => boolean} predicate
         * @param {React.SetStateAction<T>} newElement
         */
        readonly updateWhere: (predicate: (element: T) => boolean, newElement: React.SetStateAction<T>) => void;
        /**
         * Transforms all elements to new values.
         * Like JS \`Array.map\` with the results applied to the array state.
         *
         * @readonly
         * @type {(newElement: React.SetStateAction<T>) => void}
         * @param {React.SetStateAction<T>} newElement
         */
        readonly updateAll: (newElement: React.SetStateAction<T>) => void;
        /**
         * Sorts the array by comparing each element.
         * Like JS \`Array.sort\` with the results applied to the array state.
         *
         * @type {((compareFn?: ((a: T, b: T) => number) | undefined) => void)}
         * @param {((a: T, b: T) => number) | undefined} compareFn
         */
        readonly sort: (compareFn?: ((a: T, b: T) => number) | undefined) => void;
        /** /**
         * Reverses the order of the elements in the array.
         * Like JS \`Array.reverse\` with the results applied to the array state.
         *
         * @type {() => void)}
         */
        readonly reverse: () => void;
    }
];
/**
 * \`useArray\` hook type
 *
 * @export
 * @typedef {UseArray}
 * @template T
 * @param {T[]} initial
 * @returns {UseArrayReturn}
 */
export type UseArray<T> = (initial: T[]) => UseArrayReturn<T>;
/**
 * Simplifies boolean state management
 *
 * @implements {UseArray}
 * @template T
 * @param {T[]} initial
 * @returns {UseArrayReturn}
 */
declare const useArray: <T>(initial: T[]) => UseArrayReturn<T>;
export default useArray;
`;function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"useArray"}),`
`,e.jsx(n.h1,{id:"usearray",children:"useArray"}),`
`,e.jsx(n.p,{children:"Wrap array state with powerful helper functions for simpler updates"}),`
`,e.jsx(n.h2,{id:"functions",children:"Functions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"set"})," - The default React state setter for the entire array."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"clear"})," - Empties the array."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reset"})," - Resets the array to its initial value."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"push"})," - Adds element(s) to the end of the array."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"insertAt"})," - Inserts element(s) at an index, shifting the remaining elements right. If the index is out of range the elements are pushed to the end."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"removeAt"})," - Removes an element at an index, shifting the remaining elements left. If the index is out of range, no change occurs."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"removeWhere"})," - Removes elements from the array that meet a condition. Like JS ",e.jsx(n.code,{children:"Array.filter"})," with the results applied to the array state."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"trimToRange"})," - Removes elements from the array outside of a certain range. Like JS ",e.jsx(n.code,{children:"Array.slice"})," with the results applied to the array state"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"updateAt"})," - Updates element(s) at an index. For each additional element, subsequent elements are updated."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"updateWhere"})," - Updates element(s) that match a predicate."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"updateAll"})," - The same functionality as JS Array.map with the results applied to the array state"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sort"})," - Sorts the array by comparing each element. Like JS ",e.jsx(n.code,{children:"Array.sort"})," with the results applied to the array state."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reverse"})," - Reverses the order of the elements in the array. Like JS ",e.jsx(n.code,{children:"Array.reverse"})," with the results applied to the array state."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(i,{language:"ts",code:d})]})}function A(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{A as default};
