import React from 'react'

export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export interface FormData {
  [Key: string]: string | string[] | number | boolean
}

export interface RegisterOptions<
  TData extends FormData,
  TRefPropsKey extends string | number | symbol = 'ref',
> {
  isRequired: boolean
  validate?: (data: Partial<TData>) => string | null
  refName?: TRefPropsKey
}

export type RefProps<TFieldElement extends FieldElement> = {
  [Key: string | number | symbol]: React.Ref<TFieldElement>
}

export type RegisterResult<
  TFieldElement extends FieldElement = FieldElement,
  TRefProps extends RefProps<TFieldElement> = {
    ref: React.Ref<TFieldElement>
  },
> = TRefProps & {
  onChange: (event: unknown) => void
  onFocus: () => void
  onBlur: () => void
}

export type RegisterFunction<TData extends FormData> = <TFieldElement extends FieldElement>(
  name: keyof TData,
  options: RegisterOptions<TData, keyof RefProps<TFieldElement>>,
) => RegisterResult<TFieldElement, RefProps<TFieldElement>>

export interface HandleSubmitOptions<TData extends FormData> {
  validate?: boolean
  onSubmit?: (data: TData) => void
}

export type HandleSubmit<TData extends FormData> = (options: HandleSubmitOptions<TData>) => void

export interface FieldData<
  TData extends FormData,
  TFieldElements extends FieldElements<TData>,
  TRefPropsKey extends string | number | symbol = 'ref',
> {
  name: keyof TData
  ref: React.Ref<TFieldElements[keyof TData]>
  options?: RegisterOptions<TData, TRefPropsKey>
  value?: TData[keyof TData]
  error: string | null
  hasBeenTouched: boolean
}

type PartialDataKeys<TData extends FormData, TValue> = { [Key in keyof TData]?: TValue }

export type Errors<TData extends FormData> = PartialDataKeys<TData, string | null>
export type Touched<TData extends FormData> = PartialDataKeys<TData, boolean>
export type FieldElements<
  TData extends FormData,
  TFieldElement extends FieldElement = FieldElement,
> = { [Key in keyof TData]: TFieldElement }
export type Fields<
  TData extends FormData,
  TFieldElements extends FieldElements<TData>,
  TRefPropsKey extends string | number | symbol = 'ref',
> = PartialDataKeys<TData, FieldData<TData, TFieldElements, TRefPropsKey>>

export interface UseFormResult<TData extends FormData> {
  register: RegisterFunction<TData>
  errors: Errors<TData>
  touched: Touched<TData>
  handleSubmit: HandleSubmit<TData>
}

export type UseForm = <TData extends FormData>() => UseFormResult<TData>

export const isFileInput = (element: FieldElement): element is HTMLInputElement =>
  element.type === 'file'

export const isRadioInput = (element: FieldElement): element is HTMLInputElement =>
  element.type === 'radio'

export const isCheckboxInput = (element: FieldElement): element is HTMLInputElement =>
  element.type === 'checkbox'
