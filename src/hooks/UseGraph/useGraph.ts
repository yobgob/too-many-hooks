import { useCallback, useState } from 'react'
import {
  Coordinates,
  CoordinatesOrNever,
  ForEachEdge,
  GetAtCoordinates,
  Graph,
  GraphDataAtCoordinates,
  MapAllEdges,
  MapAtCoordinates,
  SetAllEdges,
  Tuple,
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
  TCoordinates extends Coordinates = Tuple<number, 0>,
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
  TCoordinates extends Coordinates = Tuple<number, 0>,
>(
  value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => void

/**
 * The type of the `updateAllEdges` function for `useGraph`
 *
 * @export
 * @typedef {UpdateAllEdges}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateAllEdges<TData, TDimensions extends number = 0> = (
  updater: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
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
   * Executes a callback on all edges of the graph
   *
   * @type {ForEachEdge<TData, TDimensions>}
   */
  forEachEdge: ForEachEdge<TData, TDimensions>

  /**
   * Returns a TData transformed into a TResult
   *
   * @type {MapAtCoordinates<TData, TDimensions>}
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions>

  /**
   * Creates a new graph with TData transformed to TResult
   *
   * @type {MapAllEdges<TData, TDimensions>}
   */
  mapAllEdges: MapAllEdges<TData, TDimensions>

  /**
   * Transforms the state of the graph at certain coordinates
   *
   * @type {UpdateAtCoordinates<TData, TDimensions>}
   */
  updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>

  /**
   * Sets the state of the graph at certain coordinates
   *
   * @type {SetAtCoordinates<TData, TDimensions>}
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions>

  /**
   * Transforms all edges of the graph
   *
   * @type {UpdateAllEdges<TData, TDimensions>}
   */
  updateAllEdges: UpdateAllEdges<TData, TDimensions>

  /**
   * Sets all edges of the graph to a new value
   *
   * @type {SetAllEdges<TData>}
   */
  setAllEdges: SetAllEdges<TData>
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
  data: GraphDataAtCoordinates<TData, TDimensions, []>,
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
    <TCoordinates extends Coordinates = Tuple<number, 0>>(
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
    <TCoordinates extends Coordinates = Tuple<number, 0>>(
      value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ): void => updateAtCoordinates(() => value, coordinates),
    [updateAtCoordinates],
  )

  const updateAllEdges: UpdateAllEdges<TData, TDimensions> = useCallback(
    (
      updater: (
        currentValue: TData,
        coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
      ) => TData,
    ) =>
      setData(oldData => {
        const newGraph = new Graph<TData, TDimensions>(oldData)
        newGraph.updateAllEdges(updater)
        return newGraph
      }),
    [],
  )

  const setAllEdges: SetAllEdges<TData> = useCallback(
    (value: TData) => updateAllEdges(() => value),
    [updateAllEdges],
  )

  return [
    data.getAtCoordinates<[]>(),
    {
      getAtCoordinates: data.getAtCoordinates,
      forEachEdge: data.forEachEdge,
      mapAtCoordinates: data.mapAtCoordinates,
      mapAllEdges: data.mapAllEdges,
      setAtCoordinates,
      updateAtCoordinates,
      updateAllEdges,
      setAllEdges,
    },
  ] satisfies UseGraphReturn<TData, TDimensions>
}

export default useGraph
