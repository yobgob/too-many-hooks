import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{B as p,N as r}from"./too-many-hooks-DK1YWqSv.js";import{r as v}from"./index-uubelm5h.js";const c=()=>{const[e,{increment:n}]=p({}),i=r(e,500),m=r(e,1e3),h=r(e,5e3);return v.useEffect(()=>{const s=()=>{n(),setTimeout(s,1)};setTimeout(s,1)},[n]),t.jsxs("div",{className:"prose flex flex-col gap-2 text-4xl",children:[t.jsxs("div",{children:["Value: ",e]}),t.jsxs("div",{children:["Throttled value (500ms): ",i]}),t.jsxs("div",{children:["Throttled value (1s): ",m]}),t.jsxs("div",{children:["Throttled value (5s): ",h]})]})},d=c;c.__docgenInfo={description:"",methods:[],displayName:"Counter"};const T=`import { useTally, useThrottleValue } from '@yobgob/too-many-hooks'
import React, { useEffect } from 'react'

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
`,x={title:"useThrottleValue/Counter",component:d},o={name:"Counter",parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:T,language:"tsx"}}},render:e=>t.jsx(d,{...e})};var l,a,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(a=o.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const f=["counter"],_=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:f,counter:o,default:x},Symbol.toStringTag,{value:"Module"}));export{_ as C,o as c};
