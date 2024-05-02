import React, { useCallback, useRef, useState } from 'react'
import {
  Errors,
  FieldData,
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
import { getOnChangeValue } from './utils'

const useForm: UseForm = <TData extends FormData>() => {
  // `never, never` because the types of the elements and ref prop names do not matter for our implementation
  // this makes it so users do not have to pass in the types of their elements for each piece of data
  // the types are accurately exposed to users via the `register` function's generics where is used
  const fields = useRef<Fields<TData, never, never>>({})
  const [errors, setErrors] = useState<Errors<TData>>({})
  const [touched, setTouched] = useState<Touched<TData>>({})

  const getRegisteredKeys = useCallback(
    (): (keyof TData)[] => Object.keys(fields.current) as (keyof TData)[],
    [],
  )
  const getRegisteredValues = useCallback(
    // @ts-expect-error undefined is filtered out
    (): FieldData<TData>[] => Object.values(fields.current).filter(value => value !== undefined),
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
    ({ validate = true, onSubmit }: HandleSubmitOptions<TData>) => {
      if (validate && fields.current) {
        const errors = updateErrors()
        const registeredValues = getRegisteredValues()
        const hasErrors = Object.values(errors).some(error => error !== null)

        if (hasErrors) return
        else
          onSubmit?.(
            registeredValues.reduce(
              (acc, fieldData) => ({ ...acc, [fieldData.name]: fieldData.value }),
              {} as TData,
            ),
          )
      } else
        onSubmit?.(
          getRegisteredValues().reduce(
            (acc, fieldData) => ({ ...acc, [fieldData.name]: fieldData.value }),
            {} as TData,
          ),
        )
    },
    [getRegisteredValues, updateErrors],
  )

  const register: RegisterFunction<TData> = useCallback(
    <TFieldElement extends FieldElement>(
      name: keyof TData,
      options?: RegisterOptions<TData, keyof RefProps<TFieldElement>>,
    ): RegisterResult<TFieldElement, RefProps<TFieldElement>> => {
      // We can safely discard the type of the ref and its name because we do not
      // use it except in the return of this function, which is nicely generically typed
      if (name in fields.current) {
        fields.current[name]!.options = options as RegisterOptions<TData, never>
      } else {
        fields.current[name] = {
          name,
          ref: React.createRef<TFieldElement>() as React.Ref<never>,
          options: options as RegisterOptions<TData, never>,
          value: undefined,
          error: null,
          hasBeenTouched: false,
        }
      }

      const res = {
        [options?.refName ?? 'ref']: fields.current[name]!.ref,
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

      console.log('registered', name, res)

      return res
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
