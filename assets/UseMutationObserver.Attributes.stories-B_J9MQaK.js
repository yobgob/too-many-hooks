import{r as m,j as t,T as p,D as b,S as l,m as v,p as O}from"./iframe-D0cwLo6p.js";import{u as g}from"./useMutationObserver-DHcBkXWa.js";import"./preload-helper-C1FmrZbK.js";const c=({attributeMutation:r,attribute:d})=>{const e=g(document.body,{attributes:!0,subtree:!0});return m.useEffect(()=>{var s;const a=(s=document.getElementById("example-div"))==null?void 0:s.dataset.attribute;e&&a!==void 0&&r(`Observed mutation with record attributeName ${e==null?void 0:e[0].attributeName}, div data ${a?`set to ${a}`:"cleared"}`)},[r,e]),t.jsx("div",{id:"example-div",className:"prose text-4xl","data-attribute":d,children:'Use the controls to trigger a mutation, viewable in the "Actions" tab'})};c.__docgenInfo={description:"",methods:[],displayName:"Attributes",props:{attributeMutation:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},attribute:{required:!0,tsType:{name:"string"},description:""}}};const M=`/**
 * \`useMutationObserver\` hook type
 *
 * @export
 * @typedef {UseMutationObserver}
 * @param {(Node | null)} target
 * @param {?MutationObserverInit} [options]
 * @returns {(MutationRecord[] | undefined)}
 */
export type UseMutationObserver = (target: Node | null, options?: MutationObserverInit) => MutationRecord[] | undefined;
/**
 * Observes a node and returns the latest mutation record
 *
 * @implements {UseMutationObserver}
 * @param {(Node | null)} target
 * @param {?MutationObserverInit} [options]
 * @returns {(MutationRecord[] | undefined)}
 */
declare const useMutationObserver: UseMutationObserver;
export default useMutationObserver;
`,x="\nA wrapper of a `MutationObserver` which returns an array of mutation records, allowing code to watch for changes to elements.\n",f=()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{}),t.jsx(b,{}),t.jsx(l,{code:M,language:"typescript"}),t.jsx(v,{})]}),E={page:f,description:{component:x}},A=`import type React from 'react'
import { useEffect } from 'react'
import useMutationObserver from '../useMutationObserver'

interface Props {
  attributeMutation: (name: string) => void
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
`,{action:_}=__STORYBOOK_MODULE_ACTIONS__,y=O.meta({title:"useMutationObserver",component:c,parameters:{layout:"centered",docs:E}}),n=y.story({name:"Attributes",parameters:{docs:{source:{code:A,language:"tsx"}}},args:{attribute:"example",attributeMutation:r=>_("attributeMutation")(r)}});var o,i,u;n.input.parameters={...n.input.parameters,docs:{...(o=n.input.parameters)==null?void 0:o.docs,source:{originalSource:`meta.story({
  name: 'Attributes',
  parameters: {
    docs: {
      source: {
        code: ATTRIBUTES_CODE,
        language: 'tsx'
      }
    }
  },
  args: {
    attribute: 'example',
    attributeMutation: (name: string) => action('attributeMutation')(name)
  }
})`,...(u=(i=n.input.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const N=["Attributes_Example"];export{n as Attributes_Example,N as __namedExportsOrder,y as default};
