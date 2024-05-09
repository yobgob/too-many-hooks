import React, { useCallback, useMemo, useRef } from 'react'
import { CoordinatesOfLength, CoordinatesOrNever, Graph, IGraph } from '../../UseGraph/Graph'
import useGraph from '../../UseGraph/useGraph'
import {
  Changed,
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
  UseFormOptions,
  UseFormReturn,
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
const useForm: UseForm = <TData extends FormData, TDimensions extends number = 0>(
  {
    dimensions,
    isRequiredErrorMessageOverride,
    // @ts-expect-error TDimensions defaults to 0 if dimensions is not defined, so this is okay
  }: UseFormOptions<TDimensions> = { dimensions: 0 },
): UseFormReturn<TData, TDimensions> => {
  const fieldsGraph = useRef<IGraph<Fields<TData, TDimensions>, TDimensions>>(
    new Graph<Fields<TData, TDimensions>, TDimensions>({ dimensions }),
  )
  const [errors, { updateVertex: updateErrorsVertex, set: setErrors }] = useGraph<
    Errors<TData>,
    TDimensions
  >()
  const [touched, { someVertex: touchedAtSomeVertex, updateVertex: updateTouchedVertex }] =
    useGraph<Touched<TData>, TDimensions>()
  const [
    changed,
    {
      someVertex: changedAtSomeVertex,
      updateVertex: updateChangedVertex,
      updateAllVertices: updateAllChangedVertices,
    },
  ] = useGraph<Changed<TData>, TDimensions>()
  const hasBegun = useMemo(
    () =>
      !!touched &&
      touchedAtSomeVertex(fields =>
        Object.values(fields).some(fieldHasBeenTouched => fieldHasBeenTouched),
      ),
    [touched, touchedAtSomeVertex],
  )
  const hasChangedWithoutSubmit = useMemo(
    () =>
      !!changed &&
      changedAtSomeVertex(fields =>
        Object.values(fields).some(fieldHasBeenChanged => fieldHasBeenChanged),
      ),
    [changed, changedAtSomeVertex],
  )

  const updateFieldsVertex = useCallback(
    (
      fieldName: keyof TData,
      updater: (
        current?: Fields<TData, TDimensions>[keyof TData],
      ) => Fields<TData, TDimensions>[keyof TData],
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) =>
      fieldsGraph.current.updateVertex(
        fields =>
          fields
            ? { ...fields, [fieldName]: updater(fields?.[fieldName]) }
            : ({ [fieldName]: updater() } as Fields<TData, TDimensions>),
        coordinates,
      ),
    [],
  )

  const setFieldsVertex = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      newValue: Fields<TData, TDimensions>[TFieldName],
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) =>
      fieldsGraph.current.updateVertex(
        fields =>
          fields
            ? { ...fields, [fieldName]: newValue }
            : ({ [fieldName]: newValue } as Fields<TData, TDimensions>),
        coordinates,
      ),
    [],
  )

  const touch = useCallback(
    (
      fieldName: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      updateFieldsVertex(fieldName, fields => ({ ...fields!, hasBeenTouched: true }), coordinates)
      updateTouchedVertex(fields => ({ ...fields!, [fieldName]: true }), coordinates)
    },
    [updateTouchedVertex, updateFieldsVertex],
  )

  const change = useCallback(
    (
      fieldName: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      updateFieldsVertex(fieldName, fields => ({ ...fields!, hasBeenChanged: true }), coordinates)
      updateChangedVertex(fields => ({ ...fields!, [fieldName]: true }), coordinates)
    },
    [updateChangedVertex, updateFieldsVertex],
  )

  const resetChanged = useCallback(
    () =>
      updateAllChangedVertices(fields =>
        Object.keys(fields).reduce((acc, fieldName) => ({ ...acc, [fieldName]: false }), {}),
      ),
    [updateAllChangedVertices],
  )

  const updateFieldsVertexFieldError = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      const fieldsAtCoordinate = fieldsGraph.current.getVertex(coordinates)

      if (!(fieldsAtCoordinate && fieldName in fieldsAtCoordinate)) return null // If the field has not been registered, it cannot have an error

      const field = fieldsAtCoordinate[fieldName]!
      const typedValue = getTypedFieldValue<TData, TDimensions>(field)
      const options = field.options

      if (options?.isRequired && isBlank(typedValue)) {
        const error =
          field.options?.isRequiredErrorMessageOverride ??
          isRequiredErrorMessageOverride ??
          'Field is required'

        updateFieldsVertex(
          fieldName,
          field => ({
            ...field!,
            error,
          }),
          coordinates,
        )

        return error
      } else {
        const typedData = getTypedData<TData, TDimensions>(fieldsGraph.current)
        const typedFields = {
          ...typedData.getVertex(coordinates)!,
          [fieldName]: typedValue,
        }

        // @ts-expect-error these `TData`s will be the same
        const error = options?.validate?.(typedValue, typedFields, typedData) ?? null

        updateFieldsVertex(
          fieldName,
          field => ({
            ...field!,
            error,
          }),
          coordinates,
        )

        return error
      }
    },
    [isRequiredErrorMessageOverride, updateFieldsVertex],
  )

  const updateFieldsVertexFieldErrors = useCallback(
    (): void =>
      fieldsGraph.current.forEachVertex((fields, coordinates) =>
        Object.keys(fields).forEach(fieldName =>
          updateFieldsVertexFieldError(fieldName as keyof TData, coordinates),
        ),
      ),
    [updateFieldsVertexFieldError],
  )

  const updateErrorsVertexFieldError = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      updateErrorsVertex(
        errors => ({
          ...errors!,
          [fieldName]: updateFieldsVertexFieldError(fieldName, coordinates),
        }),
        coordinates,
      )
    },
    [updateErrorsVertex, updateFieldsVertexFieldError],
  )

  const updateErrors = useCallback(() => {
    updateFieldsVertexFieldErrors()

    const errors = fieldsGraph.current
      .mapAllVertices(fields =>
        Object.keys(fields).reduce(
          (acc, fieldName) => ({
            ...acc,
            [fieldName]: fields[fieldName]?.error,
          }),
          {} as Errors<TData>,
        ),
      )
      .get()

    setErrors(errors)
  }, [setErrors, updateFieldsVertexFieldErrors])

  const handleSubmit: HandleSubmit<TData, TDimensions> = useCallback(
    <TShouldSkipValidations extends boolean = false>({
      shouldSkipValidations,
      onSubmit,
      onError,
    }: HandleSubmitOptions<TData, TDimensions, TShouldSkipValidations>) => {
      if (shouldSkipValidations) {
        const typedData = getTypedData(fieldsGraph.current)
        // @ts-expect-error a graph of data is assignable to a graph of partial data
        onSubmit?.(typedData)
        resetChanged()
      } else if (fieldsGraph.current) {
        updateErrors()
        const errors = fieldsGraph.current.mapAllVertices(fields =>
          Object.keys(fields).reduce(
            (acc, fieldName) => ({ ...acc, [fieldName]: fields[fieldName]!.error }),
            {} as Errors<TData>,
          ),
        )
        const hasErrors = errors.someVertex(fields =>
          Object.keys(fields).some(fieldName => fields[fieldName] !== null),
        )

        if (hasErrors) {
          // @ts-expect-error Errors<TData> is assignable to a graph with TDimensions of 0
          onError?.(errors)
        } else {
          const typedData = getTypedData(fieldsGraph.current)
          resetChanged()
          // @ts-expect-error a graph of data is assignable to a graph of data
          onSubmit?.(typedData)
        }
      }
    },
    [resetChanged, updateErrors],
  )

  const register: RegisterFunction<TData, TDimensions> = useCallback(
    <
      TFieldName extends keyof TData,
      TFieldElement extends FieldElement,
      TIsRequired extends boolean = false,
    >(
      name: TFieldName,
      options?: RegisterOptions<
        TData,
        TDimensions,
        TFieldName,
        keyof RefProps<TFieldElement>,
        TIsRequired
      >,
    ): RegisterResult<TFieldElement, RefProps<TFieldElement>> => {
      options ??= {}
      const fields = fieldsGraph.current.getVertex(options.coordinates) ?? {}
      if (name in fields) {
        updateFieldsVertex(name, field => ({ ...field!, options }), options.coordinates)
      } else {
        setFieldsVertex(
          name,
          // @ts-expect-error options are valid because the `validate` type depends upon `isRequired`
          {
            name,
            ref: React.createRef<TFieldElement | null>(),
            options,
            value: undefined,
            error: null,
            hasBeenTouched: false,
            hasBeenChanged: false,
          },
          options?.coordinates,
        )
      }

      return {
        // this cast is safe because we only create refs of TFieldElement type per name
        [options.refName ?? 'ref']: (element: TFieldElement) => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)!

          // update internal value upon first setting the ref
          if (fields[name]!.value === undefined) {
            const defaultValue = getElementDefaultValue<TData>(element)
            updateFieldsVertex(
              name,
              field => ({
                ...field!,
                value: defaultValue,
                ref: { ...field?.ref, current: element },
              }),
              options.coordinates,
            )
          } else {
            updateFieldsVertex(
              name,
              field => ({ ...field!, ref: { ...field?.ref, current: element } }),
              options.coordinates,
            )
          }
        },
        onChange: event => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)!

          if (name in fields) {
            if (!fields[name]!.hasBeenChanged) {
              change(name, options.coordinates)
            }

            const newValue = getOnChangeValue<TData>(event)
            updateFieldsVertex(
              name,
              field => ({ ...field!, value: newValue }),
              options?.coordinates,
            )
          }
        },
        onFocus: () => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)!

          if (name in fields) {
            if (!fields[name]!.hasBeenTouched) {
              touch(name, options?.coordinates)
            }
          }
        },
        onBlur: () => {
          updateErrorsVertexFieldError(name, options?.coordinates)
        },
      }
    },
    [change, setFieldsVertex, touch, updateErrorsVertexFieldError, updateFieldsVertex],
  )

  return {
    register,
    errors,
    touched,
    changed,
    hasBegun,
    hasChangedWithoutSubmit,
    handleSubmit,
  }
}

export default useForm
