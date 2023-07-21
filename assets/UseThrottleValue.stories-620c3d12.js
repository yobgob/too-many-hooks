import{M as v,e as T,C as d,f as u}from"./chunk-MA2MUXQN-17148198.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{a,j as e,F as g}from"./jsx-runtime-004bc00d.js";import{r as m}from"./index-b3c7c874.js";import{U as x,B as l}from"./too-many-hooks-cd89ca79.js";import{B as _}from"./book-names-8f6a1e40.js";import{u as h}from"./index-a1245236.js";import"./iframe-5cf682ab.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_getTag-dfdf31e6.js";import"./index-356e4a49.js";const c=()=>{const[t,{increment:o}]=x({}),n=l(t,500),r=l(t,1e3),y=l(t,5e3);return m.useEffect(()=>{const i=()=>{o(),setTimeout(i,1)};setTimeout(i,1)},[o]),a("div",{className:"prose flex flex-col gap-2 text-4xl",children:[a("div",{children:["Value: ",t]}),a("div",{children:["Throttled value (500ms): ",n]}),a("div",{children:["Throttled value (1s): ",r]}),a("div",{children:["Throttled value (5s): ",y]})]})};try{c.displayName="Counter",c.__docgenInfo={description:"",displayName:"Counter",props:{}}}catch{}const b=`import React, { useEffect } from 'react'
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
`,S=({search:t})=>{const o=l(t.toLowerCase(),1e3),n=m.useMemo(()=>_.filter(r=>r.toLowerCase().includes(o)),[o]);return a("div",{className:"prose flex flex-col items-center gap-4",children:[e("h2",{children:o?`Books with names containing "${o}":`:"Enter a search query to filter books"}),n.length?e("div",{className:"flex max-w-lg flex-col border border-slate-500",children:n.map(r=>e("div",{className:"w-full border border-slate-500 p-2",children:r},r))}):e("div",{children:"No matching book titles"})]})};try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}}}}}catch{}const C=`import React, { useMemo } from 'react'
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
`,p={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:b,language:"tsx"}}},render:t=>e(c,{...t})},f={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:C,language:"tsx"}}},args:{search:""},render:t=>e(S,{...t})},N=`/**
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
`;function k(t={}){const{wrapper:o}=Object.assign({},h(),t.components);return o?e(o,{...t,children:e(n,{})}):n();function n(){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},h(),t.components);return a(g,{children:[e(v,{title:"Example/UseThrottleValue"}),`
`,e(r.h1,{children:"useThrottleValue"}),`
`,a(r.p,{children:["Updates a frequently-changing value only once every ",e(r.code,{children:"delay"}),"ms"]}),`
`,e(r.h2,{children:"Types"}),`
`,e(T,{language:"ts",code:N}),`
`,e(r.h2,{children:"Examples"}),`
`,e(r.h3,{children:"Throttled counter"}),`
`,e(r.p,{children:"A very easy to see example is throttling a counter so that components that depend upon a very frequently updating value rerender a limited amount per second."}),`
`,e(d,{withSource:"open",children:e(u,{name:"Throttled counter",story:p})}),`
`,e(r.h3,{children:"Search books"}),`
`,e(r.p,{children:"When searching a list it may be helpful to throttle the search query. This allows a user to type at a normal speed with potentially costly filtering occurring a limited amount per second to prevent freezing."}),`
`,e(d,{withSource:"open",children:e(u,{name:"Search books",story:f})})]})}}const E=p;E.storyName="Throttled counter";const V=f;V.storyName="Search books";const s={title:"Example/UseThrottleValue",tags:["mdx"],includeStories:["_counter_","_search_"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:k};const H=["_counter_","_search_"];export{H as __namedExportsOrder,E as _counter_,V as _search_,s as default};
//# sourceMappingURL=UseThrottleValue.stories-620c3d12.js.map
