import{j as e,p as x}from"./iframe-D0cwLo6p.js";import{u as a,U as p}from"./useFlag-D3dJhlH7.js";import{B as y}from"./Button-XVbnJxq1.js";import"./preload-helper-C1FmrZbK.js";const n=()=>{const[d,{flag:g,unflag:c}]=a(!1),[m,{flag:u}]=a(!1),[i,{unflag:b,toggle:f}]=a(!1),s=()=>{g(),u(),b()};return e.jsxs("div",{className:"flex w-96 flex-col gap-4",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your email",e.jsx("input",{type:"email",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"name@example.com",onChange:s,required:!0})]}),e.jsxs("label",{className:"block text-sm font-medium text-gray-900 dark:text-white",children:["Your name",e.jsx("input",{type:"name",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",onChange:s,required:!0})]}),e.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:[e.jsx("input",{type:"checkbox",value:"",onChange:f,className:"h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"}),e.jsx("span",{children:"I agree to the Terms of Service and Privacy Policy"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{onClick:c,disabled:!i,children:"Save"}),m&&(d?e.jsx("div",{className:"text-orange-500",children:"⚠ Unsaved changes"}):e.jsx("div",{className:"text-green-500",children:"✓ Saved"}))]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Form"};const h=`import type React from 'react'
import { Button } from '../../../storybook-common/components'
import useFlag from '../useFlag'

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
`,k=x.meta({title:"useFlag",component:n,parameters:{layout:"centered",docs:p}}),r=k.story({name:"Form",parameters:{docs:{source:{code:h,language:"tsx"}}}});var t,o,l;r.input.parameters={...r.input.parameters,docs:{...(t=r.input.parameters)==null?void 0:t.docs,source:{originalSource:`meta.story({
  name: 'Form',
  parameters: {
    docs: {
      source: {
        code: FORM_CODE,
        language: 'tsx'
      }
    }
  }
})`,...(l=(o=r.input.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const C=["Form_Example"];export{r as Form_Example,C as __namedExportsOrder,k as default};
