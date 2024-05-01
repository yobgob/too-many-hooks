import { FormData, isCheckboxInput, isFileInput, isRadioInput } from './types'

export const getOnChangeValue = <TData extends FormData>(
  // the type does not matter since we check for each property
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: any,
  currentValue?: TData[keyof TData],
): TData[keyof TData] | undefined => {
  if ('target' in event && 'type' in event.target) {
    const target = event.target

    if (isRadioInput(target) || isCheckboxInput(target)) {
      // @ts-expect-error if it is a radio or checkbox the TData[keyof TData] must be a boolean
      return target.checked
    }
    if (isFileInput(target)) {
      // @ts-expect-error if it is a file input the TData[keyof TData] must be files
      return target.files
    }

    const convertedValue =
      typeof currentValue === 'number' ? +event.target.value : event.target.value

    return convertedValue
  }
}
