import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{F as b}from"./too-many-hooks-DK1YWqSv.js";import{r as y}from"./index-uubelm5h.js";const c=({itemCount:r,flexWrap:m,flexDirection:x,justifyContent:u,alignItems:f,alignContent:g})=>{const{corners:e,setElement:s}=b(),C=y.useMemo(()=>Array.from({length:r},(j,t)=>o.jsx("div",{ref:i=>i&&s(t,i),className:`flex h-16 ${(t+1)%5===0?"[width:8.25rem]":"w-16"} items-center justify-center bg-blue-700 p-1 text-white  
        ${t===(e==null?void 0:e.top.left.index)||t===(e==null?void 0:e.left.top.index)?"rounded-tl-3xl bg-emerald-500":""} 
        ${t===(e==null?void 0:e.top.right.index)||t===(e==null?void 0:e.right.top.index)?"rounded-tr-3xl bg-emerald-500":""}
        ${t===(e==null?void 0:e.bottom.right.index)||t===(e==null?void 0:e.right.bottom.index)?"rounded-br-3xl bg-emerald-500":""}
        ${t===(e==null?void 0:e.bottom.left.index)||t===(e==null?void 0:e.left.bottom.index)?"rounded-bl-3xl bg-emerald-500":""}
      
        `},`item-${t}`)),[r,e==null?void 0:e.top.left.index,e==null?void 0:e.top.right.index,e==null?void 0:e.left.top.index,e==null?void 0:e.left.bottom.index,e==null?void 0:e.right.top.index,e==null?void 0:e.right.bottom.index,e==null?void 0:e.bottom.right.index,e==null?void 0:e.bottom.left.index,s]);return o.jsx("div",{className:"flex h-screen w-screen content-center items-center justify-center bg-white p-8",children:o.jsx("div",{className:"flex resize gap-1 overflow-auto border-2 border-gray-400 p-2 [height:30rem] [width:18.1rem]",style:{flexWrap:m,flexDirection:x,justifyContent:u,alignItems:f,alignContent:g},children:C})})},d=c;c.__docgenInfo={description:"",methods:[],displayName:"Apps",props:{itemCount:{required:!0,tsType:{name:"number"},description:""},flexWrap:{required:!0,tsType:{name:"ReactCSSProperties['flexWrap']",raw:"React.CSSProperties['flexWrap']"},description:""},flexDirection:{required:!0,tsType:{name:"ReactCSSProperties['flexDirection']",raw:"React.CSSProperties['flexDirection']"},description:""},justifyContent:{required:!0,tsType:{name:"ReactCSSProperties['justifyContent']",raw:"React.CSSProperties['justifyContent']"},description:""},alignItems:{required:!0,tsType:{name:"ReactCSSProperties['alignItems']",raw:"React.CSSProperties['alignItems']"},description:""},alignContent:{required:!0,tsType:{name:"ReactCSSProperties['alignContent']",raw:"React.CSSProperties['alignContent']"},description:""}}};const h=`import { useFlexCorners } from '@yobgob/too-many-hooks'
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
`,w={title:"useFlexCorners/Apps",component:d},n={name:"Apps",parameters:{layout:"fullscreen",docs:{source:{code:h,language:"tsx"}}},argTypes:{flexWrap:{options:["wrap","nowrap","wrap-reverse"],control:{type:"select"}},flexDirection:{options:["row","column","row-reverse","column-reverse"],control:{type:"select"}},justifyContent:{options:["start","center","space-between","space-around","space-evenly"],control:{type:"select"}},alignItems:{options:["stretch","center","start","end"],control:{type:"select"}},alignContent:{options:["start","center","space-between","space-around"],control:{type:"select"}}},args:{itemCount:15,flexWrap:"wrap",flexDirection:"row",justifyContent:"start",alignItems:"stretch",alignContent:"start"},render:r=>o.jsx(d,{...r})};var a,l,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const S=["apps"],A=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:S,apps:n,default:w},Symbol.toStringTag,{value:"Module"}));export{A,n as a};
