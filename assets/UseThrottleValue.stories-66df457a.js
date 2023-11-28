import{M as y,e as v,C as i,f as d}from"./chunk-S4VUQJ4A-26b56a9d.js";import{j as e}from"./jsx-runtime-c7a09cbf.js";import{U as T,B as a}from"./too-many-hooks-6349bca8.js";import{r as h}from"./index-4f8e55f4.js";import{B as g}from"./book-names-8f6a1e40.js";import{u as m}from"./index-ab6d812b.js";import"./iframe-10d988d7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const l=()=>{const[r,{increment:t}]=T({}),s=a(r,500),o=a(r,1e3),f=a(r,5e3);return h.useEffect(()=>{const c=()=>{t(),setTimeout(c,1)};setTimeout(c,1)},[t]),e.jsxs("div",{className:"prose flex flex-col gap-2 text-4xl",children:[e.jsxs("div",{children:["Value: ",r]}),e.jsxs("div",{children:["Throttled value (500ms): ",s]}),e.jsxs("div",{children:["Throttled value (1s): ",o]}),e.jsxs("div",{children:["Throttled value (5s): ",f]})]})};try{l.displayName="Counter",l.__docgenInfo={description:"",displayName:"Counter",props:{}}}catch{}const _=`import { useTally, useThrottleValue } from '@yobgob/too-many-hooks'
import React, { useEffect } from 'react'

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
`,j=({search:r})=>{const t=a(r.toLowerCase(),1e3),s=h.useMemo(()=>g.filter(o=>o.toLowerCase().includes(t)),[t]);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("h2",{children:t?`Books with names containing "${t}":`:"Enter a search query to filter books"}),s.length?e.jsx("div",{className:"flex max-w-lg flex-col border border-slate-500",children:s.map(o=>e.jsx("div",{className:"w-full border border-slate-500 p-2",children:o},o))}):e.jsx("div",{children:"No matching book titles"})]})};try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}}}}}catch{}const b=`import { useThrottleValue } from '@yobgob/too-many-hooks'
import React, { useMemo } from 'react'
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
`,p={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:_,language:"tsx"}}},render:r=>e.jsx(l,{...r})},x={parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:b,language:"tsx"}}},args:{search:""},render:r=>e.jsx(j,{...r})},S=`/**
 * \`useThrottleValue\` hook type
 *
 * @export
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 * @typedef {UseThrottleValue}
 */
export type UseThrottleValue = <T>(value: T, delay: number) => T;
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
`;function u(r){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Example/UseThrottleValue"}),`
`,e.jsx(t.h1,{id:"usethrottlevalue",children:"useThrottleValue"}),`
`,e.jsxs(t.p,{children:["Updates a frequently-changing value only once every ",e.jsx(t.code,{children:"delay"}),"ms"]}),`
`,e.jsx(t.h2,{id:"types",children:"Types"}),`
`,e.jsx(v,{language:"ts",code:S}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"throttled-counter",children:"Throttled counter"}),`
`,e.jsx(t.p,{children:"A very easy to see example is throttling a counter so that components that depend upon a very frequently updating value rerender a limited amount per second."}),`
`,e.jsx(i,{withSource:"open",children:e.jsx(d,{name:"Throttled counter",story:p})}),`
`,e.jsx(t.h3,{id:"search-books",children:"Search books"}),`
`,e.jsx(t.p,{children:"When searching a list it may be helpful to throttle the search query. This allows a user to type at a normal speed with potentially costly filtering occurring a limited amount per second to prevent freezing."}),`
`,e.jsx(i,{withSource:"open",children:e.jsx(d,{name:"Search books",story:x})})]})}function C(r={}){const{wrapper:t}=Object.assign({},m(),r.components);return t?e.jsx(t,{...r,children:e.jsx(u,{...r})}):u(r)}const N=p;N.storyName="Throttled counter";const k=x;k.storyName="Search books";const n={title:"Example/UseThrottleValue",tags:["stories-mdx"],includeStories:["_counter_","_search_"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:C};const A=["_counter_","_search_"];export{A as __namedExportsOrder,N as _counter_,k as _search_,n as default};
//# sourceMappingURL=UseThrottleValue.stories-66df457a.js.map
