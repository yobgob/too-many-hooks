import{M as h,e as g,C as d,f as u}from"./chunk-HLWAVYOI-phrRoTf0.js";import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{G as p}from"./too-many-hooks-a2cJHX-n.js";import{r as i}from"./index-4g5l5LRQ.js";import{useMDXComponents as x}from"./index-_VGcpBFS.js";import"./iframe-UySUA6c2.js";import"../sb-preview/runtime.js";import"./react-18-0wh8ubQX.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-ogXoivrg.js";import"./index-TRu6N6dU.js";import"./index-PPLHz8o0.js";const c=()=>{const[t,r]=i.useState(null),s=p(t);return e.jsxs("div",{className:"prose flex flex-col items-center gap-4",children:[e.jsx("p",{children:"Resize to change the flow of content"}),e.jsxs("div",{ref:n=>r(n),className:`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 ${s&&s[0].contentRect.width<300?"flex-col":""}`,children:[e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"}),e.jsx("div",{className:"flex-1 rounded border border-slate-500 bg-white"})]})]})};try{c.displayName="ContainerQuery",c.__docgenInfo={description:"",displayName:"ContainerQuery",props:{}}}catch{}const R=`import { useResizeObserver } from '@yobgob/too-many-hooks'
import React, { useState } from 'react'

const ContainerQuery: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const entries = useResizeObserver(container)

  return (
    <div className="prose flex flex-col items-center gap-4">
      <p>Resize to change the flow of content</p>
      <div
        ref={element => setContainer(element)}
        className={\`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 \${
          entries && entries[0].contentRect.width < 300 ? 'flex-col' : ''
        }\`}
      >
        <div className="flex-1 rounded border border-slate-500 bg-white" />
        <div className="flex-1 rounded border border-slate-500 bg-white" />
      </div>
    </div>
  )
}

export default ContainerQuery
`,l=({onResize:t})=>{const[r,s]=i.useState(null),n=p(r);return i.useEffect(()=>{if(n){const o=n[0].target.getBoundingClientRect();t(`Element resized to ${o.width} x ${o.height}`)}},[n,t]),e.jsx("textarea",{className:"prose",ref:o=>s(o)})};try{l.displayName="TextArea",l.__docgenInfo={description:"",displayName:"TextArea",props:{onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(name?: string | null | undefined) => string"}}}}}catch{}const y=`import { useResizeObserver } from '@yobgob/too-many-hooks'
import React, { useEffect, useState } from 'react'

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
`,f={parameters:{layout:"centered",docs:{source:{code:y,language:"tsx"}}},argTypes:{onResize:{action:t=>t}},render:t=>e.jsx(l,{...t})},b={parameters:{layout:"centered",docs:{source:{code:R,language:"tsx"}}},render:t=>e.jsx(c,{...t})},v=`/**
 * \`useResizeObserver\` hook type
 *
 * @export
 * @typedef {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
export type UseResizeObserver = (target: Element | null, options?: ResizeObserverOptions) => ResizeObserverEntry[] | undefined;
/**
 * Wraps a resize observer on an element
 *
 * @implements {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
declare const useResizeObserver: UseResizeObserver;
export default useResizeObserver;
`;function m(t){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},x(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Example/UseResizeObserver"}),`
`,e.jsx(r.h1,{id:"useresizeobserver",children:"useResizeObserver"}),`
`,e.jsxs(r.p,{children:["Handles adding and removing a ",e.jsx(r.code,{children:"ResizeObserver"})," to observe an element and return the most recent ",e.jsx(r.code,{children:"ResizeObserverEntry"})]}),`
`,e.jsx(r.h2,{id:"types",children:"Types"}),`
`,e.jsx(g,{language:"ts",code:v}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h3,{id:"container-query-emulation",children:"Container Query Emulation"}),`
`,e.jsx(d,{withSource:"open",children:e.jsx(u,{name:"Container Query Emulation",story:b})}),`
`,e.jsx(r.h3,{id:"text-area",children:"Text Area"}),`
`,e.jsx(d,{withSource:"open",children:e.jsx(u,{name:"Text Area",story:f})})]})}function z(t={}){const{wrapper:r}=Object.assign({},x(),t.components);return r?e.jsx(r,{...t,children:e.jsx(m,{...t})}):m(t)}const _=b;_.storyName="Container Query Emulation";const O=f;O.storyName="Text Area";const a={title:"Example/UseResizeObserver",tags:["stories-mdx"],includeStories:["_containerQuery_","_textArea_"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:z};const $=["_containerQuery_","_textArea_"];export{$ as __namedExportsOrder,_ as _containerQuery_,O as _textArea_,a as default};
