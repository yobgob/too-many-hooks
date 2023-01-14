import"./chunk-MA2MUXQN-95bd8781.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as N,C as g,S as m}from"./index-6502e55f.js";import{C as l,j as o,F as p,a as e,B as h,M as S}from"./Modal-ecdd832e.js";import{u}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-468f78b1.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-XHUUYXNA-48cd50f6.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-3fe263e1.js";import"./index-3bc78f68.js";const s=()=>{const[r,{flag:t,unflag:n}]=l(!1);return o(p,{children:[e(h,{onClick:t,children:"Open modal"}),e(S,{isOpen:r,onClose:n,children:o("div",{className:"leading-8",children:["This modal was opened with a simple",e("code",{children:"onClick={open}"}),". Clicking",e("code",{children:"✕"})," or outside of the modal will close it via",e("code",{children:"onClick={close}"}),". No setters needed."]})})]})};try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{}}}catch{}const f=`import React from 'react'
import { useFlag } from 'too-many-hooks'
import { Button, Modal as Modal_ } from '../../components'
import '../../index.css'

const Modal: React.FC = () => {
  const [isOpen, { flag: open, unflag: close }] = useFlag(false)

  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <Modal_ isOpen={isOpen} onClose={close}>
        <div className="leading-8">
          This modal was opened with a simple<code>onClick=&#123;open&#125;</code>. Clicking
          <code>&#10005;</code> or outside of the modal will close it via
          <code>onClick=&#123;close&#125;</code>. No setters needed.
        </div>
      </Modal_>
    </>
  )
}

export default Modal
`,d=()=>{const[r,{flag:t,unflag:n}]=l(!1),[a,{flag:k}]=l(!1),[v,{unflag:F,toggle:C}]=l(!1),i=()=>{t(),k(),F()};return o("div",{className:"flex w-96 flex-col gap-4",children:[o("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your email",e("input",{type:"email",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"name@example.com",onChange:i,required:!0})]}),o("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your name",e("input",{type:"name",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",onChange:i,required:!0})]}),o("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:[e("input",{type:"checkbox",value:"",onChange:C,className:"h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"}),e("span",{children:"I agree to the Terms of Service and Privacy Policy"})]}),o("div",{className:"flex items-center gap-2",children:[e(h,{onClick:n,disabled:!v,children:"Save"}),a&&(r?e("div",{className:"text-orange-500",children:"⚠ Unsaved changes"}):e("div",{className:"text-green-500",children:"✓ Saved"}))]})]})};try{d.displayName="Form",d.__docgenInfo={description:"",displayName:"Form",props:{}}}catch{}const y=`import React from 'react'
import { useFlag } from 'too-many-hooks'
import { Button } from '../../components'

const Form: React.FC = () => {
  const [hasUnsavedChanges, { flag: setUnsaved, unflag: setSaved }] = useFlag(false)
  const [hasBegun, { flag: setHasBegun }] = useFlag(false)
  const [hasAgreedToTerms, { unflag: resetTermsAgreement, toggle: toggleTermsAgreement }] =
    useFlag(false)

  const onChange = () => {
    setUnsaved()
    setHasBegun()
    resetTermsAgreement()
  }

  return (
    <div className="flex w-96 flex-col gap-4">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        Your email
        <input
          type="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@example.com"
          onChange={onChange}
          required
        />
      </label>
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        Your name
        <input
          type="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          onChange={onChange}
          required
        />
      </label>
      <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        <input
          type="checkbox"
          value=""
          onChange={toggleTermsAgreement}
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <span>I agree to the Terms of Service and Privacy Policy</span>
      </label>

      <div className="flex items-center gap-2">
        <Button onClick={setSaved} disabled={!hasAgreedToTerms}>
          Save
        </Button>
        {hasBegun &&
          (hasUnsavedChanges ? (
            <div className="text-orange-500">&#9888; Unsaved changes</div>
          ) : (
            <div className="text-green-500">&#10003; Saved</div>
          ))}
      </div>
    </div>
  )
}

export default Form
`;function w(r={}){const{wrapper:t}=Object.assign({},u(),r.components);return t?e(t,{...r,children:e(n,{})}):n();function n(){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},u(),r.components);return o(p,{children:[e(N,{title:"Example/UseFlag"}),`
`,e(a.h1,{children:"useFlag"}),`
`,e(a.p,{children:"Simply manage boolean state"}),`
`,e(a.h2,{children:"Types"}),`
`,e(a.pre,{children:e(a.code,{className:"language-ts",children:`/**
 * Return values of the \`useFlag\` hook
 *
 * @export
 * @typedef {UseFlagReturn}
 */
export declare type UseFlagReturn = [
  boolean,
  {
    /**
     * Sets the flag to a specific boolean value
     *
     * @readonly
     * @type {React.Dispatch<React.SetStateAction<boolean>>}
     */
    readonly set: React.Dispatch<React.SetStateAction<boolean>>
    /**
     * Sets the flag to true
     *
     * @readonly
     * @type {() => void}
     */
    readonly flag: () => void
    /**
     * Sets the flag to false
     *
     * @readonly
     * @type {() => void}
     */
    readonly unflag: () => void
    /**
     * Inverts the flag
     *
     * @readonly
     * @type {() => void}
     */
    readonly toggle: () => void
  },
]
/**
 * \`useFlag\` hook type
 *
 * @export
 * @typedef {UseFlag}
 * @param {boolean} initial
 * @returns {UseFlagReturn}
 */
export declare type UseFlag = (initial: boolean) => UseFlagReturn
/**
 * Simplifies boolean state management
 *
 * @implements {UseFlag}
 * @param {boolean} initial
 * @returns {UseFlagReturn}
 */
declare const useFlag: UseFlag
`})}),`
`,e(a.h2,{children:"Examples"}),`
`,e(a.h3,{children:"Modal"}),`
`,e(g,{withSource:"open",children:e(m,{name:"Modal",parameters:{layout:"centered",docs:{source:{code:f,language:"tsx"}}},children:e(s,{})})}),`
`,e(a.h3,{children:"Form State"}),`
`,e(g,{withSource:"open",children:e(m,{name:"Form",parameters:{layout:"centered",docs:{source:{code:y,language:"tsx"}}},children:e(d,{})})})]})}}const b=()=>e(s,{});b.storyName="Modal";b.parameters={storySource:{source:"<Modal />"},layout:"centered",docs:{source:{code:f,language:"tsx"}}};const x=()=>e(d,{});x.storyName="Form";x.parameters={storySource:{source:"<Form />"},layout:"centered",docs:{source:{code:y,language:"tsx"}}};const c={title:"Example/UseFlag",tags:["mdx"],includeStories:["modal","form"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:w};const $=["modal","form"];export{$ as __namedExportsOrder,c as default,x as form,b as modal};
//# sourceMappingURL=UseFlag.stories-9b9cac0a.js.map
