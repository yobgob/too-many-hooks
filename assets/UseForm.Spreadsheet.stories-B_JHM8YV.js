import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{r as T}from"./index-uubelm5h.js";import{S as u,B as l}from"./index-CFWu4tcp.js";import{u as E}from"./useTally-Ck9qmLPX.js";import{u as y,b as R}from"./useForm-cQMFoHCa.js";var a=(e=>(e.FirstName="FIRST_NAME",e.LastName="LAST_NAME",e.TShirtSize="T_SHIRT_SIZE",e.HatSize="HAT_SIZE",e))(a||{}),i=(e=>(e.Unselected="UNSELECTED",e.XS="XS",e.S="S",e.M="M",e.L="L",e.XL="XL",e))(i||{});const D=e=>{switch(e){case a.FirstName:return"First name";case a.LastName:return"Last name";case a.TShirtSize:return"T-shirt size";case a.HatSize:return"Hat size"}},w=e=>{switch(e){case i.Unselected:return"Select";default:return e}},p=Object.values(i).map(e=>({label:w(e),value:e})),_=({onSubmit:e,onError:x})=>{const{register:d,errors:s,hasBegun:F,hasChangedWithoutSubmit:f,handleSubmit:v}=y({dimensions:1}),c=R(d,{ref:"selectRef"}),[m,{increment:N,decrement:j}]=E({initial:1});return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("table",{className:"border-separate border-spacing-0 rounded-lg border border-black contain-paint ",children:[r.jsx("thead",{className:"[&_th:first-child]:border-l-0 [&_th]:border-b [&_th]:border-l [&_th]:border-black [&_th]:bg-slate-200 [&_th]:p-1",children:r.jsx("tr",{children:Object.values(a).map(t=>r.jsxs("th",{children:[D(t),t!==a.HatSize&&r.jsx("span",{className:"text-red-900",children:"*"})]},t))})}),r.jsx("tbody",{className:"[&_td:first-child]:border-l-0 [&_td]:border-l [&_td]:border-black [&_tr:not(:last-child)_td]:border-b",children:Array.from({length:m},(t,o)=>o).map(t=>r.jsxs(T.Fragment,{children:[r.jsxs("tr",{className:" [&_input]:m-[-1px] [&_input]:rounded-none [&_input]:border-none [&_input]:py-3 [&_input]:focus:border-solid [&_select]:m-[-1px] [&_select]:h-[calc(100%+2px)] [&_select]:w-[calc(100%+2px)] [&_select]:rounded-none [&_select]:border-none [&_select]:py-3  [&_select]:focus:border-solid",children:[r.jsx("td",{children:r.jsx("input",{...d(a.FirstName,{isRequired:!0,coordinates:[t]})})}),r.jsx("td",{children:r.jsx("input",{...d(a.LastName,{isRequired:!0,coordinates:[t]})})}),r.jsx("td",{children:r.jsx(u,{options:p,variant:"text",...c(a.TShirtSize,{isRequired:!0,coordinates:[t],isRequiredErrorMessageOverride:"A selection must be made",validate:o=>o===i.Unselected?"A selection must be made":null})})}),r.jsx("td",{children:r.jsx(u,{options:p,variant:"text",...c(a.HatSize,{coordinates:[t]})})})]}),(s==null?void 0:s[t])&&Object.values(s[t]).filter(o=>o!==null).length>0&&r.jsxs("tr",{className:"text-red-800 [&_td]:p-1",children:[r.jsx("td",{children:s[t][a.FirstName]}),r.jsx("td",{children:s[t][a.LastName]}),r.jsx("td",{children:s[t][a.TShirtSize]}),r.jsx("td",{children:s[t][a.HatSize]})]})]},`row-${t}`))})]}),r.jsx(l,{onClick:()=>N(),className:"bg-green-600",children:"+ Add row"}),r.jsx(l,{disabled:m<2,className:"bg-red-600",onClick:()=>j(),children:"- Remove row"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(l,{onClick:()=>v({onSubmit:e,onError:x}),children:"Save"}),F&&(f?r.jsx("div",{className:"text-orange-500",children:"⚠ Unsaved changes"}):r.jsx("div",{className:"text-green-500",children:"✓ Saved"}))]})]})},g=_;_.__docgenInfo={description:"",methods:[],displayName:"Spreadsheet",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormData<SpreadsheetFormData, 1>) => void",signature:{arguments:[{type:{name:"IGraph",elements:[{name:"TFieldsData"},{name:"literal",value:"1"}],raw:"IGraph<TFieldsData, TDimensions>"},name:"data"}],return:{name:"void"}}},description:""},onError:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormData<Errors<SpreadsheetFormData>, 1>) => void",signature:{arguments:[{type:{name:"IGraph",elements:[{name:"TFieldsData"},{name:"literal",value:"1"}],raw:"IGraph<TFieldsData, TDimensions>"},name:"data"}],return:{name:"void"}}},description:""}}};const O=`import React, { Fragment } from 'react'
import { Select } from '../../../storybook-common/components'
import Button from '../../../storybook-common/components/Button'
import useTally from '../../UseTally/useTally'
import useForm, { Errors, FormData } from '../useForm'
import { buildOverriddenRegister } from '../useForm/utils'
import { SIZE_OPTIONS } from './constants'
import { formatField } from './formatters'
import { Field, Size } from './types'

export type SpreadsheetFormData = {
  [Field.FirstName]: string
  [Field.LastName]: string
  [Field.TShirtSize]: Size
  [Field.HatSize]: Size
}

interface Props {
  onSubmit: (data: FormData<SpreadsheetFormData, 1>) => void
  onError: (data: FormData<Errors<SpreadsheetFormData>, 1>) => void
}

const Spreadsheet: React.FC<Props> = ({ onSubmit, onError }) => {
  const { register, errors, hasBegun, hasChangedWithoutSubmit, handleSubmit } = useForm<
    SpreadsheetFormData,
    1
  >({ dimensions: 1 })
  const registerSelect = buildOverriddenRegister(register, { ref: 'selectRef' })
  const [numRows, { increment: addRow, decrement: removeRow }] = useTally({ initial: 1 })

  return (
    <div className="flex flex-col gap-4">
      <table className="border-separate border-spacing-0 rounded-lg border border-black contain-paint ">
        <thead className="[&_th:first-child]:border-l-0 [&_th]:border-b [&_th]:border-l [&_th]:border-black [&_th]:bg-slate-200 [&_th]:p-1">
          <tr>
            {Object.values(Field).map(fieldName => (
              <th key={fieldName}>
                {formatField(fieldName)}
                {fieldName !== Field.HatSize && <span className="text-red-900">*</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_td:first-child]:border-l-0 [&_td]:border-l [&_td]:border-black [&_tr:not(:last-child)_td]:border-b">
          {Array.from({ length: numRows }, (_, i) => i).map(index => (
            <Fragment key={\`row-\${index}\`}>
              <tr className=" [&_input]:m-[-1px] [&_input]:rounded-none [&_input]:border-none [&_input]:py-3 [&_input]:focus:border-solid [&_select]:m-[-1px] [&_select]:h-[calc(100%+2px)] [&_select]:w-[calc(100%+2px)] [&_select]:rounded-none [&_select]:border-none [&_select]:py-3  [&_select]:focus:border-solid">
                <td>
                  <input
                    {...register(Field.FirstName, { isRequired: true, coordinates: [index] })}
                  />
                </td>
                <td>
                  <input
                    {...register(Field.LastName, { isRequired: true, coordinates: [index] })}
                  />
                </td>
                <td>
                  <Select
                    options={SIZE_OPTIONS}
                    variant="text"
                    {...registerSelect(Field.TShirtSize, {
                      isRequired: true,
                      coordinates: [index],
                      isRequiredErrorMessageOverride: 'A selection must be made',
                      validate: shirtSize =>
                        shirtSize === Size.Unselected ? 'A selection must be made' : null,
                    })}
                  />
                </td>
                <td>
                  <Select
                    options={SIZE_OPTIONS}
                    variant="text"
                    {...registerSelect(Field.HatSize, { coordinates: [index] })}
                  />
                </td>
              </tr>
              {errors?.[index] &&
                Object.values(errors[index]).filter(error => error !== null).length > 0 && (
                  <tr className="text-red-800 [&_td]:p-1">
                    <td>{errors[index][Field.FirstName]}</td>
                    <td>{errors[index][Field.LastName]}</td>
                    <td>{errors[index][Field.TShirtSize]}</td>
                    <td>{errors[index][Field.HatSize]}</td>
                  </tr>
                )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <Button onClick={() => addRow()} className="bg-green-600">
        + Add row
      </Button>
      <Button disabled={numRows < 2} className="bg-red-600" onClick={() => removeRow()}>
        - Remove row
      </Button>

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

export default Spreadsheet
`,z={title:"useForm/Spreadsheet",component:g},n={name:"Spreadsheet",parameters:{layout:"centered",docs:{source:{code:O,language:"tsx"}}},argTypes:{onSubmit:{action:e=>e},onError:{action:e=>e}},render:e=>r.jsx(g,{...e})};var h,S,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Spreadsheet',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: SPREADSHEET_CODE,
        language: 'tsx'
      }
    }
  },
  argTypes: {
    onSubmit: {
      action: (data: FormData<SpreadsheetFormData, 1>) => data
    },
    onError: {
      action: (errors: FormData<Errors<SpreadsheetFormData>, 1>) => errors
    }
  },
  render: args => <Spreadsheet {...args} />
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const I=["spreadsheet"],C=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:I,default:z,spreadsheet:n},Symbol.toStringTag,{value:"Module"}));export{C as S,n as s};
