import{r as p,j as e,p as T}from"./iframe-D0cwLo6p.js";import{u as r,U as h}from"./useThrottleValue-DFiNYN_s.js";import{u as v}from"./useTally-C00Yvoc9.js";import"./preload-helper-C1FmrZbK.js";import"./useThrottleFunction-qpiba_z-.js";const c=()=>{const[t,{increment:s}]=v({}),d=r(t,500),i=r(t,1e3),m=r(t,5e3);return p.useEffect(()=>{const l=()=>{s(),setTimeout(l,1)};setTimeout(l,1)},[s]),e.jsxs("div",{className:"prose flex flex-col gap-2 text-4xl",children:[e.jsxs("div",{children:["Value: ",t]}),e.jsxs("div",{children:["Throttled value (500ms): ",d]}),e.jsxs("div",{children:["Throttled value (1s): ",i]}),e.jsxs("div",{children:["Throttled value (5s): ",m]})]})};c.__docgenInfo={description:"",methods:[],displayName:"Counter"};const x=`import type React from 'react'
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
`,f=T.meta({title:"useThrottleValue",component:c,parameters:{layout:"centered",docs:h}}),o=f.story({name:"Counter",parameters:{controls:{expanded:!0},docs:{source:{code:x,language:"tsx"}}}});var a,n,u;o.input.parameters={...o.input.parameters,docs:{...(a=o.input.parameters)==null?void 0:a.docs,source:{originalSource:`meta.story({
  name: 'Counter',
  parameters: {
    controls: {
      expanded: true
    },
    docs: {
      source: {
        code: COUNTER_CODE,
        language: 'tsx'
      }
    }
  }
})`,...(u=(n=o.input.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const V=["Counter_Example"];export{o as Counter_Example,V as __namedExportsOrder,f as default};
