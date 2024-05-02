import React from 'react'
import { ObjectKey, PartialDataKeys, RefProps } from './internal'

/**
 * The type of elements that can be registered with `useForm` - inputs, selects, and textareas
 *
 * @export
 * @typedef {FieldElement}
 */
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

/**
 * The type of data that can be used in the `useForm` - the same as standard input types
 *
 * @export
 * @interface FormData
 * @typedef {FormData}
 */
export interface FormData {
  [Key: ObjectKey]: string | string[] | number | boolean | Date
}

/**
 * Options for configuring a form field when registering it
 *
 * @export
 * @interface RegisterOptions
 * @typedef {RegisterOptions}
 * @template {FormData} TData
 * @template {keyof TData} [TFieldName=keyof TData]
 * @template {ObjectKey} [TRefPropsKey='ref']
 * @template {boolean} [TIsRequired=false]
 */
export interface RegisterOptions<
  TData extends FormData,
  TFieldName extends keyof TData = keyof TData,
  TRefPropsKey extends ObjectKey = 'ref',
  TIsRequired extends boolean = false,
> {
  /**
   * Overrides the name of the `ref` prop to the registered input
   *
   * @type {?TRefPropsKey}
   */
  refName?: TRefPropsKey
  /**
   * If true, adds a validation that the field has a value, outputting an error if not
   *
   * @type {?TIsRequired}
   */
  isRequired?: TIsRequired
  /**
   * Adds a custom validation to the field.
   * If `isRequired` is `true`, the field is guaranteed to have a value.
   *
   * @type {?(
   *     data: TIsRequired extends true ? Partial<TData> & Pick<TData, TFieldName> : Partial<TData>,
   *   ) => string | null}
   */
  validate?: (
    data: TIsRequired extends true ? Partial<TData> & Pick<TData, TFieldName> : Partial<TData>,
  ) => string | null
}

/**
 * The result of the `register` function including:
 * - A ref of the type of the field's element with name RegisterOptions.refName ?? 'ref'
 * - An `onChange` function for updating form data values
 * - An `onFocus` function for marking fields as touched
 * - An `onBlur` function for triggering validations
 * @export
 * @typedef {RegisterResult}
 * @template {FieldElement} [TFieldElement=FieldElement]
 * @template {RefProps<TFieldElement>} [TRefProps={
 *     ref: React.Ref<TFieldElement>
 *   }]
 */
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

/**
 * The type of the `register` function provided by `useForm`.
 * Generic for:
 * - The form's data type
 * - The type of element being registered as a field
 * - Where or not the field is required
 *
 * @export
 * @typedef {RegisterFunction}
 * @template {FormData} TData
 */
export type RegisterFunction<TData extends FormData> = <
  TFieldElement extends FieldElement,
  TIsRequired extends boolean = false,
>(
  name: keyof TData,
  options: RegisterOptions<TData, keyof TData, keyof RefProps<TFieldElement>, TIsRequired>,
) => RegisterResult<TFieldElement, RefProps<TFieldElement>>

/**
 * The callback run when submitting via `handleSubmit` in `useForm`.
 * If validations are skipped, data is not guaranteed to exist.
 *
 * @export
 * @typedef {OnSubmit}
 * @template {FormData} TData
 * @template {boolean} TShouldSkipValidations
 */
export type OnSubmit<TData extends FormData, TShouldSkipValidations extends boolean = false> = (
  data: TShouldSkipValidations extends true ? Partial<TData> : TData,
) => void

/**
 * The options for handling a submission with `useForm`
 *
 * @export
 * @interface HandleSubmitOptions
 * @typedef {HandleSubmitOptions}
 * @template {FormData} TData
 * @template {boolean} TShouldSkipValidations
 */
export interface HandleSubmitOptions<
  TData extends FormData,
  TShouldSkipValidations extends boolean = false,
> {
  /**
   * If `true`, the `onSubmit` function will be called even with errors in the form
   *
   * @type {?TShouldSkipValidations}
   */
  shouldSkipValidations?: TShouldSkipValidations
  /**
   * A callback used upon submission of the form with all data defined
   * If `shouldSkipValidations` is `true`, data is not guaranteed to exist
   *
   * @type {?OnSubmit<TData, TShouldSkipValidations>}
   */
  onSubmit?: OnSubmit<TData, TShouldSkipValidations>
  /**
   * A callback used upon submission of the form if errors prevented completion
   *
   * @type {?(errors: Errors<TData>) => void}
   */
  onError?: (errors: Errors<TData>) => void
}

/**
 * The type of the `handleSubmit` function provided by `useForm`
 *
 * @export
 * @typedef {HandleSubmit}
 * @template {FormData} TData
 * @template {boolean} TShouldSkipValidations
 */
export type HandleSubmit<TData extends FormData> = <TShouldSkipValidations extends boolean = false>(
  options: HandleSubmitOptions<TData, TShouldSkipValidations>,
) => void

/**
 * The data tracked internally of one field
 *
 * @export
 * @interface FieldData
 * @typedef {FieldData}
 * @template {FormData} TData
 * @template {FieldElements<TData>} [TFieldElements=FieldElements<TData>]
 * @template {string | number | symbol} [TRefPropsKey='ref']
 * @template {boolean} [TIsRequired=false]
 */
export interface FieldData<
  TData extends FormData,
  TFieldElements extends FieldElements<TData> = FieldElements<TData>,
  TRefPropsKey extends ObjectKey = ObjectKey,
  TIsRequired extends boolean = boolean,
> {
  /**
   * The name of the field
   *
   * @type {keyof TData}
   */
  name: keyof TData
  /**
   * A ref to the element the field was registered upon
   *
   * @type {React.Ref<TFieldElements[keyof TData]>}
   */
  ref: React.MutableRefObject<TFieldElements[keyof TData] | null>
  /**
   * Configures the validations of the registered field and what the `register` function for the field returns
   *
   * @type {?RegisterOptions<TData, keyof TData, TRefPropsKey, TIsRequired>}
   */
  options?: RegisterOptions<TData, keyof TData, TRefPropsKey, TIsRequired>
  /**
   * The current value of the field
   *
   * @type {?TData[keyof TData]}
   */
  value?: TData[keyof TData]
  /**
   * A string error or null if no error exists
   *
   * @type {(string | null)}
   */
  error: string | null
  /**
   * Whether or not the user has interacted with the registered field
   *
   * @type {boolean}
   */
  hasBeenTouched: boolean
}

/**
 * Maps registered field names to validation information.
 * If a field has an error, a user-facing string describing that error is returned.
 * If a field has no error, `null` is returned.
 *
 * @export
 * @typedef {Errors}
 * @template {FormData} TData
 */
export type Errors<TData extends FormData> = PartialDataKeys<TData, string | null>
/**
 * Maps registered field names to a boolean indicating if the user has focused the input.
 *
 * @export
 * @typedef {Touched}
 * @template {FormData} TData
 */
export type Touched<TData extends FormData> = PartialDataKeys<TData, boolean>
/**
 * Maps registered field names to their respective element types in the DOM
 *
 * @export
 * @typedef {FieldElements}
 * @template {FormData} TData
 * @template {FieldElement} [TFieldElement=FieldElement]
 */
export type FieldElements<
  TData extends FormData,
  TFieldElement extends FieldElement = FieldElement,
> = { [Key in keyof TData]: TFieldElement }

/**
 * The type of the internally tracked information about each registered field.
 *
 * The defaults of `FieldElements<TData, FieldElement>`, `ObjectKey`, and `boolean` are broader than the actual types
 * of each element - this allows us to be responsible for narrowing of these types, except where they are needed by the
 * user and can be inferred via generics e.g. the `register` function
 * This ultimately allows users to pass in just one generic type: their data type
 *
 *
 * @export
 * @typedef {Fields}
 * @template {FormData} TData
 * @template {FieldElements<TData, FieldElement>} [TFieldElements=FieldElements<TData, FieldElement>]
 * @template {ObjectKey} [TRefPropsKey=ObjectKey]
 * @template {boolean} [TIsRequired=boolean]
 */
export type Fields<
  TData extends FormData,
  TFieldElements extends FieldElements<TData, FieldElement> = FieldElements<TData, FieldElement>,
  TRefPropsKey extends ObjectKey = ObjectKey,
  TIsRequired extends boolean = boolean,
> = PartialDataKeys<TData, FieldData<TData, TFieldElements, TRefPropsKey, TIsRequired>>

/**
 * The return type of `useForm`
 *
 * @export
 * @interface UseFormReturn
 * @typedef {UseFormReturn}
 * @template {FormData} TData
 */
export interface UseFormReturn<TData extends FormData> {
  /**
   * The `register` function is used to register inputs as fields within the form
   *
   * @type {RegisterFunction<TData>}
   */
  register: RegisterFunction<TData>
  /**
   * A map of registered fields to their validation information
   *
   * @type {Errors<TData>}
   */
  errors: Errors<TData>
  /**
   * A map of registered fields to whether or not they have been focused by the user
   *
   * @type {Touched<TData>}
   */
  touched: Touched<TData>
  /**
   * Handles submission of the form, conditionally calling an `onSubmit` callback which receives the form's data
   *
   * @type {HandleSubmit<TData>}
   */
  handleSubmit: HandleSubmit<TData>
}

/**
 * The type of the `useForm` hook, which helps manage state for forms
 *
 * @export
 * @typedef {UseForm}
 */
export type UseForm = <TData extends FormData>() => UseFormReturn<TData>
