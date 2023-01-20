import{M as _,C as g,S as m}from"./chunk-MA2MUXQN-d4dd93ab.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{q as l,j as o,a as e,B as p,F as h,M as F}from"./Select-daf3bff4.js";/* empty css              */import{u}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-d7041101.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-73b10f51.js";import"./chunk-XHUUYXNA-5f774ba0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-9936fa47.js";const d=()=>{const[a,{flag:t,unflag:n}]=l(!1),[r,{flag:y}]=l(!1),[x,{unflag:k,toggle:v}]=l(!1),i=()=>{t(),y(),k()};return o("div",{className:"flex w-96 flex-col gap-4",children:[o("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your email",e("input",{type:"email",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"name@example.com",onChange:i,required:!0})]}),o("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your name",e("input",{type:"name",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",onChange:i,required:!0})]}),o("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:[e("input",{type:"checkbox",value:"",onChange:v,className:"h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"}),e("span",{children:"I agree to the Terms of Service and Privacy Policy"})]}),o("div",{className:"flex items-center gap-2",children:[e(p,{onClick:n,disabled:!x,children:"Save"}),r&&(a?e("div",{className:"text-orange-500",children:"⚠ Unsaved changes"}):e("div",{className:"text-green-500",children:"✓ Saved"}))]})]})};try{d.displayName="Form",d.__docgenInfo={description:"",displayName:"Form",props:{}}}catch{}const C=`import React from 'react'
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
`,c=()=>{const[a,{flag:t,unflag:n}]=l(!1);return o(h,{children:[e(p,{onClick:t,children:"Open modal"}),e(F,{isOpen:a,onClose:n,children:o("div",{className:"prose leading-8",children:["This modal was opened with a simple",e("code",{children:"onClick={open}"}),". Clicking",e("code",{children:"✕"})," or outside of the modal will close it via",e("code",{children:"onClick={close}"}),". No setters needed."]})})]})};try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{}}}catch{}const N=`import React from 'react'
import { useFlag } from 'too-many-hooks'
import { Button, Modal as Modal_ } from '../../components'
import '../../index.css'

const Modal: React.FC = () => {
  const [isOpen, { flag: open, unflag: close }] = useFlag(false)

  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <Modal_ isOpen={isOpen} onClose={close}>
        <div className="prose leading-8">
          This modal was opened with a simple<code>onClick=&#123;open&#125;</code>. Clicking
          <code>&#10005;</code> or outside of the modal will close it via
          <code>onClick=&#123;close&#125;</code>. No setters needed.
        </div>
      </Modal_>
    </>
  )
}

export default Modal
`,f={parameters:{layout:"centered",docs:{source:{code:N,language:"tsx"}}},render:a=>e(c,{...a})},b={parameters:{layout:"centered",docs:{source:{code:C,language:"tsx"}}},render:a=>e(d,{...a})};function w(a={}){const{wrapper:t}=Object.assign({},u(),a.components);return t?e(t,{...a,children:e(n,{})}):n();function n(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},u(),a.components);return o(h,{children:[e(_,{title:"Example/UseFlag"}),`
`,e(r.h1,{children:"useFlag"}),`
`,e(r.p,{children:"Simply manage boolean state"}),`
`,e(r.h2,{children:"Types"}),`
`,e(r.pre,{children:e(r.code,{className:"language-ts",children:`/**
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
export default useFlag
`})}),`
`,e(r.h2,{children:"Examples"}),`
`,e(r.h3,{children:"Modal"}),`
`,e(g,{withSource:"open",children:e(m,{name:"Modal",story:f})}),`
`,e(r.h3,{children:"Form State"}),`
`,e(g,{withSource:"open",children:e(m,{name:"Form",story:b})})]})}}const S=f;S.storyName="Modal";const M=b;M.storyName="Form";const s={title:"Example/UseFlag",tags:["mdx"],includeStories:["_modal_","_form_"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:w};const Q=["_modal_","_form_"];export{Q as __namedExportsOrder,M as _form_,S as _modal_,s as default};
//# sourceMappingURL=UseFlag.stories-67df6674.js.map
