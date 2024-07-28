import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{w as u,u as B}from"./index-DAT0FqRF.js";import{B as l}from"./index-CFWu4tcp.js";import{u as y}from"./useTally-Ck9qmLPX.js";const g="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAHgAeAwEiAAIRAQMRAf/EABcAAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAqEAABAwMDAwMEAwAAAAAAAAABAgMEBQYRABIhBwgxE0FRFCJhgSNxkf/EABYBAQEBAAAAAAAAAAAAAAAAAAQFA//EACwRAAECBAIHCQAAAAAAAAAAAAECAwAEBREhQQYSQlFxgcEUIiMkMWGRofD/2gAMAwEAAhEDEQA/ACXrh3DWf0Tmpo0xEit3W60HWqNCTjYk+FvOHhCffgKUfjSea70kVd9tlyGzbJDm9JLZeEhIAGwFXuVZ9gcHU+d3FJ39xVyTae3VX6Y+yzIYlVd4rlTU+kN6yU8DK9wCc8AAedFnTi0KpfPTWY3SumdTuKsyJIhSajNlOFdKKm/UZkMshCdqDsVudWtQJRtwMgmjO16afF21lKfawgMpQWtSzgurfj++YqFruKps2rNw2beUEyHNrTi5W3jcOSkJUfCh4/P40fWxfNo3mqUmj1yK45GcU241IUGl/acEgKP3JzxuHGk9F6X2+hoFbE6ZubCVLflrUFDGDj4z+PnW22rZpNmzDJo1KahP+kY+5bfrYbKgopwvcByB4+NGkdJ6o0vzKgpP3y9IEughQ7hseMKrqrcfTu9qFuj1qWquQkKdhKU464XD7tq3Zwk+eMYIB1Tna2tXVywL3qi21USt1VX08uYlnAU4GUpCxle5SSjPB4SSSDwNSxbPRmhU7uBYE1oTaZXZtVpsKMoHeyw0hwNuKXkALSppICUgjBUc54N0dBKBCpFnMwIKCzFZlPAEEhTqCQQhfJGB8DA/XGp7tIU+hKmlYg2N+m+GjSpmmqU0+k2UkFNsycjjhxF4my8qfTLB6qt9O6pAaM54RzCqRkLTFfbeJShRKlZbwtJQrOcEecHOs1YjwreuWpW9PsqqLrFOUkSI8amrk7UqGUrCkkhSFDkKBwc6Pe/u0Isu2aLdyP46lSpaIm8eVtuJUog/0ppJ/Z0z7gUzf9u2pVnWB6rkAgeopQOwOLCQcHyMH/Traakw0ham9m2eRibIVlUx2cOW8TWBw2k9CDyj/9k=",c=({step:t,incrementStep:n,decrementStep:s})=>{const[p,{increment:d,decrement:m}]=y({step:t});return e.jsxs("div",{className:"flex w-full max-w-2xl flex-col items-start gap-2 rounded-md border bg-white px-4 py-2 text-black",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:g,alt:"pfp",className:"rounded-full",width:"30px",height:"30px"}),e.jsx("div",{children:"Dawson Booth"}),e.jsx("div",{className:"text-slate-400",children:"@DawsonBooth420"})]}),e.jsx("div",{className:"ml-3.5 border-l border-slate-400 pl-3.5",children:e.jsx("p",{className:"m-1",children:'This new library too-many-hooks has huge potential. I hope they add a hook I can use to easily tally likes/dislikes on a post. Maybe a "useTally"?'})}),e.jsxs("div",{className:"flex items-baseline gap-2 pl-3.5",children:[e.jsx(l,{onClick:()=>d(n),variant:"text",title:"like",children:"👍"}),e.jsx("span",{children:p}),e.jsx(l,{onClick:()=>m(s),variant:"text",title:"dislike",children:"👎"})]})]})},A=c;c.__docgenInfo={description:"",methods:[],displayName:"SocialMedia",props:{step:{required:!1,tsType:{name:"number"},description:""},incrementStep:{required:!1,tsType:{name:"number"},description:""},decrementStep:{required:!1,tsType:{name:"number"},description:""}}};const h=`import type React from 'react'
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
`,x={title:"useTally/SocialMedia",component:A},a={name:"Social Media",play:({canvasElement:t})=>{const s=u(t).getByTitle("like");B.click(s)},parameters:{layout:"centered",controls:{expanded:!0},docs:{source:{code:h,language:"tsx"}}},argTypes:{step:{type:"number"},incrementStep:{type:"number"},decrementStep:{type:"number"}},args:{step:1},render:t=>e.jsx(A,{...t})};var r,o,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Social Media',
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tallyingButton = canvas.getByTitle('like');
    userEvent.click(tallyingButton);
  },
  parameters: {
    layout: 'centered',
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
  argTypes: {
    step: {
      type: 'number'
    },
    incrementStep: {
      type: 'number'
    },
    decrementStep: {
      type: 'number'
    }
  },
  args: {
    step: 1
  },
  render: args => <SocialMedia {...args} />
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["socialMedia"],k=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:S,default:x,socialMedia:a},Symbol.toStringTag,{value:"Module"}));export{k as S,a as s};
