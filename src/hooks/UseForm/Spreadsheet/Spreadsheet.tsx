import React, { Fragment } from 'react'
import { Select } from '../../../storybook-common/components'
import Button from '../../../storybook-common/components/Button'
import { IGraph } from '../../UseGraph/Graph'
import useTally from '../../UseTally/useTally'
import useForm, { Errors } from '../useForm'
import { SIZE_OPTIONS } from './constants'
import { formatField } from './formatters'
import { Field, Size } from './types'

export type RowFormData = {
  [Field.FirstName]: string
  [Field.LastName]: string
  [Field.TShirtSize]: Size
  [Field.HatSize]: Size
}

export type SpreadsheetFormData = IGraph<RowFormData, 1>
export type SpreadsheetErrors = IGraph<Errors<RowFormData>, 1>

interface Props {
  onSubmit: (data: SpreadsheetFormData) => void
  onError: (data: SpreadsheetErrors) => void
}

const JobApplication: React.FC<Props> = ({ onSubmit, onError }) => {
  const { register, errors, hasBegun, hasChangedWithoutSubmit, handleSubmit } = useForm<
    RowFormData,
    1
  >({ dimensions: 1 })
  const [rows, { increment: addRow, decrement: removeRow }] = useTally({ initial: 1 })

  return (
    <div className="flex flex-col gap-4">
      <table className="rounded-lg border border-black">
        <thead>
          <tr>
            {Object.values(Field).map(fieldName => (
              <th key={fieldName} className="rounded-lg border border-black">
                {formatField(fieldName)}
                {fieldName !== Field.HatSize && <span className="text-red-900">*</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, i) => i).map(index => (
            <Fragment key={`row-${index}`}>
              <tr>
                <td className="rounded-lg border border-black">
                  <input
                    className="border-none"
                    {...register(Field.FirstName, { isRequired: true, coordinates: [index] })}
                  />
                </td>
                <td className="rounded-lg border border-black">
                  <input
                    className="border-none"
                    {...register(Field.LastName, { isRequired: true, coordinates: [index] })}
                  />
                </td>
                <td className="rounded-lg border border-black">
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
                <td className="rounded-lg border border-black">
                  <Select
                    options={SIZE_OPTIONS}
                    variant="text"
                    {...register(Field.HatSize, { refName: 'selectRef', coordinates: [index] })}
                  />
                </td>
              </tr>
              {errors?.[index] &&
                Object.values(errors[index]).filter(error => error !== null).length > 0 && (
                  <tr className="text-red-800">
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

      <Button onClick={() => addRow()}>+ Add row</Button>
      <Button disabled={rows < 2} onClick={() => removeRow()}>
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
