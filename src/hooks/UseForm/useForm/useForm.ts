import React, { useCallback, useMemo, useRef } from 'react'
import { CoordinatesOrNever, Graph, IGraph, Tuple } from '../../UseGraph/Graph'
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
const useForm: UseForm = <TData extends FormData, TDimensions extends number = 0>() => {
  const fieldsGraph = useRef<IGraph<Fields<TData, TDimensions>, TDimensions>>(
    new Graph<Fields<TData, TDimensions>, TDimensions>(),
  )
  const [
    errors,
    { updateAtCoordinates: mapErrorsAtCoordinates, updateAllVertices: updateAllErrors },
  ] = useGraph<Errors<TData>, TDimensions>()
  const [
    touched,
    { someVertex: touchedAtSomeVertex, updateAtCoordinates: updateTouchedAtCoordinates },
  ] = useGraph<Touched<TData>, TDimensions>()
  const [
    changed,
    {
      someVertex: changedAtSomeVertex,
      updateAtCoordinates: mapChangedAtCoordinates,
      updateAllVertices: updateAllChanged,
    },
  ] = useGraph<Changed<TData>, TDimensions>()
  const hasBegun = useMemo(
    () =>
      touched &&
      touchedAtSomeVertex(fields =>
        Object.values(fields).some(fieldHasBeenTouched => fieldHasBeenTouched),
      ),
    [touched, touchedAtSomeVertex],
  )
  const hasChangedWithoutSubmit = useMemo(
    () =>
      changed &&
      changedAtSomeVertex(fields =>
        Object.values(fields).some(fieldHasBeenChanged => fieldHasBeenChanged),
      ),
    [changed, changedAtSomeVertex],
  )

  const updateFieldsAtCoordinates = useCallback(
    (
      updater: (current: Fields<TData, TDimensions>) => Fields<TData, TDimensions>,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
      // @ts-expect-error Fields<TData, TDimensions> is the same thing as graph data at coordinates with length TDimensions
    ) => fieldsGraph.current.updateAtCoordinates<Tuple<number, TDimensions>>(updater, coordinates),
    [],
  )

  const updateFieldAtCoordinates = useCallback(
    (
      fieldName: keyof TData,
      updater: (
        current: Fields<TData, TDimensions>[keyof TData],
      ) => Fields<TData, TDimensions>[keyof TData],
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) =>
      // @ts-expect-error Fields<TData, TDimensions> is the same thing as graph data at coordinates with length TDimensions
      fieldsGraph.current.updateAtCoordinates<Tuple<number, TDimensions>>(fields => {
        const typedFields = fields as Fields<TData, TDimensions>
        return { ...typedFields, [fieldName]: updater(typedFields[fieldName]) }
      }, coordinates),
    [],
  )

  const setFieldAtCoordinates = useCallback(
    (
      fieldName: keyof TData,
      newValue: Fields<TData, TDimensions>[keyof TData],
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) =>
      fieldsGraph.current.updateAtCoordinates<Tuple<number, TDimensions>>(
        fields => ({ ...fields, [fieldName]: newValue }),
        coordinates,
      ),
    [],
  )

  const touch = useCallback(
    (
      name: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => {
      if (name in fieldsGraph.current.getAtCoordinates<Tuple<number, TDimensions>>(coordinates)) {
        updateFieldsAtCoordinates(
          fields => ({ ...fields, [name]: { ...fields[name], hasBeenTouched: true } }),
          coordinates,
        )
      }
      updateTouchedAtCoordinates<Tuple<number, TDimensions>>(
        touched => ({ ...touched, [name]: true }),
        coordinates,
      )
    },
    [updateFieldsAtCoordinates, updateTouchedAtCoordinates],
  )

  const change = useCallback(
    (
      name: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => {
      if (name in fieldsGraph.current.getAtCoordinates<Tuple<number, TDimensions>>(coordinates)) {
        updateFieldsAtCoordinates(
          fields => ({ ...fields, [name]: { ...fields[name], hasBeenChanged: true } }),
          coordinates,
        )
      }
      mapChangedAtCoordinates<Tuple<number, TDimensions>>(
        changed => ({ ...changed, [name]: true }),
        coordinates,
      )
    },
    [mapChangedAtCoordinates, updateFieldsAtCoordinates],
  )

  const resetChanged = useCallback(
    () =>
      updateAllChanged(fields =>
        Object.keys(fields).reduce((acc, fieldName) => ({ ...acc, [fieldName]: false }), {}),
      ),
    [updateAllChanged],
  )

  const updateFieldsAtCoordinateFieldError = useCallback(
    (
      name: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => {
      // @ts-expect-error This will be Fields<TData> because it always fetches at TDimensions depth
      const fieldsAtCoordinate: Fields<TData, TDimensions> =
        fieldsGraph.current.getAtCoordinates<Tuple<number, TDimensions>>(coordinates)

      if (!(name in fieldsAtCoordinate)) return null // If the field has not been registered, it cannot have an error

      const field = fieldsAtCoordinate[name]!
      const typedValue = getTypedFieldValue<TData, TDimensions>(field)
      const options = field.options

      if (options?.isRequired && isBlank(typedValue)) {
        const error = 'Field is required'
        field.error = error
        return error
      } else {
        const typedData = getTypedData<TData, TDimensions>(fieldsGraph.current)
        // @ts-expect-error this type is correct since the coordinates are TDimensions long
        const typedFields: Fields<TData, TDimensions> & Pick<TData, name> = {
          ...typedData.getAtCoordinates(coordinates),
          [name]: typedValue,
        }

        // @ts-expect-error these TDatas are the same
        const error = options?.validate?.(typedValue, typedFields, typedData) ?? null
        field.error = error

        return error
      }
    },
    [],
  )

  const updateFieldsFieldErrors = useCallback(
    (): void =>
      fieldsGraph.current.forEachVertex((fields, coordinate) =>
        Object.keys(fields).forEach(fieldName =>
          updateFieldsAtCoordinateFieldError(fieldName as keyof TData, coordinate),
        ),
      ),
    [updateFieldsAtCoordinateFieldError],
  )

  const updateErrorAtCoordinates = useCallback(
    (
      name: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => {
      const error = updateFieldsAtCoordinateFieldError(name)
      mapErrorsAtCoordinates(errors => ({ ...errors, [name]: error }), coordinates)
      return error
    },
    [mapErrorsAtCoordinates, updateFieldsAtCoordinateFieldError],
  )

  const updateErrors = useCallback(() => {
    updateFieldsFieldErrors()

    updateAllErrors((fields, coordinates) =>
      Object.keys(fields).reduce(
        (acc, fieldName) => ({
          ...acc,
          [fieldName]: fieldsGraph.current.getAtCoordinates(coordinates)[fieldName],
        }),
        {} as Errors<TData>,
      ),
    )
  }, [updateAllErrors, updateFieldsFieldErrors])

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
      if (name in fieldsGraph.current) {
        updateFieldAtCoordinates(name, field => ({ ...field, options }), options.coordinates)
      } else {
        setFieldAtCoordinates(
          name,
          // @ts-expect-error options are valid because the validate type depends upon is required
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
          // @ts-expect-error this type is correct since the coordinates are TDimensions long
          const fieldsAtCoordinate: Fields<TData, TDimensions> =
            fieldsGraph.current.getAtCoordinates<Tuple<number, TDimensions>>(options.coordinates)

          // update internal value upon first setting the ref
          if (fieldsAtCoordinate[name]!.value === undefined) {
            const defaultValue = getElementDefaultValue<TData>(element)
            updateFieldAtCoordinates(
              name,
              field => ({ ...field, value: defaultValue }),
              options.coordinates,
            )
          }

          updateFieldAtCoordinates(
            name,
            field => ({ ...field, ref: { ...field?.ref, current: element } }),
            options.coordinates,
          )
        },
        onChange: event => {
          // @ts-expect-error this type is correct since the coordinates are TDimensions long
          const fieldsAtCoordinate: Fields<TData, TDimensions> =
            fieldsGraph.current.getAtCoordinates<Tuple<number, TDimensions>>(options.coordinates)

          if (name in fieldsAtCoordinate) {
            if (!fieldsAtCoordinate[name]!.hasBeenChanged) {
              change(name, options.coordinates)
            }

            const newValue = getOnChangeValue<TData>(event)
            updateFieldAtCoordinates(
              name,
              field => ({ ...field, value: newValue }),
              options?.coordinates,
            )
          }
        },
        onFocus: () => {
          // @ts-expect-error this type is correct since the coordinates are TDimensions long
          const fieldsAtCoordinate: Fields<TData, TDimensions> =
            fieldsGraph.current.getAtCoordinates<Tuple<number, TDimensions>>(options?.coordinates)

          if (name in fieldsAtCoordinate) {
            if (!fieldsAtCoordinate[name]!.hasBeenTouched) {
              touch(name, options?.coordinates)
            }
          }
        },
        onBlur: () => {
          updateErrorAtCoordinates(name)
        },
      }
    },
    [change, setFieldAtCoordinates, touch, updateErrorAtCoordinates, updateFieldAtCoordinates],
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
