import type React from 'react'
import type { CoordinatesOrNever, Tuple } from '../../../UseGraph/Graph'
import type {
  FieldData,
  FieldElement,
  Fields,
  FieldsData,
  FormData,
  PartialDataKeys,
  RegisterResult,
} from '../types'
import {
  isCheckboxInput,
  isDateInput,
  isFileInput,
  isNumberInput,
  isRadioInput,
  isSelectMultiple,
  isSelectOne,
  isTextarea,
} from '../types'

const getSelectMultipleValue = (element: HTMLSelectElement): string[] =>
  Array.from(element.options).reduce<string[]>(
    (acc, option) => (option.selected ? [...acc, option.value] : acc),
    [],
  )

export const getElementDefaultValue = <
  TData extends FieldsData,
  TFieldElement extends FieldElement,
>(
  element: TFieldElement,
): TData[keyof TData] | undefined => {
  if (!element) return undefined
  console.log(element, element.type)

  if (isRadioInput(element) || isCheckboxInput(element)) {
    return (element.defaultChecked as TData[keyof TData]) ?? (element.checked as TData[keyof TData])
  }
  if (isFileInput(element)) {
    return element.files as TData[keyof TData]
  }
  if (isNumberInput(element)) {
    return element.defaultValue
      ? (+element.defaultValue as TData[keyof TData])
      : (+element.value as TData[keyof TData])
  }
  if (isSelectOne(element)) {
    return element.value as TData[keyof TData]
  }
  if (isSelectMultiple(element)) {
    return getSelectMultipleValue(element) as TData[keyof TData]
  }
  if (isTextarea(element)) {
    return element.value as TData[keyof TData]
  }

  return 'defaultValue' in element
    ? (element.defaultValue as TData[keyof TData]) ?? (element.value as TData[keyof TData])
    : (element.value as TData[keyof TData])
}

export const getOnChangeValue = <TData extends FieldsData>(
  // the type does not matter since we check for each property
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: any,
): TData[keyof TData] | undefined => {
  if ('target' in event && 'type' in event.target) {
    const element = event.target

    if (isRadioInput(element) || isCheckboxInput(element)) {
      return element.checked as TData[keyof TData]
    }
    if (isFileInput(element)) {
      return element.files as TData[keyof TData]
    }
    if (isNumberInput(element)) {
      return +element.value as TData[keyof TData]
    }
    if (isSelectMultiple(element)) {
      return getSelectMultipleValue(element) as TData[keyof TData]
    }
    return element.value as TData[keyof TData]
  }
}

export const isBlank = <T>(value: T | undefined | null | ''): value is undefined | null | '' =>
  value === null ||
  value === undefined ||
  value === '' ||
  (typeof value === 'object' && 'length' in value && value.length === 0)

export const isNotBlank = <T>(value: T): value is Exclude<T, undefined | null | ''> =>
  !isBlank(value)

export const getTypedFieldValue = <TData extends FieldsData, TDimensions extends number = 0>(
  field: FieldData<TData, TDimensions>,
): TData[keyof TData] => {
  if (field.ref.current && 'type' in field.ref.current) {
    const element = field.ref.current

    if (isRadioInput(element) || isCheckboxInput(element)) {
      return element.checked as TData[keyof TData]
    }
    if (isFileInput(element)) {
      return element.files as TData[keyof TData]
    }
    if (isNumberInput(element)) {
      return isNotBlank(element.value) ? (+element.value as TData[keyof TData]) : element.value
    }
    if (isDateInput(element)) {
      return isNotBlank(element.value)
        ? (new Date(element.value) as TData[keyof TData])
        : element.value
    }
    if (isSelectMultiple(element)) {
      return getSelectMultipleValue(element) as TData[keyof TData]
    }

    return element.value as TData[keyof TData]
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
