import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{B as m}from"./book-names-CTza5W-R.js";import{u as h}from"./useThrottleValue-BYIUUE9F.js";const a=({search:s})=>{const t=h(s.toLowerCase(),1e3),n=i.useMemo(()=>m.filter(o=>o.toLowerCase().includes(t)),[t]);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("h2",{children:t?`Books with names containing "${t}":`:"Enter a search query to filter books"}),n.length?e.jsx("div",{className:"flex max-w-lg flex-col border border-slate-500",children:n.map(o=>e.jsx("div",{className:"w-full border border-slate-500 p-2",children:o},o))}):e.jsx("div",{children:"No matching book titles"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{search:{required:!0,tsType:{name:"string"},description:""}}};const u=`import type React from 'react'
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
`,p={title:"useThrottleValue/Search",component:a},r={name:"Search",parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:u,language:"tsx"}}},args:{search:""},render:s=>e.jsx(a,{...s})};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Search',
  parameters: {
    layout: 'centered',
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
  },
  render: args => <Search {...args} />
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["search"],_=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:f,default:p,search:r},Symbol.toStringTag,{value:"Module"}));export{_ as S,r as s};
