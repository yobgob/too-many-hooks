import{M as X,S as q,C as D,a as G}from"./chunk-MA2MUXQN-5e95634e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as n,F as K,a as e}from"./jsx-runtime-68f49b4e.js";import{x as _}from"./too-many-hooks-b381134c.js";import{B as i,S as b}from"./Select-1dd1cbba.js";import{B as Y}from"./book-names-8f6a1e40.js";import{r as N}from"./index-f1f749bf.js";/* empty css              */import{u as W}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-405d3c04.js";import"./chunk-XHUUYXNA-29433977.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-E2WFFXZ5-4de4dd5f.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-b1d1948e.js";import"./index-356e4a49.js";const P=["border-l-lime-600 border-b-lime-600 bg-lime-500 before:border-r-lime-600","border-l-orange-600 border-b-orange-600 bg-orange-500 before:border-r-orange-600","border-l-emerald-500 border-b-emerald-500 bg-emerald-400 before:border-r-emerald-500","border-l-purple-400 border-b-purple-400 bg-purple-300 before:border-r-purple-400"],z=Y.map((r,s)=>({name:r,colors:P[s%P.length]})),Q=z.slice(0,15),Z=z.slice(15),S=()=>{const[r,{insertAt:s,removeAt:p,push:t}]=_(Q),[f,{removeAt:u,push:C}]=_(Z);return n("div",{className:"flex max-w-lg flex-wrap gap-y-4 border-t border-l-8 border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]",children:[r.map(({name:g,colors:y},c)=>n(K,{children:[n("div",{className:"flex border-b-2 border-b-yellow-900",children:[e("div",{className:"contents-center flex h-28 items-center border-b-4 border-b-yellow-900 bg-yellow-800 p-1 pr-4",children:e(i,{onClick:()=>{s(c,f[0]),u(0)},children:"+"})}),e("button",{className:"relative cursor-pointer appearance-none hover:scale-110",onClick:()=>{C({name:g,colors:y}),p(c)},children:e("div",{className:`${y} flex h-28 w-8 items-center justify-center overflow-hidden border-r-0 border-t-yellow-900 p-1 text-center leading-none [writing-mode:vertical-rl] [font-size:0.5rem] before:absolute before:top-0 before:right-full before:h-28 before:w-2 before:border-r-8 before:border-b-4 before:border-b-transparent before:bg-transparent`,children:g})})]},g),(c+1)%6===0&&e("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800"})})]})),e("div",{className:"flex-1 border-b-2 border-b-yellow-900",children:e("div",{className:"h-28 border-b-4 border-b-yellow-900 bg-yellow-800 p-1",children:e("div",{className:"contents-center flex h-full items-center",children:e(i,{onClick:()=>{t(f[0]),u(0)},children:"+"})})})})]})};try{S.displayName="Bookshelf",S.__docgenInfo={description:"",displayName:"Bookshelf",props:{}}}catch{}const ee=`import React from 'react'
import { useArray } from 'too-many-hooks'
import { Button } from '../../../common/components'
import { BOOKS, UNUSED_BOOKS } from './constants'

const Bookshelf: React.FC = () => {
  const [books, { insertAt, removeAt, push }] = useArray(BOOKS)
  const [unusedBooks, { removeAt: removedUnusedAt, push: pushUnused }] = useArray(UNUSED_BOOKS)

  return (
    <div className="flex max-w-lg flex-wrap gap-y-4 border-t border-l-8 border-l-yellow-900 border-t-yellow-800 bg-yellow-700 p-4 [border-style:outset]">
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
                className={\`\${colors} flex h-28 w-8 items-center justify-center overflow-hidden border-r-0 border-t-yellow-900 p-1 text-center leading-none [writing-mode:vertical-rl] [font-size:0.5rem] before:absolute before:top-0 before:right-full before:h-28 before:w-2 before:border-r-8 before:border-b-4 before:border-b-transparent before:bg-transparent\`}
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
`,I=r=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 346.93 62.64",...r,children:[e("path",{d:"M 22.53 0 C 14.199 0 8.427 9.583 11.311 18.602 C 19.505 44.232 40.917 62.635 65.883 62.635 L 279.163 62.635 C 304.129 62.635 325.541 44.232 333.735 18.602 C 336.619 9.583 330.847 0 322.516 0 z",fill:"#F4A335"}),e("path",{d:"M 24.992 43.099 C 35.514 55.153 49.974 62.635 65.884 62.635 L 279.164 62.635 C 295.073 62.635 309.533 55.153 320.055 43.099 z",fill:"#ED9136"})]});try{I.displayName="BottomBun",I.__docgenInfo={description:"",displayName:"BottomBun",props:{}}}catch{}const T=r=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 115 340.1 57.45",...r,children:[e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M8.973,125.359 L0,143.297 L125.26,164.946 L340.099,144.848 L318.567,111.269 L15.777,117.332 z",fill:"#FCF28C"}),e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M110.63,122.77 L259.683,168.995 L330.653,124.289 L308.954,111.524 z",fill:"#E4DE9B"}),e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M116.815,122.243 L259.682,168.995 L326.532,123.691 L305.85,111.524 z",fill:"#FCF28C"})]});try{T.displayName="Cheese",T.__docgenInfo={description:"",displayName:"Cheese",props:{}}}catch{}const R=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 316.03 16.55",...r,children:e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M 309.337 16.552 L 6.69 16.552 C 3.01 16.552 0 13.543 0 9.862 L 0 6.69 C 0 3.01 3.01 0 6.69 0 L 309.337 0 C 313.016 0 316.027 3.01 316.027 6.69 L 316.027 9.862 C 316.027 13.543 313.016 16.552 309.337 16.552",fill:"#F06453"})});try{R.displayName="Ketchup",R.__docgenInfo={description:"",displayName:"Ketchup",props:{}}}catch{}const F=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 346.93 49.14",...r,children:e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M 12.066 4.33 C 12.066 4.33 -6.491 17.423 5.88 26.958 C 18.251 36.494 7.118 51.34 23.818 48.865 C 40.519 46.391 42.375 29.072 52.89 31.546 C 63.405 34.02 62.787 45.492 71.446 45.942 C 80.106 46.391 85.673 29.072 93.096 29.69 C 100.518 30.309 103.422 43.917 113.104 43.917 C 122.786 43.917 125.26 27.938 136.394 26.958 C 147.528 25.979 151.239 40.824 162.992 39.587 C 174.744 38.35 176.381 24.397 186.387 26.735 C 196.393 29.072 202.579 38.35 210.001 37.732 C 217.424 37.113 225.465 26.701 235.362 26.958 C 245.258 27.216 250.825 40.824 258.866 40.824 C 266.908 40.824 270.619 27.319 281.134 26.958 C 291.649 26.598 298.401 38.35 305.85 38.969 C 313.299 39.587 321.34 26.701 326.288 26.958 C 331.237 27.216 348.556 38.005 348.556 26.735 C 348.556 15.464 326.907 0 326.907 0 z",fill:"#94C34A"})});try{F.displayName="Lettuce",F.__docgenInfo={description:"",displayName:"Lettuce",props:{}}}catch{}const A=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 316.03 16.55",...r,children:e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M 309.337 16.552 L 6.69 16.552 C 3.01 16.552 0 13.543 0 9.862 L 0 6.69 C 0 3.01 3.01 0 6.69 0 L 309.337 0 C 313.016 0 316.027 3.01 316.027 6.69 L 316.027 9.862 C 316.027 13.543 313.016 16.552 309.337 16.552",fill:"#f2efdb"})});try{A.displayName="Mayo",A.__docgenInfo={description:"",displayName:"Mayo",props:{}}}catch{}const L=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 316.03 16.55",...r,children:e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M 309.337 16.552 L 6.69 16.552 C 3.01 16.552 0 13.543 0 9.862 L 0 6.69 C 0 3.01 3.01 0 6.69 0 L 309.337 0 C 313.016 0 316.027 3.01 316.027 6.69 L 316.027 9.862 C 316.027 13.543 313.016 16.552 309.337 16.552",fill:"#f2e35f"})});try{L.displayName="Mustard",L.__docgenInfo={description:"",displayName:"Mustard",props:{}}}catch{}const B=r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 325.77 46.2",...r,children:e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M 310.943 46.199 L 14.826 46.199 C 6.672 46.199 0 39.527 0 31.373 L 0 14.826 C 0 6.672 6.672 0 14.826 0 L 310.943 0 C 319.097 0 325.769 6.672 325.769 14.826 L 325.769 31.373 C 325.769 39.527 319.097 46.199 310.943 46.199",fill:"#6E4337"})});try{B.displayName="Patty",B.__docgenInfo={description:"",displayName:"Patty",props:{}}}catch{}const M=r=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 180 346.93 46.49",...r,children:[e("path",{d:"M338.406,181.587 C338.406,202.316 304.453,219.12 262.57,219.12 C220.686,219.12 186.733,202.316 186.733,181.587 C186.733,160.858 220.686,144.054 262.57,144.054 C304.453,144.054 338.406,160.858 338.406,181.587",fill:"#F06453"}),e("path",{d:"M319.351,181.587 C319.351,195.158 293.929,206.16 262.57,206.16 C231.211,206.16 205.79,195.158 205.79,181.587 C205.79,168.016 231.211,157.014 262.57,157.014 C293.929,157.014 319.351,168.016 319.351,181.587",fill:"#F06453"}),e("path",{d:"M288.955,203.345 L271.638,186.027 C271.881,185.529 272.091,185.013 272.251,184.474 L318.948,184.474 C316.725,192.686 305.155,199.658 288.955,203.345 M262.549,206.16 L262.592,206.16 C262.584,206.16 262.578,206.16 262.57,206.16 C262.562,206.16 262.556,206.16 262.549,206.16 M206.192,184.474 L252.889,184.474 C253.088,185.145 253.351,185.789 253.679,186.394 L236.63,203.444 C220.2,199.784 208.435,192.761 206.192,184.474 M236.185,159.829 L253.502,177.147 C253.259,177.644 253.049,178.161 252.889,178.7 L206.192,178.7 C208.415,170.488 219.987,163.516 236.185,159.829 M286.431,159.289 C303.942,162.805 316.612,170.067 318.948,178.7 L272.251,178.7 C272.052,178.029 271.787,177.385 271.461,176.78 L287.691,160.549 z M267.01,190.654 L281.161,204.806 C276.2,205.549 270.935,206.01 265.457,206.129 L265.457,191.268 C265.997,191.108 266.513,190.898 267.01,190.654 M265.457,157.046 C271.109,157.168 276.537,157.652 281.635,158.438 L267.377,172.697 C266.773,172.369 266.129,172.106 265.457,171.906 z M258.131,172.52 L243.98,158.369 C248.94,157.625 254.205,157.164 259.682,157.046 L259.682,171.906 C259.144,172.066 258.627,172.276 258.131,172.52 M259.682,206.129 C254.031,206.006 248.601,205.522 243.504,204.736 L257.763,190.477 C258.368,190.805 259.011,191.068 259.682,191.268 z M262.57,149.897 C224.419,149.897 193.493,164.085 193.493,181.587 C193.493,199.089 224.419,213.277 262.57,213.277 C300.721,213.277 331.648,199.089 331.648,181.587 C331.648,164.085 300.721,149.897 262.57,149.897",fill:"#F6A39A"}),e("path",{d:"M231.423,188.132 C231.53,188.423 230.301,189.14 228.678,189.733 C227.056,190.326 225.654,190.571 225.548,190.28 C225.441,189.988 226.67,189.272 228.293,188.679 C229.915,188.085 231.317,187.841 231.423,188.132",fill:"#FEFEFE"}),e("path",{d:"M237.302,189.095 C237.408,189.386 236.18,190.103 234.557,190.696 C232.935,191.289 231.533,191.534 231.427,191.243 C231.32,190.951 232.549,190.235 234.172,189.641 C235.794,189.048 237.195,188.804 237.302,189.095",fill:"#FEFEFE"}),e("path",{d:"M235.972,192.681 C236.078,192.972 234.849,193.689 233.227,194.282 C231.605,194.875 230.203,195.12 230.097,194.829 C229.99,194.537 231.219,193.821 232.842,193.228 C234.464,192.634 235.866,192.39 235.972,192.681",fill:"#FEFEFE"}),e("path",{d:"M292.056,188.132 C291.949,188.423 293.178,189.14 294.801,189.733 C296.423,190.326 297.825,190.571 297.931,190.28 C298.039,189.988 296.81,189.272 295.186,188.679 C293.564,188.085 292.162,187.841 292.056,188.132",fill:"#FEFEFE"}),e("path",{d:"M286.178,189.095 C286.072,189.386 287.3,190.103 288.923,190.696 C290.545,191.289 291.947,191.534 292.053,191.243 C292.16,190.951 290.931,190.235 289.308,189.641 C287.686,189.048 286.285,188.804 286.178,189.095",fill:"#FEFEFE"}),e("path",{d:"M287.507,192.681 C287.4,192.972 288.629,193.689 290.252,194.282 C291.874,194.875 293.276,195.12 293.382,194.829 C293.489,194.537 292.26,193.821 290.637,193.228 C289.015,192.634 287.613,192.39 287.507,192.681",fill:"#FEFEFE"}),e("path",{d:"M253.871,197.323 C254.167,197.414 253.996,198.826 253.489,200.478 C252.982,202.129 252.33,203.394 252.034,203.302 C251.737,203.211 251.908,201.799 252.416,200.148 C252.923,198.497 253.575,197.232 253.871,197.323",fill:"#FEFEFE"}),e("path",{d:"M257.432,197.645 C257.728,197.736 257.557,199.149 257.05,200.8 C256.543,202.451 255.891,203.716 255.595,203.624 C255.298,203.533 255.469,202.121 255.977,200.47 C256.484,198.819 257.136,197.554 257.432,197.645",fill:"#FEFEFE"}),e("path",{d:"M270.992,197.323 C270.696,197.414 270.867,198.826 271.374,200.478 C271.882,202.129 272.533,203.394 272.83,203.302 C273.126,203.211 272.955,201.799 272.447,200.148 C271.94,198.497 271.288,197.232 270.992,197.323",fill:"#FEFEFE"}),e("path",{d:"M267.432,197.645 C267.136,197.736 267.307,199.149 267.814,200.8 C268.322,202.451 268.973,203.716 269.269,203.624 C269.566,203.533 269.395,202.121 268.887,200.47 C268.38,198.819 267.728,197.554 267.432,197.645",fill:"#FEFEFE"}),e("path",{d:"M210.588,178.296 C210.588,204.942 166.943,226.543 113.104,226.543 C59.266,226.543 15.621,204.942 15.621,178.296 C15.621,151.65 59.266,130.049 113.104,130.049 C166.943,130.049 210.588,151.65 210.588,178.296",fill:"#F06453"}),e("path",{d:"M186.093,178.296 C186.093,195.741 153.415,209.883 113.104,209.883 C72.794,209.883 40.116,195.741 40.116,178.296 C40.116,160.851 72.794,146.709 113.104,146.709 C153.415,146.709 186.093,160.851 186.093,178.296",fill:"#F06453"}),e("path",{d:"M147.021,206.265 L124.759,184.003 C125.073,183.364 125.342,182.7 125.548,182.008 L185.574,182.008 C182.717,192.564 167.843,201.526 147.021,206.265 M113.076,209.883 L113.131,209.883 C113.122,209.883 113.113,209.884 113.104,209.884 C113.094,209.884 113.085,209.883 113.076,209.883 M40.633,182.008 L100.659,182.008 C100.916,182.87 101.254,183.698 101.676,184.476 L79.759,206.392 C58.639,201.688 43.516,192.66 40.633,182.008 M79.187,150.328 L101.448,172.589 C101.134,173.228 100.865,173.892 100.659,174.585 L40.633,174.585 C43.49,164.029 58.365,155.067 79.187,150.328 M143.775,149.634 C166.286,154.153 182.571,163.488 185.574,174.585 L125.548,174.585 C125.292,173.722 124.953,172.894 124.532,172.117 L145.395,151.253 z M118.811,189.952 L137.001,208.143 C130.625,209.099 123.856,209.691 116.815,209.843 L116.815,190.741 C117.508,190.535 118.172,190.265 118.811,189.952 M116.815,146.75 C124.079,146.907 131.059,147.529 137.611,148.54 L119.283,166.868 C118.505,166.447 117.678,166.108 116.815,165.851 z M107.397,166.641 L89.206,148.45 C95.582,147.494 102.352,146.902 109.392,146.75 L109.392,165.851 C108.699,166.058 108.036,166.327 107.397,166.641 M109.392,209.843 C102.128,209.686 95.148,209.064 88.595,208.053 L106.924,189.724 C107.702,190.145 108.529,190.484 109.392,190.741 z M113.104,137.56 C64.063,137.56 24.308,155.799 24.308,178.296 C24.308,200.794 64.063,219.033 113.104,219.033 C162.144,219.033 201.899,200.794 201.899,178.296 C201.899,155.799 162.144,137.56 113.104,137.56",fill:"#F6A39A"}),e("path",{d:"M73.066,186.709 C73.203,187.083 71.623,188.005 69.538,188.767 C67.452,189.529 65.651,189.844 65.514,189.47 C65.377,189.095 66.957,188.174 69.042,187.412 C71.128,186.649 72.929,186.335 73.066,186.709",fill:"#FEFEFE"}),e("path",{d:"M80.623,187.946 C80.76,188.32 79.18,189.242 77.094,190.004 C75.009,190.767 73.207,191.081 73.071,190.707 C72.934,190.332 74.514,189.411 76.599,188.649 C78.684,187.886 80.486,187.572 80.623,187.946",fill:"#FEFEFE"}),e("path",{d:"M78.914,192.557 C79.051,192.931 77.471,193.853 75.386,194.615 C73.3,195.377 71.498,195.692 71.362,195.318 C71.225,194.943 72.805,194.022 74.89,193.26 C76.976,192.497 78.777,192.183 78.914,192.557",fill:"#FEFEFE"}),e("path",{d:"M151.007,186.709 C150.871,187.083 152.45,188.005 154.536,188.767 C156.622,189.529 158.423,189.844 158.56,189.47 C158.696,189.095 157.117,188.174 155.031,187.412 C152.945,186.649 151.144,186.335 151.007,186.709",fill:"#FEFEFE"}),e("path",{d:"M143.451,187.946 C143.314,188.32 144.894,189.242 146.979,190.004 C149.065,190.767 150.866,191.081 151.003,190.707 C151.14,190.332 149.56,189.411 147.475,188.649 C145.389,187.886 143.588,187.572 143.451,187.946",fill:"#FEFEFE"}),e("path",{d:"M145.16,192.557 C145.023,192.931 146.603,193.853 148.688,194.615 C150.774,195.377 152.575,195.692 152.712,195.318 C152.849,194.943 151.269,194.022 149.184,193.26 C147.098,192.497 145.297,192.183 145.16,192.557",fill:"#FEFEFE"}),e("path",{d:"M101.922,198.523 C102.303,198.64 102.083,200.456 101.431,202.578 C100.78,204.701 99.941,206.326 99.56,206.209 C99.179,206.092 99.399,204.277 100.052,202.154 C100.703,200.032 101.541,198.406 101.922,198.523",fill:"#FEFEFE"}),e("path",{d:"M106.499,198.937 C106.88,199.054 106.66,200.87 106.008,202.992 C105.356,205.115 104.518,206.74 104.137,206.623 C103.756,206.506 103.976,204.691 104.628,202.568 C105.281,200.446 106.118,198.82 106.499,198.937",fill:"#FEFEFE"}),e("path",{d:"M123.931,198.523 C123.55,198.64 123.77,200.456 124.422,202.578 C125.074,204.701 125.912,206.326 126.293,206.209 C126.674,206.092 126.454,204.277 125.802,202.154 C125.15,200.032 124.312,198.406 123.931,198.523",fill:"#FEFEFE"}),e("path",{d:"M119.354,198.937 C118.973,199.054 119.193,200.87 119.845,202.992 C120.497,205.115 121.335,206.74 121.716,206.623 C122.097,206.506 121.877,204.691 121.225,202.568 C120.573,200.446 119.735,198.82 119.354,198.937",fill:"#FEFEFE"})]});try{M.displayName="Tomato",M.__docgenInfo={description:"",displayName:"Tomato",props:{}}}catch{}const k=r=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 346.93 121.44",...r,children:[e("path",{d:"M334.742,105.257 L334.742,105.257 C334.742,47.366 287.377,-0 229.485,-0 L114.23,-0 C56.339,-0 8.974,47.366 8.974,105.257 L8.974,105.257 C8.974,114.196 16.22,121.443 25.16,121.443 L318.556,121.443 C327.495,121.443 334.742,114.196 334.742,105.257",fill:"#F4A335"}),e("path",{d:"M131.671,30.737 C131.671,34.089 130.077,34.651 128.11,34.651 C126.143,34.651 124.549,34.089 124.549,30.737 C124.549,27.385 128.11,21.793 128.11,21.793 C128.11,21.793 131.671,27.385 131.671,30.737",fill:"#F8C992"}),e("path",{d:"M185.603,61.755 C185.603,65.107 184.009,65.669 182.042,65.669 C180.075,65.669 178.481,65.107 178.481,61.755 C178.481,58.404 182.042,52.811 182.042,52.811 C182.042,52.811 185.603,58.404 185.603,61.755",fill:"#F8C992"}),e("path",{d:"M67.597,57.245 C67.597,60.597 66.003,61.159 64.036,61.159 C62.069,61.159 60.475,60.597 60.475,57.245 C60.475,53.893 64.036,48.301 64.036,48.301 C64.036,48.301 67.597,53.893 67.597,57.245",fill:"#F8C992"}),e("path",{d:"M173.886,30.737 C173.886,34.089 172.292,34.651 170.325,34.651 C168.358,34.651 166.764,34.089 166.764,30.737 C166.764,27.385 170.325,21.793 170.325,21.793 C170.325,21.793 173.886,27.385 173.886,30.737",fill:"#F8C992"}),e("path",{d:"M151.779,11.007 C151.779,14.359 150.185,14.921 148.218,14.921 C146.251,14.921 144.657,14.359 144.657,11.007 C144.657,7.655 148.218,2.063 148.218,2.063 C148.218,2.063 151.779,7.655 151.779,11.007",fill:"#F8C992"}),e("path",{d:"M128.695,61.755 C128.695,65.107 127.101,65.669 125.134,65.669 C123.167,65.669 121.573,65.107 121.573,61.755 C121.573,58.404 125.134,52.811 125.134,52.811 C125.134,52.811 128.695,58.404 128.695,61.755",fill:"#F8C992"}),e("path",{d:"M247.495,18.865 C247.495,22.217 245.901,22.779 243.934,22.779 C241.967,22.779 240.373,22.217 240.373,18.865 C240.373,15.513 243.934,9.921 243.934,9.921 C243.934,9.921 247.495,15.513 247.495,18.865",fill:"#F8C992"}),e("path",{d:"M286.916,58.287 C286.916,61.639 285.322,62.201 283.355,62.201 C281.388,62.201 279.794,61.639 279.794,58.287 C279.794,54.935 283.355,49.343 283.355,49.343 C283.355,49.343 286.916,54.935 286.916,58.287",fill:"#F8C992"}),e("path",{d:"M282.824,29.223 C282.824,32.575 281.23,33.137 279.263,33.137 C277.296,33.137 275.702,32.575 275.702,29.223 C275.702,25.871 279.263,20.279 279.263,20.279 C279.263,20.279 282.824,25.871 282.824,29.223",fill:"#F8C992"}),e("path",{d:"M206.769,18.865 C206.769,22.217 205.175,22.779 203.208,22.779 C201.241,22.779 199.647,22.217 199.647,18.865 C199.647,15.513 203.208,9.921 203.208,9.921 C203.208,9.921 206.769,15.513 206.769,18.865",fill:"#F8C992"}),e("path",{d:"M89.456,25.295 C89.456,28.647 87.862,29.209 85.895,29.209 C83.928,29.209 82.334,28.647 82.334,25.295 C82.334,21.943 85.895,16.351 85.895,16.351 C85.895,16.351 89.456,21.943 89.456,25.295",fill:"#F8C992"}),e("path",{d:"M243.094,49.321 C243.094,52.673 241.5,53.235 239.533,53.235 C237.566,53.235 235.972,52.673 235.972,49.321 C235.972,45.969 239.533,40.377 239.533,40.377 C239.533,40.377 243.094,45.969 243.094,49.321",fill:"#F8C992"}),e("path",{d:"M23.134,52.75 C14.151,68.232 8.974,86.163 8.974,105.256 L8.974,105.256 C8.974,114.196 16.22,121.442 25.16,121.442 L318.556,121.442 C325.337,121.442 331.135,117.269 333.544,111.354 C162.456,110.673 71.489,82.659 23.134,52.75",fill:"#ED9136"})]});try{k.displayName="TopBun",k.__docgenInfo={description:"",displayName:"TopBun",props:{}}}catch{}const te="20rem",d={top:{label:"Top Bun",svg:k,color:"#F4A335"},lettuce:{label:"Lettuce",svg:F,color:"#94C34A"},cheese:{label:"Cheese",svg:T,color:"#FCF28C"},patty:{label:"Patty",svg:B,color:"#6E4337"},tomato:{label:"Tomato",svg:M,color:"#F06453"},ketchup:{label:"Ketchup",svg:R,color:"#F06453"},mayo:{label:"Mayo",svg:A,color:"#f2efdb"},mustard:{label:"Mustard",svg:L,color:"#f2e35f"},bottom:{label:"Bottom Bun",svg:I,color:"#F4A335"}},x=Object.entries(d).map(([r,{label:s}])=>({label:s,value:r})),v={condiments:["ketchup","mayo","mustard"],vegetables:["tomato","lettuce"],buns:["top","bottom"]},j=[{label:"Condiments",value:"condiments"},{label:"Vegetables",value:"vegetables"},{label:"Buns",value:"buns"}],re=Object.keys(d).map(r=>({type:r,isSelected:!1})),O=()=>{const[r,{push:s,insertAt:p,removeWhere:t,updateAt:f,updateWhere:u,updateAll:C,clear:g,reset:y}]=_(re),[c,V]=N.useState("bottom"),[h,H]=N.useState("selected"),[a,U]=N.useState({target:"selected",new:"ketchup"});return n("div",{className:"prose mx-auto flex h-screen max-w-4xl flex-col gap-8 p-4",children:[e("h1",{children:"Create a burger"}),n("div",{className:"flex h-full justify-start gap-8",children:[n("div",{className:"flex h-fit flex-col flex-wrap gap-4",children:[e("div",{className:"flex h-fit flex-col gap-2",children:Object.entries(d).map(([o,{label:l,color:E}])=>{const m=o;return n(i,{color:E,onClick:()=>{c==="top"?p(0,{type:m,isSelected:!1}):c==="bottom"?s({type:m,isSelected:!1}):p(c,{type:m,isSelected:!1})},children:["Add ",l]},m)})}),e(b,{label:"Add ingredients at",labelDirection:"column",options:[{label:"Top (0)",value:"top"},...r.slice(1).map((o,l)=>({label:(l+1).toString(),value:l+1})),{label:`Bottom (${r.length})`,value:"bottom"}],onChange:o=>V(o.target.value),value:c})]}),n("div",{className:"flex h-fit flex-col flex-wrap gap-8",children:[n("div",{className:"grid w-full grid-cols-2 gap-1",children:[e(i,{onClick:y,children:"Reset"}),e(i,{onClick:g,children:"Clear"})]}),n("div",{className:"grid w-full grid-cols-2 gap-1",children:[e(i,{onClick:()=>{if(h==="selected")return t(({isSelected:l})=>!l);const o=Object.keys(v).includes(h)?v[h]:[h];t(({type:l})=>!o.includes(l))},children:"Remove"}),e(b,{options:[{label:"Selected",value:"selected"},...j,...x],onChange:o=>H(o.target.value),defaultValue:h,color:Object.keys(d).includes(h)?d[h].color:void 0})]}),n("div",{className:"flex flex-col items-end gap-2",children:[n("div",{className:"grid w-full grid-cols-2 gap-1",children:[e(i,{onClick:()=>{if(a.target==="selected")return u(({isSelected:l})=>l,({isSelected:l})=>({type:a.new,isSelected:l}));const o=Object.keys(v).includes(a.target)?v[a.target]:[a.target];u(({type:l})=>o.includes(l),({isSelected:l})=>({type:a.new,isSelected:l}))},children:"Replace"}),e(b,{options:[{label:"Selected",value:"selected"},...j,...x],onChange:o=>U(l=>({...l,target:o.target.value})),defaultValue:a.target,color:Object.keys(d).includes(a.target)?d[a.target].color:void 0})]}),e(b,{label:"with",options:x,onChange:o=>U(l=>({...l,new:o.target.value})),defaultValue:a.new,color:d[a.new].color})]})]}),n("div",{className:"mx-auto flex h-full flex-col items-center gap-4",children:[n("div",{className:"flex gap-2",children:[e(i,{onClick:()=>C(({type:o})=>({type:o,isSelected:!0})),children:"Select All"}),e(i,{onClick:()=>C(({type:o})=>({type:o,isSelected:!1})),children:"Clear Selection"}),e(i,{onClick:()=>C(({type:o,isSelected:l})=>({type:o,isSelected:!l})),children:"Invert Selection"})]}),n("div",{className:"mx-auto flex h-full flex-col items-center justify-center pb-4",children:[r.map((o,l)=>n("label",{className:`relative flex cursor-pointer items-center gap-2 hover:opacity-80 ${o.isSelected?"opacity-60":""}`,children:[e("input",{type:"checkbox",className:"hidden",checked:o.isSelected,onChange:E=>f(l,({type:m})=>({type:m,isSelected:E.target.checked}))}),d[o.type].svg({width:te}),e("span",{className:"absolute left-full pl-2",children:l})]},`${o.type}-${l}`)),r.length===0&&e("h2",{className:"p-4 text-center",children:"No ingredients added"})]})]})]})]})};try{O.displayName="Burger",O.__docgenInfo={description:"",displayName:"Burger",props:{}}}catch{}const ne=`import React, { useState } from 'react'
import { useArray } from 'too-many-hooks'
import { Button, Select } from '../../../common/components'
import '../../../index.css'
import {
  DEFAULT_BURGER,
  INGREDIENTS,
  INGREDIENT_GROUPS,
  INGREDIENT_GROUP_OPTIONS,
  INGREDIENT_OPTIONS,
  INGREDIENT_WIDTH,
} from './constants'
import { Ingredient, IngredientGroup } from './types'

const Burger: React.FC = () => {
  const [
    ingredients,
    { push, insertAt, removeWhere, updateAt, updateWhere, updateAll, clear, reset },
  ] = useArray<{
    type: Ingredient
    isSelected: boolean
  }>(DEFAULT_BURGER)
  const [insertLocation, setInsertLocation] = useState<number | 'top' | 'bottom'>('bottom')
  const [toRemove, setToRemove] = useState<Ingredient | IngredientGroup | 'selected'>('selected')
  const [updateIngredientsWhere, setUpdateIngredientsWhere] = useState<{
    target: Ingredient | IngredientGroup | 'selected'
    new: Ingredient
  }>({ target: 'selected', new: 'ketchup' })

  return (
    <div className="prose mx-auto flex h-screen max-w-4xl flex-col gap-8 p-4">
      <h1>Create a burger</h1>
      <div className="flex h-full justify-start gap-8">
        <div className="flex h-fit flex-col flex-wrap gap-4">
          <div className="flex h-fit flex-col gap-2">
            {Object.entries(INGREDIENTS).map(([key, { label, color }]) => {
              const typedKey = key as Ingredient
              return (
                <Button
                  key={typedKey}
                  color={color}
                  onClick={() => {
                    insertLocation === 'top'
                      ? insertAt(0, { type: typedKey, isSelected: false })
                      : insertLocation === 'bottom'
                      ? push({ type: typedKey, isSelected: false })
                      : insertAt(insertLocation, { type: typedKey, isSelected: false })
                  }}
                >
                  Add {label}
                </Button>
              )
            })}
          </div>
          <Select<number | 'top' | 'bottom'>
            label="Add ingredients at"
            labelDirection="column"
            options={[
              { label: 'Top (0)', value: 'top' },
              ...ingredients.slice(1).map((_, i) => ({
                label: (i + 1).toString(),
                value: i + 1,
              })),
              { label: \`Bottom (\${ingredients.length})\`, value: 'bottom' },
            ]}
            onChange={e => setInsertLocation(e.target.value)}
            value={insertLocation}
          />
        </div>

        <div className="flex h-fit flex-col flex-wrap gap-8">
          <div className="grid w-full grid-cols-2 gap-1">
            <Button onClick={reset}>Reset</Button>
            <Button onClick={clear}>Clear</Button>
          </div>

          <div className="grid w-full grid-cols-2 gap-1">
            <Button
              onClick={() => {
                if (toRemove === 'selected') {
                  return removeWhere(({ isSelected }) => !isSelected)
                }

                const ingredientsToRemove = Object.keys(INGREDIENT_GROUPS).includes(toRemove)
                  ? INGREDIENT_GROUPS[toRemove as IngredientGroup]
                  : [toRemove]

                removeWhere(({ type }) => !ingredientsToRemove.includes(type))
              }}
            >
              Remove
            </Button>
            <Select
              options={[
                { label: 'Selected', value: 'selected' },
                ...INGREDIENT_GROUP_OPTIONS,
                ...INGREDIENT_OPTIONS,
              ]}
              onChange={e => setToRemove(e.target.value)}
              defaultValue={toRemove}
              color={
                Object.keys(INGREDIENTS).includes(toRemove)
                  ? INGREDIENTS[toRemove as Ingredient].color
                  : undefined
              }
            />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="grid w-full grid-cols-2 gap-1">
              <Button
                onClick={() => {
                  if (updateIngredientsWhere.target === 'selected') {
                    return updateWhere(
                      ({ isSelected }) => isSelected,
                      ({ isSelected }) => ({ type: updateIngredientsWhere.new, isSelected }),
                    )
                  }

                  const ingredientsToReplace = Object.keys(INGREDIENT_GROUPS).includes(
                    updateIngredientsWhere.target,
                  )
                    ? INGREDIENT_GROUPS[updateIngredientsWhere.target as IngredientGroup]
                    : [updateIngredientsWhere.target]

                  updateWhere(
                    ({ type }) => ingredientsToReplace.includes(type),
                    ({ isSelected }) => ({ type: updateIngredientsWhere.new, isSelected }),
                  )
                }}
              >
                Replace
              </Button>
              <Select
                options={[
                  { label: 'Selected', value: 'selected' },
                  ...INGREDIENT_GROUP_OPTIONS,
                  ...INGREDIENT_OPTIONS,
                ]}
                onChange={e =>
                  setUpdateIngredientsWhere(curr => ({ ...curr, target: e.target.value }))
                }
                defaultValue={updateIngredientsWhere.target}
                color={
                  Object.keys(INGREDIENTS).includes(updateIngredientsWhere.target)
                    ? INGREDIENTS[updateIngredientsWhere.target as Ingredient].color
                    : undefined
                }
              />
            </div>
            <Select
              label="with"
              options={INGREDIENT_OPTIONS}
              onChange={e => setUpdateIngredientsWhere(curr => ({ ...curr, new: e.target.value }))}
              defaultValue={updateIngredientsWhere.new}
              color={INGREDIENTS[updateIngredientsWhere.new].color}
            />
          </div>
        </div>

        <div className="mx-auto flex h-full flex-col items-center gap-4">
          <div className="flex gap-2">
            <Button onClick={() => updateAll(({ type }) => ({ type, isSelected: true }))}>
              Select All
            </Button>
            <Button onClick={() => updateAll(({ type }) => ({ type, isSelected: false }))}>
              Clear Selection
            </Button>
            <Button
              onClick={() =>
                updateAll(({ type, isSelected }) => ({ type, isSelected: !isSelected }))
              }
            >
              Invert Selection
            </Button>
          </div>
          <div className="mx-auto flex h-full flex-col items-center justify-center pb-4">
            {ingredients.map((ingredient, i) => (
              <label
                key={\`\${ingredient.type}-\${i}\`}
                className={\`relative flex cursor-pointer items-center gap-2 hover:opacity-80 \${
                  ingredient.isSelected ? 'opacity-60' : ''
                }\`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={ingredient.isSelected}
                  onChange={e =>
                    updateAt(i, ({ type }) => ({ type, isSelected: e.target.checked }))
                  }
                />
                {INGREDIENTS[ingredient.type].svg({ width: INGREDIENT_WIDTH })}
                {<span className="absolute left-full pl-2">{i}</span>}
              </label>
            ))}
            {ingredients.length === 0 && <h2 className="p-4 text-center">No ingredients added</h2>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burger
`,J={parameters:{layout:"fullscreen",backgrounds:{default:"light",values:[{name:"light",value:"white"}]},docs:{source:{code:ne,language:"tsx"}}},render:r=>e(O,{...r})},$={parameters:{layout:"centered",docs:{source:{code:ee,language:"tsx"}}},render:r=>e(S,{...r})},le=`/**
 * Return values of the \`useArray\` hook
 *
 * @export
 * @typedef {UseArrayReturn}
 * @template T
 */
export declare type UseArrayReturn<T> = [
    T[],
    {
        /**
         * The default React state setter for the entire array
         *
         * @readonly
         * @type {React.Dispatch<React.SetStateAction<T[]>>}
         */
        readonly set: React.Dispatch<React.SetStateAction<T[]>>;
        /**
         * Empties the array
         *
         * @type {() => void}
         */
        readonly clear: () => void;
        /**
         * Resets the array to its initial value
         *
         * @type {() => void}
         */
        readonly reset: () => void;
        /**
         * Adds element(s) to the end of the array
         *
         * @readonly
         * @type {(...elements: T[]) => void}
         * @param {T[]} ...elements
         */
        readonly push: (...elements: T[]) => void;
        /**
         * Inserts element(s) at an index, shifting the remaining elements right.
         * If the index is out of range the elements are pushed to the end.
         *
         * @readonly
         * @type {(index: number, ...elements: T[]) => void}
         * @param {number} index
         * @param {T[]} elements
         */
        readonly insertAt: (index: number, ...elements: T[]) => void;
        /**
         * Removes an element at an index, shifting the remaining elements left.
         * If the index is out of range, no change occurs.
         *
         * @readonly
         * @type {(index: number) => void}
         * @param {number} index
         *
         */
        readonly removeAt: (index: number) => void;
        /**
         * Removes elements from the array that meet a condition.
         * Like JS \`Array.filter\` with the results applied to the array state.
         *
         * @readonly
         * @type {(predicate: (element: T) => boolean) => void}
         * @param {predicate: (element: T) => boolean} predicate
         */
        readonly removeWhere: (predicate: (element: T) => boolean) => void;
        /**
         * Removes elements from the array outside of a certain range.
         * Like JS \`Array.slice\` with the results applied to the array state.
         *
         * @readonly
         * @type {(start?: number, end?: number) => void}
         * @param {number?} start
         * @param {number?} end
         */
        readonly trimToRange: (start?: number, end?: number) => void;
        /**
         * Updates element(s) at an index. For each additional element, subsequent elements are updated.
         *
         * @example
         * Updating \`['a', 'b', 'c']\` to \`['a', 'd', 'e']
         * \`\`\`ts
         * updateAt(1, 'd', 'e')
         * \`\`\`
         *
         * @readonly
         * @type {(index: number, ...elements: React.SetStateAction<T>[]) => void}
         * @param {number} index
         * @param {React.SetStateAction<T>[]} elements
         */
        readonly updateAt: (index: number, ...elements: React.SetStateAction<T>[]) => void;
        /**
         * Updates element(s) that match a predicate
         *
         * @example
         * Updating records with \`lastUpdated\` before Dec 23 2022 to have \`isCurrent\`=\`false\`
         * \`\`\`ts
         * const oldestCurrentDate = new Date('12-23-2022')
         * updateWhere((record) => record.lastUpdated < oldestCurrentDate, )
         * \`\`\`
         *
         * @readonly
         * @type {(predicate: (element: T) => boolean, newElement: React.SetStateAction<T>) => void}
         * @param {predicate: (element: T) => boolean} predicate
         * @param {React.SetStateAction<T>} newElement
         */
        readonly updateWhere: (predicate: (element: T) => boolean, newElement: React.SetStateAction<T>) => void;
        /**
         * Transforms all elements to new values.
         * Like JS \`Array.map\` with the results applied to the array state.
         *
         * @readonly
         * @type {(newElement: React.SetStateAction<T>) => void}
         * @param {React.SetStateAction<T>} newElement
         */
        readonly updateAll: (newElement: React.SetStateAction<T>) => void;
        /**
         * Sorts the array by comparing each element.
         * Like JS \`Array.sort\` with the results applied to the array state.
         *
         * @type {((compareFn?: ((a: T, b: T) => number) | undefined) => void)}
         * @param {((a: T, b: T) => number) | undefined} compareFn
         */
        readonly sort: (compareFn?: ((a: T, b: T) => number) | undefined) => void;
        /** /**
         * Reverses the order of the elements in the array.
         * Like JS \`Array.reverse\` with the results applied to the array state.
         *
         * @type {() => void)}
         */
        readonly reverse: () => void;
    }
];
/**
 * \`useArray\` hook type
 *
 * @export
 * @typedef {UseArray}
 * @template T
 * @param {T[]} initial
 * @returns {UseArrayReturn}
 */
export declare type UseArray<T> = (initial: T[]) => UseArrayReturn<T>;
/**
 * Simplifies boolean state management
 *
 * @implements {UseArray}
 * @template T
 * @param {T[]} initial
 * @returns {UseArrayReturn}
 */
declare const useArray: <T>(initial: T[]) => UseArrayReturn<T>;
export default useArray;
`;function oe(r={}){const{wrapper:s}=Object.assign({},W(),r.components);return s?e(s,{...r,children:e(p,{})}):p();function p(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre"},W(),r.components);return n(K,{children:[e(X,{title:"Example/UseArray"}),`
`,e(t.h1,{children:"useArray"}),`
`,e(t.p,{children:"Wrap array state with powerful helper functions for simpler updates"}),`
`,e(t.h2,{children:"Functions"}),`
`,n(t.ul,{children:[`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"set"})," - The default React state setter for the entire array."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"clear"})," - Empties the array."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"reset"})," - Resets the array to its initial value."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"push"})," - Adds element(s) to the end of the array."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"insertAt"})," - Inserts element(s) at an index, shifting the remaining elements right. If the index is out of range the elements are pushed to the end."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"removeAt"})," - Removes an element at an index, shifting the remaining elements left. If the index is out of range, no change occurs."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"removeWhere"})," - Removes elements from the array that meet a condition. Like JS ",e(t.code,{children:"Array.filter"})," with the results applied to the array state."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"trimToRange"})," - Removes elements from the array outside of a certain range. Like JS ",e(t.code,{children:"Array.slice"})," with the results applied to the array state"]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"updateAt"})," - Updates element(s) at an index. For each additional element, subsequent elements are updated."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"updateWhere"})," - Updates element(s) that match a predicate."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"updateAll"})," - The same functionality as JS Array.map with the results applied to the array state"]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"sort"})," - Sorts the array by comparing each element. Like JS ",e(t.code,{children:"Array.sort"})," with the results applied to the array state."]}),`
`]}),`
`,n(t.li,{children:[`
`,n(t.p,{children:[e(t.code,{children:"reverse"})," - Reverses the order of the elements in the array. Like JS ",e(t.code,{children:"Array.reverse"})," with the results applied to the array state."]}),`
`]}),`
`]}),`
`,e(t.h2,{children:"Types"}),`
`,e(q,{language:"ts",code:le}),`
`,e(t.h2,{children:"Examples"}),`
`,e(t.h3,{children:"Burger"}),`
`,e(D,{withSource:"open",children:e(G,{name:"Burger",story:J})}),`
`,e(t.h3,{children:"Bookshelf"}),`
`,e(D,{withSource:"open",children:e(G,{name:"Bookshelf",story:$})}),`
`,e(t.pre,{children:e(t.code,{})})]})}}const ae=J;ae.storyName="Burger";const se=$;se.storyName="Bookshelf";const w={title:"Example/UseArray",tags:["mdx"],includeStories:["_burger_","_bookshelf_"]};w.parameters=w.parameters||{};w.parameters.docs={...w.parameters.docs||{},page:oe};const Be=["_burger_","_bookshelf_"];export{Be as __namedExportsOrder,se as _bookshelf_,ae as _burger_,w as default};
//# sourceMappingURL=UseArray.stories-ef080920.js.map
