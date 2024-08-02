import{j as u}from"./jsx-runtime-DEdD30eg.js";import{r as a}from"./index-RYns6xqu.js";import{u as g}from"./useResizeObserver-CObewv-Y.js";const s=({onResize:e})=>{const[m,l]=a.useState(null),r=g(m);return a.useEffect(()=>{if(r){const n=r[0].target.getBoundingClientRect();e(`Element resized to ${n.width} x ${n.height}`)}},[r,e]),u.jsx("textarea",{className:"prose",ref:n=>l(n)})};s.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{onResize:{required:!0,tsType:{name:"signature",type:"function",raw:"(name?: string | null) => string",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"name"}],return:{name:"string"}}},description:""}}};const p=`import type React from 'react'
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
`,d={title:"useResizeObserver/TextArea",component:s},t={name:"Text Area",parameters:{layout:"centered",docs:{source:{code:p,language:"tsx"}}},argTypes:{onResize:{action:e=>e}},render:e=>u.jsx(s,{...e})};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const x=["textArea"],R=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:x,default:d,textArea:t},Symbol.toStringTag,{value:"Module"}));export{R as T,t};
