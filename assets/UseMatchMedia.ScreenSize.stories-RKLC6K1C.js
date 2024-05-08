import{j as m}from"./jsx-runtime-QvZ8i92b.js";import{r as h}from"./index-uubelm5h.js";var l={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}};const c=e=>{const[n,t]=h.useState(window.matchMedia(e)),p=h.useCallback(()=>t(window.matchMedia(e)),[e]);return h.useEffect(()=>{const s=window.matchMedia(e);return t(s),s.addEventListener("change",p),()=>s.removeEventListener("change",p)},[e,p]),n},d=({minWidth:e,maxWidth:n})=>{const{matches:t}=c(`screen and (min-width: ${e}) and (max-width: ${n})`);return m.jsx("div",{className:`p-10 text-white ${t?"bg-green-500":"bg-red-500"}`,children:t?"Matches":"Does not match"})},x=d;d.__docgenInfo={description:"",methods:[],displayName:"Form",props:{minWidth:{required:!0,tsType:{name:"string"},description:""},maxWidth:{required:!0,tsType:{name:"string"},description:""}}};const y=`import type React from 'react'
import useMatchMedia from '../useMatchMedia'

interface Props {
  minWidth: string
  maxWidth: string
}

const Form: React.FC<Props> = ({ minWidth, maxWidth }) => {
  const { matches } = useMatchMedia(
    \`screen and (min-width: \${minWidth}) and (max-width: \${maxWidth})\`,
  )

  return (
    <div className={\`p-10 text-white \${matches ? 'bg-green-500' : 'bg-red-500'}\`}>
      {matches ? 'Matches' : 'Does not match'}
    </div>
  )
}

export default Form
`,g={title:"useMatchMedia/ScreenSize",component:x},i={name:"Screen Size",parameters:{layout:"centered",docs:{source:{code:y,language:"tsx"}},viewport:{viewports:l,defaultViewport:"iphone14"}},argTypes:{minWidth:{type:"string"},maxWidth:{type:"string"}},args:{minWidth:"0px",maxWidth:"390px"},render:e=>m.jsx(x,{...e})};var a,o,r;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Screen Size',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: SCREEN_SIZE_CODE,
        language: 'tsx'
      }
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone14'
    }
  },
  argTypes: {
    minWidth: {
      type: 'string'
    },
    maxWidth: {
      type: 'string'
    }
  },
  args: {
    minWidth: '0px',
    maxWidth: '390px'
  },
  render: args => <ScreenSize {...args} />
}`,...(r=(o=i.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const w=["screenSize"],b=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:w,default:g,screenSize:i},Symbol.toStringTag,{value:"Module"}));export{b as S};
