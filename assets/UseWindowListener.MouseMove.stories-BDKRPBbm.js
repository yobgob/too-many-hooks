import{j as i,p as u}from"./iframe-D0cwLo6p.js";import{U as d}from"./use-window-listener-docs-DUrqRshF.js";import{u as c}from"./useWindowListener-daoirjRI.js";import"./preload-helper-C1FmrZbK.js";const a=({addMouseMoveAction:o})=>(c("mousemove",n=>o(`Mouse moved to (${n.clientX}, ${n.clientY})`,n)),i.jsx("div",{className:"prose text-4xl",children:'Move your mouse around to trigger listener events, viewable in the "Actions" tab'}));a.__docgenInfo={description:"",methods:[],displayName:"MouseMove",props:{addMouseMoveAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(...data: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"data",rest:!0}],return:{name:"void"}}},description:""}}};const m=`import type React from 'react'
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
`,{action:M}=__STORYBOOK_MODULE_ACTIONS__,p=u.meta({title:"useWindowListener",component:a,parameters:{layout:"centered",docs:d}}),e=p.story({name:"Mouse Move",parameters:{docs:{source:{code:m,language:"tsx"}}},args:{addMouseMoveAction:(...o)=>M("addMouseMoveAction")(...o)}});var t,s,r;e.input.parameters={...e.input.parameters,docs:{...(t=e.input.parameters)==null?void 0:t.docs,source:{originalSource:`meta.story({
  name: 'Mouse Move',
  parameters: {
    docs: {
      source: {
        code: MOUSE_MOVE_CODE,
        language: 'tsx'
      }
    }
  },
  args: {
    addMouseMoveAction: (...data: unknown[]) => action('addMouseMoveAction')(...data)
  }
})`,...(r=(s=e.input.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const w=["MouseMove_Example"];export{e as MouseMove_Example,w as __namedExportsOrder,p as default};
