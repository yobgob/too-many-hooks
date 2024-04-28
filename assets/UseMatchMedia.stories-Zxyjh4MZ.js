import{M as o,e as r,C as m,f as d}from"./chunk-HLWAVYOI-LzjbuYRw.js";import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{G as x}from"./too-many-hooks-L1FzWKig.js";import{useMDXComponents as h}from"./index-_VGcpBFS.js";import"./iframe-yzUvUhI0.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./react-18-4cA3wSg4.js";import"./index-hJ3u4GB4.js";import"./index-TRu6N6dU.js";import"./index-PPLHz8o0.js";var l={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}};const c=({minWidth:t,maxWidth:i})=>{const{matches:a}=x(`screen and (min-width: ${t}) and (max-width: ${i})`);return e.jsx("div",{className:`p-10 text-white ${a?"bg-green-500":"bg-red-500"}`,children:a?"Matches":"Does not match"})};try{ScreenSize.displayName="ScreenSize",ScreenSize.__docgenInfo={description:"",displayName:"ScreenSize",props:{minWidth:{defaultValue:null,description:"",name:"minWidth",required:!0,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!0,type:{name:"string"}}}}}catch{}const y=`import { useMatchMedia } from '@yobgob/too-many-hooks'
import type React from 'react'

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
`,p={parameters:{layout:"centered",docs:{source:{code:y,language:"tsx"}},viewport:{viewports:l,defaultViewport:"iphone14"}},argTypes:{minWidth:{type:"string"},maxWidth:{type:"string"}},args:{minWidth:"0px",maxWidth:"390px"},render:t=>e.jsx(c,{...t})},g=`/**
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
`;function s(t){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},h(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Example/UseMatchMedia"}),`
`,e.jsx(i.h1,{id:"usematchmedia",children:"useMatchMedia"}),`
`,e.jsx(i.p,{children:"Track whether a media query is matching or not"}),`
`,e.jsx(i.h2,{id:"types",children:"Types"}),`
`,e.jsx(r,{language:"ts",code:g}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.h3,{id:"modal",children:"Modal"}),`
`,e.jsx(m,{withSource:"open",children:e.jsx(d,{name:"Screen Size",story:p})})]})}function u(t={}){const{wrapper:i}=Object.assign({},h(),t.components);return i?e.jsx(i,{...t,children:e.jsx(s,{...t})}):s(t)}const M=p;M.storyName="Screen Size";const n={title:"Example/UseMatchMedia",tags:["stories-mdx"],includeStories:["_screenSize_"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:u};const N=["_screenSize_"];export{N as __namedExportsOrder,M as _screenSize_,n as default};
