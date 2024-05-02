import React from 'react'

export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export type ObjectKey = string | number | symbol

export interface FormData {
  [Key: ObjectKey]: string | string[] | number | boolean
}

export interface RegisterOptions<
  TData extends FormData,
  TFieldName extends keyof TData = keyof TData,
  TRefPropsKey extends ObjectKey = 'ref',
  TIsRequired extends boolean = false,
> {
  refName?: TRefPropsKey
  isRequired?: TIsRequired
  validate?: (
    data: TIsRequired extends true ? Partial<TData> & Pick<TData, TFieldName> : Partial<TData>,
  ) => string | null
}

export type RefProps<TFieldElement extends FieldElement> = {
  [Key: ObjectKey]: React.Ref<TFieldElement>
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

export type RegisterFunction<TData extends FormData> = <
  TFieldElement extends FieldElement,
  TIsRequired extends boolean = false,
>(
  name: keyof TData,
  options: RegisterOptions<TData, keyof TData, keyof RefProps<TFieldElement>, TIsRequired>,
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
  TIsRequired extends boolean = false,
> {
  name: keyof TData
  ref: React.Ref<TFieldElements[keyof TData]>
  options?: RegisterOptions<TData, keyof TData, TRefPropsKey, TIsRequired>
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

// The defaults of `FieldElements<TData, FieldElement>`, `ObjectKey`, and `boolean` are broader than the actual types
// of each element - this allows us to be responsible for narrowing of these types, except where they are needed by the
// user and can be inferred via generics e.g. the `register` function
// This ultimately allows users to pass in just one generic type: their data type
export type Fields<
  TData extends FormData,
  TFieldElements extends FieldElements<TData, FieldElement> = FieldElements<TData, FieldElement>,
  TRefPropsKey extends ObjectKey = ObjectKey,
  TIsRequired extends boolean = boolean,
> = PartialDataKeys<TData, FieldData<TData, TFieldElements, TRefPropsKey, TIsRequired>>

export interface UseFormResult<TData extends FormData> {
  register: RegisterFunction<TData>
  errors: Errors<TData>
  touched: Touched<TData>
  handleSubmit: HandleSubmit<TData>
}

export type UseForm = <TData extends FormData>() => UseFormResult<TData>

export const isFileInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'file'

export const isRadioInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'radio'

export const isCheckboxInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'checkbox'
