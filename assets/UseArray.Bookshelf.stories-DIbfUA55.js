import{j as e,r as g,p as w}from"./iframe-D0cwLo6p.js";import{U as B}from"./use-array-docs-Bq-qXzqP.js";import{B as b}from"./Button-XVbnJxq1.js";import{u as c}from"./useArray-Bw3c9c9b.js";import{B as O}from"./book-names-CTza5W-R.js";import"./preload-helper-C1FmrZbK.js";const i=["border-l-lime-600 border-b-lime-600 bg-lime-500 before:border-r-lime-600","border-l-orange-600 border-b-orange-600 bg-orange-500 before:border-r-orange-600","border-l-emerald-500 border-b-emerald-500 bg-emerald-400 before:border-r-emerald-500","border-l-purple-400 border-b-purple-400 bg-purple-300 before:border-r-purple-400"],f=O.map((o,s)=>({name:o,colors:i[s%i.length]})),N=f.slice(0,15),k=f.slice(15),h=()=>{const[o,{insertAt:s,removeAt:y,push:v}]=c(N),[n,{removeAt:a,push:x}]=c(k);return e.jsxs("div",{className:"flex max-w-lg flex-wrap gap-y-4 border-l-8 border-t border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]",children:[o.map(({name:t,colors:d},l)=>e.jsxs(g.Fragment,{children:[e.jsxs("div",{className:"flex border-b-2 border-b-yellow-900",children:[e.jsx("div",{className:"contents-center flex h-28 items-center border-b-4 border-b-yellow-900 bg-yellow-800 p-1 pr-4",children:e.jsx(b,{onClick:()=>{s(l,n[0]),a(0)},children:"+"})}),e.jsx("button",{className:"relative cursor-pointer appearance-none hover:scale-110",onClick:()=>{x({name:t,colors:d}),y(l)},children:e.jsx("div",{className:`${d} flex h-28 w-8 items-center justify-center overflow-hidden border-r-0 border-t-yellow-900 p-1 text-center leading-none [font-size:0.5rem] [writing-mode:vertical-rl] before:absolute before:right-full before:top-0 before:h-28 before:w-2 before:border-b-4 before:border-r-8 before:border-b-transparent before:bg-transparent`,children:t})})]}),(l+1)%6===0&&e.jsx("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e.jsx("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800"})})]},t)),e.jsx("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e.jsx("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800 p-1",children:e.jsx("div",{className:"contents-center flex h-full items-center",children:e.jsx(b,{onClick:()=>{v(n[0]),a(0)},children:"+"})})})})]})};h.__docgenInfo={description:"",methods:[],displayName:"Bookshelf"};const A=`import type React from 'react'
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
`,S=w.meta({title:"useArray",component:h,parameters:{layout:"centered",docs:B}}),r=S.story({name:"Bookshelf",parameters:{docs:{source:{code:A,language:"tsx"}}}});var m,p,u;r.input.parameters={...r.input.parameters,docs:{...(m=r.input.parameters)==null?void 0:m.docs,source:{originalSource:`meta.story({
  name: 'Bookshelf',
  parameters: {
    docs: {
      source: {
        code: BOOKSHELF_CODE,
        language: 'tsx'
      }
    }
  }
})`,...(u=(p=r.input.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const F=["Bookshelf_Example"];export{r as Bookshelf_Example,F as __namedExportsOrder,S as default};
