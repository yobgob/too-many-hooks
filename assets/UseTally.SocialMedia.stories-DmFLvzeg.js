import{w as A,u}from"./index-H7WXvDBZ.js";import{j as e,T as y,D as x,S as B,m as h,p as g}from"./iframe-D0cwLo6p.js";import{B as r}from"./Button-XVbnJxq1.js";import{u as U}from"./useTally-C00Yvoc9.js";import"./preload-helper-C1FmrZbK.js";const f=`import type React from 'react';
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
`,T=`
Increment and decrement numeric state
`,S=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(x,{}),e.jsx(B,{code:f,language:"typescript"}),e.jsx(h,{})]}),v={page:S,description:{component:T}},k="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAHgAeAwEiAAIRAQMRAf/EABcAAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAqEAABAwMDAwMEAwAAAAAAAAABAgMEBQYRABIhBwgxE0FRFCJhgSNxkf/EABYBAQEBAAAAAAAAAAAAAAAAAAQFA//EACwRAAECBAIHCQAAAAAAAAAAAAECAwAEBREhQQYSQlFxgcEUIiMkMWGRofD/2gAMAwEAAhEDEQA/ACXrh3DWf0Tmpo0xEit3W60HWqNCTjYk+FvOHhCffgKUfjSea70kVd9tlyGzbJDm9JLZeEhIAGwFXuVZ9gcHU+d3FJ39xVyTae3VX6Y+yzIYlVd4rlTU+kN6yU8DK9wCc8AAedFnTi0KpfPTWY3SumdTuKsyJIhSajNlOFdKKm/UZkMshCdqDsVudWtQJRtwMgmjO16afF21lKfawgMpQWtSzgurfj++YqFruKps2rNw2beUEyHNrTi5W3jcOSkJUfCh4/P40fWxfNo3mqUmj1yK45GcU241IUGl/acEgKP3JzxuHGk9F6X2+hoFbE6ZubCVLflrUFDGDj4z+PnW22rZpNmzDJo1KahP+kY+5bfrYbKgopwvcByB4+NGkdJ6o0vzKgpP3y9IEughQ7hseMKrqrcfTu9qFuj1qWquQkKdhKU464XD7tq3Zwk+eMYIB1Tna2tXVywL3qi21USt1VX08uYlnAU4GUpCxle5SSjPB4SSSDwNSxbPRmhU7uBYE1oTaZXZtVpsKMoHeyw0hwNuKXkALSppICUgjBUc54N0dBKBCpFnMwIKCzFZlPAEEhTqCQQhfJGB8DA/XGp7tIU+hKmlYg2N+m+GjSpmmqU0+k2UkFNsycjjhxF4my8qfTLB6qt9O6pAaM54RzCqRkLTFfbeJShRKlZbwtJQrOcEecHOs1YjwreuWpW9PsqqLrFOUkSI8amrk7UqGUrCkkhSFDkKBwc6Pe/u0Isu2aLdyP46lSpaIm8eVtuJUog/0ppJ/Z0z7gUzf9u2pVnWB6rkAgeopQOwOLCQcHyMH/Traakw0ham9m2eRibIVlUx2cOW8TWBw2k9CDyj/9k=",c=({step:n,incrementStep:s,decrementStep:a})=>{const[p,{increment:d,decrement:m}]=U({step:n});return e.jsxs("div",{className:"flex w-full max-w-2xl flex-col items-start gap-2 rounded-md border bg-white px-4 py-2 text-black",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:k,alt:"pfp",className:"rounded-full",width:"30px",height:"30px"}),e.jsx("div",{children:"Dawson Booth"}),e.jsx("div",{className:"text-slate-400",children:"@DawsonBooth420"})]}),e.jsx("div",{className:"ml-3.5 border-l border-slate-400 pl-3.5",children:e.jsx("p",{className:"m-1",children:'This new library too-many-hooks has huge potential. I hope they add a hook I can use to easily tally likes/dislikes on a post. Maybe a "useTally"?'})}),e.jsxs("div",{className:"flex items-baseline gap-2 pl-3.5",children:[e.jsx(r,{onClick:()=>d(s),variant:"text",title:"like",children:"👍"}),e.jsx("span",{children:p}),e.jsx(r,{onClick:()=>m(a),variant:"text",title:"dislike",children:"👎"})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"SocialMedia",props:{step:{required:!1,tsType:{name:"number"},description:""},incrementStep:{required:!1,tsType:{name:"number"},description:""},decrementStep:{required:!1,tsType:{name:"number"},description:""}}};const F=`import type React from 'react'
import { Button } from '../../../storybook-common/components'
import useTally from '../useTally'
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
`,w=g.meta({title:"useTally",component:c,parameters:{layout:"centered",docs:v}}),t=w.story({name:"Social Media",play:({canvasElement:n})=>{const a=A(n).getByTitle("like");u.click(a)},parameters:{controls:{expanded:!0},docs:{source:{code:F,language:"tsx"}}},args:{step:1}});var l,o,i;t.input.parameters={...t.input.parameters,docs:{...(l=t.input.parameters)==null?void 0:l.docs,source:{originalSource:`meta.story({
  name: 'Social Media',
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tallyingButton = canvas.getByTitle('like');
    userEvent.click(tallyingButton);
  },
  parameters: {
    controls: {
      expanded: true
    },
    docs: {
      source: {
        code: SOCIAL_MEDIA_CODE,
        language: 'tsx'
      }
    }
  },
  args: {
    step: 1
  }
})`,...(i=(o=t.input.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const C=["SocialMedia_Example"];export{t as SocialMedia_Example,C as __namedExportsOrder,w as default};
