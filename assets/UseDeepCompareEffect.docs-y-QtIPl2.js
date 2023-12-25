import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as o,e as s}from"./chunk-HLWAVYOI-phrRoTf0.js";import{useMDXComponents as a}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-UySUA6c2.js";import"../sb-preview/runtime.js";import"./react-18-0wh8ubQX.js";import"./index-ogXoivrg.js";import"./index-TRu6N6dU.js";import"./index-PPLHz8o0.js";const c=`import React from 'react';
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
`;function r(t){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Example/UseDeepCompareEffect"}),`
`,e.jsx(n.h1,{id:"usedeepcompareeffect",children:"useDeepCompareEffect"}),`
`,e.jsxs(n.p,{children:["Runs an ",e.jsx(n.code,{children:"effect"})," function when dependencies change, deeply compared"]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(s,{language:"ts",code:c}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useDeepCompareEffect"}),` is not often used directly in the UI so it does not have a dedicated story at this time (ideas welcome).
However, it is useful in cases such as the `,e.jsx(n.code,{children:"useThrottleFunction"})," hook and in other hooks still to come for reacting to changes to objects, arrays, etc."]}),`
`,e.jsx(n.h3,{id:"usethrottlefunction",children:e.jsx(n.code,{children:"useThrottleFunction"})}),`
`,e.jsxs(n.p,{children:["In this case, ",e.jsx(n.code,{children:"useDeepCompareEffect"}),` is used to deeply check if arguments to a function have changed and if so, update the current state of the throttled value.
A normal `,e.jsx(n.code,{children:"useEffect"})," may fire too often because the arguments may be reassigned on every render, but we only want to run the function when their actual values change."]}),`
`,e.jsx(s,{language:"ts",code:u})]})}function E(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{E as default};
