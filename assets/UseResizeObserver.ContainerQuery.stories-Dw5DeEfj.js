import{r as d,j as e,p as m}from"./iframe-D0cwLo6p.js";import{u,U as p}from"./useResizeObserver-EeSYyN-d.js";import"./preload-helper-C1FmrZbK.js";const a=()=>{const[i,c]=d.useState(null),t=u(i);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("p",{children:"Resize to change the flow of content"}),e.jsxs("div",{ref:l=>c(l),className:`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 ${t&&t[0].contentRect.width<300?"flex-col":""}`,children:[e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"}),e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"ContainerQuery"};const f=`import type React from 'react'
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
`,x=m.meta({title:"useResizeObserver",component:a,parameters:{layout:"centered",docs:p}}),r=x.story({name:"Container Query",parameters:{docs:{source:{code:f,language:"tsx"}}}});var s,o,n;r.input.parameters={...r.input.parameters,docs:{...(s=r.input.parameters)==null?void 0:s.docs,source:{originalSource:`meta.story({
  name: 'Container Query',
  parameters: {
    docs: {
      source: {
        code: CONTAINER_QUERY_CODE,
        language: 'tsx'
      }
    }
  }
})`,...(n=(o=r.input.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["ContainerQuery_Example"];export{r as ContainerQuery_Example,g as __namedExportsOrder,x as default};
