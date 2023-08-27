import{M as A,e as u,C as y,f as h}from"./chunk-S4VUQJ4A-e886bfec.js";import{j as e}from"./jsx-runtime-42309cba.js";import{w as x,u as f}from"./index-e735c5f1.js";import{U}from"./too-many-hooks-3e7bc8b7.js";import{B as l}from"./Select-2fbd730e.js";import{u as i}from"./index-f90265c0.js";import"./iframe-f0e05b35.js";import"../sb-preview/runtime.js";import"./index-546ee486.js";import"./_commonjsHelpers-de833af9.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const B="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAHgAeAwEiAAIRAQMRAf/EABcAAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAqEAABAwMDAwMEAwAAAAAAAAABAgMEBQYRABIhBwgxE0FRFCJhgSNxkf/EABYBAQEBAAAAAAAAAAAAAAAAAAQFA//EACwRAAECBAIHCQAAAAAAAAAAAAECAwAEBREhQQYSQlFxgcEUIiMkMWGRofD/2gAMAwEAAhEDEQA/ACXrh3DWf0Tmpo0xEit3W60HWqNCTjYk+FvOHhCffgKUfjSea70kVd9tlyGzbJDm9JLZeEhIAGwFXuVZ9gcHU+d3FJ39xVyTae3VX6Y+yzIYlVd4rlTU+kN6yU8DK9wCc8AAedFnTi0KpfPTWY3SumdTuKsyJIhSajNlOFdKKm/UZkMshCdqDsVudWtQJRtwMgmjO16afF21lKfawgMpQWtSzgurfj++YqFruKps2rNw2beUEyHNrTi5W3jcOSkJUfCh4/P40fWxfNo3mqUmj1yK45GcU241IUGl/acEgKP3JzxuHGk9F6X2+hoFbE6ZubCVLflrUFDGDj4z+PnW22rZpNmzDJo1KahP+kY+5bfrYbKgopwvcByB4+NGkdJ6o0vzKgpP3y9IEughQ7hseMKrqrcfTu9qFuj1qWquQkKdhKU464XD7tq3Zwk+eMYIB1Tna2tXVywL3qi21USt1VX08uYlnAU4GUpCxle5SSjPB4SSSDwNSxbPRmhU7uBYE1oTaZXZtVpsKMoHeyw0hwNuKXkALSppICUgjBUc54N0dBKBCpFnMwIKCzFZlPAEEhTqCQQhfJGB8DA/XGp7tIU+hKmlYg2N+m+GjSpmmqU0+k2UkFNsycjjhxF4my8qfTLB6qt9O6pAaM54RzCqRkLTFfbeJShRKlZbwtJQrOcEecHOs1YjwreuWpW9PsqqLrFOUkSI8amrk7UqGUrCkkhSFDkKBwc6Pe/u0Isu2aLdyP46lSpaIm8eVtuJUog/0ppJ/Z0z7gUzf9u2pVnWB6rkAgeopQOwOLCQcHyMH/Traakw0ham9m2eRibIVlUx2cOW8TWBw2k9CDyj/9k=",r=({step:t,incrementStep:n,decrementStep:s})=>{const[c,{increment:d,decrement:m}]=U({step:t});return e.jsxs("div",{className:"flex w-full max-w-2xl flex-col items-start gap-2 rounded-md border bg-white px-4 py-2 text-black",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:B,alt:"pfp",className:"rounded-full",width:"30px",height:"30px"}),e.jsx("div",{children:"Dawson Booth"}),e.jsx("div",{className:"text-slate-400",children:"@DawsonBooth420"})]}),e.jsx("div",{className:"ml-3.5 border-l border-slate-400 pl-3.5",children:e.jsx("p",{className:"m-1",children:'This new library too-many-hooks has huge potential. I hope they add a hook I can use to easily tally likes/dislikes on a post. Maybe a "useTally"?'})}),e.jsxs("div",{className:"flex items-baseline gap-2 pl-3.5",children:[e.jsx(l,{onClick:()=>d(n),variant:"text",title:"like",children:"👍"}),e.jsx("span",{children:c}),e.jsx(l,{onClick:()=>m(s),variant:"text",title:"dislike",children:"👎"})]})]})};try{r.displayName="SocialMedia",r.__docgenInfo={description:"",displayName:"SocialMedia",props:{step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},incrementStep:{defaultValue:null,description:"",name:"incrementStep",required:!1,type:{name:"number"}},decrementStep:{defaultValue:null,description:"",name:"decrementStep",required:!1,type:{name:"number"}}}}}catch{}const g=`import { useTally } from '@yobgob/too-many-hooks'
import React from 'react'
import { Button } from '../../../common/components'
import PFP from './assets/pfp.jpeg'

export interface UseTallyStoryProps {
  step?: number
  incrementStep?: number
  decrementStep?: number
}

const SocialMedia: React.FC<UseTallyStoryProps> = ({ step, incrementStep, decrementStep }) => {
  const [value, { increment, decrement }] = useTally({ step })

  return (
    <div className="flex w-full max-w-2xl flex-col items-start gap-2 rounded-md border bg-white px-4 py-2 text-black">
      <div className="flex items-center gap-2">
        <img src={PFP} alt="pfp" className="rounded-full" width="30px" height="30px" />
        <div>Dawson Booth</div>
        <div className="text-slate-400">@DawsonBooth420</div>
      </div>
      <div className="ml-3.5 border-l border-slate-400 pl-3.5">
        <p className="m-1">
          This new library too-many-hooks has huge potential. I hope they add a hook I can use to
          easily tally likes/dislikes on a post. Maybe a &quot;useTally&quot;?
        </p>
      </div>
      <div className="flex items-baseline gap-2 pl-3.5">
        <Button onClick={() => increment(incrementStep)} variant="text" title="like">
          &#128077;
        </Button>
        <span>{value}</span>
        <Button onClick={() => decrement(decrementStep)} variant="text" title="dislike">
          &#128078;
        </Button>
      </div>
    </div>
  )
}

export default SocialMedia
`,p={play:({canvasElement:t})=>{const s=x(t).getByTitle("like");f.click(s)},parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:g,language:"tsx"}}},argTypes:{step:{type:"number"},incrementStep:{type:"number"},decrementStep:{type:"number"}},args:{step:1},render:t=>e.jsx(r,{...t})},S=`import React from 'react';
/**
 * Arguments to the \`useTally\` hook
 *
 * @export
 * @interface UseTallyArgs
 * @typedef {UseTallyArgs}
 */
export interface UseTallyArgs {
    /**
     * Initial \`tally\`
     *
     * @type {?number}
     * @default 0
     */
    initial?: number;
    /** Amount to increment or decrement by */
    /**
     * Description placeholder
     *
     * @type {?number}
     * @default 1
     */
    step?: number;
}
/**
 * Return values of the \`useTally\` hook
 *
 * @export
 * @typedef {UseTallyReturn}
 */
export type UseTallyReturn = [
    number,
    {
        /**
         * Sets \`tally\` to the provided value
         *
         * @readonly
         * @type {React.Dispatch<React.SetStateAction<number>>}
         */
        readonly set: React.Dispatch<React.SetStateAction<number>>;
        /**
         * Adds the \`stepOverride\` or, if \`undefined\`, \`step\` to \`tally\`
         *
         * @readonly
         * @type {(stepOverride?: number) => void}
         * @param {number?} stepOverride
         */
        readonly increment: (stepOverride?: number) => void;
        /**
         * Subtracts the \`stepOverride\` or, if \`undefined\`, \`step\` from \`tally\`
         *
         * @readonly
         * @type {(stepOverride?: number) => void}
         * @param {number?} stepOverride
         */
        readonly decrement: (stepOverride?: number) => void;
        /**
         * Resets \`tally\` to its initial value
         *
         * @readonly
         * @type {() => void}
         */
        readonly reset: () => void;
    }
];
/**
 * \`useTally\` hook type
 *
 * @export
 * @typedef {UseTally}
 * @param {UseTallyArgs}
 * @returns {UseTallyReturn}
 */
export type UseTally = (args: UseTallyArgs) => UseTallyReturn;
/**
 * Returns a numeric \`tally\` and functions to set, increment, decrement, or reset it
 *
 * @example
 * To increment by 2s
 * \`\`\`ts
 * const [tally, { increment }] = useTally({step: 2})
 * \`\`\`
 * @example
 * To decrement by 1s
 * \`\`\`ts
 * const [tally, { decrement }] = useTally()
 * \`\`\`
 * @implements {UseTally}
 * @param {UseTallyArgs} { initial = 0, step = 1 }
 * @returns {UseTallyReturn}
 */
export declare const useTally: UseTally;
export default useTally;
`;function o(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Example/UseTally"}),`
`,e.jsx(n.h1,{id:"usetally",children:"useTally"}),`
`,e.jsx(n.p,{children:"Increment and decrement numeric state"}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(u,{language:"ts",code:S}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"social-media",children:"Social Media"}),`
`,e.jsx(y,{withSource:"open",children:e.jsx(h,{name:"Social Media",story:p})})]})}function T(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}const b=p;b.storyName="Social Media";const a={title:"Example/UseTally",tags:["stories-mdx"],includeStories:["_socialMedia_"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:T};const K=["_socialMedia_"];export{K as __namedExportsOrder,b as _socialMedia_,a as default};
//# sourceMappingURL=UseTally.stories-95487993.js.map
