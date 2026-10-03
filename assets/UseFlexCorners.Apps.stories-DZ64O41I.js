import{j as l,T as S,D as v,S as R,m as E,r as f,p as j}from"./iframe-D0cwLo6p.js";import{u as F}from"./useArray-Bw3c9c9b.js";import{u as P}from"./useMutationObserver-DHcBkXWa.js";import{u as D}from"./useWindowListener-daoirjRI.js";import"./preload-helper-C1FmrZbK.js";const H=`/**
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
`,_=`
Dynamic selection of elements laid out with wrapping flex, enabling styling elements that are not selectable with CSS alone.
`,A=()=>l.jsxs(l.Fragment,{children:[l.jsx(S,{}),l.jsx(v,{}),l.jsx(R,{code:H,language:"typescript"}),l.jsx(E,{})]}),M={page:A,description:{component:_}},W=()=>{const[m,{updateAt:g}]=F([]),h=P(document,{attributes:!0,subtree:!0}),c=f.useCallback(()=>{if(!document)return null;const p=m.filter(n=>document.body.contains(n));if(!p.length)return null;const e=p.map(n=>n.getBoundingClientRect()),i={index:0,element:p[0],isHanging:!1},o=p.reduce((n,w,r)=>{const s={...n},a={index:r,element:w,isHanging:!1};return(e[r].top<e[n.top.left.index].top||e[r].top===e[n.top.left.index].top&&e[r].left<e[n.top.left.index].left)&&(s.top.left=a),(e[r].top<e[n.top.right.index].top||e[r].top===e[n.top.right.index].top&&e[r].right>e[n.top.right.index].right)&&(s.top.right=a),(e[r].right>e[n.right.top.index].right||e[r].right===e[n.right.top.index].right&&e[r].top<e[n.right.top.index].top)&&(s.right.top=a),(e[r].right>e[n.right.bottom.index].right||e[r].right===e[n.right.bottom.index].right&&e[r].bottom>e[n.right.bottom.index].bottom)&&(s.right.bottom=a),(e[r].bottom>e[n.bottom.left.index].bottom||e[r].bottom===e[n.bottom.left.index].bottom&&e[r].left<e[n.bottom.left.index].left)&&(s.bottom.left=a),(e[r].bottom>e[n.bottom.right.index].bottom||e[r].bottom===e[n.bottom.right.index].bottom&&e[r].right>e[n.bottom.right.index].right)&&(s.bottom.right=a),(e[r].left<e[n.left.top.index].left||e[r].left===e[n.left.top.index].left&&e[r].top<e[n.left.top.index].top)&&(s.left.top=a),(e[r].left<e[n.left.bottom.index].left||e[r].left===e[n.left.bottom.index].left&&e[r].bottom>e[n.left.bottom.index].bottom)&&(s.left.bottom=a),s},{top:{left:i,right:i},right:{top:i,bottom:i},bottom:{left:i,right:i},left:{top:i,bottom:i}});return o.top.left.index!==o.left.top.index&&(o.top.left.isHanging=!0,o.left.top.isHanging=!0),o.top.right.index!==o.right.top.index&&(o.top.right.isHanging=!0,o.right.top.isHanging=!0),o.bottom.left.index!==o.left.bottom.index&&(o.bottom.left.isHanging=!0,o.left.bottom.isHanging=!0),o.bottom.right.index!==o.right.bottom.index&&(o.bottom.right.isHanging=!0,o.right.bottom.isHanging=!0),o},[h,m]),[u,x]=f.useState(c()),t=f.useCallback(()=>{x(c())},[c]);return f.useEffect(t,[t]),D("resize",t),{corners:u,setElement:g,onResize:t}},T=({itemCount:m,flexWrap:g,flexDirection:h,justifyContent:c,alignItems:u,alignContent:x})=>{const{corners:t,setElement:p}=W(),e=f.useMemo(()=>Array.from({length:m},(i,o)=>l.jsx("div",{ref:n=>n&&p(o,n),className:`flex h-16 ${(o+1)%5===0?"[width:8.25rem]":"w-16"} items-center justify-center bg-blue-700 p-1 text-white  
        ${o===(t==null?void 0:t.top.left.index)||o===(t==null?void 0:t.left.top.index)?"rounded-tl-3xl bg-emerald-500":""} 
        ${o===(t==null?void 0:t.top.right.index)||o===(t==null?void 0:t.right.top.index)?"rounded-tr-3xl bg-emerald-500":""}
        ${o===(t==null?void 0:t.bottom.right.index)||o===(t==null?void 0:t.right.bottom.index)?"rounded-br-3xl bg-emerald-500":""}
        ${o===(t==null?void 0:t.bottom.left.index)||o===(t==null?void 0:t.left.bottom.index)?"rounded-bl-3xl bg-emerald-500":""}
      
        `},`item-${o}`)),[m,t==null?void 0:t.top,t==null?void 0:t.left,t==null?void 0:t.right,t==null?void 0:t.bottom,p]);return l.jsx("div",{className:"flex h-screen w-screen content-center items-center justify-center bg-white p-8",children:l.jsx("div",{className:"flex resize gap-1 overflow-auto border-2 border-gray-400 p-2 [height:30rem] [width:18.1rem]",style:{flexWrap:g,flexDirection:h,justifyContent:c,alignItems:u,alignContent:x},children:e})})};T.__docgenInfo={description:"",methods:[],displayName:"Apps",props:{itemCount:{required:!0,tsType:{name:"number"},description:""},flexWrap:{required:!0,tsType:{name:"ReactCSSProperties['flexWrap']",raw:"React.CSSProperties['flexWrap']"},description:""},flexDirection:{required:!0,tsType:{name:"ReactCSSProperties['flexDirection']",raw:"React.CSSProperties['flexDirection']"},description:""},justifyContent:{required:!0,tsType:{name:"ReactCSSProperties['justifyContent']",raw:"React.CSSProperties['justifyContent']"},description:""},alignItems:{required:!0,tsType:{name:"ReactCSSProperties['alignItems']",raw:"React.CSSProperties['alignItems']"},description:""},alignContent:{required:!0,tsType:{name:"ReactCSSProperties['alignContent']",raw:"React.CSSProperties['alignContent']"},description:""}}};const L=`import type React from 'react'
import { useMemo } from 'react'
import useFlexCorners from '../useFlexCorners'

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
    [itemCount, corners?.top, corners?.left, corners?.right, corners?.bottom, setElement],
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
`,$=j.meta({title:"useFlexCorners",component:T,parameters:{layout:"centered",docs:M}}),d=$.story({name:"Apps",parameters:{docs:{source:{code:L,language:"tsx"}}},argTypes:{flexWrap:{control:{type:"select"},options:["nowrap","wrap","wrap-reverse"]},flexDirection:{control:{type:"select"},options:["row","row-reverse","column","column-reverse"]},justifyContent:{control:{type:"select"},options:["start","end","center","space-between","space-around","space-evenly"]},alignItems:{control:{type:"select"},options:["start","end","center","baseline","stretch"]},alignContent:{control:{type:"select"},options:["start","end","center","space-between","space-around","space-evenly","stretch"]}},args:{itemCount:15,flexWrap:"wrap",flexDirection:"row",justifyContent:"start",alignItems:"stretch",alignContent:"start"}});var b,C,y;d.input.parameters={...d.input.parameters,docs:{...(b=d.input.parameters)==null?void 0:b.docs,source:{originalSource:`meta.story({
  name: 'Apps',
  parameters: {
    docs: {
      source: {
        code: APPS_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    flexWrap: {
      control: {
        type: 'select'
      },
      options: ['nowrap', 'wrap', 'wrap-reverse']
    },
    flexDirection: {
      control: {
        type: 'select'
      },
      options: ['row', 'row-reverse', 'column', 'column-reverse']
    },
    justifyContent: {
      control: {
        type: 'select'
      },
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly']
    },
    alignItems: {
      control: {
        type: 'select'
      },
      options: ['start', 'end', 'center', 'baseline', 'stretch']
    },
    alignContent: {
      control: {
        type: 'select'
      },
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']
    }
  },
  args: {
    itemCount: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'stretch',
    alignContent: 'start'
  }
})`,...(y=(C=d.input.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const z=["Apps_Example"];export{d as Apps_Example,z as __namedExportsOrder,$ as default};
