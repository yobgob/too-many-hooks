import{j as c}from"./jsx-runtime-QvZ8i92b.js";import{r as s}from"./index-uubelm5h.js";import{u as x}from"./useResizeObserver-Wph4RNl-.js";const u=({onResize:e})=>{const[l,g]=s.useState(null),r=x(l);return s.useEffect(()=>{if(r){const n=r[0].target.getBoundingClientRect();e(`Element resized to ${n.width} x ${n.height}`)}},[r,e]),c.jsx("textarea",{className:"prose",ref:n=>g(n)})},m=u;u.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{onResize:{required:!0,tsType:{name:"signature",type:"function",raw:"(name?: string | null) => string",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"name"}],return:{name:"string"}}},description:""}}};const d=`import React, { useEffect, useState } from 'react'
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
`,p={title:"useResizeObserver/TextArea",component:m},t={name:"Text Area",parameters:{layout:"centered",docs:{source:{code:d,language:"tsx"}}},argTypes:{onResize:{action:e=>e}},render:e=>c.jsx(m,{...e})};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Text Area',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: TEXT_AREA_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    onResize: {
      action: (name: string) => name
    }
  },
  render: args => <TextArea {...args} />
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const T=["textArea"],z=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:T,default:p,textArea:t},Symbol.toStringTag,{value:"Module"}));export{z as T,t};
