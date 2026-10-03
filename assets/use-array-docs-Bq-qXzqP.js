import{j as e,T as t,D as n,S as a,m as r}from"./iframe-D0cwLo6p.js";const s=`/**
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
`,i="\nWrap array state with powerful helper functions for simpler updates\n\n## Functions\n\n- `set` - The default React state setter for the entire array.\n- `clear` - Empties the array.\n- `reset` - Resets the array to its initial value.\n- `push` - Adds element(s) to the end of the array.\n- `insertAt` - Inserts element(s) at an index, shifting the remaining elements right. If the index is out of range the elements are pushed to the end.\n- `removeAt` - Removes an element at an index, shifting the remaining elements left. If the index is out of range, no change occurs.\n- `removeWhere` - Removes elements from the array that meet a condition. Like JS `Array.filter` with the results applied to the array state.\n- `trimToRange` - Removes elements from the array outside of a certain range. Like JS `Array.slice` with the results applied to the array state\n- `updateAt` - Updates element(s) at an index. For each additional element, subsequent elements are updated.\n- `updateWhere` - Updates element(s) that match a predicate.\n- `updateAll` - The same functionality as JS Array.map with the results applied to the array state\n- `sort` - Sorts the array by comparing each element. Like JS `Array.sort` with the results applied to the array state.\n- `reverse` - Reverses the order of the elements in the array. Like JS `Array.reverse` with the results applied to the array state.\n\n## Examples\n\nSee the stories for interactive examples of `useArray` in action.\n",o=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{}),e.jsx(n,{}),e.jsx(a,{code:s,language:"typescript"}),e.jsx(r,{})]}),l={page:o,description:{component:i}};export{l as U};
