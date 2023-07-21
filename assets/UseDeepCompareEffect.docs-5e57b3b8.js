import{j as e,a as t,F as u}from"./jsx-runtime-004bc00d.js";import{M as l,e as s}from"./chunk-MA2MUXQN-17148198.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as c}from"./index-a1245236.js";import"./index-b3c7c874.js";import"./_commonjsHelpers-042e6b4d.js";import"./_getTag-dfdf31e6.js";import"./iframe-5cf682ab.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-356e4a49.js";const i=`import React from 'react';
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
`;function w(r={}){const{wrapper:a}=Object.assign({},c(),r.components);return a?e(a,Object.assign({},r,{children:e(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},c(),r.components);return t(u,{children:[e(l,{title:"Example/UseDeepCompareEffect"}),`
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
`,e(s,{language:"ts",code:p})]})}}export{w as default};
//# sourceMappingURL=UseDeepCompareEffect.docs-5e57b3b8.js.map
