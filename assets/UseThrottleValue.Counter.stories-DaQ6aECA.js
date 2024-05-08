import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as h}from"./index-uubelm5h.js";import{u as p}from"./useTally-Ck9qmLPX.js";import{u as r}from"./useThrottleValue-D1BmCzGo.js";const c=()=>{const[e,{increment:s}]=p({}),i=r(e,500),m=r(e,1e3),T=r(e,5e3);return h.useEffect(()=>{const l=()=>{s(),setTimeout(l,1)};setTimeout(l,1)},[s]),t.jsxs("div",{className:"prose flex flex-col gap-2 text-4xl",children:[t.jsxs("div",{children:["Value: ",e]}),t.jsxs("div",{children:["Throttled value (500ms): ",i]}),t.jsxs("div",{children:["Throttled value (1s): ",m]}),t.jsxs("div",{children:["Throttled value (5s): ",T]})]})},d=c;c.__docgenInfo={description:"",methods:[],displayName:"Counter"};const f=`import React, { useEffect } from 'react'
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
`,v={title:"useThrottleValue/Counter",component:d},o={name:"Counter",parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:f,language:"tsx"}}},render:e=>t.jsx(d,{...e})};var n,a,u;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(a=o.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const x=["counter"],j=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:x,counter:o,default:v},Symbol.toStringTag,{value:"Module"}));export{j as C,o as c};
