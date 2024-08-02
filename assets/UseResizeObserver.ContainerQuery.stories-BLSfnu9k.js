import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{u}from"./useResizeObserver-CObewv-Y.js";const o=()=>{const[t,c]=d.useState(null),s=u(t);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("p",{children:"Resize to change the flow of content"}),e.jsxs("div",{ref:l=>c(l),className:`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 ${s&&s[0].contentRect.width<300?"flex-col":""}`,children:[e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"}),e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"ContainerQuery"};const m=`import type React from 'react'
import { useState } from 'react'
import useResizeObserver from '../useResizeObserver'

const ContainerQuery: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const entries = useResizeObserver(container)

  return (
    <div className="prose flex flex-col items-center gap-4">
      <p>Resize to change the flow of content</p>
      <div
        ref={element => setContainer(element)}
        className={\`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 \${
          entries && entries[0].contentRect.width < 300 ? 'flex-col' : ''
        }\`}
      >
        <div className="flex-1 rounded border border-slate-500 bg-white" />
        <div className="flex-1 rounded border border-slate-500 bg-white" />
      </div>
    </div>
  )
}

export default ContainerQuery
`,p={title:"UseResizeObserver/ContainerQuery",component:o},r={name:"Container Query",parameters:{layout:"centered",docs:{source:{code:m,language:"tsx"}}},render:t=>e.jsx(o,{...t})};var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Container Query',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: CONTAINER_QUERY_CODE,
        language: 'tsx'
      }
    }
  },
  render: args => <ContainerQuery {...args} />
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["containerQuery"],v=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:f,containerQuery:r,default:p},Symbol.toStringTag,{value:"Module"}));export{v as C,r as c};
