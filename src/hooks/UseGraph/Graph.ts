import merge from 'lodash.merge'
import { Length, SafeSubtract } from '../../common/types/arithmetic'

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
  coordinates?: TDimensions extends 0 ? never : TCoordinates,
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
  coordinates?: TDimensions extends 0 ? never : TCoordinates,
) => void

/**
 * A function which transforms graph data at certain coordinates
 *
 * @typedef {SetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type MapAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Coordinates = Tuple<number, 0>,
>(
  updater: (
    currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  coordinates?: TDimensions extends 0 ? never : TCoordinates,
) => void

/**
 * Sets all edges of the graph to the same value
 *
 * @export
 * @typedef {SetAllEdges}
 * @template TData
 */
export type SetAllEdges<TData> = (value: TData) => void

/**
 * A function which transforms all edges of the graph
 *
 * @export
 * @typedef {MapAllEdges}
 * @template TData
 */
export type MapAllEdges<TData> = (updater: (currentValue: TData) => TData) => void

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
   * Retrieves the number of dimensions of the graph
   *
   * @type {() => number}
   */
  getDimensions: () => number

  /**
   * Accesses graph data at certain coordinates
   *
   * @type {GetAtCoordinates<TData, TDimensions>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions>

  /**
   * Transforms the graph at certain coordinates
   *
   * @type {MapAtCoordinates<TData, TDimensions>}
   */

  mapAtCoordinates: MapAtCoordinates<TData, TDimensions>
  /**
   * Sets the graph at certain coordinates
   *
   * @type {SetAtCoordinates<TData, TDimensions>}
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions>

  /**
   * Transforms all edges in the graph
   *
   * @type {MapAllEdges<TData>}
   */
  mapAllEdges: MapAllEdges<TData>

  /**
   * Sets all edges in the graph to a new value
   *
   * @type {SetAllEdges<TData>}
   */
  setAllEdges: SetAllEdges<TData>
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
   * The number of dimensions in the graph
   *
   * @private
   * @type {TDimensions}
   */
  private dimensions: TDimensions

  /**
   * Creates an instance of Graph with set dimensions
   *
   * @constructor
   */
  constructor(dimensions?: TDimensions)
  /**
   * Creates a Graph from existing graph data and dimensions
   *
   * @constructor
   * @param {GraphData<TData, TDimensions>} data
   */
  constructor(dimensions: TDimensions, data: GraphData<TData, TDimensions>)
  /**
   * Copies a Graph into a new Graph
   *
   * @constructor
   * @param {Graph<TData, TDimensions>} graph
   */
  constructor(graph: Graph<TData, TDimensions>)
  /**
   * Creates an instance of Graph
   *
   * @constructor
   * @param {?GraphData<TData, TDimensions>} [data]
   * @param {?Graph<TData, TDimensions>} [graph]
   */
  constructor(
    dimensions?: TDimensions,
    data?: GraphData<TData, TDimensions>,
    graph?: Graph<TData, TDimensions>,
  ) {
    if (data && dimensions !== undefined) {
      this.data = data
      this.dimensions = dimensions
    } else if (graph) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      this.data = graph.getAtCoordinates<[]>()
      this.dimensions = graph.getDimensions()
    } else if (dimensions !== undefined) {
      this.dimensions = dimensions
    } else {
      // @ts-expect-error TDimensions defaults to 0 if dimensions is not defined, so this is okay
      this.dimensions = 0
    }
  }

  /**
   * Returns the number of dimensions in the graph
   *
   * @returns {TDimensions}
   */
  getDimensions = () => this.dimensions

  /**
   * Accesses graph data at particular `Coordinates`
   * `Coordinates` of length `TDimensions` return `TData`,
   * `Coordinates` with length shorter than `TDimensions` return a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
   * @returns {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = Tuple<number, 0>,
  >(
    coordinates?: TDimensions extends 0 ? never : TCoordinates,
  ): GraphDataAtCoordinates<TData, TDimensions, TCoordinates> => {
    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      return this.data
    } else {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      return coordinates.reduce((graph, coordinate) => graph?.[coordinate], this.data)
    }
  }

  /**
   * Transforms graph data at particular `Coordinates`.
   * `Coordinates` of length `TDimensions` transforms a `TData`,
   * `Coordinates` with length shorter than `TDimensions` transforms a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = Tuple<number, 0>,
  >(
    updater: (
      currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      coordinates?: TDimensions extends 0 ? never : TCoordinates,
    ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
    coordinates?: TDimensions extends 0 ? never : TCoordinates,
  ): void => {
    const value = updater(this.getAtCoordinates(coordinates), coordinates)

    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      this.data = value
    } else {
      // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
      const newValue: GraphData<TData, TDimensions> = coordinates.reduceRight(
        // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
        (acc, coordinate) => ({ [coordinate]: acc }),
        value,
      )

      this.data = merge(this.data, newValue)
    }
  }

  /**
   * Sets graph data at particular `Coordinates`.
   * `Coordinates` of length `TDimensions` set a point to a `TData`,
   * `Coordinates` with length shorter than `TDimensions` set a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = Tuple<number, 0>,
  >(
    value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
    coordinates?: TDimensions extends 0 ? never : TCoordinates,
  ): void => {
    this.mapAtCoordinates(() => value, coordinates)
  }

  /**
   * Recursively maps over all edges of the graph and transforms them
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {(currentValue: TData, coordinates: Tuple<number, TDimensions>) => TData} updater
   * @param {TCoordinates} previousCoordinates
   * @returns {TData, previousCoordinates: TCoordinates) => void}
   */
  private _mapAllEdges = <TCoordinates extends Coordinates = Tuple<number, 0>>(
    updater: (currentValue: TData, coordinates: Tuple<number, TDimensions>) => TData,
    previousCoordinates: TCoordinates,
  ) => {
    // special case for a 0 dimension graph or no coordinates
    if (this.dimensions === 0) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      this.data = updater(this.data)
    } else {
      const depth = previousCoordinates.length + 1

      // @ts-expect-error TDimensions is guaranteed to be greater than 0 due to the previous check
      const graphAtCoordinates = this.getAtCoordinates<TCoordinates>(previousCoordinates)

      // @ts-expect-error this is prevented from running on TData via logical checks
      const coordinatesInGraph = Object.keys(graphAtCoordinates).map(str => parseInt(str))

      if (depth === this.dimensions) {
        coordinatesInGraph.forEach(coordinate => {
          // @ts-expect-error TData is valid as a GraphData with a TDimensions of 0
          this.mapAtCoordinates<Tuple<number, TDimensions>>(updater, [
            ...previousCoordinates,
            coordinate,
          ])
        })
      } else {
        coordinatesInGraph.forEach(coordinate =>
          this._mapAllEdges(updater, [...previousCoordinates, coordinate]),
        )
      }
    }
  }

  /**
   * Transforms all edges of the graph with an updater function
   *
   * @param {(currentValue: TData, coordinates: Tuple<number, TDimensions>) => TData} updater
   */
  mapAllEdges: MapAllEdges<TData> = (
    updater: (currentValue: TData, coordinates: Tuple<number, TDimensions>) => TData,
  ): void => {
    this._mapAllEdges(updater, [])
  }

  /**
   * Sets all edges of the graph to have a value of `value`
   *
   * @param {TData} value
   */
  setAllEdges: SetAllEdges<TData> = (value: TData): void => {
    this._mapAllEdges(() => value, [])
  }
}
