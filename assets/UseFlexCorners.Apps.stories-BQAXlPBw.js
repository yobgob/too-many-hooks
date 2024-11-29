import{j as g}from"./jsx-runtime-DEdD30eg.js";import{r as m}from"./index-RYns6xqu.js";import{u as j}from"./useArray-DpToTQHT.js";import{u as P}from"./useMutationObserver-cJyzyhLu.js";import{u as R}from"./useWindowListener-TiQjHzZR.js";const v=()=>{const[a,{updateAt:c}]=j([]),x=P(document,{attributes:!0,subtree:!0}),f=m.useCallback(()=>{if(!document)return null;const l=a.filter(n=>document.body.contains(n));if(!l.length)return null;const e=l.map(n=>n.getBoundingClientRect()),r={index:0,element:l[0],isHanging:!1},o=l.reduce((n,S,i)=>{const s={...n},p={index:i,element:S,isHanging:!1};return(e[i].top<e[n.top.left.index].top||e[i].top===e[n.top.left.index].top&&e[i].left<e[n.top.left.index].left)&&(s.top.left=p),(e[i].top<e[n.top.right.index].top||e[i].top===e[n.top.right.index].top&&e[i].right>e[n.top.right.index].right)&&(s.top.right=p),(e[i].right>e[n.right.top.index].right||e[i].right===e[n.right.top.index].right&&e[i].top<e[n.right.top.index].top)&&(s.right.top=p),(e[i].right>e[n.right.bottom.index].right||e[i].right===e[n.right.bottom.index].right&&e[i].bottom>e[n.right.bottom.index].bottom)&&(s.right.bottom=p),(e[i].bottom>e[n.bottom.left.index].bottom||e[i].bottom===e[n.bottom.left.index].bottom&&e[i].left<e[n.bottom.left.index].left)&&(s.bottom.left=p),(e[i].bottom>e[n.bottom.right.index].bottom||e[i].bottom===e[n.bottom.right.index].bottom&&e[i].right>e[n.bottom.right.index].right)&&(s.bottom.right=p),(e[i].left<e[n.left.top.index].left||e[i].left===e[n.left.top.index].left&&e[i].top<e[n.left.top.index].top)&&(s.left.top=p),(e[i].left<e[n.left.bottom.index].left||e[i].left===e[n.left.bottom.index].left&&e[i].bottom>e[n.left.bottom.index].bottom)&&(s.left.bottom=p),s},{top:{left:r,right:r},right:{top:r,bottom:r},bottom:{left:r,right:r},left:{top:r,bottom:r}});return o.top.left.index!==o.left.top.index&&(o.top.left.isHanging=!0,o.left.top.isHanging=!0),o.top.right.index!==o.right.top.index&&(o.top.right.isHanging=!0,o.right.top.isHanging=!0),o.bottom.left.index!==o.left.bottom.index&&(o.bottom.left.isHanging=!0,o.left.bottom.isHanging=!0),o.bottom.right.index!==o.right.bottom.index&&(o.bottom.right.isHanging=!0,o.right.bottom.isHanging=!0),o},[x,a]),[u,b]=m.useState(f()),t=m.useCallback(()=>{b(f())},[f]);return m.useEffect(t,[t]),R("resize",t),{corners:u,setElement:c,onResize:t}},h=({itemCount:a,flexWrap:c,flexDirection:x,justifyContent:f,alignItems:u,alignContent:b})=>{const{corners:t,setElement:l}=v(),e=m.useMemo(()=>Array.from({length:a},(r,o)=>g.jsx("div",{ref:n=>n&&l(o,n),className:`flex h-16 ${(o+1)%5===0?"[width:8.25rem]":"w-16"} items-center justify-center bg-blue-700 p-1 text-white  
        ${o===(t==null?void 0:t.top.left.index)||o===(t==null?void 0:t.left.top.index)?"rounded-tl-3xl bg-emerald-500":""} 
        ${o===(t==null?void 0:t.top.right.index)||o===(t==null?void 0:t.right.top.index)?"rounded-tr-3xl bg-emerald-500":""}
        ${o===(t==null?void 0:t.bottom.right.index)||o===(t==null?void 0:t.right.bottom.index)?"rounded-br-3xl bg-emerald-500":""}
        ${o===(t==null?void 0:t.bottom.left.index)||o===(t==null?void 0:t.left.bottom.index)?"rounded-bl-3xl bg-emerald-500":""}
      
        `},`item-${o}`)),[a,t==null?void 0:t.top.left.index,t==null?void 0:t.top.right.index,t==null?void 0:t.left.top.index,t==null?void 0:t.left.bottom.index,t==null?void 0:t.right.top.index,t==null?void 0:t.right.bottom.index,t==null?void 0:t.bottom.right.index,t==null?void 0:t.bottom.left.index,l]);return g.jsx("div",{className:"flex h-screen w-screen content-center items-center justify-center bg-white p-8",children:g.jsx("div",{className:"flex resize gap-1 overflow-auto border-2 border-gray-400 p-2 [height:30rem] [width:18.1rem]",style:{flexWrap:c,flexDirection:x,justifyContent:f,alignItems:u,alignContent:b},children:e})})};h.__docgenInfo={description:"",methods:[],displayName:"Apps",props:{itemCount:{required:!0,tsType:{name:"number"},description:""},flexWrap:{required:!0,tsType:{name:"ReactCSSProperties['flexWrap']",raw:"React.CSSProperties['flexWrap']"},description:""},flexDirection:{required:!0,tsType:{name:"ReactCSSProperties['flexDirection']",raw:"React.CSSProperties['flexDirection']"},description:""},justifyContent:{required:!0,tsType:{name:"ReactCSSProperties['justifyContent']",raw:"React.CSSProperties['justifyContent']"},description:""},alignItems:{required:!0,tsType:{name:"ReactCSSProperties['alignItems']",raw:"React.CSSProperties['alignItems']"},description:""},alignContent:{required:!0,tsType:{name:"ReactCSSProperties['alignContent']",raw:"React.CSSProperties['alignContent']"},description:""}}};const A=`import type React from 'react'
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
`,D={title:"useFlexCorners/Apps",component:h},d={name:"Apps",parameters:{layout:"fullscreen",docs:{source:{code:A,language:"tsx"}}},argTypes:{flexWrap:{options:["wrap","nowrap","wrap-reverse"],control:{type:"select"}},flexDirection:{options:["row","column","row-reverse","column-reverse"],control:{type:"select"}},justifyContent:{options:["start","center","space-between","space-around","space-evenly"],control:{type:"select"}},alignItems:{options:["stretch","center","start","end"],control:{type:"select"}},alignContent:{options:["start","center","space-between","space-around"],control:{type:"select"}}},args:{itemCount:15,flexWrap:"wrap",flexDirection:"row",justifyContent:"start",alignItems:"stretch",alignContent:"start"},render:a=>g.jsx(h,{...a})};var C,y,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Apps',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: APPS_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    flexWrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: {
        type: 'select'
      }
    },
    flexDirection: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: {
        type: 'select'
      }
    },
    justifyContent: {
      options: ['start', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: {
        type: 'select'
      }
    },
    alignItems: {
      options: ['stretch', 'center', 'start', 'end'],
      control: {
        type: 'select'
      }
    },
    alignContent: {
      options: ['start', 'center', 'space-between', 'space-around'],
      control: {
        type: 'select'
      }
    }
  },
  args: {
    itemCount: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'stretch',
    alignContent: 'start'
  },
  render: args => <Apps {...args} />
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const _=["apps"],F=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:_,apps:d,default:D},Symbol.toStringTag,{value:"Module"}));export{F as A,d as a};