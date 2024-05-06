import { useCallback, useState } from 'react'
import {
  Coordinates,
  GetAtCoordinates,
  Graph,
  GraphDataAtCoordinates,
  SetAtCoordinates,
  Tuple,
  UpdateAtCoordinates,
} from './Graph'

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
  get: GetAtCoordinates<TData, TDimensions>
  /**
   * Sets the state of the graph at certain coordinates
   *
   * @type {SetAtCoordinates<TData, TDimensions>}
   */
  set: SetAtCoordinates<TData, TDimensions>
  /**
   * Transforms the state of the graph at certain coordinates
   *
   * @type {UpdateAtCoordinates<TData, TDimensions>}
   */
  update: UpdateAtCoordinates<TData, TDimensions>
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
export type UseGraph = <TData, TDimensions extends number = 0>() => UseGraphReturn<
  TData,
  TDimensions
>

/**
 * A hook for managing state with any number of dimensions
 *
 * @template TData
 * @template {number} [TDimensions=0]
 * @returns {[any, { get: any; set: SetAtCoordinates<TData, TDimensions>; update: UpdateAtCoordinates<TData, TDimensions>; }]}
 */
const useGraph: UseGraph = <TData, TDimensions extends number = 0>() => {
  const [data, setData] = useState<Graph<TData, TDimensions>>(new Graph<TData, TDimensions>())

  const setAtCoordinates: SetAtCoordinates<TData, TDimensions> = useCallback(
    <TCoordinates extends Coordinates = Tuple<number, 0>>(
      value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
    ): void =>
      setData(oldData => {
        const newGraph = new Graph<TData, TDimensions>(oldData)
        newGraph.setAtCoordinates<TCoordinates>(value, ...coordinates)
        return newGraph
      }),
    [],
  )

  const updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions> = useCallback(
    <TCoordinates extends Coordinates = Tuple<number, 0>>(
      updater: (
        currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
    ): void =>
      setData(oldData => {
        const newGraph = new Graph<TData, TDimensions>(oldData)
        newGraph.updateAtCoordinates<TCoordinates>(updater, ...coordinates)
        return newGraph
      }),
    [],
  )

  return [
    data.getAtCoordinates<[]>(),
    { get: data.getAtCoordinates, set: setAtCoordinates, update: updateAtCoordinates },
  ] satisfies UseGraphReturn<TData, TDimensions>
}

export default useGraph
