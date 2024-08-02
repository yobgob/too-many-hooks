import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as b}from"./Button-H78i-yjT.js";import{S as x}from"./Select-C4lxff8P.js";import{u as y,b as f}from"./useForm-DBYxMkd8.js";const i=({onSubmit:s,onError:d})=>{const{register:a,errors:r,hasBegun:c,hasChangedWithoutSubmit:m,handleSubmit:g}=y(),p=f(a,{ref:"selectRef"});return e.jsxs("div",{className:"flex w-96 flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:["Your email",e.jsx("input",{type:"email",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"name@example.com",...a("email",{isRequired:!0,validate:t=>t.includes("@")?null:"Email must include an @"})})]}),(r==null?void 0:r.email)&&e.jsx("span",{className:"text-red-800",children:r.email})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(x,{options:[{label:"Mr",value:"MR"},{label:"Mrs",value:"MRS"},{label:"Miss",value:"MISS"},{label:"Ms",value:"MS"}],placeholder:"Title",...p("title",{isRequired:!0})}),(r==null?void 0:r.title)&&e.jsx("span",{className:"text-red-800",children:r.title})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:["Your name",e.jsx("input",{className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",...a("name",{isRequired:!0})})]}),(r==null?void 0:r.name)&&e.jsx("span",{className:"text-red-800",children:r.name})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:["Previous industries",e.jsxs("select",{multiple:!0,className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",...a("previousIndustries",{isRequired:!0}),children:[e.jsx("option",{label:"Agriculture",value:"AGRICULTURE"}),e.jsx("option",{label:"Finance",value:"FINANCE"}),e.jsx("option",{label:"Retail",value:"RETAIL"}),e.jsx("option",{label:"Tech",value:"TECH"})]})]}),(r==null?void 0:r.previousIndustries)&&e.jsx("span",{className:"text-red-800",children:r.previousIndustries})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:["Available start date",e.jsx("input",{type:"date",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",...a("startDate",{isRequired:!0,validate:t=>t<new Date(Date.now())?"Date must be in the future":null})})]}),(r==null?void 0:r.startDate)&&e.jsx("span",{className:"text-red-800",children:r.startDate})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:["Expected salary",e.jsx("input",{type:"number",className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",...a("expectedSalary",{isRequired:!0,validate:t=>t<0||t>1e6?"Please enter a number between $0 and $1,000,000":null})})]}),(r==null?void 0:r.expectedSalary)&&e.jsx("span",{className:"text-red-800",children:r.expectedSalary})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-900",children:["Cover letter",e.jsx("textarea",{className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",...a("coverLetter")})]}),(r==null?void 0:r.coverLetter)&&e.jsx("span",{className:"text-red-800",children:r.coverLetter})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:[e.jsx("input",{type:"checkbox",...a("hasAgreedToTerms",{isRequired:!0,validate:t=>t===!1?"You must agree to the terms":null}),className:"h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"}),e.jsx("span",{children:"I agree to the Terms of Service and Privacy Policy"})]}),(r==null?void 0:r.hasAgreedToTerms)&&e.jsx("span",{className:"text-red-800",children:r.hasAgreedToTerms})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{onClick:()=>g({onSubmit:s,onError:d}),children:"Save"}),c&&(m?e.jsx("div",{className:"text-orange-500",children:"⚠ Unsaved changes"}):e.jsx("div",{className:"text-green-500",children:"✓ Saved"}))]})]})};i.__docgenInfo={description:"",methods:[],displayName:"JobApplication",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ApplicationFormData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  email: string
  title: Title
  name: string
  previousIndustries: string[]
  startDate: Date
  expectedSalary: number
  hasAgreedToTerms: boolean
  coverLetter: string
}`,signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"title",value:{name:"Title",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"previousIndustries",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"startDate",value:{name:"Date",required:!0}},{key:"expectedSalary",value:{name:"number",required:!0}},{key:"hasAgreedToTerms",value:{name:"boolean",required:!0}},{key:"coverLetter",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},onError:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: Errors<ApplicationFormData>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ [Key in keyof TData]?: TValue }",signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  email: string
  title: Title
  name: string
  previousIndustries: string[]
  startDate: Date
  expectedSalary: number
  hasAgreedToTerms: boolean
  coverLetter: string
}`,signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"title",value:{name:"Title",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"previousIndustries",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"startDate",value:{name:"Date",required:!0}},{key:"expectedSalary",value:{name:"number",required:!0}},{key:"hasAgreedToTerms",value:{name:"boolean",required:!0}},{key:"coverLetter",value:{name:"string",required:!0}}]},required:!1},value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const v=`import type React from 'react'
import { Select } from '../../../storybook-common/components'
import Button from '../../../storybook-common/components/Button'
import type { Errors } from '../useForm'
import useForm from '../useForm'
import { buildOverriddenRegister } from '../useForm/utils'

enum Title {
  Mr = 'MR',
  Mrs = 'MRS',
  Miss = 'MISS',
  Ms = 'MS',
}

enum Industry {
  Agriculture = 'AGRICULTURE',
  Finance = 'FINANCE',
  Retail = 'RETAIL',
  Tech = 'TECH',
}

export type ApplicationFormData = {
  email: string
  title: Title
  name: string
  previousIndustries: string[]
  startDate: Date
  expectedSalary: number
  hasAgreedToTerms: boolean
  coverLetter: string
}

interface Props {
  onSubmit: (data: ApplicationFormData) => void
  onError: (data: Errors<ApplicationFormData>) => void
}

const JobApplication: React.FC<Props> = ({ onSubmit, onError }) => {
  const { register, errors, hasBegun, hasChangedWithoutSubmit, handleSubmit } =
    useForm<ApplicationFormData>()
  const registerSelect = buildOverriddenRegister(register, { ref: 'selectRef' })

  return (
    <div className="flex w-96 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Your email
          <input
            type="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@example.com"
            {...register('email', {
              isRequired: true,
              validate: email => (email.includes('@') ? null : 'Email must include an @'),
            })}
          />
        </label>
        {errors?.email && <span className="text-red-800">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <Select
          options={[
            { label: 'Mr', value: Title.Mr },
            { label: 'Mrs', value: Title.Mrs },
            { label: 'Miss', value: Title.Miss },
            { label: 'Ms', value: Title.Ms },
          ]}
          placeholder="Title"
          {...registerSelect('title', { isRequired: true })}
        />
        {errors?.title && <span className="text-red-800">{errors.title}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Your name
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('name', { isRequired: true })}
          />
        </label>
        {errors?.name && <span className="text-red-800">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Previous industries
          <select
            multiple
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('previousIndustries', { isRequired: true })}
          >
            <option label="Agriculture" value={Industry.Agriculture} />
            <option label="Finance" value={Industry.Finance} />
            <option label="Retail" value={Industry.Retail} />
            <option label="Tech" value={Industry.Tech} />
          </select>
        </label>
        {errors?.previousIndustries && (
          <span className="text-red-800">{errors.previousIndustries}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Available start date
          <input
            type="date"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('startDate', {
              isRequired: true,
              validate: startDate =>
                startDate < new Date(Date.now()) ? 'Date must be in the future' : null,
            })}
          />
        </label>
        {errors?.startDate && <span className="text-red-800">{errors.startDate}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Expected salary
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('expectedSalary', {
              isRequired: true,
              validate: expectedSalary =>
                expectedSalary < 0 || expectedSalary > 1000000
                  ? 'Please enter a number between $0 and $1,000,000'
                  : null,
            })}
          />
        </label>
        {errors?.expectedSalary && <span className="text-red-800">{errors.expectedSalary}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-gray-900">
          Cover letter
          <textarea
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            {...register('coverLetter')}
          />
        </label>
        {errors?.coverLetter && <span className="text-red-800">{errors.coverLetter}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <input
            type="checkbox"
            {...register('hasAgreedToTerms', {
              isRequired: true,
              validate: hasAgreedToTerms =>
                hasAgreedToTerms === false ? 'You must agree to the terms' : null,
            })}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <span>I agree to the Terms of Service and Privacy Policy</span>
        </label>
        {errors?.hasAgreedToTerms && (
          <span className="text-red-800">{errors.hasAgreedToTerms}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() =>
            handleSubmit({
              onSubmit,
              onError,
            })
          }
        >
          Save
        </Button>
        {hasBegun &&
          (hasChangedWithoutSubmit ? (
            <div className="text-orange-500">&#9888; Unsaved changes</div>
          ) : (
            <div className="text-green-500">&#10003; Saved</div>
          ))}
      </div>
    </div>
  )
}

export default JobApplication
`,h={title:"useForm/Job Application",component:i},l={name:"Job Application",parameters:{layout:"centered",docs:{source:{code:v,language:"tsx"}}},argTypes:{onSubmit:{action:s=>s},onError:{action:s=>s}},render:s=>e.jsx(i,{...s})};var n,o,u;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Job Application',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: JOB_APPLICATION_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    onSubmit: {
      action: (data: ApplicationFormData) => data
    },
    onError: {
      action: (errors: Errors<ApplicationFormData>) => errors
    }
  },
  render: args => <JobApplication {...args} />
}`,...(u=(o=l.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const N=["jobApplication"],S=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:N,default:h,jobApplication:l},Symbol.toStringTag,{value:"Module"}));export{S as J,l as j};
