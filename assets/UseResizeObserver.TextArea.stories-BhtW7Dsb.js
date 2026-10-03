import{r as s,j as p,p as l}from"./iframe-D0cwLo6p.js";import{u as g,U as x}from"./useResizeObserver-EeSYyN-d.js";import"./preload-helper-C1FmrZbK.js";const u=({onResize:e})=>{const[c,m]=s.useState(null),r=g(c);return s.useEffect(()=>{if(r){const t=r[0].target.getBoundingClientRect();e(`Element resized to ${t.width} x ${t.height}`)}},[r,e]),p.jsx("textarea",{className:"prose",ref:t=>m(t)})};u.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{onResize:{required:!0,tsType:{name:"signature",type:"function",raw:"(name?: string | null) => string",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"name"}],return:{name:"string"}}},description:""}}};const d=`import type React from 'react'
import { useEffect, useState } from 'react'
import useResizeObserver from '../useResizeObserver'

interface Props {
  onResize: (name?: string | null) => string
}

const TextArea: React.FC<Props> = ({ onResize }) => {
  const [textArea, setTextArea] = useState<HTMLTextAreaElement | null>(null)
  const entries = useResizeObserver(textArea)

  useEffect(() => {
    if (entries) {
      const boundingRect = entries[0].target.getBoundingClientRect()
      onResize(\`Element resized to \${boundingRect.width} x \${boundingRect.height}\`)
    }
  }, [entries, onResize])

  return <textarea className="prose" ref={element => setTextArea(element)} />
}

export default TextArea
`,{action:R}=__STORYBOOK_MODULE_ACTIONS__,E=l.meta({title:"useResizeObserver",component:u,parameters:{layout:"centered",docs:x}}),n=E.story({name:"Text Area",parameters:{docs:{source:{code:d,language:"tsx"}}},args:{onResize:e=>(R("onResize")(e),e||"")}});var a,o,i;n.input.parameters={...n.input.parameters,docs:{...(a=n.input.parameters)==null?void 0:a.docs,source:{originalSource:`meta.story({
  name: 'Text Area',
  parameters: {
    docs: {
      source: {
        code: TEXT_AREA_CODE,
        language: 'tsx'
      }
    }
  },
  args: {
    onResize: (name?: string | null) => {
      action('onResize')(name);
      return name || '';
    }
  }
})`,...(i=(o=n.input.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const _=["TextArea_Example"];export{n as TextArea_Example,_ as __namedExportsOrder,E as default};
