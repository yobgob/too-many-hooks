import{M as v,S as T,C as d,a as m}from"./chunk-MA2MUXQN-5e95634e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as a,a as e,F as g}from"./jsx-runtime-68f49b4e.js";import{r as h}from"./index-f1f749bf.js";import{F as x,U as l}from"./too-many-hooks-b381134c.js";import{B as _}from"./book-names-8f6a1e40.js";import{u}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-405d3c04.js";import"./chunk-XHUUYXNA-29433977.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-E2WFFXZ5-4de4dd5f.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-b1d1948e.js";import"./index-356e4a49.js";const c=()=>{const[t,{increment:o}]=x({}),n=l(t,500),r=l(t,1e3),y=l(t,5e3);return h.useEffect(()=>{const i=()=>{o(),setTimeout(i,1)};setTimeout(i,1)},[o]),a("div",{className:"prose flex flex-col gap-2 text-4xl",children:[a("div",{children:["Value: ",t]}),a("div",{children:["Throttled value (500ms): ",n]}),a("div",{children:["Throttled value (1s): ",r]}),a("div",{children:["Throttled value (5s): ",y]})]})};try{c.displayName="Counter",c.__docgenInfo={description:"",displayName:"Counter",props:{}}}catch{}const S=`import React, { useEffect } from 'react'
import { useTally, useThrottleValue } from 'too-many-hooks'

const Counter: React.FC = () => {
  const [tally, { increment }] = useTally({})
  const throttledHalf = useThrottleValue(tally, 500)
  const throttledOne = useThrottleValue(tally, 1000)
  const throttledFive = useThrottleValue(tally, 5000)

  useEffect(() => {
    const onTimeout = () => {
      increment()
      setTimeout(onTimeout, 1)
    }
    setTimeout(onTimeout, 1)
  }, [increment])

  return (
    <div className="prose flex flex-col gap-2 text-4xl">
      <div>Value: {tally}</div>
      <div>Throttled value (500ms): {throttledHalf}</div>
      <div>Throttled value (1s): {throttledOne}</div>
      <div>Throttled value (5s): {throttledFive}</div>
    </div>
  )
}

export default Counter
`,b=({search:t})=>{const o=l(t.toLowerCase(),1e3),n=h.useMemo(()=>_.filter(r=>r.toLowerCase().includes(o)),[o]);return a("div",{className:"prose flex flex-col items-center gap-4",children:[e("h2",{children:o?`Books with names containing "${o}":`:"Enter a search query to filter books"}),n.length?e("div",{className:"flex max-w-lg flex-col border border-slate-500",children:n.map(r=>e("div",{className:"w-full border border-slate-500 p-2",children:r},r))}):e("div",{children:"No matching book titles"})]})};try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}}}}}catch{}const C=`import React, { useMemo } from 'react'
import { useThrottleValue } from 'too-many-hooks'
import BOOK_NAMES from '../../common/assets/book-names.json'

interface Props {
  search: string
}

const Input: React.FC<Props> = ({ search }) => {
  const throttledSearch = useThrottleValue(search.toLowerCase(), 1000)
  const filteredBooks = useMemo(
    () => BOOK_NAMES.filter(name => name.toLowerCase().includes(throttledSearch)),
    [throttledSearch],
  )

  return (
    <div className="prose flex flex-col items-center gap-4">
      <h2>
        {!throttledSearch
          ? 'Enter a search query to filter books'
          : \`Books with names containing "\${throttledSearch}":\`}
      </h2>
      {filteredBooks.length ? (
        <div className="flex max-w-lg flex-col border border-slate-500">
          {filteredBooks.map(name => (
            <div key={name} className="w-full border border-slate-500 p-2">
              {name}
            </div>
          ))}
        </div>
      ) : (
        <div>No matching book titles</div>
      )}
    </div>
  )
}

export default Input
`,p={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:S,language:"tsx"}}},render:t=>e(c,{...t})},f={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:C,language:"tsx"}}},args:{search:""},render:t=>e(b,{...t})},N=`/**
 * \`useThrottleValue\` hook type
 *
 * @export
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 * @typedef {UseThrottleValue}
 */
export declare type UseThrottleValue = <T>(value: T, delay: number) => T;
/**
 * Limits stateful updates to a frequently-changing value to once every \`delay\`ms
 *
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 */
declare const useThrottleValue: <T>(value: T, delay: number) => T;
export default useThrottleValue;
`;function k(t={}){const{wrapper:o}=Object.assign({},u(),t.components);return o?e(o,{...t,children:e(n,{})}):n();function n(){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},u(),t.components);return a(g,{children:[e(v,{title:"Example/UseThrottleValue"}),`
`,e(r.h1,{children:"useThrottleValue"}),`
`,a(r.p,{children:["Updates a frequently-changing value only once every ",e(r.code,{children:"delay"}),"ms"]}),`
`,e(r.h2,{children:"Types"}),`
`,e(T,{language:"ts",code:N}),`
`,e(r.h2,{children:"Examples"}),`
`,e(r.h3,{children:"Throttled counter"}),`
`,e(r.p,{children:"A very easy to see example is throttling a counter so that components that depend upon a very frequently updating value rerender a limited amount per second."}),`
`,e(d,{withSource:"open",children:e(m,{name:"Throttled counter",story:p})}),`
`,e(r.h3,{children:"Search books"}),`
`,e(r.p,{children:"When searching a list it may be helpful to throttle the search query. This allows a user to type at a normal speed with potentially costly filtering occurring a limited amount per second to prevent freezing."}),`
`,e(d,{withSource:"open",children:e(m,{name:"Search books",story:f})})]})}}const E=p;E.storyName="Throttled counter";const V=f;V.storyName="Search books";const s={title:"Example/UseThrottleValue",tags:["mdx"],includeStories:["_counter_","_search_"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:k};const Q=["_counter_","_search_"];export{Q as __namedExportsOrder,E as _counter_,V as _search_,s as default};
//# sourceMappingURL=UseThrottleValue.stories-d6a250de.js.map
