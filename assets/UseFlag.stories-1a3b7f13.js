import{a as r,j as e}from"./jsx-runtime-670450c2.js";import{C as o,B as u,M as x}from"./Modal-7ed591a8.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";const t=()=>{const[a,{flag:n,unflag:l}]=o(!1),[p,{flag:f}]=o(!1),[b,{unflag:y,toggle:h}]=o(!1),g=()=>{n(),f(),y()};return r("div",{className:"w-96 flex flex-col gap-4",children:[r("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your email",e("input",{type:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@example.com",onChange:g,required:!0})]}),r("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your name",e("input",{type:"name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:g,required:!0})]}),r("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:[e("input",{type:"checkbox",value:"",onChange:h,className:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e("span",{children:"I agree to the Terms of Service and Privacy Policy"})]}),r("div",{className:"flex gap-2 items-center",children:[e(u,{onClick:l,disabled:!b,children:"Save"}),p&&(a?e("div",{className:"text-orange-500",children:"⚠ Unsaved changes"}):e("div",{className:"text-green-500",children:"✓ Saved"}))]})]})};try{t.displayName="Form",t.__docgenInfo={description:"",displayName:"Form",props:{}}}catch{}const k=`import React from 'react'
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
    <div className="w-96 flex flex-col gap-4">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        Your email
        <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@example.com"
          onChange={onChange}
          required
        />
      </label>
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        Your name
        <input
          type="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onChange}
          required
        />
      </label>
      <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        <input
          type="checkbox"
          value=""
          onChange={toggleTermsAgreement}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <span>I agree to the Terms of Service and Privacy Policy</span>
      </label>

      <div className="flex gap-2 items-center">
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
`;const s=()=>{const[a,{flag:n,unflag:l}]=o(!1);return r("div",{className:"bg-white h-screen w-screen flex flex-col items-center justify-center",children:[e(u,{onClick:n,children:"Open modal"}),e(x,{isOpen:a,onClose:l,children:r("div",{className:"leading-8",children:["This modal was opened with a simple",e("code",{children:"onClick={open}"}),". Clicking",e("code",{children:"✕"})," or outside of the modal will close it via",e("code",{children:"onClick={close}"}),". No setters needed."]})})]})};try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{}}}catch{}const v=`import React from 'react'
import { useFlag } from 'too-many-hooks'
import { Button, Modal as Modal_ } from '../../components'
import '../../index.css'

const Modal: React.FC = () => {
  const [isOpen, { flag: open, unflag: close }] = useFlag(false)

  return (
    <div className="bg-white h-screen w-screen flex flex-col items-center justify-center">
      <Button onClick={open}>Open modal</Button>
      <Modal_ isOpen={isOpen} onClose={close}>
        <div className="leading-8">
          This modal was opened with a simple<code>onClick=&#123;open&#125;</code>. Clicking
          <code>&#10005;</code> or outside of the modal will close it via
          <code>onClick=&#123;close&#125;</code>. No setters needed.
        </div>
      </Modal_>
    </div>
  )
}

export default Modal
`,M={title:"Example/UseFlag",tags:["docsPage"]},d={name:"Modal",parameters:{component:s,layout:"fullscreen",docs:{source:{code:v,language:"tsx"}}},render:()=>e(s,{})},c={name:"Form",parameters:{component:t,layout:"centered",docs:{source:{code:k,language:"tsx"}}},render:()=>e(t,{})};var i;d.parameters={...d.parameters,storySource:{source:`{
  name: 'Modal',
  parameters: {
    component: Modal,
    layout: 'fullscreen',
    docs: {
      source: {
        code: MODAL_CODE,
        language: 'tsx'
      }
    }
  },
  render: () => <Modal />
}`,...(i=d.parameters)==null?void 0:i.storySource}};var m;c.parameters={...c.parameters,storySource:{source:`{
  name: 'Form',
  parameters: {
    component: Form,
    layout: 'centered',
    docs: {
      source: {
        code: FORM_CODE,
        language: 'tsx'
      }
    }
  },
  render: () => <Form />
}`,...(m=c.parameters)==null?void 0:m.storySource}};const S=["ModalStory","FormStory"];export{c as FormStory,d as ModalStory,S as __namedExportsOrder,M as default};
//# sourceMappingURL=UseFlag.stories-1a3b7f13.js.map
