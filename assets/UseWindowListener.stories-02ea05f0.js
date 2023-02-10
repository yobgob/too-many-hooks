import{M as w,S as h,C as d,a as p}from"./chunk-MA2MUXQN-5e95634e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{a as e,j as c,F as M}from"./jsx-runtime-68f49b4e.js";import{z as u}from"./too-many-hooks-b381134c.js";import{u as m}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-405d3c04.js";import"./chunk-XHUUYXNA-29433977.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-E2WFFXZ5-4de4dd5f.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-b1d1948e.js";import"./index-356e4a49.js";const s=({addMouseMoveAction:n})=>(u("mousemove",o=>n(`Mouse moved to (${o.clientX}, ${o.clientY})`,o)),e("div",{className:"prose text-4xl",children:'Move your mouse around to trigger listener events, viewable in the "Actions" tab'}));try{s.displayName="MouseMove",s.__docgenInfo={description:"",displayName:"MouseMove",props:{addMouseMoveAction:{defaultValue:null,description:"",name:"addMouseMoveAction",required:!0,type:{name:"(...data: unknown[]) => void"}}}}}catch{}const y=`import React from 'react'
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
`,r=({addResizeAction:n})=>(u("resize",o=>n(`Window resized to ${window.innerWidth} x ${window.innerHeight}`,o)),e("div",{className:"prose text-4xl",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'}));try{r.displayName="Resize",r.__docgenInfo={description:"",displayName:"Resize",props:{addResizeAction:{defaultValue:null,description:"",name:"addResizeAction",required:!0,type:{name:"(...data: unknown[]) => void"}}}}}catch{}const _=`import React from 'react'
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
`;function W(n={}){const{wrapper:o}=Object.assign({},m(),n.components);return o?e(o,{...n,children:e(a,{})}):a();function a(){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},m(),n.components);return c(M,{children:[e(w,{title:"Example/UseWindowListener"}),`
`,e(t.h1,{children:"useWindowListener"}),`
`,c(t.p,{children:["Handles adding and removing a listener on the window in a ",e(t.code,{children:"useEffect"})]}),`
`,e(t.h2,{children:"Types"}),`
`,e(h,{language:"ts",code:g}),`
`,e(t.h2,{children:"Examples"}),`
`,e(t.h3,{children:"MouseMove"}),`
`,e(d,{withSource:"open",children:e(p,{name:"MouseMove",story:l})}),`
`,e(t.h3,{children:"Resize"}),`
`,e(d,{withSource:"open",children:e(p,{name:"Resize",story:v})})]})}}const f=l;f.storyName="MouseMove";const x=v;x.storyName="Resize";const i={title:"Example/UseWindowListener",tags:["mdx"],includeStories:["_mouseMove_","_resize_"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:W};const I=["_mouseMove_","_resize_"];export{I as __namedExportsOrder,f as _mouseMove_,x as _resize_,i as default};
//# sourceMappingURL=UseWindowListener.stories-02ea05f0.js.map
