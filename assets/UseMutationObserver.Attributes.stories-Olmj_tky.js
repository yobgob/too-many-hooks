import{j as c}from"./jsx-runtime-QvZ8i92b.js";import{R as b}from"./too-many-hooks-DK1YWqSv.js";import{r as p}from"./index-uubelm5h.js";const m=({attributeMutation:t,attribute:d})=>{const e=b(document.body,{attributes:!0,subtree:!0});return p.useEffect(()=>{var i;const n=(i=document.getElementById("example-div"))==null?void 0:i.dataset.attribute;e&&n!==void 0&&t(`Observed mutation with record attributeName ${e==null?void 0:e[0].attributeName}, div data ${n?`set to ${n}`:"cleared"}`)},[t,e]),c.jsx("div",{id:"example-div",className:"prose text-4xl","data-attribute":d,children:'Use the controls to trigger a mutation, viewable in the "Actions" tab'})},a=m;m.__docgenInfo={description:"",methods:[],displayName:"Attributes",props:{attributeMutation:{required:!0,tsType:{name:"signature",type:"function",raw:"(name?: string | null) => string",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"name"}],return:{name:"string"}}},description:""},attribute:{required:!0,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"Attributes",props:{attributeMutation:{required:!0,tsType:{name:"signature",type:"function",raw:"(name?: string | null) => string",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"name"}],return:{name:"string"}}},description:""},attribute:{required:!0,tsType:{name:"string"},description:""}}};const l=`import { useMutationObserver } from '@yobgob/too-many-hooks'
import React, { useEffect } from 'react'

interface Props {
  attributeMutation: (name?: string | null) => string
  attribute: string
}

const Attributes: React.FC<Props> = ({ attributeMutation, attribute }) => {
  const records = useMutationObserver(document.body, {
    attributes: true,
    subtree: true,
  })
  useEffect(() => {
    const currentAttribute = document.getElementById('example-div')?.dataset.attribute
    if (records && currentAttribute !== undefined) {
      attributeMutation(
        \`Observed mutation with record attributeName \${records?.[0].attributeName}, div data \${
          !currentAttribute ? 'cleared' : \`set to \${currentAttribute}\`
        }\`,
      )
    }
  }, [attributeMutation, records])
  return (
    <div id="example-div" className="prose text-4xl" data-attribute={attribute}>
      Use the controls to trigger a mutation, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default Attributes
`,g={title:"useMutationObserver/Attributes",component:a},r={name:"Attributes",parameters:{layout:"centered",docs:{source:{code:l,language:"tsx"}}},argTypes:{attribute:{type:"string"},attributeMutation:{action:t=>t}},render:t=>c.jsx(a,{...t})};var s,u,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Attributes',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: ATTRIBUTES_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    attribute: {
      type: 'string'
    },
    attributeMutation: {
      action: (name: string) => name
    }
  },
  render: args => <Attributes {...args} />
}`,...(o=(u=r.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const y=["attributes"],x=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:y,attributes:r,default:g},Symbol.toStringTag,{value:"Module"}));export{x as A,r as a};
