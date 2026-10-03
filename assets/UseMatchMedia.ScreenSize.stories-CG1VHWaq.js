import{j as t,T as x,D as c,S as l,m as y,r as o,p as g}from"./iframe-D0cwLo6p.js";import"./preload-helper-C1FmrZbK.js";var u={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}};const w=`/**
 * \`useMatchMedia\` hook type
 *
 * @export
 * @typedef {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @returns {boolean}
 */
export type UseMatchMedia = (query: string) => MediaQueryList;
/**
 * Returns a boolean indicating whether or not a media query matches
 *
 * @example
 * To check for a screen width <= 360px
 * \`\`\`ts
 * const isMobile = useMatchMedia("screen and (max-width: 360px)")
 * \`\`\`
 * @example
 * To check if the browser is printing the page
 * \`\`\`ts
 * const isPrinting = useMatchMedia("print")
 * \`\`\`
 * @implements {UseMatchMedia}
 * @param {string} query - a CSS media query to match on
 * @returns {MediaQueryList}
 */
declare const useMatchMedia: UseMatchMedia;
export default useMatchMedia;
`,M=`
Track whether a media query is matching or not
`,P=()=>t.jsxs(t.Fragment,{children:[t.jsx(x,{}),t.jsx(c,{}),t.jsx(l,{code:w,language:"typescript"}),t.jsx(y,{})]}),b={page:P,description:{component:M}},S=e=>{const[a,i]=o.useState(window.matchMedia(e)),s=o.useCallback(()=>i(window.matchMedia(e)),[e]);return o.useEffect(()=>{const p=window.matchMedia(e);return i(p),p.addEventListener("change",s),()=>p.removeEventListener("change",s)},[e,s]),a},d=({minWidth:e,maxWidth:a})=>{const{matches:i}=S(`screen and (min-width: ${e}) and (max-width: ${a})`);return t.jsx("div",{className:`p-10 text-white ${i?"bg-green-500":"bg-red-500"}`,children:i?"Matches":"Does not match"})};d.__docgenInfo={description:"",methods:[],displayName:"Form",props:{minWidth:{required:!0,tsType:{name:"string"},description:""},maxWidth:{required:!0,tsType:{name:"string"},description:""}}};const E=`import type React from 'react'
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
`,_=g.meta({title:"useMatchMedia",component:d,parameters:{layout:"centered",docs:b}}),n=_.story({name:"Screen Size",parameters:{docs:{source:{code:E,language:"tsx"}},viewport:{options:u,defaultViewport:"iphone14"}},args:{minWidth:"0px",maxWidth:"390px"}});var h,r,m;n.input.parameters={...n.input.parameters,docs:{...(h=n.input.parameters)==null?void 0:h.docs,source:{originalSource:`meta.story({
  name: 'Screen Size',
  parameters: {
    docs: {
      source: {
        code: SCREEN_SIZE_CODE,
        language: 'tsx'
      }
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone14'
    }
  },
  args: {
    minWidth: '0px',
    maxWidth: '390px'
  }
})`,...(m=(r=n.input.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const T=["ScreenSize_Example"];export{n as ScreenSize_Example,T as __namedExportsOrder,_ as default};
