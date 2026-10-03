import{r as m,j as e,p as d}from"./iframe-D0cwLo6p.js";import{u as p,U as u}from"./useThrottleValue-DFiNYN_s.js";import{B as h}from"./book-names-CTza5W-R.js";import"./preload-helper-C1FmrZbK.js";import"./useThrottleFunction-qpiba_z-.js";const l=({search:i})=>{const r=p(i.toLowerCase(),1e3),s=m.useMemo(()=>h.filter(t=>t.toLowerCase().includes(r)),[r]);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("h2",{children:r?`Books with names containing "${r}":`:"Enter a search query to filter books"}),s.length?e.jsx("div",{className:"flex max-w-lg flex-col border border-slate-500",children:s.map(t=>e.jsx("div",{className:"w-full border border-slate-500 p-2",children:t},t))}):e.jsx("div",{children:"No matching book titles"})]})};l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{search:{required:!0,tsType:{name:"string"},description:""}}};const f=`import type React from 'react'
import { useMemo } from 'react'
import BOOK_NAMES from '../../../storybook-common/assets/book-names.json'
import useThrottleValue from '../useThrottleValue'

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
`,x=d.meta({title:"useThrottleValue",component:l,parameters:{layout:"centered",docs:u}}),o=x.story({name:"Search",parameters:{controls:{expanded:!0},docs:{source:{code:f,language:"tsx"}}},args:{search:""}});var a,n,c;o.input.parameters={...o.input.parameters,docs:{...(a=o.input.parameters)==null?void 0:a.docs,source:{originalSource:`meta.story({
  name: 'Search',
  parameters: {
    controls: {
      expanded: true
    },
    docs: {
      source: {
        code: SEARCH_CODE,
        language: 'tsx'
      }
    }
  },
  args: {
    search: ''
  }
})`,...(c=(n=o.input.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const k=["Search_Example"];export{o as Search_Example,k as __namedExportsOrder,x as default};
