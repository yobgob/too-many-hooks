import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{j as s}from"./too-many-hooks-DK1YWqSv.js";import{B as y}from"./index-8c258KEI.js";const d=()=>{const[a,{flag:c,unflag:m}]=s(!1),[u,{flag:i}]=s(!1),[b,{unflag:f,toggle:x}]=s(!1),t=()=>{c(),i(),f()};return e.jsxs("div",{className:"flex w-96 flex-col gap-4",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your email",e.jsx("input",{type:"email",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"name@example.com",onChange:t,required:!0})]}),e.jsxs("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your name",e.jsx("input",{type:"name",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",onChange:t,required:!0})]}),e.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:[e.jsx("input",{type:"checkbox",value:"",onChange:x,className:"h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"}),e.jsx("span",{children:"I agree to the Terms of Service and Privacy Policy"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{onClick:m,disabled:!b,children:"Save"}),u&&(a?e.jsx("div",{className:"text-orange-500",children:"⚠ Unsaved changes"}):e.jsx("div",{className:"text-green-500",children:"✓ Saved"}))]})]})},g=d;d.__docgenInfo={description:"",methods:[],displayName:"Form"};const p=`import { useFlag } from '@yobgob/too-many-hooks'
import React from 'react'
import { Button } from '../../../common/components'

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
`,h={title:"useFlag/Form",component:g},r={name:"Form",parameters:{layout:"centered",docs:{source:{code:p,language:"tsx"}}},render:a=>e.jsx(g,{...a})};var o,n,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Form',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: FORM_CODE,
        language: 'tsx'
      }
    }
  },
  render: args => <Form {...args} />
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const k=["form"],j=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:k,default:h,form:r},Symbol.toStringTag,{value:"Module"}));export{j as F,r as f};
