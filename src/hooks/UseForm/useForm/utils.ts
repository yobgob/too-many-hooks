import {
  FieldData,
  Fields,
  FormData,
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

export const getTypedFieldValue = <TData extends FormData>(field: FieldData<TData>) => {
  if (field.ref.current && 'type' in field.ref.current) {
    const currentElement = field.ref.current

    if (isRadioInput(currentElement) || isCheckboxInput(currentElement)) {
      return currentElement.checked
    }
    if (isFileInput(currentElement)) {
      return currentElement.files
    }
    if (isNumberInput(currentElement)) {
      return isNotBlank(currentElement.value) ? +currentElement.value : currentElement.value
    }
    if (isDateInput(currentElement)) {
      return isNotBlank(currentElement.value)
        ? new Date(currentElement.value)
        : currentElement.value
    }
    return currentElement.value
  }
  return field.value
}

export const getTypedData = <TData extends FormData>(fields: Fields<TData>) => {
  return Object.values(fields).reduce(
    (acc, field) => (field ? { ...acc, [field.name]: getTypedFieldValue(field) } : acc),
    {} as TData,
  )
}
