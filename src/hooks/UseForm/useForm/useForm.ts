import React, { useCallback, useRef, useState } from 'react'
import {
  Errors,
  FieldData,
  FieldElement,
  FieldElements,
  Fields,
  FormData,
  HandleSubmit,
  HandleSubmitOptions,
  RefProps,
  RegisterFunction,
  RegisterOptions,
  RegisterResult,
  Touched,
  UseForm,
} from './types'
import { getElementDefaultValue, getOnChangeValue } from './utils'

/**
 * Helps manage form state.
 * Provides a `register` function for registering fields with the hook and handles tracking
 * their values, errors, and submission of the form.
 *
 * @template {FormData} TData
 * @returns {{ register: RegisterFunction<TData>; errors: Errors<TData>; touched: Touched<TData>; handleSubmit: HandleSubmit<TData>; }}
 */
const useForm: UseForm = <TData extends FormData>() => {
  const fields = useRef<Fields<TData>>({})
  const [errors, setErrors] = useState<Errors<TData>>({})
  const [touched, setTouched] = useState<Touched<TData>>({})

  const getRegisteredKeys = useCallback(
    (): (keyof TData)[] => Object.keys(fields.current) as (keyof TData)[],
    [],
  )
  const getRegisteredValues = useCallback(
    (): FieldData<TData, FieldElements<TData, FieldElement>>[] =>
      // @ts-expect-error undefined is filtered out, TS cannot tell
      Object.values(fields.current).filter(value => value !== undefined),
    [],
  )

  const updateFieldsFieldError = useCallback(
    (name: keyof TData) => {
      if (!(name in fields.current)) return null // If the field has not been registered, it cannot have an error

      const field = fields.current[name]!
      const options = field.options

      if (
        options?.isRequired &&
        (field.value === undefined || field.value === null || field.value === '')
      ) {
        const error = 'Field is required'
        field.error = error
        return error
      }

      const error =
        options?.validate?.(
          getRegisteredValues().reduce(
            (acc, fieldData) => ({ ...acc, [fieldData.name]: fieldData.value }),
            {} as Partial<TData>,
          ),
        ) ?? null

      field.error = error

      return error
    },
    [getRegisteredValues],
  )

  const updateFieldsFieldErrors = useCallback((): Errors<TData> => {
    const errors = getRegisteredKeys().reduce(
      (acc, fieldName) => ({
        ...acc,
        [fieldName]: updateFieldsFieldError(fieldName as keyof TData),
      }),
      {} as Errors<TData>,
    )
    return errors
  }, [getRegisteredKeys, updateFieldsFieldError])

  const updateError = useCallback(
    (name: keyof TData) => {
      const error = updateFieldsFieldError(name)
      setErrors(errors => ({ ...errors, [name]: error }))
      return error
    },
    [updateFieldsFieldError],
  )

  const updateErrors = useCallback(() => {
    const errors = updateFieldsFieldErrors()
    setErrors(errors)
    return errors
  }, [updateFieldsFieldErrors])

  const touch = useCallback((name: keyof TData) => {
    if (name in fields.current) {
      fields.current[name]!.hasBeenTouched = true
    }
    setTouched(touched => ({ ...touched, [name]: true }))
  }, [])

  const handleSubmit: HandleSubmit<TData> = useCallback(
    <TShouldSkipValidations extends boolean = false>({
      shouldSkipValidations,
      onSubmit,
      onError,
    }: HandleSubmitOptions<TData, TShouldSkipValidations>) => {
      if (shouldSkipValidations) {
        onSubmit?.(
          getRegisteredValues().reduce(
            (acc, fieldData) => ({ ...acc, [fieldData.name]: fieldData.value }),
            {} as TData,
          ),
        )
      } else if (fields.current) {
        const errors = updateErrors()
        const registeredValues = getRegisteredValues()
        const hasErrors = Object.values(errors).some(error => error !== null)

        if (hasErrors) onError?.(errors)
        else
          onSubmit?.(
            registeredValues.reduce(
              (acc, fieldData) => ({ ...acc, [fieldData.name]: fieldData.value }),
              {} as TData,
            ),
          )
      }
    },
    [getRegisteredValues, updateErrors],
  )

  const register: RegisterFunction<TData> = useCallback(
    <TFieldElement extends FieldElement, TIsRequired extends boolean = false>(
      name: keyof TData,
      options?: RegisterOptions<TData, keyof TData, keyof RefProps<TFieldElement>, TIsRequired>,
    ): RegisterResult<TFieldElement, RefProps<TFieldElement>> => {
      if (name in fields.current) {
        fields.current[name]!.options = options
      } else {
        fields.current[name] = {
          name,
          ref: (element: TFieldElement) => {
            // update internal value upon first setting the ref
            fields.current[name]!.value = getElementDefaultValue<TData>(element)
            return React.createRef<TFieldElement>()
          },
          options: options,
          value: undefined,
          error: null,
          hasBeenTouched: false,
        }
      }

      return {
        // this cast is safe because we only create refs of TFieldElement type per name
        [options?.refName ?? 'ref']: fields.current[name]!.ref as React.Ref<TFieldElement>,
        onChange: e => {
          if (name in fields.current) {
            const newValue = getOnChangeValue<TData>(e, fields.current[name]!.value)
            fields.current[name]!.value = newValue
          }
        },
        onFocus: () => {
          if (!fields.current[name]!.hasBeenTouched) {
            touch(name)
          }
        },
        onBlur: () => {
          updateError(name)
        },
      }
    },
    [touch, updateError],
  )

  return {
    register,
    errors,
    touched,
    handleSubmit,
  }
}

export default useForm
