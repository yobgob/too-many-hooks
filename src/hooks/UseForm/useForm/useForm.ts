import React, { useCallback, useRef, useState } from 'react'
import {
  Errors,
  FieldElement,
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
import {
  getElementDefaultValue,
  getOnChangeValue,
  getTypedData,
  getTypedFieldValue,
  isBlank,
} from './utils'

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
  const [changed, setChanged] = useState<Touched<TData>>({})

  const getRegisteredKeys = useCallback(
    (): (keyof TData)[] => Object.keys(fields.current) as (keyof TData)[],
    [],
  )

  const touch = useCallback((name: keyof TData) => {
    if (name in fields.current) {
      fields.current[name]!.hasBeenTouched = true
    }
    setTouched(touched => ({ ...touched, [name]: true }))
  }, [])

  const change = useCallback((name: keyof TData) => {
    if (name in fields.current) {
      fields.current[name]!.hasBeenChanged = true
    }
    setChanged(changed => ({ ...changed, [name]: true }))
  }, [])

  const resetChanged = useCallback(() => {
    setChanged(changed => Object.keys(changed).reduce((acc, key) => ({ ...acc, [key]: false }), {}))
  }, [])

  const updateFieldsFieldError = useCallback((name: keyof TData) => {
    if (!(name in fields.current)) return null // If the field has not been registered, it cannot have an error

    const field = fields.current[name]!
    const typedValue = getTypedFieldValue(field)
    const options = field.options

    if (options?.isRequired && isBlank(typedValue)) {
      const error = 'Field is required'
      field.error = error
      return error
    }

    const error =
      options?.validate?.({ ...getTypedData(fields.current), [field.name]: typedValue }) ?? null
    field.error = error

    return error
  }, [])

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

  const handleSubmit: HandleSubmit<TData> = useCallback(
    <TShouldSkipValidations extends boolean = false>({
      shouldSkipValidations,
      onSubmit,
      onError,
    }: HandleSubmitOptions<TData, TShouldSkipValidations>) => {
      if (shouldSkipValidations) {
        const typedData = getTypedData(fields.current)
        onSubmit?.(typedData)
        resetChanged()
      } else if (fields.current) {
        const errors = updateErrors()
        const hasErrors = Object.values(errors).some(error => error !== null)

        if (hasErrors) onError?.(errors)
        else {
          const typedData = getTypedData(fields.current)

          resetChanged()
          onSubmit?.(typedData)
        }
      }
    },
    [resetChanged, updateErrors],
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
          ref: React.createRef<TFieldElement | null>(),
          options: options,
          value: undefined,
          error: null,
          hasBeenTouched: false,
          hasBeenChanged: false,
        }
      }

      return {
        // this cast is safe because we only create refs of TFieldElement type per name
        [options?.refName ?? 'ref']: (element: TFieldElement) => {
          // update internal value upon first setting the ref
          if (fields.current[name]!.value === undefined) {
            fields.current[name]!.value = getElementDefaultValue<TData>(element)
          }

          fields.current[name]!.ref.current = element
        },
        onChange: event => {
          if (name in fields.current) {
            if (!fields.current[name]!.hasBeenChanged) {
              change(name)
            }

            const newValue = getOnChangeValue<TData>(event)
            fields.current[name]!.value = newValue
          }
        },
        onFocus: () => {
          if (name in fields.current) {
            if (!fields.current[name]!.hasBeenTouched) {
              touch(name)
            }
          }
        },
        onBlur: () => {
          updateError(name)
        },
      }
    },
    [change, touch, updateError],
  )

  return {
    register,
    errors,
    touched,
    changed,
    handleSubmit,
  }
}

export default useForm
