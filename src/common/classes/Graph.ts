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
type Tuple<T, N extends number> = N extends N
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
type GraphData<T, N extends number = 0> = number extends N ? T : _GraphDataOf<T, N, []>

/**
 * The type of coordinates received by Graph functions
 *
 * @typedef {Coordinates}
 */
type Coordinates = Tuple<number, number>
/**
 * The type of the data found at a certain depth within GraphData, determined by
 * the GraphData's max depth and the length of the coordinates accessing it
 *
 * @typedef {GraphDataAtCoordinate}
 * @template T
 * @template {number} TMaxDepth
 * @template {Coordinates} TCoordinate
 */
type GraphDataAtCoordinate<T, TMaxDepth extends number, TCoordinates extends Coordinates> =
  Length<TCoordinates> extends TMaxDepth
    ? T
    : GraphData<T, SafeSubtract<TMaxDepth, Length<TCoordinates>>>

/**
 * Accesses graph data at particular `Coordinates`
 * `Coordinates` of length `TDimensions` return `TData`,
 * `Coordinates` with length shorter than `TDimensions` return a `GraphData` of depth `TDimensions` - length of `Coordinates`
 *
 * @typedef {GetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
type GetAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinate extends Tuple<number, number> = Tuple<number, 0>,
>(
  ...coordinates: TDimensions extends 0 ? [unknown?] : TCoordinate
) => GraphDataAtCoordinate<TData, TDimensions, TCoordinate>

/**
 * A function which sets graph data at certain coordinates
 *
 * @typedef {SetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
type SetAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinate extends Coordinates = Tuple<number, 0>,
>(
  value: GraphDataAtCoordinate<TData, TDimensions, TCoordinate>,
  ...coordinates: TDimensions extends 0 ? [unknown?] : TCoordinate
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
   * The graph's accessor function
   *
   * @type {GetAtCoordinates<TData, TDimensions>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions>

  /**
   * The graph's setter function
   *
   * @type {SetAtCoordinates<TData, TDimensions>
}}
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions>
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
   * @template {Coordinates} [TCoordinate=Tuple<number, 0>]
   * @param {...TDimensions extends 0 ? [unknown?] : TCoordinate} coordinates
   * @returns {GraphDataAtCoordinate<TData, TDimensions, TCoordinate>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions> = <
    TCoordinate extends Coordinates = Tuple<number, 0>,
  >(
    ...coordinates: TDimensions extends 0 ? [unknown?] : TCoordinate
  ): GraphDataAtCoordinate<TData, TDimensions, TCoordinate> => {
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
   * @template {Coordinates} [TCoordinate=Tuple<number, 0>]
   * @param {GraphDataAtCoordinate<TData, TDimensions, TCoordinate>} value
   * @param {...TDimensions extends 0 ? [unknown?] : TCoordinate} coordinates
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions> = <
    TCoordinate extends Coordinates = Tuple<number, 0>,
  >(
    value: GraphDataAtCoordinate<TData, TDimensions, TCoordinate>,
    ...coordinates: TDimensions extends 0 ? [unknown?] : TCoordinate
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
}
