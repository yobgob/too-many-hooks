import{M as w,a as h,C as d,S as p}from"./chunk-MA2MUXQN-b741aed7.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as u,b as e,j as c,a as M}from"./too-many-hooks-74d295b9.js";import{u as m}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-d7041101.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-73b10f51.js";import"./chunk-XHUUYXNA-5f774ba0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-9936fa47.js";const i=({onMouseMove:n})=>(u("mousemove",t=>n(`Mouse moved to (${t.clientX}, ${t.clientY})`)),e("div",{className:"prose",children:'Move your mouse around to trigger listener events, viewable in the "Actions" tab'}));try{i.displayName="MouseMove",i.__docgenInfo={description:"",displayName:"MouseMove",props:{onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!0,type:{name:"(name?: string | null | undefined) => string"}}}}}catch{}const g=`import React from 'react'
import { useWindowListener } from 'too-many-hooks'

interface Props {
  onMouseMove: (name?: string | null) => string
}

const MouseMove: React.FC<Props> = ({ onMouseMove }) => {
  useWindowListener('mousemove', e => onMouseMove(\`Mouse moved to (\${e.clientX}, \${e.clientY})\`))
  return (
    <div className="prose">
      Move your mouse around to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default MouseMove
`,r=({onResize:n})=>(u("resize",()=>n(`Window resized to ${window.innerWidth} x ${window.innerHeight}`)),e("div",{className:"prose",children:'Resize this window to trigger listener events, viewable in the "Actions" tab'}));try{r.displayName="Resize",r.__docgenInfo={description:"",displayName:"Resize",props:{onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(name?: string | null | undefined) => string"}}}}}catch{}const y=`import React from 'react'
import { useWindowListener } from 'too-many-hooks'

interface Props {
  onResize: (name?: string | null) => string
}

const Resize: React.FC<Props> = ({ onResize }) => {
  useWindowListener('resize', () =>
    onResize(\`Window resized to \${window.innerWidth} x \${window.innerHeight}\`),
  )
  return (
    <div className="prose">
      Resize this window to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default Resize
`,l={parameters:{layout:"centered",docs:{source:{code:g,language:"tsx"}}},argTypes:{onMouseMove:{action:n=>n}},render:n=>e(i,{...n})},v={parameters:{layout:"centered",docs:{source:{code:y,language:"tsx"}}},argTypes:{onResize:{action:n=>n}},render:n=>e(r,{...n})},_=`/**
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
`;function W(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e(t,{...n,children:e(a,{})}):a();function a(){const o=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},m(),n.components);return c(M,{children:[e(w,{title:"Example/UseWindowListener"}),`
`,e(o.h1,{children:"useWindowListener"}),`
`,c(o.p,{children:["Handles adding and removing a listener on the window in a ",e(o.code,{children:"useEffect"})]}),`
`,e(o.h2,{children:"Types"}),`
`,e(h,{language:"ts",code:_}),`
`,e(o.h2,{children:"Examples"}),`
`,e(o.h3,{children:"MouseMove"}),`
`,e(d,{withSource:"open",children:e(p,{name:"MouseMove",story:l})}),`
`,e(o.h3,{children:"Resize"}),`
`,e(d,{withSource:"open",children:e(p,{name:"Resize",story:v})})]})}}const f=l;f.storyName="MouseMove";const L=v;L.storyName="Resize";const s={title:"Example/UseWindowListener",tags:["mdx"],includeStories:["_mouseMove_","_resize_"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:W};const F=["_mouseMove_","_resize_"];export{F as __namedExportsOrder,f as _mouseMove_,L as _resize_,s as default};
//# sourceMappingURL=UseWindowListener.stories-b3c4ae51.js.map
