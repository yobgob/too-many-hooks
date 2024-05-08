import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{B as a}from"./index-8c258KEI.js";import{u as c}from"./useArray-Ctpz10D5.js";import{B as w}from"./book-names-CTza5W-R.js";const i=["border-l-lime-600 border-b-lime-600 bg-lime-500 before:border-r-lime-600","border-l-orange-600 border-b-orange-600 bg-orange-500 before:border-r-orange-600","border-l-emerald-500 border-b-emerald-500 bg-emerald-400 before:border-r-emerald-500","border-l-purple-400 border-b-purple-400 bg-purple-300 before:border-r-purple-400"],p=w.map((r,s)=>({name:r,colors:i[s%i.length]})),B=p.slice(0,15),O=p.slice(15),h=()=>{const[r,{insertAt:s,removeAt:v,push:x}]=c(B),[n,{removeAt:d,push:g}]=c(O);return e.jsxs("div",{className:"flex max-w-lg flex-wrap gap-y-4 border-l-8 border-t border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]",children:[r.map(({name:l,colors:b},t)=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex border-b-2 border-b-yellow-900",children:[e.jsx("div",{className:"contents-center flex h-28 items-center border-b-4 border-b-yellow-900 bg-yellow-800 p-1 pr-4",children:e.jsx(a,{onClick:()=>{s(t,n[0]),d(0)},children:"+"})}),e.jsx("button",{className:"relative cursor-pointer appearance-none hover:scale-110",onClick:()=>{g({name:l,colors:b}),v(t)},children:e.jsx("div",{className:`${b} flex h-28 w-8 items-center justify-center overflow-hidden border-r-0 border-t-yellow-900 p-1 text-center leading-none [font-size:0.5rem] [writing-mode:vertical-rl] before:absolute before:right-full before:top-0 before:h-28 before:w-2 before:border-b-4 before:border-r-8 before:border-b-transparent before:bg-transparent`,children:l})})]},l),(t+1)%6===0&&e.jsx("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e.jsx("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800"})})]})),e.jsx("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e.jsx("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800 p-1",children:e.jsx("div",{className:"contents-center flex h-full items-center",children:e.jsx(a,{onClick:()=>{x(n[0]),d(0)},children:"+"})})})})]})},y=h;h.__docgenInfo={description:"",methods:[],displayName:"Bookshelf"};const k=`import React from 'react'
import { Button } from '../../../storybook-common/components'
import useArray from '../useArray'
import { BOOKS, UNUSED_BOOKS } from './constants'

const Bookshelf: React.FC = () => {
  const [books, { insertAt, removeAt, push }] = useArray(BOOKS)
  const [unusedBooks, { removeAt: removedUnusedAt, push: pushUnused }] = useArray(UNUSED_BOOKS)

  return (
    <div className="flex max-w-lg flex-wrap gap-y-4 border-l-8 border-t border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]">
      {books.map(({ name, colors }, i) => (
        <>
          <div key={name} className="flex border-b-2 border-b-yellow-900">
            <div className="contents-center flex h-28 items-center border-b-4 border-b-yellow-900 bg-yellow-800 p-1 pr-4">
              <Button
                onClick={() => {
                  insertAt(i, unusedBooks[0])
                  removedUnusedAt(0)
                }}
              >
                +
              </Button>
            </div>
            <button
              className="relative cursor-pointer appearance-none hover:scale-110"
              onClick={() => {
                pushUnused({ name, colors })
                removeAt(i)
              }}
            >
              <div
                className={\`\${colors} flex h-28 w-8 items-center justify-center overflow-hidden border-r-0 border-t-yellow-900 p-1 text-center leading-none [font-size:0.5rem] [writing-mode:vertical-rl] before:absolute before:right-full before:top-0 before:h-28 before:w-2 before:border-b-4 before:border-r-8 before:border-b-transparent before:bg-transparent\`}
              >
                {name}
              </div>
            </button>
          </div>
          {(i + 1) % 6 === 0 && (
            <div className="flex-1 border-b-2 border-b-yellow-900">
              <div className="h-28 border-b-4 border-b-yellow-900 bg-yellow-800" />
            </div>
          )}
        </>
      ))}
      <div className="flex-1 border-b-2 border-b-yellow-900">
        <div className="h-28 border-b-4 border-b-yellow-900 bg-yellow-800 p-1">
          <div className="contents-center flex h-full items-center">
            <Button
              onClick={() => {
                push(unusedBooks[0])
                removedUnusedAt(0)
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookshelf
`,N={title:"useArray/Bookshelf",component:y},o={name:"Bookshelf",parameters:{layout:"centered",docs:{source:{code:k,language:"tsx"}}},render:r=>e.jsx(y,{...r})};var m,f,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Bookshelf',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: BOOKSHELF_CODE,
        language: 'tsx'
      }
    }
  },
  render: args => <Bookshelf {...args} />
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const j=["bookshelf"],C=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:j,bookshelf:o,default:N},Symbol.toStringTag,{value:"Module"}));export{C as B,o as b};
