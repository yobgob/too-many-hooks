import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{u as c}from"./useWindowListener-Dx7QUJ2Z.js";const o=({addResizeAction:e})=>(c("resize",d=>e(`Window resized to ${window.innerWidth} x ${window.innerHeight}`,d)),r.jsx("div",{className:"prose text-4xl",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'})),a=o;o.__docgenInfo={description:"",methods:[],displayName:"Resize",props:{addResizeAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(...data: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"data",rest:!0}],return:{name:"void"}}},description:""}}};const u=`import type React from 'react'
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
`,p={title:"useWindowListener/Resize",component:a},n={name:"Resize",parameters:{layout:"centered",docs:{source:{code:u,language:"tsx"}}},argTypes:{addResizeAction:{action:(...e)=>e}},render:e=>r.jsx(a,{...e})};var t,s,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const m=["resize"],R=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:m,default:p,resize:n},Symbol.toStringTag,{value:"Module"}));export{R,n as r};
