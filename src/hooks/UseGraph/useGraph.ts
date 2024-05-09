import { useCallback, useState } from 'react'
import {
  Coordinates,
  CoordinatesOfLength,
  CoordinatesOrNever,
  ForEachVertex,
  GetAtCoordinates,
  Graph,
  GraphData,
  GraphDataAtCoordinates,
  MapAllVertices,
  MapAtCoordinates,
  SetAllVertices,
  SomeVertex,
} from './Graph'

/**
 * The type of the `updateAtCoordinates` function for `useGraph`
 *
 * @export
 * @typedef {UpdateAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Coordinates = CoordinatesOfLength<0>,
>(
  updater: (
    currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => void

/**
 * The type of the `setAtCoordinates` function for `useGraph`
 *
 * @export
 * @typedef {SetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type SetAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Coordinates = CoordinatesOfLength<0>,
>(
  value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => void

/**
 * The type of the `updateAllVertices` function for `useGraph`
 *
 * @export
 * @typedef {UpdateAllVertices}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateAllVertices<TData, TDimensions extends number = 0> = (
  updater: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
  ) => TData,
) => void

/**
 * Functions returned by the `useGraph` hook for interacting with its state
 *
 * @interface UseGraphReturnFunctions
 * @typedef {UseGraphReturnFunctions}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export interface UseGraphReturnFunctions<TData, TDimensions extends number = 0> {
  /**
   * Gets the current state of the graph at certain coordinates
   *
   * @type {GetAtCoordinates<TData, TDimensions>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions>

  /**
   * Executes a callback on all vertices of the graph
   *
   * @type {ForEachVertex<TData, TDimensions>}
   */
  forEachVertex: ForEachVertex<TData, TDimensions>

  /**
   * Returns a TData transformed into a TResult
   *
   * @type {MapAtCoordinates<TData, TDimensions>}
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions>

  /**
   * Creates a new graph with TData transformed to TResult
   *
   * @type {MapAllVertices<TData, TDimensions>}
   */
  mapAllVertices: MapAllVertices<TData, TDimensions>

  /**
   * Transforms the state of the graph at certain coordinates
   *
   * @type {MapAtCoordinates<TData, TDimensions>}
   */
  updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>

  /**
   * Sets the state of the graph at certain coordinates
   *
   * @type {SetAtCoordinates<TData, TDimensions>}
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions>

  /**
   * Transforms all vertices of the graph
   *
   * @type {UpdateAllVertices<TData, TDimensions>}
   */
  updateAllVertices: UpdateAllVertices<TData, TDimensions>

  /**
   * Sets all vertices of the graph to a new value
   *
   * @type {SetAllVertices<TData>}
   */
  setAllVertices: SetAllVertices<TData>

  /**
   * Returns `true` if any vertex returns `true` for the `callback`
   *
   * @type {SomeVertex<TData, TDimensions>}
   */
  someVertex: SomeVertex<TData, TDimensions>
}

/**
 * The type of the arguments to `useGraph`
 *
 * @export
 * @typedef {UseGraphOptions}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UseGraphOptions<TData, TDimensions extends number = 0> = {
  dimensions?: TDimensions
  initial?: Graph<TData, TDimensions>
}

/**
 * The return type for the `useGraph` hook
 *
 * @typedef {UseGraphReturn}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UseGraphReturn<TData, TDimensions extends number = 0> = [
  data: GraphData<TData, TDimensions>,
  UseGraphReturnFunctions<TData, TDimensions>,
]

/**
 * The type of the `useGraph` hook
 *
 * @typedef {UseGraph}
 */
export type UseGraph = <TData, TDimensions extends number = 0>(
  options?: UseGraphOptions<TData, TDimensions>,
) => UseGraphReturn<TData, TDimensions>

/**
 * A hook for managing state with any number of dimensions
 *
 * @template TData
 * @template {number} [TDimensions=0]
 * @param {UseGraphOptions<TData, TDimensions>} [param0={ dimensions: 0 }]
 * @param {TDimensions} param0.dimensions
 * @param {Graph<TData, TDimensions>} param0.initial
 * @returns {UseGraphReturn<TData, TDimensions>}
 */
const useGraph: UseGraph = <TData, TDimensions extends number = 0>(
  {
    dimensions,
    initial,
    // @ts-expect-error TDimensions defaults to 0 if dimensions is not defined, so this is okay
  }: UseGraphOptions<TData, TDimensions> = { dimensions: 0 },
): UseGraphReturn<TData, TDimensions> => {
  const [data, setData] = useState<Graph<TData, TDimensions>>(
    initial ?? new Graph<TData, TDimensions>(dimensions),
  )

  const updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions> = useCallback(
    <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
      updater: (
        currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ): void =>
      setData(oldData => {
        const newGraph = new Graph<TData, TDimensions>(oldData)
        newGraph.updateAtCoordinates<TCoordinates>(updater, coordinates)
        return newGraph
      }),
    [],
  )

  const setAtCoordinates: SetAtCoordinates<TData, TDimensions> = useCallback(
    <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
      value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ): void => updateAtCoordinates(() => value, coordinates),
    [updateAtCoordinates],
  )

  const updateAllVertices: UpdateAllVertices<TData, TDimensions> = useCallback(
    (
      updater: (
        currentValue: TData,
        coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
      ) => TData,
    ) =>
      setData(oldData => {
        const newGraph = new Graph<TData, TDimensions>(oldData)
        newGraph.updateAllVertices(updater)
        return newGraph
      }),
    [],
  )

  const setAllVertices: SetAllVertices<TData> = useCallback(
    (value: TData) => updateAllVertices(() => value),
    [updateAllVertices],
  )

  return [
    data.get(),
    {
      getAtCoordinates: data.getAtCoordinates,
      forEachVertex: data.forEachVertex,
      mapAtCoordinates: data.mapAtCoordinates,
      mapAllVertices: data.mapAllVertices,
      someVertex: data.someVertex,
      setAtCoordinates,
      updateAtCoordinates,
      updateAllVertices,
      setAllVertices,
    },
  ]
}

export default useGraph
