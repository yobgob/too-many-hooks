import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as m}from"./index-uubelm5h.js";import{B as h}from"./book-names-CTza5W-R.js";import{u}from"./useThrottleValue-D1BmCzGo.js";const d=({search:s})=>{const t=u(s.toLowerCase(),1e3),a=m.useMemo(()=>h.filter(o=>o.toLowerCase().includes(t)),[t]);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("h2",{children:t?`Books with names containing "${t}":`:"Enter a search query to filter books"}),a.length?e.jsx("div",{className:"flex max-w-lg flex-col border border-slate-500",children:a.map(o=>e.jsx("div",{className:"w-full border border-slate-500 p-2",children:o},o))}):e.jsx("div",{children:"No matching book titles"})]})},i=d;d.__docgenInfo={description:"",methods:[],displayName:"Input",props:{search:{required:!0,tsType:{name:"string"},description:""}}};const p=`import type React from 'react'
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
`,f={title:"useThrottleValue/Search",component:i},r={name:"Search",parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:p,language:"tsx"}}},args:{search:""},render:s=>e.jsx(i,{...s})};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const x=["search"],k=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:x,default:f,search:r},Symbol.toStringTag,{value:"Module"}));export{k as S,r as s};
