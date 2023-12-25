import{M as g,e as C,C as y,f as b}from"./chunk-HLWAVYOI-phrRoTf0.js";import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{F as T}from"./too-many-hooks-a2cJHX-n.js";import{r as v}from"./index-4g5l5LRQ.js";import{useMDXComponents as p}from"./index-_VGcpBFS.js";import"./iframe-UySUA6c2.js";import"../sb-preview/runtime.js";import"./react-18-0wh8ubQX.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-ogXoivrg.js";import"./index-TRu6N6dU.js";import"./index-PPLHz8o0.js";const l=({itemCount:t,flexWrap:o,flexDirection:u,justifyContent:c,alignItems:x,alignContent:f})=>{const{corners:e,setElement:s}=T(),h=v.useMemo(()=>Array.from({length:t},(_,r)=>n.jsx("div",{ref:a=>a&&s(r,a),className:`flex h-16 ${(r+1)%5===0?"[width:8.25rem]":"w-16"} items-center justify-center bg-blue-700 p-1 text-white  
        ${r===(e==null?void 0:e.top.left.index)||r===(e==null?void 0:e.left.top.index)?"rounded-tl-3xl bg-emerald-500":""} 
        ${r===(e==null?void 0:e.top.right.index)||r===(e==null?void 0:e.right.top.index)?"rounded-tr-3xl bg-emerald-500":""}
        ${r===(e==null?void 0:e.bottom.right.index)||r===(e==null?void 0:e.right.bottom.index)?"rounded-br-3xl bg-emerald-500":""}
        ${r===(e==null?void 0:e.bottom.left.index)||r===(e==null?void 0:e.left.bottom.index)?"rounded-bl-3xl bg-emerald-500":""}
      
        `},`item-${r}`)),[t,e==null?void 0:e.top.left.index,e==null?void 0:e.top.right.index,e==null?void 0:e.left.top.index,e==null?void 0:e.left.bottom.index,e==null?void 0:e.right.top.index,e==null?void 0:e.right.bottom.index,e==null?void 0:e.bottom.right.index,e==null?void 0:e.bottom.left.index,s]);return n.jsx("div",{className:"flex h-screen w-screen content-center items-center justify-center bg-white p-8",children:n.jsx("div",{className:"flex resize gap-1 overflow-auto border-2 border-gray-400 p-2 [height:30rem] [width:18.1rem]",style:{flexWrap:o,flexDirection:u,justifyContent:c,alignItems:x,alignContent:f},children:h})})};try{l.displayName="Apps",l.__docgenInfo={description:"",displayName:"Apps",props:{itemCount:{defaultValue:null,description:"",name:"itemCount",required:!0,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"wrap-reverse"'}]}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row"'},{value:'"row-reverse"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!0,type:{name:"JustifyContent | undefined"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!0,type:{name:"AlignItems | undefined"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!0,type:{name:"AlignContent | undefined"}}}}}catch{}const w=`import { useFlexCorners } from '@yobgob/too-many-hooks'
import React, { useMemo } from 'react'

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
`,d={parameters:{layout:"fullscreen",docs:{source:{code:w,language:"tsx"}}},argTypes:{flexWrap:{options:["wrap","nowrap","wrap-reverse"],control:{type:"select"}},flexDirection:{options:["row","column","row-reverse","column-reverse"],control:{type:"select"}},justifyContent:{options:["start","center","space-between","space-around","space-evenly"],control:{type:"select"}},alignItems:{options:["stretch","center","start","end"],control:{type:"select"}},alignContent:{options:["start","center","space-between","space-around"],control:{type:"select"}}},args:{itemCount:15,flexWrap:"wrap",flexDirection:"row",justifyContent:"start",alignItems:"stretch",alignContent:"start"},render:t=>n.jsx(l,{...t})},j=`/**
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
export type UseFlexCorners<T extends HTMLElement> = () => UseFlexCornersReturn<T>;
/**
 * Dynamically locates corner elements of elements positioned with wrapping flex
 *
 * @implements {UseFlexCorners}
 * @template T extends HTMLElement
 * @returns {UseFlexCornersReturn<T>}
 */
declare const useFlexCorners: <T extends HTMLElement>() => UseFlexCornersReturn<T>;
export default useFlexCorners;
`;function m(t){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},p(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(g,{title:"Example/UseFlexCorners"}),`
`,n.jsx(o.h1,{id:"useflexcorners",children:"useFlexCorners"}),`
`,n.jsx(o.p,{children:"Dynamic selection of elements laid out with wrapping flex, enabling styling elements that are not selectable with CSS alone."}),`
`,n.jsx(o.h2,{id:"types",children:"Types"}),`
`,n.jsx(C,{language:"ts",code:j}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"apps",children:"Apps"}),`
`,n.jsx(y,{withSource:"open",children:n.jsx(b,{name:"Apps",story:d})})]})}function E(t={}){const{wrapper:o}=Object.assign({},p(),t.components);return o?n.jsx(o,{...t,children:n.jsx(m,{...t})}):m(t)}const F=d;F.storyName="Apps";const i={title:"Example/UseFlexCorners",tags:["stories-mdx"],includeStories:["_apps_"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:E};const W=["_apps_"];export{W as __namedExportsOrder,F as _apps_,i as default};