import{M as l,e as v,C as r,f as d}from"./chunk-S4VUQJ4A-26b56a9d.js";import{j as e}from"./jsx-runtime-c7a09cbf.js";import{z as p}from"./too-many-hooks-6349bca8.js";import{u as c}from"./index-ab6d812b.js";import"./iframe-10d988d7.js";import"../sb-preview/runtime.js";import"./index-4f8e55f4.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const s=({addMouseMoveAction:n})=>(p("mousemove",o=>n(`Mouse moved to (${o.clientX}, ${o.clientY})`,o)),e.jsx("div",{className:"prose text-4xl",children:'Move your mouse around to trigger listener events, viewable in the "Actions" tab'}));try{s.displayName="MouseMove",s.__docgenInfo={description:"",displayName:"MouseMove",props:{addMouseMoveAction:{defaultValue:null,description:"",name:"addMouseMoveAction",required:!0,type:{name:"(...data: unknown[]) => void"}}}}}catch{}const w=`import { useWindowListener } from '@yobgob/too-many-hooks'
import React from 'react'

interface Props {
  addMouseMoveAction: (...data: unknown[]) => void
}

const MouseMove: React.FC<Props> = ({ addMouseMoveAction }) => {
  useWindowListener('mousemove', e =>
    addMouseMoveAction(\`Mouse moved to (\${e.clientX}, \${e.clientY})\`, e),
  )
  return (
    <div className="prose text-4xl">
      Move your mouse around to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default MouseMove
`,i=({addResizeAction:n})=>(p("resize",o=>n(`Window resized to ${window.innerWidth} x ${window.innerHeight}`,o)),e.jsx("div",{className:"prose text-4xl",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'}));try{i.displayName="Resize",i.__docgenInfo={description:"",displayName:"Resize",props:{addResizeAction:{defaultValue:null,description:"",name:"addResizeAction",required:!0,type:{name:"(...data: unknown[]) => void"}}}}}catch{}const h=`import { useWindowListener } from '@yobgob/too-many-hooks'
import React from 'react'

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
`,u={parameters:{layout:"centered",docs:{source:{code:w,language:"tsx"}}},argTypes:{addMouseMoveAction:{action:(...n)=>n}},render:n=>e.jsx(s,{...n})},m={parameters:{layout:"centered",docs:{source:{code:h,language:"tsx"}}},argTypes:{addResizeAction:{action:(...n)=>n}},render:n=>e.jsx(i,{...n})},x=`/**
 * Options for the \`useWindowListener\` hook
 *
 * @export
 * @interface UseWindowListenerOptions
 * @typedef {UseWindowListenerOptions}
 */
export interface UseWindowListenerOptions {
    /**
     * options to pass when calling \`addEventListener\`
     *
     * @type {?(boolean | AddEventListenerOptions)}
     */
    add?: boolean | AddEventListenerOptions;
    /**
     * Options to pass when calling \`removeEventListener\`
     *
     * @type {?(boolean | EventListenerOptions)}
     */
    remove?: boolean | EventListenerOptions;
}
/**
 * \`useWindowListener\` hook type
 *
 * @export
 * @typedef {UseWindowListener}
 * @param {string} type the type listener
 * @param {EventListenerOrEventListenerObject} listener
 */
export type UseWindowListener<K extends keyof WindowEventMap> = (type: K, listener: (this: Window, ev: WindowEventMap[K]) => unknown, options?: UseWindowListenerOptions) => void;
/**
 * A hook for adding a listener to the window
 *
 * @template K extends keyof WindowEventMap
 * @implements {UseWindowListener<K>}
 * @param {K} type
 * @param {(this: Window, ev: WindowEventMap[K]) => unknown} listener
 * @param {?UseWindowListenerOptions} [options]
 * @returns {unknown, options?: { add?: any; remove?: any; }) => void}
 */
declare const useWindowListener: <K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => unknown, options?: UseWindowListenerOptions) => void;
export default useWindowListener;
`;function a(n){const o=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},c(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Example/UseWindowListener"}),`
`,e.jsx(o.h1,{id:"usewindowlistener",children:"useWindowListener"}),`
`,e.jsxs(o.p,{children:["Handles adding and removing a listener on the window in a ",e.jsx(o.code,{children:"useEffect"})]}),`
`,e.jsx(o.h2,{id:"types",children:"Types"}),`
`,e.jsx(v,{language:"ts",code:x}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"mousemove",children:"MouseMove"}),`
`,e.jsx(r,{withSource:"open",children:e.jsx(d,{name:"MouseMove",story:u})}),`
`,e.jsx(o.h3,{id:"resize",children:"Resize"}),`
`,e.jsx(r,{withSource:"open",children:e.jsx(d,{name:"Resize",story:m})})]})}function M(n={}){const{wrapper:o}=Object.assign({},c(),n.components);return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}const y=u;y.storyName="MouseMove";const g=m;g.storyName="Resize";const t={title:"Example/UseWindowListener",tags:["stories-mdx"],includeStories:["_mouseMove_","_resize_"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:M};const A=["_mouseMove_","_resize_"];export{A as __namedExportsOrder,y as _mouseMove_,g as _resize_,t as default};
//# sourceMappingURL=UseWindowListener.stories-c30c4e11.js.map
