import{M as x,S as g,C,a as y}from"./chunk-MA2MUXQN-5e089c2e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as b,a as n,j as T,F as v}from"./too-many-hooks-9f6a8fbf.js";import{r as w}from"./index-f1f749bf.js";import{u as d}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-d7041101.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-73b10f51.js";import"./chunk-XHUUYXNA-5f774ba0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-9936fa47.js";const a=({itemCount:r,flexWrap:i,flexDirection:l,justifyContent:o,alignItems:c,alignContent:f})=>{const{corners:e,setElement:m}=b(),h=w.useMemo(()=>Array.from({length:r},(M,t)=>n("div",{ref:p=>p&&m(t,p),className:`flex h-16 ${(t+1)%5===0?"[width:8.25rem]":"w-16"} items-center justify-center bg-blue-700 p-1 text-white  
        ${t===(e==null?void 0:e.top.left.index)||t===(e==null?void 0:e.left.top.index)?"rounded-tl-3xl bg-emerald-500":""} 
        ${t===(e==null?void 0:e.top.right.index)||t===(e==null?void 0:e.right.top.index)?"rounded-tr-3xl bg-emerald-500":""}
        ${t===(e==null?void 0:e.bottom.right.index)||t===(e==null?void 0:e.right.bottom.index)?"rounded-br-3xl bg-emerald-500":""}
        ${t===(e==null?void 0:e.bottom.left.index)||t===(e==null?void 0:e.left.bottom.index)?"rounded-bl-3xl bg-emerald-500":""}
      
        `},`item-${t}`)),[r,e==null?void 0:e.top.left.index,e==null?void 0:e.top.right.index,e==null?void 0:e.left.top.index,e==null?void 0:e.left.bottom.index,e==null?void 0:e.right.top.index,e==null?void 0:e.right.bottom.index,e==null?void 0:e.bottom.right.index,e==null?void 0:e.bottom.left.index,m]);return n("div",{className:"flex h-screen w-screen content-center items-center justify-center bg-white p-8",children:n("div",{className:"flex resize gap-1 overflow-auto border-2 border-gray-400 p-2 [height:30rem] [width:18.1rem]",style:{flexWrap:i,flexDirection:l,justifyContent:o,alignItems:c,alignContent:f},children:h})})};try{a.displayName="Apps",a.__docgenInfo={description:"",displayName:"Apps",props:{itemCount:{defaultValue:null,description:"",name:"itemCount",required:!0,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"wrap-reverse"'}]}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row"'},{value:'"row-reverse"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!0,type:{name:"JustifyContent | undefined"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!0,type:{name:"AlignItems | undefined"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!0,type:{name:"AlignContent | undefined"}}}}}catch{}const E=`import React, { useMemo } from 'react'
import { useFlexCorners } from 'too-many-hooks'

interface Props {
  itemCount: number
  flexWrap: React.CSSProperties['flexWrap']
  flexDirection: React.CSSProperties['flexDirection']
  justifyContent: React.CSSProperties['justifyContent']
  alignItems: React.CSSProperties['alignItems']
  alignContent: React.CSSProperties['alignContent']
}

const Apps: React.FC<Props> = ({
  itemCount,
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
}) => {
  const { corners, setElement } = useFlexCorners()

  const renderedItems = useMemo(
    () =>
      Array.from({ length: itemCount }, (_, i) => (
        <div
          key={\`item-\${i}\`}
          ref={element => element && setElement(i, element)}
          className={\`flex h-16 \${
            (i + 1) % 5 === 0 ? '[width:8.25rem]' : 'w-16'
          } items-center justify-center bg-blue-700 p-1 text-white  
        \${
          i === corners?.top.left.index || i === corners?.left.top.index
            ? 'rounded-tl-3xl bg-emerald-500'
            : ''
        } 
        \${
          i === corners?.top.right.index || i === corners?.right.top.index
            ? 'rounded-tr-3xl bg-emerald-500'
            : ''
        }
        \${
          i === corners?.bottom.right.index || i === corners?.right.bottom.index
            ? 'rounded-br-3xl bg-emerald-500'
            : ''
        }
        \${
          i === corners?.bottom.left.index || i === corners?.left.bottom.index
            ? 'rounded-bl-3xl bg-emerald-500'
            : ''
        }
      
        \`}
        />
      )),
    [
      itemCount,
      corners?.top.left.index,
      corners?.top.right.index,
      corners?.left.top.index,
      corners?.left.bottom.index,
      corners?.right.top.index,
      corners?.right.bottom.index,
      corners?.bottom.right.index,
      corners?.bottom.left.index,
      setElement,
    ],
  )

  return (
    <div className="flex h-screen w-screen content-center items-center justify-center bg-white p-8">
      <div
        className={\`flex resize gap-1 overflow-auto border-2 border-gray-400 p-2 [height:30rem] [width:18.1rem]\`}
        style={{
          flexWrap,
          flexDirection,
          justifyContent,
          alignItems,
          alignContent,
        }}
      >
        {renderedItems}
      </div>
    </div>
  )
}

export default Apps
`,u={parameters:{layout:"fullscreen",docs:{source:{code:E,language:"tsx"}}},argTypes:{flexWrap:{options:["wrap","nowrap","wrap-reverse"],control:{type:"select"}},flexDirection:{options:["row","column","row-reverse","column-reverse"],control:{type:"select"}},justifyContent:{options:["start","center","space-between","space-around","space-evenly"],control:{type:"select"}},alignItems:{options:["stretch","center","start","end"],control:{type:"select"}},alignContent:{options:["start","center","space-between","space-around"],control:{type:"select"}}},args:{itemCount:15,flexWrap:"wrap",flexDirection:"row",justifyContent:"start",alignItems:"stretch",alignContent:"start"},render:r=>n(a,{...r})},F=`/**
 * The information returned about an element in a corner position
 *
 * @interface Corner
 * @typedef {Corner}
 * @template T extends HTMLElement
 */
export interface Corner<T extends HTMLElement> {
    /**
     * The index of the element in the array
     *
     * @type {number}
     */
    index: number;
    /**
     * The element itself
     *
     * @type {T}
     */
    element: T;
    /**
     * \`true\` if the element is hanging. For example, if the top row's leftmost element is not in the leftmost column.
     *
     * @type {boolean}
     */
    isHanging: boolean;
}
/**
 * The return structure for element position information. There are two dimensions,
 * where the top-level object name is the primary position ie \`left\` is the leftmost column, and the
 * two \`Corner\`s in that object are the top and bottom elements in that column, even if they are not
 * in the topmost or bottommost rows
 *
 * @interface Corners
 * @typedef {Corners}
 * @template T extends HTMLElement
 */
export interface Corners<T extends HTMLElement> {
    /**
     * Information about elements contained in the topmost row
     *
     * @type {{
     *  left: Corner<T>
     *  right: Corner<T>
     * }}
     */
    top: {
        /**
         * The leftmost element in the topmost row
         *
         * @type {Corner<T>}
         */
        left: Corner<T>;
        /**
         * The rightmost element in the topmost row
         *
         * @type {Corner<T>}
         */
        right: Corner<T>;
    };
    /**
     * Information about elements contained in the rightmost column
     *
     * @type {{
     *  top: Corner<T>
     *  bottom: Corner<T>
     * }}
     */
    right: {
        /**
         * The topmost element in the rightmost column
         *
         * @type {Corner<T>}
         */
        top: Corner<T>;
        /**
         * The bottommost element in the rightmost column
         *
         * @type {Corner<T>}
         */
        bottom: Corner<T>;
    };
    /**
     * Information about elements contained in the bottommost row
     *
     * @type {{
     *  left: Corner<T>
     *  right: Corner<T>
     * }}
     */
    bottom: {
        /**
         * The leftmost element in the bottommost row
         *
         * @type {Corner<T>}
         */
        left: Corner<T>;
        /**
         * The rightmost element in the bottommost row
         *
         * @type {Corner<T>}
         */
        right: Corner<T>;
    };
    /**
     * Information about elements contained in the leftmost column
     *
     * @type {{
     *  top: Corner<T>
     *  bottom: Corner<T>
     * }}
     */
    left: {
        /**
         * The topmost element in the leftmost column
         *
         * @type {Corner<T>}
         */
        top: Corner<T>;
        /**
         * The bottommost element in the leftmost column
         *
         * @type {Corner<T>}
         */
        bottom: Corner<T>;
    };
}
/**
 * Return values of the \`useFlexCorners\` hook
 *
 * @export
 * @typedef {UseFlexCornersReturn}
 */
export interface UseFlexCornersReturn<T extends HTMLElement> {
    /**
     * Callback ref updater for tracking included elements
     *
     * @example
     * To get corner for an array of strings placed as \`div\`s
     * \`\`\`tsx
     * <div style={{display: "flex", flexWrap: "wrap"}}>
     *   {
     *     strings.map((s, i) => <div ref={element => setElement(i, element)}>{s}</div>)
     *   }
     * </div>
     * \`\`\`   *
     * @type {(index: number, element: T) => void}
     */
    setElement: (index: number, element: T) => void;
    /**
     * Information about elements in corner positions
     *
     * @type {Corners<T>}
     */
    corners: Corners<T> | null;
    /**
     * Function to recalculate corners on a resize other than the standard window event
     *
     * @type {() => void}
     */
    onResize: () => void;
}
/**
 * \`useFlexCorners\` hook type
 *
 * @export
 * @typedef {UseFlexCorners}
 * @template T extends HTMLElement
 */
export declare type UseFlexCorners<T extends HTMLElement> = () => UseFlexCornersReturn<T>;
/**
 * Dynamically locates corner elements of elements positioned with wrapping flex
 *
 * @implements {UseFlexCorners}
 * @template T extends HTMLElement
 * @returns {UseFlexCornersReturn<T>}
 */
declare const useFlexCorners: <T extends HTMLElement>() => UseFlexCornersReturn<T>;
export default useFlexCorners;
`;function _(r={}){const{wrapper:i}=Object.assign({},d(),r.components);return i?n(i,{...r,children:n(l,{})}):l();function l(){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},d(),r.components);return T(v,{children:[n(x,{title:"Example/UseFlexCorners"}),`
`,n(o.h1,{children:"useFlexCorners"}),`
`,n(o.p,{children:"Dynamic selection of elements laid out with wrapping flex, enabling styling elements that are not selectable with CSS alone."}),`
`,n(o.h2,{children:"Types"}),`
`,n(g,{language:"ts",code:F}),`
`,n(o.h2,{children:"Examples"}),`
`,n(o.h3,{children:"Apps"}),`
`,n(C,{withSource:"open",children:n(y,{name:"Apps",story:u})})]})}}const j=u;j.storyName="Apps";const s={title:"Example/UseFlexCorners",tags:["mdx"],includeStories:["_apps_"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:_};const B=["_apps_"];export{B as __namedExportsOrder,j as _apps_,s as default};
//# sourceMappingURL=UseFlexCorners.stories-096af1f6.js.map
