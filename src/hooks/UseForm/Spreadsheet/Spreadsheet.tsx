import React, { Fragment } from 'react'
import { Select } from '../../../storybook-common/components'
import Button from '../../../storybook-common/components/Button'
import useTally from '../../UseTally/useTally'
import useForm, { Errors, FormData } from '../useForm'
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

const JobApplication: React.FC<Props> = ({ onSubmit, onError }) => {
  const { register, errors, hasBegun, hasChangedWithoutSubmit, handleSubmit } = useForm<
    SpreadsheetFormData,
    1
  >({ dimensions: 1 })
  const [rows, { increment: addRow, decrement: removeRow }] = useTally({ initial: 1 })

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
          {Array.from({ length: rows }, (_, i) => i).map(index => (
            <Fragment key={`row-${index}`}>
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
                    {...register(Field.TShirtSize, {
                      isRequired: true,
                      refName: 'selectRef',
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
                    {...register(Field.HatSize, { refName: 'selectRef', coordinates: [index] })}
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
      <Button disabled={rows < 2} className="bg-red-600" onClick={() => removeRow()}>
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

export default JobApplication
