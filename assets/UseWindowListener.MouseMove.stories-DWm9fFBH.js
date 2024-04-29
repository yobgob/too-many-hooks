import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{z as d}from"./too-many-hooks-DK1YWqSv.js";const u=({addMouseMoveAction:e})=>(d("mousemove",n=>e(`Mouse moved to (${n.clientX}, ${n.clientY})`,n)),a.jsx("div",{className:"prose text-4xl",children:'Move your mouse around to trigger listener events, viewable in the "Actions" tab'})),i=u;u.__docgenInfo={description:"",methods:[],displayName:"MouseMove",props:{addMouseMoveAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(...data: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"data",rest:!0}],return:{name:"void"}}},description:""}}};const c=`import { useWindowListener } from '@yobgob/too-many-hooks'
import React from 'react'

interface Props {
  addMouseMoveAction: (...data: unknown[]) => void
}

const MouseMove: React.FC<Props> = ({ addMouseMoveAction }) => {
  useWindowListener('mousemove', e =>
    addMouseMoveAction(\`Mouse moved to (\${e.clientX}, \${e.clientY})\`, e),
  )
  return (
    <div className="prose text-4xl">
      Move your mouse around to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default MouseMove
`,M={title:"useWindowListener/MouseMove",component:i},o={name:"Mouse Move",parameters:{layout:"centered",docs:{source:{code:c,language:"tsx"}}},argTypes:{addMouseMoveAction:{action:(...e)=>e}},render:e=>a.jsx(i,{...e})};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Mouse Move',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: MOUSE_MOVE_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    addMouseMoveAction: {
      action: (...data: unknown[]) => data
    }
  },
  render: args => <MouseMove {...args} />
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const m=["mouseMove"],l=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:m,default:M,mouseMove:o},Symbol.toStringTag,{value:"Module"}));export{l as M};
