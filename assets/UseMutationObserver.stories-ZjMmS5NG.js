import{M as m,e as p,C as b,f as l}from"./chunk-HLWAVYOI-phrRoTf0.js";import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{M as x}from"./too-many-hooks-a2cJHX-n.js";import{r as h}from"./index-4g5l5LRQ.js";import{useMDXComponents as d}from"./index-_VGcpBFS.js";import"./iframe-UySUA6c2.js";import"../sb-preview/runtime.js";import"./react-18-0wh8ubQX.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-ogXoivrg.js";import"./index-TRu6N6dU.js";import"./index-PPLHz8o0.js";const s=({attributeMutation:e,attribute:r})=>{const n=x(document.body,{attributes:!0,subtree:!0});return h.useEffect(()=>{var i;const o=(i=document.getElementById("example-div"))==null?void 0:i.dataset.attribute;n&&o!==void 0&&e(`Observed mutation with record attributeName ${n==null?void 0:n[0].attributeName}, div data ${o?`set to ${o}`:"cleared"}`)},[e,n]),t.jsx("div",{id:"example-div",className:"prose text-4xl","data-attribute":r,children:'Use the controls to trigger a mutation, viewable in the "Actions" tab'})};try{s.displayName="Attributes",s.__docgenInfo={description:"",displayName:"Attributes",props:{attributeMutation:{defaultValue:null,description:"",name:"attributeMutation",required:!0,type:{name:"(name?: string | null | undefined) => string"}},attribute:{defaultValue:null,description:"",name:"attribute",required:!0,type:{name:"string"}}}}}catch{}const f=`import { useMutationObserver } from '@yobgob/too-many-hooks'
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
`,c={parameters:{layout:"centered",docs:{source:{code:f,language:"tsx"}}},argTypes:{attribute:{type:"string"},attributeMutation:{action:e=>e}},render:e=>t.jsx(s,{...e})},M=`/**
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
`;function u(e){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},d(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Example/UseMutationObserver"}),`
`,t.jsx(r.h1,{id:"usemutationobserver",children:"useMutationObserver"}),`
`,t.jsxs(r.p,{children:["A wrapper of a ",t.jsx(r.code,{children:"MutationObserver"})," which returns an array of mutation records, allowing code to watch for changes to elements."]}),`
`,t.jsx(r.h2,{id:"types",children:"Types"}),`
`,t.jsx(p,{language:"ts",code:M}),`
`,t.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(r.h3,{id:"attributes",children:"Attributes"}),`
`,t.jsx(b,{withSource:"open",children:t.jsx(l,{name:"Attributes",story:c})})]})}function v(e={}){const{wrapper:r}=Object.assign({},d(),e.components);return r?t.jsx(r,{...e,children:t.jsx(u,{...e})}):u(e)}const g=c;g.storyName="Attributes";const a={title:"Example/UseMutationObserver",tags:["stories-mdx"],includeStories:["_attributes_"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:v};const S=["_attributes_"];export{S as __namedExportsOrder,g as _attributes_,a as default};
