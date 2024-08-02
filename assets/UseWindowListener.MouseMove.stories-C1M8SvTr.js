import{j as u}from"./jsx-runtime-DEdD30eg.js";import{u as i}from"./useWindowListener-TiQjHzZR.js";const t=({addMouseMoveAction:e})=>(i("mousemove",n=>e(`Mouse moved to (${n.clientX}, ${n.clientY})`,n)),u.jsx("div",{className:"prose text-4xl",children:'Move your mouse around to trigger listener events, viewable in the "Actions" tab'}));t.__docgenInfo={description:"",methods:[],displayName:"MouseMove",props:{addMouseMoveAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(...data: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"data",rest:!0}],return:{name:"void"}}},description:""}}};const d=`import type React from 'react'
import useWindowListener from '../useWindowListener'

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
`,c={title:"useWindowListener/MouseMove",component:t},o={name:"Mouse Move",parameters:{layout:"centered",docs:{source:{code:d,language:"tsx"}}},argTypes:{addMouseMoveAction:{action:(...e)=>e}},render:e=>u.jsx(t,{...e})};var s,r,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const M=["mouseMove"],p=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:M,default:c,mouseMove:o},Symbol.toStringTag,{value:"Module"}));export{p as M};
