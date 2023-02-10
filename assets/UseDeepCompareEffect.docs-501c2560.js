import{a as e,j as t,F as u}from"./jsx-runtime-68f49b4e.js";import{M as l,S as s}from"./chunk-MA2MUXQN-5e95634e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as c}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-405d3c04.js";import"./chunk-XHUUYXNA-29433977.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-E2WFFXZ5-4de4dd5f.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-b1d1948e.js";import"./index-356e4a49.js";const i=`import React from 'react';
/**
 * \`useDeepCompareEffect\` hook type
 *
 * @export
 * @typedef {UseDeepCompareEffect}
 * @param {React.EffectCallback} effect
 * @param {?React.DependencyList} [deps]
 */
export declare type UseDeepCompareEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => void;
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
`,p=`import { useRef, useState } from 'react'
import useDeepCompareEffect from './useDeepCompareEffect'

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
`;function S(r={}){const{wrapper:o}=Object.assign({},c(),r.components);return o?e(o,Object.assign({},r,{children:e(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},c(),r.components);return t(u,{children:[e(l,{title:"Example/UseDeepCompareEffect"}),`
`,e(n.h1,{children:"useDeepCompareEffect"}),`
`,t(n.p,{children:["Runs an ",e(n.code,{children:"effect"})," function when dependencies change, deeply compared"]}),`
`,e(n.h2,{children:"Types"}),`
`,e(s,{language:"ts",code:i}),`
`,e(n.h2,{children:"Examples"}),`
`,t(n.p,{children:[e(n.code,{children:"useDeepCompareEffect"}),` is not often used directly in the UI so it does not have a dedicated story at this time (ideas welcome).
However, it is useful in cases such as the `,e(n.code,{children:"useThrottleFunction"})," hook and in other hooks still to come for reacting to changes to objects, arrays, etc."]}),`
`,e(n.h3,{children:e(n.code,{children:"useThrottleFunction"})}),`
`,t(n.p,{children:["In this case, ",e(n.code,{children:"useDeepCompareEffect"}),` is used to deeply check if arguments to a function have changed and if so, update the current state of the throttled value.
A normal `,e(n.code,{children:"useEffect"})," may fire too often because the arguments may be reassigned on every render, but we only want to run the function when their actual values change."]}),`
`,e(s,{language:"ts",code:p})]})}}export{S as default};
//# sourceMappingURL=UseDeepCompareEffect.docs-501c2560.js.map
