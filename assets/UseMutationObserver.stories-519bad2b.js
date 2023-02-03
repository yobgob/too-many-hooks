import{M as m,S as p,C as b,a as l}from"./chunk-MA2MUXQN-5e089c2e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{R as h,a as t,j as u,F as f}from"./too-many-hooks-9f6a8fbf.js";import{r as v}from"./index-f1f749bf.js";import{u as d}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-d7041101.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-73b10f51.js";import"./chunk-XHUUYXNA-5f774ba0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-9936fa47.js";const i=({attributeMutation:e,attribute:a})=>{const n=h(document.body,{attributes:!0,subtree:!0});return v.useEffect(()=>{var s;const r=(s=document.getElementById("example-div"))==null?void 0:s.dataset.attribute;n&&r!==void 0&&e(`Observed mutation with record attributeName ${n==null?void 0:n[0].attributeName}, div data ${r?`set to ${r}`:"cleared"}`)},[e,n]),t("div",{id:"example-div",className:"prose text-4xl","data-attribute":a,children:'Use the controls to trigger a mutation, viewable in the "Actions" tab'})};try{i.displayName="Attributes",i.__docgenInfo={description:"",displayName:"Attributes",props:{attributeMutation:{defaultValue:null,description:"",name:"attributeMutation",required:!0,type:{name:"(name?: string | null | undefined) => string"}},attribute:{defaultValue:null,description:"",name:"attribute",required:!0,type:{name:"string"}}}}}catch{}const M=`import React, { useEffect } from 'react'
import { useMutationObserver } from 'too-many-hooks'

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
`,c={parameters:{layout:"centered",docs:{source:{code:M,language:"tsx"}}},argTypes:{attribute:{type:"string"},attributeMutation:{action:e=>e}},render:e=>t(i,{...e})},g=`/**
 * \`useMutationObserver\` hook type
 *
 * @export
 * @typedef {UseMutationObserver}
 * @param {(Node | null)} target
 * @param {?MutationObserverInit} [options]
 * @returns {(MutationRecord[] | undefined)}
 */
export declare type UseMutationObserver = (target: Node | null, options?: MutationObserverInit) => MutationRecord[] | undefined;
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
`;function x(e={}){const{wrapper:a}=Object.assign({},d(),e.components);return a?t(a,{...e,children:t(n,{})}):n();function n(){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},d(),e.components);return u(f,{children:[t(m,{title:"Example/UseMutationObserver"}),`
`,t(r.h1,{children:"useMutationObserver"}),`
`,u(r.p,{children:["A wrapper of a ",t(r.code,{children:"MutationObserver"})," which returns an array of mutation records, allowing code to watch for changes to elements."]}),`
`,t(r.h2,{children:"Types"}),`
`,t(p,{language:"ts",code:g}),`
`,t(r.h2,{children:"Examples"}),`
`,t(r.h3,{children:"Attributes"}),`
`,t(b,{withSource:"open",children:t(l,{name:"Attributes",story:c})})]})}}const y=c;y.storyName="Attributes";const o={title:"Example/UseMutationObserver",tags:["mdx"],includeStories:["_attributes_"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:x};const k=["_attributes_"];export{k as __namedExportsOrder,y as _attributes_,o as default};
//# sourceMappingURL=UseMutationObserver.stories-519bad2b.js.map
