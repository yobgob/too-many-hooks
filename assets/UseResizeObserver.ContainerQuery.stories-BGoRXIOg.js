import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as u}from"./index-uubelm5h.js";import{u as m}from"./useResizeObserver-Wph4RNl-.js";const i=()=>{const[t,l]=u.useState(null),s=m(t);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("p",{children:"Resize to change the flow of content"}),e.jsxs("div",{ref:d=>l(d),className:`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 ${s&&s[0].contentRect.width<300?"flex-col":""}`,children:[e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"}),e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"})]})]})},c=i;i.__docgenInfo={description:"",methods:[],displayName:"ContainerQuery"};const p=`import React, { useState } from 'react'
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
`,f={title:"UseResizeObserver/ContainerQuery",component:c},r={name:"Container Query",parameters:{layout:"centered",docs:{source:{code:p,language:"tsx"}}},render:t=>e.jsx(c,{...t})};var o,n,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const b=["containerQuery"],C=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:b,containerQuery:r,default:f},Symbol.toStringTag,{value:"Module"}));export{C,r as c};
