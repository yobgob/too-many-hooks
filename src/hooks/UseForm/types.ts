export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export interface FormData {
  [Key: string]: string | string[] | number | boolean
}

export interface RegisterResult<TFieldElement extends FieldElement> {
  ref: React.Ref<TFieldElement>
  onChange: (event: { target: { value: string; checked: boolean } }) => void
  onFocus: () => void
  onBlur: () => void
}

export interface FieldOptions<TData extends FormData> {
  isRequired: boolean
  validate?: (data: Partial<TData>) => string | null
}

export interface FieldData<TData extends FormData> {
  name: keyof TData
  ref: React.Ref<FieldElement>
  options?: FieldOptions<TData>
  value?: TData[keyof TData]
  error: string | null
  hasBeenTouched: boolean
}

type PartialDataKeys<TData extends FormData, TValue> = { [Key in keyof TData]?: TValue }

export type Errors<TData extends FormData> = PartialDataKeys<TData, string | null>
export type Touched<TData extends FormData> = PartialDataKeys<TData, boolean>
export type Fields<TData extends FormData> = PartialDataKeys<TData, FieldData<TData>>

export const isFileInput = (element: FieldElement): element is HTMLInputElement =>
  element.type === 'file'

export const isRadioInput = (element: FieldElement): element is HTMLInputElement =>
  element.type === 'radio'

export const isCheckboxInput = (element: FieldElement): element is HTMLInputElement =>
  element.type === 'checkbox'
