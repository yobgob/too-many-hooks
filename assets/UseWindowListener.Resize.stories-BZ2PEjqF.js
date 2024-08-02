import{j as o}from"./jsx-runtime-DEdD30eg.js";import{u as d}from"./useWindowListener-TiQjHzZR.js";const t=({addResizeAction:e})=>(d("resize",a=>e(`Window resized to ${window.innerWidth} x ${window.innerHeight}`,a)),o.jsx("div",{className:"prose text-4xl",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'}));t.__docgenInfo={description:"",methods:[],displayName:"Resize",props:{addResizeAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(...data: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"data",rest:!0}],return:{name:"void"}}},description:""}}};const c=`import type React from 'react'
import useWindowListener from '../useWindowListener'

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
`,u={title:"useWindowListener/Resize",component:t},n={name:"Resize",parameters:{layout:"centered",docs:{source:{code:c,language:"tsx"}}},argTypes:{addResizeAction:{action:(...e)=>e}},render:e=>o.jsx(t,{...e})};var s,i,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const p=["resize"],z=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:p,default:u,resize:n},Symbol.toStringTag,{value:"Module"}));export{z as R,n as r};
