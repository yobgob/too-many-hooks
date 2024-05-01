import React, { useCallback, useRef, useState } from 'react'
import {
  Errors,
  FieldData,
  FieldElement,
  FieldOptions,
  Fields,
  FormData,
  RegisterResult,
  Touched,
} from './types'
import { getOnChangeValue } from './utils'

const useForm = <TData extends FormData>() => {
  const fields = useRef<Fields<TData>>({})
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

  const handleSubmit = useCallback(
    ({ validate = true, onSubmit }: { validate?: boolean; onSubmit?: (data: TData) => void }) => {
      if (validate && fields.current) {
        const errors = updateErrors()
        const registeredValues = getRegisteredValues()
        const hasErrors = Object.values(errors).some(error => error !== null)
        console.log(hasErrors, errors)
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

  const register = useCallback(
    <TFieldElement extends FieldElement>(
      name: keyof TData,
      options?: FieldOptions<TData>,
    ): RegisterResult<TFieldElement> => {
      const ref = React.createRef<TFieldElement>()

      const fieldData: FieldData<TData> = {
        name,
        ref,
        options,
        value: undefined,
        error: null,
        hasBeenTouched: false,
        ...fields.current[name],
      }

      fields.current[name] = fieldData

      console.log('registered', name, fields.current)

      return {
        ref,
        onChange: e => {
          if (name in fields.current) {
            const newValue = getOnChangeValue<TData>(e, fields.current[name]!.value)
            fields.current[name]!.value = newValue
          }
        },
        onFocus: () => {
          if (!fields.current[name]?.hasBeenTouched) {
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
