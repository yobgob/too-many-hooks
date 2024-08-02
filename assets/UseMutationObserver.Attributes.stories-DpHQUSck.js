import{j as c}from"./jsx-runtime-DEdD30eg.js";import{r as m}from"./index-RYns6xqu.js";import{u as b}from"./useMutationObserver-cJyzyhLu.js";const a=({attributeMutation:t,attribute:d})=>{const e=b(document.body,{attributes:!0,subtree:!0});return m.useEffect(()=>{var s;const n=(s=document.getElementById("example-div"))==null?void 0:s.dataset.attribute;e&&n!==void 0&&t(`Observed mutation with record attributeName ${e==null?void 0:e[0].attributeName}, div data ${n?`set to ${n}`:"cleared"}`)},[t,e]),c.jsx("div",{id:"example-div",className:"prose text-4xl","data-attribute":d,children:'Use the controls to trigger a mutation, viewable in the "Actions" tab'})};a.__docgenInfo={description:"",methods:[],displayName:"Attributes",props:{attributeMutation:{required:!0,tsType:{name:"signature",type:"function",raw:"(name?: string | null) => string",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"name"}],return:{name:"string"}}},description:""},attribute:{required:!0,tsType:{name:"string"},description:""}}};const p=`import type React from 'react'
import { useEffect } from 'react'
import useMutationObserver from '../useMutationObserver'

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
    const currentAttribute = document.getElementById('example-div')?.dataset['attribute']
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
`,l={title:"useMutationObserver/Attributes",component:a},r={name:"Attributes",parameters:{layout:"centered",docs:{source:{code:p,language:"tsx"}}},argTypes:{attribute:{type:"string"},attributeMutation:{action:t=>t}},render:t=>c.jsx(a,{...t})};var i,u,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(u=r.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const g=["attributes"],x=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:g,attributes:r,default:l},Symbol.toStringTag,{value:"Module"}));export{x as A,r as a};
