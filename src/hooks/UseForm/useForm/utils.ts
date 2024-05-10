import React from 'react'
import { CoordinatesOrNever, IGraph, Tuple } from '../../UseGraph/Graph'
import {
  FieldData,
  Fields,
  FormData,
  PartialDataKeys,
  isCheckboxInput,
  isDateInput,
  isFileInput,
  isNumberInput,
  isRadioInput,
} from './types'

export const getElementDefaultValue = <TData extends FormData>(
  // the type does not matter since we check for each property
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any,
): TData[keyof TData] | undefined => {
  if (!element) return undefined

  if (isRadioInput(element) || isCheckboxInput(element)) {
    // @ts-expect-error if it is a radio or checkbox the TData[keyof TData] must be a boolean
    return element.defaultChecked ?? element.checked
  }
  if (isFileInput(element)) {
    // @ts-expect-error if it is a file input the TData[keyof TData] must be files
    return element.files
  }
  if (isNumberInput(element)) {
    // @ts-expect-error if it is a number input TData[keyof TData] must be a number
    return element.defaultValue ? +element.defaultValue : +element.value
  }

  return element.defaultValue ?? element.value
}

export const getOnChangeValue = <TData extends FormData>(
  // the type does not matter since we check for each property
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: any,
): TData[keyof TData] | undefined => {
  if ('target' in event && 'type' in event.target) {
    const target = event.target

    if (isRadioInput(target) || isCheckboxInput(target)) {
      // @ts-expect-error if it is a radio or checkbox TData[keyof TData] must be a boolean
      return target.checked
    }
    if (isFileInput(target)) {
      // @ts-expect-error if it is a file input TData[keyof TData] must be files
      return target.files
    }
    if (isNumberInput(target)) {
      // @ts-expect-error if it is a number input TData[keyof TData] must be a number
      return +target.value
    }
    return target.value
  }
}

export const isBlank = (value: unknown): value is undefined | null | '' =>
  value === null || value === undefined || value === ''

export const isNotBlank = (value: unknown): value is Exclude<unknown, undefined | null | ''> =>
  !isBlank(value)

export const getTypedFieldValue = <TData extends FormData, TDimensions extends number = 0>(
  field: FieldData<TData, TDimensions>,
): TData[keyof TData] => {
  if (field.ref.current && 'type' in field.ref.current) {
    const currentElement = field.ref.current

    if (isRadioInput(currentElement) || isCheckboxInput(currentElement)) {
      // @ts-expect-error if it is a radio or checkbox TData[keyof TData] must be a boolean
      return currentElement.checked
    }
    if (isFileInput(currentElement)) {
      // @ts-expect-error if it is a file input TData[keyof TData] must be files
      return currentElement.files
    }
    if (isNumberInput(currentElement)) {
      // @ts-expect-error if it is a number input TData[keyof TData] must be a number
      return isNotBlank(currentElement.value) ? +currentElement.value : currentElement.value
    }
    if (isDateInput(currentElement)) {
      // @ts-expect-error if it is a date input TData[keyof TData] must be a Date
      return isNotBlank(currentElement.value)
        ? new Date(currentElement.value)
        : currentElement.value
    }

    // @ts-expect-error the only remaining type is string
    return currentElement.value
  }
  return field.value!
}

export const getTypedData = <TData extends FormData, TDimensions extends number = 0>(
  fieldsGraph: IGraph<Fields<TData, TDimensions>, TDimensions>,
): IGraph<TData, TDimensions> =>
  fieldsGraph.mapAllVertices(fields =>
    fields
      ? Object.keys(fields).reduce(
          (acc, fieldName) =>
            fieldName
              ? { ...acc, [fieldName]: getTypedFieldValue<TData, TDimensions>(fields[fieldName]!) }
              : acc,
          {} as TData,
        )
      : null,
  )

export const getFilterUnusedVertices =
  <TData extends FormData, TDimensions extends number = 0>(
    fieldsGraph: React.MutableRefObject<IGraph<Fields<TData, TDimensions>, TDimensions>>,
  ) =>
  (
    fields: PartialDataKeys<TData, unknown> | null,
    coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
  ) => {
    if (fields) {
      const newFields = Object.keys(fields).reduce(
        (acc, fieldName) => ({
          ...acc,
          ...(fieldsGraph.current.getVertex(coordinates)?.[fieldName]?.ref?.current
            ? { [fieldName]: fields[fieldName] }
            : {}),
        }),
        {},
      )
      if (Object.keys(newFields).length > 0) {
        return newFields
      }
    }
    return null
  }
