import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as x}from"./index-RYns6xqu.js";import{B as c}from"./Button-H78i-yjT.js";import{u as i}from"./useArray-DpToTQHT.js";import{B as w}from"./book-names-CTza5W-R.js";const m=["border-l-lime-600 border-b-lime-600 bg-lime-500 before:border-r-lime-600","border-l-orange-600 border-b-orange-600 bg-orange-500 before:border-r-orange-600","border-l-emerald-500 border-b-emerald-500 bg-emerald-400 before:border-r-emerald-500","border-l-purple-400 border-b-purple-400 bg-purple-300 before:border-r-purple-400"],h=w.map((r,s)=>({name:r,colors:m[s%m.length]})),B=h.slice(0,15),O=h.slice(15),n=()=>{const[r,{insertAt:s,removeAt:y,push:v}]=i(B),[d,{removeAt:b,push:g}]=i(O);return e.jsxs("div",{className:"flex max-w-lg flex-wrap gap-y-4 border-l-8 border-t border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]",children:[r.map(({name:l,colors:a},t)=>e.jsxs(x.Fragment,{children:[e.jsxs("div",{className:"flex border-b-2 border-b-yellow-900",children:[e.jsx("div",{className:"contents-center flex h-28 items-center border-b-4 border-b-yellow-900 bg-yellow-800 p-1 pr-4",children:e.jsx(c,{onClick:()=>{s(t,d[0]),b(0)},children:"+"})}),e.jsx("button",{className:"relative cursor-pointer appearance-none hover:scale-110",onClick:()=>{g({name:l,colors:a}),y(t)},children:e.jsx("div",{className:`${a} flex h-28 w-8 items-center justify-center overflow-hidden border-r-0 border-t-yellow-900 p-1 text-center leading-none [font-size:0.5rem] [writing-mode:vertical-rl] before:absolute before:right-full before:top-0 before:h-28 before:w-2 before:border-b-4 before:border-r-8 before:border-b-transparent before:bg-transparent`,children:l})})]}),(t+1)%6===0&&e.jsx("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e.jsx("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800"})})]},l)),e.jsx("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e.jsx("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800 p-1",children:e.jsx("div",{className:"contents-center flex h-full items-center",children:e.jsx(c,{onClick:()=>{v(d[0]),b(0)},children:"+"})})})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Bookshelf"};const k=`import type React from 'react'
import { Fragment } from 'react'
import { Button } from '../../../storybook-common/components'
import useArray from '../useArray'
import { BOOKS, UNUSED_BOOKS } from './constants'

const Bookshelf: React.FC = () => {
  const [books, { insertAt, removeAt, push }] = useArray(BOOKS)
  const [unusedBooks, { removeAt: removedUnusedAt, push: pushUnused }] = useArray(UNUSED_BOOKS)

  return (
    <div className="flex max-w-lg flex-wrap gap-y-4 border-l-8 border-t border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]">
      {books.map(({ name, colors }, i) => (
        <Fragment key={name}>
          <div className="flex border-b-2 border-b-yellow-900">
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
        </Fragment>
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
`,N={title:"useArray/Bookshelf",component:n},o={name:"Bookshelf",parameters:{layout:"centered",docs:{source:{code:k,language:"tsx"}}},render:r=>e.jsx(n,{...r})};var f,p,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["bookshelf"],E=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:j,bookshelf:o,default:N},Symbol.toStringTag,{value:"Module"}));export{E as B,o as b};
