import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{u as T}from"./useTally-CfVZoKn9.js";import{u as r}from"./useThrottleValue-BYIUUE9F.js";const s=()=>{const[e,{increment:l}]=T({}),d=r(e,500),i=r(e,1e3),m=r(e,5e3);return p.useEffect(()=>{const n=()=>{l(),setTimeout(n,1)};setTimeout(n,1)},[l]),t.jsxs("div",{className:"prose flex flex-col gap-2 text-4xl",children:[t.jsxs("div",{children:["Value: ",e]}),t.jsxs("div",{children:["Throttled value (500ms): ",d]}),t.jsxs("div",{children:["Throttled value (1s): ",i]}),t.jsxs("div",{children:["Throttled value (5s): ",m]})]})};s.__docgenInfo={description:"",methods:[],displayName:"Counter"};const h=`import type React from 'react'
import { useEffect } from 'react'
import useTally from '../../UseTally/useTally'
import useThrottleValue from '../useThrottleValue'

const Counter: React.FC = () => {
  const [tally, { increment }] = useTally({})
  const throttledHalf = useThrottleValue(tally, 500)
  const throttledOne = useThrottleValue(tally, 1000)
  const throttledFive = useThrottleValue(tally, 5000)

  useEffect(() => {
    const onTimeout = () => {
      increment()
      setTimeout(onTimeout, 1)
    }
    setTimeout(onTimeout, 1)
  }, [increment])

  return (
    <div className="prose flex flex-col gap-2 text-4xl">
      <div>Value: {tally}</div>
      <div>Throttled value (500ms): {throttledHalf}</div>
      <div>Throttled value (1s): {throttledOne}</div>
      <div>Throttled value (5s): {throttledFive}</div>
    </div>
  )
}

export default Counter
`,f={title:"useThrottleValue/Counter",component:s},o={name:"Counter",parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:h,language:"tsx"}}},render:e=>t.jsx(s,{...e})};var a,u,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Counter',
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true
    },
    docs: {
      source: {
        code: COUNTER_CODE,
        language: 'tsx'
      }
    }
  },
  render: args => <Counter {...args} />
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const v=["counter"],_=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:v,counter:o,default:f},Symbol.toStringTag,{value:"Module"}));export{_ as C,o as c};
