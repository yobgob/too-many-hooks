import React, { useCallback, useMemo, useRef } from 'react'
import { getObjectWithoutKey } from '../../../common/utils'
import type {
  Coordinates,
  CoordinatesOfLength,
  CoordinatesOrNever,
  IGraph} from '../../UseGraph/Graph';
import {
  Graph
} from '../../UseGraph/Graph'
import useGraph from '../../UseGraph/useGraph'
import type {
  Changed,
  Deregister,
  DeregisterAtCoordinates,
  Errors,
  FieldElement,
  Fields,
  FieldsData,
  FormData,
  HandleSubmit,
  HandleSubmitOptions,
  PartialDataKeys,
  Register,
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
 * @template {FieldsData} TData
 * @returns {{ register: Register<TData>; errors: Errors<TData>; touched: Touched<TData>; handleSubmit: HandleSubmit<TData>; }}
 */
const useForm: UseForm = <TData extends FieldsData, TDimensions extends number = 0>({
  dimensions = 0 as TDimensions,
  isRequiredErrorMessageOverride,
  shouldNotAutoPruneFields = false,
}: UseFormOptions<TDimensions> = {}): UseFormReturn<TData, TDimensions> => {
  const fieldsGraph = useRef<FormData<Fields<TData, TDimensions>, TDimensions>>(
    new Graph<Fields<TData, TDimensions>, TDimensions>({ dimensions }),
  )
  const [
    errors,
    {
      updateVertex: updateErrorsVertex,
      set: setErrors,
      pruneVertex: pruneErrorsVertex,
      pruneAtCoordinates: pruneErrorsAtCoordinates,
    },
  ] = useGraph<Errors<TData>, TDimensions>({ dimensions })
  const [
    touched,
    {
      someVertex: touchedAtSomeVertex,
      updateVertex: updateTouchedVertex,
      pruneVertex: pruneTouchedVertex,
      pruneAtCoordinates: pruneTouchedAtCoordinates,
    },
  ] = useGraph<Touched<TData>, TDimensions>({ dimensions })
  const [
    changed,
    {
      someVertex: changedAtSomeVertex,
      updateVertex: updateChangedVertex,
      updateAllVertices: updateAllChangedVertices,
      pruneVertex: pruneChangedVertex,
      pruneAtCoordinates: pruneChangedAtCoordinates,
    },
  ] = useGraph<Changed<TData>, TDimensions>({ dimensions })
  const hasBegun = useMemo(
    () =>
      !!touched &&
      touchedAtSomeVertex(fields =>
        fields ? Object.values(fields).some(fieldHasBeenTouched => fieldHasBeenTouched) : false,
      ),
    [touched, touchedAtSomeVertex],
  )
  const hasChangedWithoutSubmit = useMemo(
    () =>
      !!changed &&
      changedAtSomeVertex(fields =>
        fields ? Object.values(fields).some(fieldHasBeenChanged => fieldHasBeenChanged) : false,
      ),
    [changed, changedAtSomeVertex],
  )

  const updateFieldsVertexField = useCallback(
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
      updateFieldsVertexField(
        fieldName,
        fields => (fields ? { ...fields, hasBeenTouched: true } : fields),
        coordinates,
      )
      updateTouchedVertex(
        fields => (fields ? { ...fields, [fieldName]: true } : fields),
        coordinates,
      )
    },
    [updateTouchedVertex, updateFieldsVertexField],
  )

  const change = useCallback(
    (
      fieldName: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      updateFieldsVertexField(
        fieldName,
        fields => (fields ? { ...fields, hasBeenChanged: true } : fields),
        coordinates,
      )
      updateChangedVertex(
        fields => (fields ? { ...fields, [fieldName]: true } : fields),
        coordinates,
      )
    },
    [updateChangedVertex, updateFieldsVertexField],
  )

  const resetChanged = useCallback(() => {
    fieldsGraph.current.updateAllVertices(fields =>
      fields
        ? Object.keys(fields).reduce(
            (acc, fieldName) => ({
              ...acc,
              [fieldName]: { ...fields[fieldName], changed: false },
            }),
            {},
          )
        : null,
    )
    updateAllChangedVertices(fields =>
      fields
        ? Object.keys(fields).reduce((acc, fieldName) => ({ ...acc, [fieldName]: false }), {})
        : null,
    )
  }, [updateAllChangedVertices])

  const removeUnregisteredFieldsAtVertex = useCallback(
    (coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => {
      const fields = fieldsGraph.current.getVertex(coordinates)

      if (fields) {
        const newFields = Object.keys(fields).reduce(
          (acc, fieldName) => ({
            ...acc,
            ...(fields[fieldName]?.ref?.current || fields[fieldName]?.options?.shouldNotBeAutoPruned
              ? { [fieldName]: fields[fieldName] }
              : {}),
          }),
          {},
        )
        fieldsGraph.current.setVertex(newFields, coordinates)
        const removeUnregisteredKeys = (fieldsToFilter: PartialDataKeys<TData, unknown> | null) =>
          fieldsToFilter
            ? Object.keys(newFields).reduce(
                (acc, fieldName) => ({ ...acc, [fieldName]: fieldsToFilter[fieldName] }),
                {},
              )
            : null
        updateErrorsVertex(removeUnregisteredKeys)
        updateTouchedVertex(removeUnregisteredKeys)
        updateChangedVertex(removeUnregisteredKeys)
      }
    },
    [updateChangedVertex, updateErrorsVertex, updateTouchedVertex],
  )

  const pruneVertex = useCallback(
    (coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => {
      fieldsGraph.current.pruneAtCoordinates(coordinates)
      pruneErrorsVertex(coordinates)
      pruneTouchedVertex(coordinates)
      pruneChangedVertex(coordinates)
    },
    [pruneChangedVertex, pruneErrorsVertex, pruneTouchedVertex],
  )

  const deregister: Deregister<TData, TDimensions> = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      fieldsGraph.current.updateVertex(
        fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
        coordinates,
      )
      const remainingFields = fieldsGraph.current.getVertex(coordinates)

      // if no fields remain registered after filtering, remove the entire vertex
      if (!remainingFields || Object.keys(remainingFields).length === 0) {
        pruneVertex(coordinates)
      } else {
        updateErrorsVertex(
          fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
          coordinates,
        )
        updateTouchedVertex(
          fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
          coordinates,
        )
        updateChangedVertex(
          fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
          coordinates,
        )
      }
    },
    [pruneVertex, updateChangedVertex, updateErrorsVertex, updateTouchedVertex],
  )

  const deregisterAtCoordinates: DeregisterAtCoordinates<TDimensions> = useCallback(
    <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ) => {
      fieldsGraph.current.pruneAtCoordinates(coordinates)
      pruneErrorsAtCoordinates(coordinates)
      pruneTouchedAtCoordinates(coordinates)
      pruneChangedAtCoordinates(coordinates)
    },
    [pruneChangedAtCoordinates, pruneErrorsAtCoordinates, pruneTouchedAtCoordinates],
  )

  const deregisterInactiveFields = useCallback(() => {
    fieldsGraph.current.forEachVertex((fields, coordinates) => {
      if (!fields) {
        pruneVertex(coordinates)
      } else {
        removeUnregisteredFieldsAtVertex(coordinates)
        const remainingFields = fieldsGraph.current.getVertex(coordinates)

        // if no fields remain registered after filtering, remove the entire vertex
        if (!remainingFields || Object.keys(remainingFields).length === 0) {
          pruneVertex(coordinates)
        }
      }
    })
  }, [pruneVertex, removeUnregisteredFieldsAtVertex])

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

        updateFieldsVertexField(
          fieldName,
          field => ({
            ...field!,
            error,
          }),
          coordinates,
        )

        return error
      } else {
        const typedData = getTypedData<TData, TDimensions>(fieldsGraph.current) as IGraph<
          TData,
          TDimensions
        >
        const typedFields = {
          ...typedData.getVertex(coordinates)!,
          [fieldName]: typedValue,
        }

        // @ts-expect-error `TData` is valid as a `GraphData` with `TDimensions=0`
        const error = options?.validate?.(typedValue, typedFields, typedData.get()!) ?? null

        updateFieldsVertexField(
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
    [isRequiredErrorMessageOverride, updateFieldsVertexField],
  )

  const updateFieldsVertexFieldErrors = useCallback(
    (): void =>
      fieldsGraph.current.forEachVertex((fields, coordinates) => {
        if (fields) {
          Object.keys(fields).forEach(fieldName =>
            updateFieldsVertexFieldError(fieldName as keyof TData, coordinates),
          )
        }
      }),
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
        fields
          ? Object.keys(fields).reduce<Errors<TData>>(
              (acc, fieldName) => ({
                ...acc,
                [fieldName]: fields[fieldName]?.error,
              }),
              {},
            )
          : null,
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
      if (!shouldNotAutoPruneFields) {
        deregisterInactiveFields()
      }

      if (shouldSkipValidations) {
        const typedData = getTypedData(fieldsGraph.current)
        // @ts-expect-error a graph of data is assignable to a graph of partial data
        onSubmit?.(typedData)
        resetChanged()
      } else if (fieldsGraph.current) {
        updateErrors()
        const errors = fieldsGraph.current.mapAllVertices(fields =>
          fields
            ? Object.keys(fields).reduce<Errors<TData>>(
                (acc, fieldName) => ({ ...acc, [fieldName]: fields[fieldName]!.error }),
                {},
              )
            : null,
        )
        const hasErrors = errors.someVertex(fields =>
          fields ? Object.keys(fields).some(fieldName => fields[fieldName] !== null) : false,
        )

        if (hasErrors) {
          // @ts-expect-error `Errors<TData>` is valid as a `GraphData` with `TDimensions=0`
          onError?.(errors)
        } else {
          const typedData = getTypedData(fieldsGraph.current)
          resetChanged()
          // @ts-expect-error a graph of data is assignable to a graph of data
          onSubmit?.(typedData)
        }
      }
    },
    [resetChanged, shouldNotAutoPruneFields, deregisterInactiveFields, updateErrors],
  )

  const register: Register<TData, TDimensions> = useCallback(
    <
      TFieldName extends keyof TData,
      TFieldElement extends FieldElement,
      TIsRequired extends boolean = false,
    >(
      fieldName: TFieldName,
      options?: RegisterOptions<TData, TDimensions, TFieldName, TIsRequired>,
    ): RegisterResult<TFieldElement> => {
      options ??= {}
      const fields = fieldsGraph.current.getVertex(options.coordinates) ?? {}
      if (fieldName in fields) {
        updateFieldsVertexField(fieldName, field => ({ ...field!, options }), options.coordinates)
      } else {
        setFieldsVertex(
          fieldName,
          // @ts-expect-error options are valid because the `validate` type depends upon `isRequired`
          {
            name: fieldName,
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
        ref: (element: TFieldElement) => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)
          if (fields?.[fieldName]) {
            // update internal value from ref if not yet set
            if (fields[fieldName]!.value === undefined) {
              const defaultValue = getElementDefaultValue<TData, TFieldElement>(element)
              updateFieldsVertexField(
                fieldName,
                field => ({
                  ...field!,
                  value: defaultValue,
                  ref: { ...field!.ref, current: element },
                }),
                options.coordinates,
              )
            } else {
              updateFieldsVertexField(
                fieldName,
                field => ({ ...field!, ref: { ...field!.ref, current: element } }),
                options.coordinates,
              )
            }
          }
        },
        onChange: event => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)!

          if (fieldName in fields) {
            if (!fields[fieldName]!.hasBeenChanged) {
              change(fieldName, options.coordinates)
            }

            const newValue = getOnChangeValue<TData>(event)
            updateFieldsVertexField(
              fieldName,
              field => ({ ...field!, value: newValue }),
              options?.coordinates,
            )
          }
        },
        onFocus: () => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)!

          if (fieldName in fields) {
            if (!fields[fieldName]!.hasBeenTouched) {
              touch(fieldName, options?.coordinates)
            }
          }
        },
        onBlur: () => {
          updateErrorsVertexFieldError(fieldName, options?.coordinates)
        },
      }
    },
    [change, setFieldsVertex, touch, updateErrorsVertexFieldError, updateFieldsVertexField],
  )

  return {
    register,
    deregister,
    deregisterAtCoordinates,
    errors,
    touched,
    changed,
    hasBegun,
    hasChangedWithoutSubmit,
    handleSubmit,
  }
}

export default useForm
