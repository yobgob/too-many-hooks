import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as a,d as r}from"./index-iNG66WTU.js";import"./index-uubelm5h.js";import"./iframe-DLVtTsMU.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const c=`import { default as React } from 'react';

/**
 * \`useDeepCompareEffect\` hook type
 *
 * @export
 * @typedef {UseDeepCompareEffect}
 * @param {React.EffectCallback} effect
 * @param {?React.DependencyList} [deps]
 */
export type UseDeepCompareEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => void;
/**
 * Whenever dependencies are no longer deeply equal, calls an \`effect\` function that contains imperative, possibly effectful code
 *
 * @implements {UseDeepCompareEffect}
 * @param {React.EffectCallback} effect
 * @param {?React.DependencyList} [deps]
 * @returns {*}
 */
declare const useDeepCompareEffect: UseDeepCompareEffect;
export default useDeepCompareEffect;
`,u=`import { useRef, useState } from 'react'
import useDeepCompareEffect from '../UseDeepCompareEffect/useDeepCompareEffect'

/**
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
export type UseThrottleFunction = <A extends unknown[], R>(
  func: (...args: A) => R,
  delay: number,
  ...args: A
) => R | null

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
const useThrottleFunction: UseThrottleFunction = <A extends unknown[], R>(
  func: (...args: A) => R,
  delay: number,
  ...args: A
): R | null => {
  const [returnValue, setReturnValue] = useState<R | null>(null)
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const newArgs = useRef<A | null>(null)

  useDeepCompareEffect(() => {
    if (!timeout.current) {
      setReturnValue(func(...args))
      const onTimeout = () => {
        if (newArgs.current) {
          setReturnValue(func(...newArgs.current))
          newArgs.current = null
          timeout.current = setTimeout(onTimeout, delay)
        } else {
          timeout.current = null
        }
      }
      timeout.current = setTimeout(onTimeout, delay)
    } else {
      newArgs.current = args
    }
    // Only call the update callback when args change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, args)

  return returnValue
}

export default useThrottleFunction
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"useDeepCompareEffect",name:"useDeepCompareEffect"}),`
`,e.jsx(n.h1,{id:"usedeepcompareeffect",children:"useDeepCompareEffect"}),`
`,e.jsxs(n.p,{children:["Runs an ",e.jsx(n.code,{children:"effect"})," function when dependencies change, deeply compared"]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useDeepCompareEffect"}),` is not often used directly in the UI so it does not have a dedicated story at this time (ideas welcome).
However, it is useful in cases such as the `,e.jsx(n.code,{children:"useThrottleFunction"})," hook and in other hooks still to come for reacting to changes to objects, arrays, etc."]}),`
`,e.jsx(n.h3,{id:"usethrottlefunction",children:e.jsx(n.code,{children:"useThrottleFunction"})}),`
`,e.jsxs(n.p,{children:["In this case, ",e.jsx(n.code,{children:"useDeepCompareEffect"}),` is used to deeply check if arguments to a function have changed and if so, update the current state of the throttled value.
A normal `,e.jsx(n.code,{children:"useEffect"})," may fire too often because the arguments may be reassigned on every render, but we only want to run the function when their actual values change."]}),`
`,e.jsx(r,{language:"ts",code:u}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(r,{language:"ts",code:c})]})}function C(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{C as default};
