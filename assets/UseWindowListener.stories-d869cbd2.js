import{M as w,e as h,C as d,f as p}from"./chunk-MA2MUXQN-17148198.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as e,a as c,F as M}from"./jsx-runtime-004bc00d.js";import{z as m}from"./too-many-hooks-cd89ca79.js";import{u}from"./index-a1245236.js";import"./iframe-5cf682ab.js";import"../sb-preview/runtime.mjs";import"./index-b3c7c874.js";import"./_commonjsHelpers-042e6b4d.js";import"./_getTag-dfdf31e6.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";const s=({addMouseMoveAction:n})=>(m("mousemove",o=>n(`Mouse moved to (${o.clientX}, ${o.clientY})`,o)),e("div",{className:"prose text-4xl",children:'Move your mouse around to trigger listener events, viewable in the "Actions" tab'}));try{s.displayName="MouseMove",s.__docgenInfo={description:"",displayName:"MouseMove",props:{addMouseMoveAction:{defaultValue:null,description:"",name:"addMouseMoveAction",required:!0,type:{name:"(...data: unknown[]) => void"}}}}}catch{}const y=`import React from 'react'
import { useWindowListener } from 'too-many-hooks'

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
`,r=({addResizeAction:n})=>(m("resize",o=>n(`Window resized to ${window.innerWidth} x ${window.innerHeight}`,o)),e("div",{className:"prose text-4xl",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'}));try{r.displayName="Resize",r.__docgenInfo={description:"",displayName:"Resize",props:{addResizeAction:{defaultValue:null,description:"",name:"addResizeAction",required:!0,type:{name:"(...data: unknown[]) => void"}}}}}catch{}const _=`import React from 'react'
import { useWindowListener } from 'too-many-hooks'

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
`,l={parameters:{layout:"centered",docs:{source:{code:y,language:"tsx"}}},argTypes:{addMouseMoveAction:{action:(...n)=>n}},render:n=>e(s,{...n})},v={parameters:{layout:"centered",docs:{source:{code:_,language:"tsx"}}},argTypes:{addResizeAction:{action:(...n)=>n}},render:n=>e(r,{...n})},g=`/**
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
export declare type UseWindowListener<K extends keyof WindowEventMap> = (type: K, listener: (this: Window, ev: WindowEventMap[K]) => unknown, options?: UseWindowListenerOptions) => void;
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
`;function W(n={}){const{wrapper:o}=Object.assign({},u(),n.components);return o?e(o,{...n,children:e(a,{})}):a();function a(){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},u(),n.components);return c(M,{children:[e(w,{title:"Example/UseWindowListener"}),`
`,e(t.h1,{children:"useWindowListener"}),`
`,c(t.p,{children:["Handles adding and removing a listener on the window in a ",e(t.code,{children:"useEffect"})]}),`
`,e(t.h2,{children:"Types"}),`
`,e(h,{language:"ts",code:g}),`
`,e(t.h2,{children:"Examples"}),`
`,e(t.h3,{children:"MouseMove"}),`
`,e(d,{withSource:"open",children:e(p,{name:"MouseMove",story:l})}),`
`,e(t.h3,{children:"Resize"}),`
`,e(d,{withSource:"open",children:e(p,{name:"Resize",story:v})})]})}}const f=l;f.storyName="MouseMove";const x=v;x.storyName="Resize";const i={title:"Example/UseWindowListener",tags:["mdx"],includeStories:["_mouseMove_","_resize_"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:W};const S=["_mouseMove_","_resize_"];export{S as __namedExportsOrder,f as _mouseMove_,x as _resize_,i as default};
//# sourceMappingURL=UseWindowListener.stories-d869cbd2.js.map
