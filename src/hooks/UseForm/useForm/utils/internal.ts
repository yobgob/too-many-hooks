import React from 'react'
import { CoordinatesOrNever, Tuple } from '../../../UseGraph/Graph'
import {
  FieldData,
  FieldElement,
  Fields,
  FieldsData,
  FormData,
  PartialDataKeys,
  RegisterResult,
  isCheckboxInput,
  isDateInput,
  isFileInput,
  isNumberInput,
  isRadioInput,
} from '../types'

export const getElementDefaultValue = <TData extends FieldsData>(
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

export const getOnChangeValue = <TData extends FieldsData>(
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

export const isBlank = <T>(value: T | undefined | null | ''): value is undefined | null | '' =>
  value === null || value === undefined || value === ''

export const isNotBlank = <T>(value: T): value is Exclude<T, undefined | null | ''> =>
  !isBlank(value)

export const getTypedFieldValue = <TData extends FieldsData, TDimensions extends number = 0>(
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

export const getTypedData = <TData extends FieldsData, TDimensions extends number = 0>(
  fieldsGraph: FormData<Fields<TData, TDimensions>, TDimensions>,
): FormData<TData, TDimensions> =>
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
  <TData extends FieldsData, TDimensions extends number = 0>(
    fieldsGraph: React.MutableRefObject<FormData<Fields<TData, TDimensions>, TDimensions>>,
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

export const overrideRegisterResultPropNames = <
  TFieldElement extends FieldElement = FieldElement,
  TRefOverride extends string = 'ref',
  TOnChangeOverride extends string = 'onChange',
  TOnBlurOverride extends string = 'onBlur',
  TOnFocusOverride extends string = 'onFocus',
>(
  registerProps: RegisterResult<TFieldElement>,
  nameOverrides: Partial<{
    ref: TRefOverride
    onChange: TOnChangeOverride
    onBlur: TOnBlurOverride
    onFocus: TOnFocusOverride
  }>,
): { [key in TRefOverride]: RegisterResult<TFieldElement>['ref'] } & {
  [key in TOnChangeOverride]: RegisterResult<TFieldElement>['onChange']
} & { [key in TOnBlurOverride]: RegisterResult<TFieldElement>['onBlur'] } & {
  [key in TOnFocusOverride]: RegisterResult<TFieldElement>['onFocus']
} => {
  const { ref, onChange, onBlur, onFocus } = {
    ref: (nameOverrides.ref ?? 'ref') as TRefOverride,
    onChange: (nameOverrides.onChange ?? 'onChange') as TOnChangeOverride,
    onBlur: (nameOverrides.onBlur ?? 'onBlur') as TOnBlurOverride,
    onFocus: (nameOverrides.onFocus ?? 'onFocus') as TOnFocusOverride,
  }

  // @ts-expect-error these keys are properly typed but TS treats them as string because they are dynamic
  return {
    [ref]: registerProps.ref,
    [onChange]: registerProps.onChange,
    [onBlur]: registerProps.onBlur,
    [onFocus]: registerProps.onFocus,
  }
}
