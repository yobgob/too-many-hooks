import{M as A,e as u,C as y,f as h}from"./chunk-MA2MUXQN-17148198.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{a as l,j as e,F as f}from"./jsx-runtime-004bc00d.js";import{w as U,u as B}from"./index-835899d9.js";import{U as g}from"./too-many-hooks-cd89ca79.js";import{B as i}from"./Select-1b545d23.js";import{u as c}from"./index-a1245236.js";import"./iframe-5cf682ab.js";import"../sb-preview/runtime.mjs";import"./index-b3c7c874.js";import"./_commonjsHelpers-042e6b4d.js";import"./_getTag-dfdf31e6.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";const x="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAHgAeAwEiAAIRAQMRAf/EABcAAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAqEAABAwMDAwMEAwAAAAAAAAABAgMEBQYRABIhBwgxE0FRFCJhgSNxkf/EABYBAQEBAAAAAAAAAAAAAAAAAAQFA//EACwRAAECBAIHCQAAAAAAAAAAAAECAwAEBREhQQYSQlFxgcEUIiMkMWGRofD/2gAMAwEAAhEDEQA/ACXrh3DWf0Tmpo0xEit3W60HWqNCTjYk+FvOHhCffgKUfjSea70kVd9tlyGzbJDm9JLZeEhIAGwFXuVZ9gcHU+d3FJ39xVyTae3VX6Y+yzIYlVd4rlTU+kN6yU8DK9wCc8AAedFnTi0KpfPTWY3SumdTuKsyJIhSajNlOFdKKm/UZkMshCdqDsVudWtQJRtwMgmjO16afF21lKfawgMpQWtSzgurfj++YqFruKps2rNw2beUEyHNrTi5W3jcOSkJUfCh4/P40fWxfNo3mqUmj1yK45GcU241IUGl/acEgKP3JzxuHGk9F6X2+hoFbE6ZubCVLflrUFDGDj4z+PnW22rZpNmzDJo1KahP+kY+5bfrYbKgopwvcByB4+NGkdJ6o0vzKgpP3y9IEughQ7hseMKrqrcfTu9qFuj1qWquQkKdhKU464XD7tq3Zwk+eMYIB1Tna2tXVywL3qi21USt1VX08uYlnAU4GUpCxle5SSjPB4SSSDwNSxbPRmhU7uBYE1oTaZXZtVpsKMoHeyw0hwNuKXkALSppICUgjBUc54N0dBKBCpFnMwIKCzFZlPAEEhTqCQQhfJGB8DA/XGp7tIU+hKmlYg2N+m+GjSpmmqU0+k2UkFNsycjjhxF4my8qfTLB6qt9O6pAaM54RzCqRkLTFfbeJShRKlZbwtJQrOcEecHOs1YjwreuWpW9PsqqLrFOUkSI8amrk7UqGUrCkkhSFDkKBwc6Pe/u0Isu2aLdyP46lSpaIm8eVtuJUog/0ppJ/Z0z7gUzf9u2pVnWB6rkAgeopQOwOLCQcHyMH/Traakw0ham9m2eRibIVlUx2cOW8TWBw2k9CDyj/9k=",o=({step:t,incrementStep:r,decrementStep:a})=>{const[n,{increment:d,decrement:m}]=g({step:t});return l("div",{className:"flex w-full max-w-2xl flex-col items-start gap-2 rounded-md border bg-white py-2 px-4 text-black",children:[l("div",{className:"flex items-center gap-2",children:[e("img",{src:x,alt:"pfp",className:"rounded-full",width:"30px",height:"30px"}),e("div",{children:"Dawson Booth"}),e("div",{className:"text-slate-400",children:"@DawsonBooth420"})]}),e("div",{className:"ml-3.5 border-l border-slate-400 pl-3.5",children:e("p",{className:"m-1",children:'This new library too-many-hooks has huge potential. I hope they add a hook I can use to easily tally likes/dislikes on a post. Maybe a "useTally"?'})}),l("div",{className:"flex items-baseline gap-2 pl-3.5",children:[e(i,{onClick:()=>d(r),variant:"text",title:"like",children:"👍"}),e("span",{children:n}),e(i,{onClick:()=>m(a),variant:"text",title:"dislike",children:"👎"})]})]})};try{o.displayName="SocialMedia",o.__docgenInfo={description:"",displayName:"SocialMedia",props:{step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},incrementStep:{defaultValue:null,description:"",name:"incrementStep",required:!1,type:{name:"number"}},decrementStep:{defaultValue:null,description:"",name:"decrementStep",required:!1,type:{name:"number"}}}}}catch{}const S=`import React from 'react'
import { useTally } from 'too-many-hooks'
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
    <div className="flex w-full max-w-2xl flex-col items-start gap-2 rounded-md border bg-white py-2 px-4 text-black">
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
`,p={play:({canvasElement:t})=>{const a=U(t).getByTitle("like");B.click(a)},parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:S,language:"tsx"}}},argTypes:{step:{type:"number"},incrementStep:{type:"number"},decrementStep:{type:"number"}},args:{step:1},render:t=>e(o,{...t})},T=`import React from 'react';
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
export declare type UseTallyReturn = [
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
export declare type UseTally = (args: UseTallyArgs) => UseTallyReturn;
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
`;function b(t={}){const{wrapper:r}=Object.assign({},c(),t.components);return r?e(r,{...t,children:e(a,{})}):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},c(),t.components);return l(f,{children:[e(A,{title:"Example/UseTally"}),`
`,e(n.h1,{children:"useTally"}),`
`,e(n.p,{children:"Increment and decrement numeric state"}),`
`,e(n.h2,{children:"Types"}),`
`,e(u,{language:"ts",code:T}),`
`,e(n.h2,{children:"Examples"}),`
`,e(n.h3,{children:"Social Media"}),`
`,e(y,{withSource:"open",children:e(h,{name:"Social Media",story:p})})]})}}const F=p;F.storyName="Social Media";const s={title:"Example/UseTally",tags:["mdx"],includeStories:["_socialMedia_"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:b};const q=["_socialMedia_"];export{q as __namedExportsOrder,F as _socialMedia_,s as default};
//# sourceMappingURL=UseTally.stories-dad2cb60.js.map
