import { useCallback, useState } from 'react'
import {
  Coordinates,
  CoordinatesOfLength,
  CoordinatesOrNever,
  ForEachVertex,
  GetAtCoordinates,
  GetVertex,
  Graph,
  GraphData,
  GraphDataAtCoordinates,
  Map,
  MapAllVertices,
  MapAtCoordinates,
  MapVertex,
  SetAllVertices,
  SomeVertex,
} from './Graph'

/**
 * The type of the `set` function for `useGraph`
 *
 * @export
 * @typedef {Set}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Set<TData, TDimensions extends number = 0> = (
  value: GraphData<TData, TDimensions> | null,
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
 * The type of the `setVertex` function for `useGraph`
 *
 * @export
 * @typedef {SetVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type SetVertex<TData, TDimensions extends number = 0> = (
  value: TData | null,
  coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
) => void

/**
 * The type of the `update` function for `useGraph`
 *
 * @export
 * @typedef {Update}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Update<TData, TDimensions extends number = 0> = (
  updater: (
    currentValue: GraphData<TData, TDimensions> | null,
  ) => GraphData<TData, TDimensions> | null,
) => void

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
 * The type of the `updateVertex` function for `useGraph`
 *
 * @export
 * @typedef {UpdateVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateVertex<TData, TDimensions extends number = 0> = (
  updater: (currentValue: TData | null) => TData | null,
  coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
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
  ) => TData | null,
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
  getVertex: GetVertex<TData, TDimensions>

  set: Set<TData, TDimensions>
  /**
   * Sets the state of the graph at certain coordinates
   *
   * @type {SetAtCoordinates<TData, TDimensions>}
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions>
  setVertex: SetVertex<TData, TDimensions>

  update: Update<TData, TDimensions>
  /**
   * Transforms the state of the graph at certain coordinates
   *
   * @type {MapAtCoordinates<TData, TDimensions>}
   */
  updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>
  updateVertex: UpdateVertex<TData, TDimensions>

  map: Map<TData, TDimensions>
  /**
   * Returns a TData transformed into a TResult
   *
   * @type {MapAtCoordinates<TData, TDimensions>}
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions>
  mapVertex: MapVertex<TData, TDimensions>

  /**
   * Executes a callback on all vertices of the graph
   *
   * @type {ForEachVertex<TData, TDimensions>}
   */
  forEachVertex: ForEachVertex<TData, TDimensions>
  /**
   * Returns `true` if any vertex returns `true` for the `callback`
   *
   * @type {SomeVertex<TData, TDimensions>}
   */
  someVertex: SomeVertex<TData, TDimensions>
  /**
   * Sets all vertices of the graph to a new value
   *
   * @type {SetAllVertices<TData>}
   */
  setAllVertices: SetAllVertices<TData>
  /**
   * Transforms all vertices of the graph
   *
   * @type {UpdateAllVertices<TData, TDimensions>}
   */
  updateAllVertices: UpdateAllVertices<TData, TDimensions>
  /**
   * Creates a new graph with TData transformed to TResult
   *
   * @type {MapAllVertices<TData, TDimensions>}
   */
  mapAllVertices: MapAllVertices<TData, TDimensions>
}

/**
 * The type of the arguments to `useGraph`
 *
 * @export
 * @typedef {UseGraphOptions}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export interface UseGraphOptions<TData, TDimensions extends number = 0> {
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
  data: GraphData<TData, TDimensions> | null,
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

  const update: Update<TData, TDimensions> = useCallback(
    (
      updater: (
        currentValue: GraphData<TData, TDimensions> | null,
      ) => GraphData<TData, TDimensions> | null,
    ): void =>
      setData(oldData => {
        const newGraph = new Graph<TData, TDimensions>(oldData)
        newGraph.update(updater)
        return newGraph
      }),
    [],
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
  const updateVertex: UpdateVertex<TData, TDimensions> = useCallback(
    (
      updater: (currentValue: TData | null) => TData | null,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ): void =>
      setData(oldData => {
        const newGraph = new Graph<TData, TDimensions>(oldData)
        newGraph.updateVertex(updater, coordinates)
        return newGraph
      }),
    [],
  )

  const set: Set<TData, TDimensions> = useCallback(
    (value: GraphData<TData, TDimensions> | null): void => update(() => value),
    [update],
  )
  const setAtCoordinates: SetAtCoordinates<TData, TDimensions> = useCallback(
    <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
      value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ): void => updateAtCoordinates(() => value, coordinates),
    [updateAtCoordinates],
  )
  const setVertex: SetVertex<TData, TDimensions> = useCallback(
    (
      value: TData | null,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ): void => updateVertex(() => value, coordinates),
    [updateVertex],
  )

  const updateAllVertices: UpdateAllVertices<TData, TDimensions> = useCallback(
    (
      updater: (
        currentValue: TData,
        coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
      ) => TData | null,
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
      getVertex: data.getVertex,
      set,
      setAtCoordinates,
      setVertex,
      update,
      updateAtCoordinates,
      updateVertex,
      map: data.map,
      mapAtCoordinates: data.mapAtCoordinates,
      mapVertex: data.mapVertex,
      forEachVertex: data.forEachVertex,
      someVertex: data.someVertex,
      setAllVertices,
      updateAllVertices,
      mapAllVertices: data.mapAllVertices,
    },
  ]
}

export default useGraph
