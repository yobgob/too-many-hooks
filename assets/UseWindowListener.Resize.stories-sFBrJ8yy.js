import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{z as c}from"./too-many-hooks-DK1YWqSv.js";const r=({addResizeAction:e})=>(c("resize",d=>e(`Window resized to ${window.innerWidth} x ${window.innerHeight}`,d)),o.jsx("div",{className:"prose text-4xl",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'})),a=r;r.__docgenInfo={description:"",methods:[],displayName:"Resize",props:{addResizeAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(...data: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"data",rest:!0}],return:{name:"void"}}},description:""}}};const u=`import { useWindowListener } from '@yobgob/too-many-hooks'
import React from 'react'

interface Props {
  addResizeAction: (...data: unknown[]) => void
}

const Resize: React.FC<Props> = ({ addResizeAction }) => {
  useWindowListener('resize', e =>
    addResizeAction(\`Window resized to \${window.innerWidth} x \${window.innerHeight}\`, e),
  )

  return (
    <div className="prose text-4xl">
      Resize this window to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default Resize
`,m={title:"useWindowListener/Resize",component:a},n={name:"Resize",parameters:{layout:"centered",docs:{source:{code:u,language:"tsx"}}},argTypes:{addResizeAction:{action:(...e)=>e}},render:e=>o.jsx(a,{...e})};var t,s,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Resize',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: RESIZE_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    addResizeAction: {
      action: (...data: unknown[]) => data
    }
  },
  render: args => <Resize {...args} />
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const p=["resize"],R=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:p,default:m,resize:n},Symbol.toStringTag,{value:"Module"}));export{R,n as r};
