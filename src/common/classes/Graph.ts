import merge from 'lodash.merge'
import { Length, SafeSubtract } from '../types/arithmetic'

/**
 * Recursion utility for building tuples
 *
 * @typedef {_TupleOf}
 * @template T
 * @template {number} N
 * @template {unknown[]} R
 */
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>
/**
 * Utility for building tuples of length `N` containing data of type `T`
 *
 * @typedef {Tuple}
 * @template T
 * @template {number} N
 */
export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never

/**
 * Recursion utility for building graph types
 *
 * @typedef {_GraphDataOf}
 * @template T
 * @template {number} N
 * @template {unknown[]} R
 */
type _GraphDataOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? T
  : _GraphDataOf<Record<number, T>, N, [T, ...R]>
/**
 * The type of the data stored internally inside a Graph, with a depth of `N` and data of type `T`
 *
 * @typedef {GraphData}
 * @template T
 * @template {number} [N=0]
 */
export type GraphData<T, N extends number = 0> = number extends N ? T : _GraphDataOf<T, N, []>

/**
 * The type of coordinates received by Graph functions
 *
 * @typedef {Coordinates}
 */
export type Coordinates = Tuple<number, number>
/**
 * The type of the data found at a certain depth within GraphData, determined by
 * the GraphData's max depth and the length of the coordinates accessing it
 *
 * @typedef {GraphDataAtCoordinates}
 * @template T
 * @template {number} TMaxDepth
 * @template {Coordinates} TCoordinate
 */
export type GraphDataAtCoordinates<T, TMaxDepth extends number, TCoordinates extends Coordinates> =
  Length<TCoordinates> extends TMaxDepth
    ? T
    : GraphData<T, SafeSubtract<TMaxDepth, Length<TCoordinates>>>

/**
 * A function which returns graph data at certain coordinates
 *
 * @typedef {GetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type GetAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Tuple<number, number> = Tuple<number, 0>,
>(
  ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>

/**
 * A function which sets graph data at certain coordinates
 *
 * @typedef {SetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type SetAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Coordinates = Tuple<number, 0>,
>(
  value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
) => void

/**
 * A function which transforms graph data at certain coordinates
 *
 * @typedef {SetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Coordinates = Tuple<number, 0>,
>(
  updater: (
    currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
) => void

/**
 * The interface for a Graph data type, where the graph has TDimensions dimensions
 *
 * @export
 * @interface IGraph
 * @typedef {IGraph}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export interface IGraph<TData, TDimensions extends number = 0> {
  /**
   * Accesses graph data at certain coordinates
   *
   * @type {GetAtCoordinates<TData, TDimensions>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions>

  /**
   * Sets the graph at certain coordinates
   *
   * @type {SetAtCoordinates<TData, TDimensions>}
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions>
  /**
   * Transforms the graph at certain coordinates
   *
   * @type {UpdateAtCoordinates<TData, TDimensions>}
   */
  updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>
}

/**
 * A simple Graph data structure
 *
 * @export
 * @class Graph
 * @typedef {Graph}
 * @template TData
 * @template {number} [TDimensions=0]
 * @implements {IGraph<TData, TDimensions>}
 */
export class Graph<TData, TDimensions extends number = 0> implements IGraph<TData, TDimensions> {
  /**
   * The internal data of the Graph
   *
   * @private
   * @type {GraphData<TData, TDimensions>}
   */
  private data: GraphData<TData, TDimensions>

  /**
   * Accesses graph data at particular `Coordinates`
   * `Coordinates` of length `TDimensions` return `TData`,
   * `Coordinates` with length shorter than `TDimensions` return a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinates
   * @returns {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = Tuple<number, 0>,
  >(
    ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
  ): GraphDataAtCoordinates<TData, TDimensions, TCoordinates> => {
    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      return this.data
    }

    // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
    return coordinates.reduce((graph, coordinate) => graph?.[coordinate], this.data)
  }

  /**
   * Sets graph data at particular `Coordinates`.
   * `Coordinates` of length `TDimensions` set a point to a `TData`,
   * `Coordinates` with length shorter than `TDimensions` set a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinates
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = Tuple<number, 0>,
  >(
    value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
    ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
  ): void => {
    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      this.data = value
    }

    // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
    const newValue: GraphData<TData, TDimensions> = coordinates.reduceRight(
      // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
      (acc, coordinate) => ({ [coordinate]: acc }),
      value,
    )

    this.data = merge(this.data, newValue)
  }

  /**
   * Transforms graph data at particular `Coordinates`.
   * `Coordinates` of length `TDimensions` transforms a `TData`,
   * `Coordinates` with length shorter than `TDimensions` transforms a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinates
   */
  updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = Tuple<number, 0>,
  >(
    updater: (
      currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
    ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
    ...coordinates: TDimensions extends 0 ? [unknown?] : [TCoordinates?]
  ): void => {
    const value = updater(this.getAtCoordinates(...coordinates))

    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      this.data = value
    }

    // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
    const newValue: GraphData<TData, TDimensions> = coordinates.reduceRight(
      // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
      (acc, coordinate) => ({ [coordinate]: acc }),
      value,
    )

    this.data = merge(this.data, newValue)
  }
}
