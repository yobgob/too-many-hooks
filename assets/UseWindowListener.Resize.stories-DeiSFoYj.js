import{j as a,p as d}from"./iframe-D0cwLo6p.js";import{U as c}from"./use-window-listener-docs-DUrqRshF.js";import{u as m}from"./useWindowListener-daoirjRI.js";import"./preload-helper-C1FmrZbK.js";const o=({addResizeAction:n})=>(m("resize",r=>n(`Window resized to ${window.innerWidth} x ${window.innerHeight}`,r)),a.jsx("div",{className:"prose text-4xl",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'}));o.__docgenInfo={description:"",methods:[],displayName:"Resize",props:{addResizeAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(...data: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"data",rest:!0}],return:{name:"void"}}},description:""}}};const p=`import type React from 'react'
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
`,{action:u}=__STORYBOOK_MODULE_ACTIONS__,w=d.meta({title:"useWindowListener",component:o,parameters:{layout:"centered",docs:c}}),e=w.story({name:"Resize",parameters:{docs:{source:{code:p,language:"tsx"}}},args:{addResizeAction:(...n)=>u("addResizeAction")(...n)}});var t,i,s;e.input.parameters={...e.input.parameters,docs:{...(t=e.input.parameters)==null?void 0:t.docs,source:{originalSource:`meta.story({
  name: 'Resize',
  parameters: {
    docs: {
      source: {
        code: RESIZE_CODE,
        language: 'tsx'
      }
    }
  },
  args: {
    addResizeAction: (...data: unknown[]) => action('addResizeAction')(...data)
  }
})`,...(s=(i=e.input.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["Resize_Example"];export{e as Resize_Example,_ as __namedExportsOrder,w as default};
