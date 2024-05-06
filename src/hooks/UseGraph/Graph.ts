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
  : _GraphDataOf<{ [key: number]: T }, N, [T, ...R]>
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
 * Coordinates if TDimensions > 0 otherwise never
 *
 * @export
 * @typedef {CoordinatesOrNever}
 * @template {number} [TDimensions=0]
 * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
 */
export type CoordinatesOrNever<
  TDimensions extends number = 0,
  TCoordinates extends Coordinates = Tuple<number, 0>,
> = TDimensions extends 0 ? never : TCoordinates

/**
 * The type of the data found at a certain depth within GraphData, determined by
 * the GraphData's max depth and the length of the coordinates accessing it
 *
 * @typedef {GraphDataAtCoordinates}
 * @template T
 * @template {number} TMaxDepth
 * @template {Coordinates} TCoordinate
 */
export type GraphDataAtCoordinates<
  T,
  TMaxDepth extends number,
  TCoordinates extends Coordinates,
> = GraphData<T, SafeSubtract<TMaxDepth, Length<TCoordinates>>>

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
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>

/**
 * A function which executes a function on all edges of the graph
 *
 * @export
 * @typedef {ForEachEdge}
 * @template TData
 */
export type ForEachEdge<TData, TDimensions extends number = 0> = (
  callback: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
  ) => void,
) => void

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
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>

/**
 * A function which transforms graph data at certain coordinates
 *
 * @typedef {UpdateAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type MapAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Coordinates = Tuple<number, 0>,
>(
  updater: (
    currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>

/**
 * A function which returns transformed data at certain coordinates
 *
 * @typedef {MapAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type MapAtCoordinates<TData, TDimensions extends number = 0> = <
  TResult = TData,
  TCoordinates extends Coordinates = Tuple<number, 0>,
>(
  updater: (
    currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>

/**
 * A function which transforms all edges of the graph
 *
 * @export
 * @typedef {UpdateAllEdges}
 * @template TData
 */
export type UpdateAllEdges<TData, TDimensions extends number = 0> = (
  updater: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
  ) => TData,
) => GraphData<TData, TDimensions>

/**
 * Sets all edges of the graph to the same value
 *
 * @export
 * @typedef {SetAllEdges}
 * @template TData
 */
export type SetAllEdges<TData> = (value: TData) => void

/**
 * A function which transforms all edges of the graph into a potentially new shape
 *
 * @export
 * @typedef {MapAllEdges}
 * @template TData
 */
export type MapAllEdges<TData, TDimensions extends number = 0> = <TResult>(
  transformer: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
  ) => TResult,
) => IGraph<TResult, TDimensions>

/**
 * A function which transforms all edges of the graph into a potentially new shape
 *
 * @export
 * @typedef {SomeEdge}
 * @template TData
 */
export type SomeEdge<TData, TDimensions extends number = 0> = (
  callback: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
  ) => boolean,
) => boolean

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
   * @type {() => TDimensions}
   */
  getDimensions: () => TDimensions

  /**
   * Accesses graph data at certain coordinates
   *
   * @type {GetAtCoordinates<TData, TDimensions>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions>

  /**
   * Executes logic for each edge of the graph
   *
   * @type {ForEachEdge<TData, TDimensions>}
   */
  forEachEdge: ForEachEdge<TData, TDimensions>

  /**
   * Transforms the graph at certain coordinates
   *
   * @type {UpdateAtCoordinates<TData, TDimensions>}
   */
  updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>
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
   * @type {MapAtCoordinates<TData, TDimensions>}
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions>

  /**
   * Transforms all edges in the graph
   *
   * @type {UpdateAllEdges<TData, TDimensions>}
   */
  updateAllEdges: UpdateAllEdges<TData, TDimensions>

  /**
   * Sets all edges in the graph to a new value
   *
   * @type {SetAllEdges<TData>}
   */
  setAllEdges: SetAllEdges<TData>

  /**
   * Returns a graph where all `TData` edges have been transformed to `TResult`s
   *
   * @type {MapAllEdges<TData, TDimensions>}
   */
  mapAllEdges: MapAllEdges<TData, TDimensions>

  /**
   * Returns `true` if calling the `callback` on any edge returns `true`
   *
   * @type {SomeEdge<TData, TDimensions>}
   */
  someEdge: SomeEdge<TData, TDimensions>
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
  getDimensions = (): TDimensions => this.dimensions

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
    coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
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
   * Recursively executes a function on all edges of the graph
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {(currentValue: TData, coordinates: Tuple<number, TDimensions>) => TData} updater
   * @param {TCoordinates} previousCoordinates
   * @returns {TData, previousCoordinates: TCoordinates) => void}
   */
  private _forEachEdge = <TCoordinates extends Coordinates = Tuple<number, 0>>(
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => void,
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
          const coordinates = [...previousCoordinates, coordinate]

          // @ts-expect-error these are the same TDatas
          callback(this.getAtCoordinates<Tuple<number, TDimensions>>(coordinates), coordinates)
        })
      } else {
        coordinatesInGraph.forEach(coordinate =>
          this._forEachEdge(callback, [...previousCoordinates, coordinate]),
        )
      }
    }
  }

  /**
   * Executes a callback for each edge in the graph
   *
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
   *     ) => void} callback
   */
  forEachEdge: ForEachEdge<TData, TDimensions> = (
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => void,
  ): void => this._forEachEdge(callback, [])

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
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
    coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
  ): GraphDataAtCoordinates<TData, TDimensions, TCoordinates> => {
    const value = updater(this.getAtCoordinates(coordinates), coordinates)

    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      this.data = value
      // @ts-expect-error TData is valid as an GraphData with a TDimensions of 0
      return this.data
    } else {
      // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
      const newValue: GraphData<TData, TDimensions> = coordinates.reduceRight(
        // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
        (acc, coordinate) => ({ [coordinate]: acc }),
        value,
      )

      this.data = merge(this.data, newValue)

      return this.getAtCoordinates(coordinates)
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
    coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
  ) => this.updateAtCoordinates(() => value, coordinates)

  /**
   * Returns the `TData` at the coordinates mapped to a `TResult`
   *
   * @template TResult
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {(
   *       currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
   *       coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
   *     ) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>} transformer
   * @param {?CoordinatesOrNever<TDimensions, TCoordinates>} [coordinates]
   * @returns {GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>}
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions> = <
    TResult,
    TCoordinates extends Coordinates = Tuple<number, 0>,
  >(
    transformer: (
      currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
    coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
  ): GraphDataAtCoordinates<TResult, TDimensions, TCoordinates> =>
    transformer(this.getAtCoordinates(coordinates), coordinates)

  /**
   * Recursively maps over all edges of the graph and transforms them
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
   *     ) => TData} updater
   * @param {TCoordinates} previousCoordinates
   * @returns {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>}
   */
  private _updateAllEdges = <TCoordinates extends Coordinates = Tuple<number, 0>>(
    updater: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => TData,
    previousCoordinates: TCoordinates,
  ): GraphDataAtCoordinates<TData, TDimensions, TCoordinates> => {
    // special case for a 0 dimension graph or no coordinates
    if (this.dimensions === 0) {
      // @ts-expect-error TData is valid when `TDimensions` is 0
      const newData: GraphDataAtCoordinates<TData, TDimensions, TCoordinates> = updater(this.data)
      // @ts-expect-error GraphDataAtCoordinates<TData, TDimensions, TCoordinates> is TData when `TDimensions` is 0
      this.data = newData
      return newData
    } else {
      const depth = previousCoordinates.length + 1

      // @ts-expect-error TDimensions is guaranteed to be greater than 0 due to the previous check
      const graphAtCoordinates = this.getAtCoordinates<TCoordinates>(previousCoordinates)

      // @ts-expect-error this is prevented from running on TData via logical checks
      const coordinatesInGraph = Object.keys(graphAtCoordinates).map(str => parseInt(str))

      if (depth === this.dimensions) {
        return coordinatesInGraph.reduce(
          (acc, coordinate) => ({
            ...acc,
            // @ts-expect-error TData is valid as a GraphData with a TDimensions of 0
            [coordinate]: this.updateAtCoordinates<Tuple<number, TDimensions>>(updater, [
              ...previousCoordinates,
              coordinate,
            ]),
          }),
          {} as GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
        )
      } else {
        return coordinatesInGraph.reduce(
          (acc, coordinate) => ({
            ...acc,
            [coordinate]: this._updateAllEdges(updater, [...previousCoordinates, coordinate]),
          }),
          {} as GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
        )
      }
    }
  }

  /**
   * Transforms all edges of the graph with an updater function
   *
   * @param {(currentValue: TData, coordinates: Tuple<number, TDimensions>) => TData} updater
   */
  updateAllEdges: UpdateAllEdges<TData, TDimensions> = (
    updater: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => TData,
  ): GraphData<TData, TDimensions> => {
    this._updateAllEdges(updater, [])
    return this.data
  }

  /**
   * Sets all edges of the graph to have a value of `value`
   *
   * @param {TData} value
   */
  setAllEdges: SetAllEdges<TData> = (value: TData): void => {
    this._updateAllEdges(() => value, [])
  }

  /**
   * Recursively maps over all edges of the graph and returns a graph of transformed edges
   *
   * @template TResult
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
   *     ) => TResult} transformer
   * @param {TCoordinates} previousCoordinates
   * @returns {GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>}
   */
  private _mapAllEdges = <TResult, TCoordinates extends Coordinates = Tuple<number, 0>>(
    transformer: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => TResult,
    previousCoordinates: TCoordinates,
  ): GraphDataAtCoordinates<TResult, TDimensions, TCoordinates> => {
    // special case for a 0 dimension graph or no coordinates
    if (this.dimensions === 0) {
      // @ts-expect-error TResult is valid when `TDimensions` is 0
      const newData: GraphDataAtCoordinates<TResult, TDimensions, TCoordinates> = transformer(
        // @ts-expect-error Data is valid when `TDimensions` is 0
        this.data,
      )
      return newData
    } else {
      const depth = previousCoordinates.length + 1

      // @ts-expect-error TDimensions is guaranteed to be greater than 0 due to the previous check
      const graphAtCoordinates = this.getAtCoordinates<TCoordinates>(previousCoordinates)

      // @ts-expect-error this is prevented from running on TData via logical checks
      const coordinatesInGraph = Object.keys(graphAtCoordinates).map(str => parseInt(str))

      if (depth === this.dimensions) {
        return coordinatesInGraph.reduce(
          (acc, coordinate) => ({
            ...acc,
            // @ts-expect-error TData is valid as a GraphData with a TDimensions of 0
            [coordinate]: this.mapAtCoordinates<TResult, Tuple<number, TDimensions>>(transformer, [
              ...previousCoordinates,
              coordinate,
            ]),
          }),
          {} as GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
        )
      } else {
        return coordinatesInGraph.reduce(
          (acc, coordinate) => ({
            ...acc,
            [coordinate]: this._mapAllEdges(transformer, [...previousCoordinates, coordinate]),
          }),
          {} as GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
        )
      }
    }
  }

  /**
   * Returns a `Graph` of `TResult`s, mapped from the edges of the `TData` `Graph`
   *
   * @template TResult
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
   *     ) => TResult} transformer
   * @returns {GraphData<TResult, TDimensions>}
   */
  mapAllEdges: MapAllEdges<TData, TDimensions> = <TResult>(
    transformer: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => TResult,
    // @ts-expect-error TResult is valid for a graph with TDimensions=0
  ): IGraph<TResult, TDimensions> => new Graph(this.dimensions, this._mapAllEdges(transformer, []))

  /**
   * Recursively maps over all edges and returns true if the `callback` returns true for any edge
   *
   * @template {Coordinates} [TCoordinates=Tuple<number, 0>]
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
   *     ) => boolean} callback
   * @param {TCoordinates} previousCoordinates
   * @returns {boolean}
   */
  private _someEdge = <TCoordinates extends Coordinates = Tuple<number, 0>>(
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => boolean,
    previousCoordinates: TCoordinates,
  ): boolean => {
    // special case for a 0 dimension graph or no coordinates
    if (this.dimensions === 0) {
      return callback(
        // @ts-expect-error Data is valid when `TDimensions` is 0
        this.data,
      )
    } else {
      const depth = previousCoordinates.length + 1

      // @ts-expect-error TDimensions is guaranteed to be greater than 0 due to the previous check
      const graphAtCoordinates = this.getAtCoordinates<TCoordinates>(previousCoordinates)

      // @ts-expect-error this is prevented from running on TData via logical checks
      const coordinatesInGraph = Object.keys(graphAtCoordinates).map(str => parseInt(str))

      if (depth === this.dimensions) {
        return coordinatesInGraph.some(coordinate =>
          callback(
            // @ts-expect-error this will always return TData because it is at the maximum depth of coordinates
            this.getAtCoordinates<TData, Tuple<number, TDimensions>>([
              ...previousCoordinates,
              coordinate,
            ]),
          ),
        )
      } else {
        return coordinatesInGraph.some(coordinate =>
          this._someEdge(callback, [...previousCoordinates, coordinate]),
        )
      }
    }
  }

  /**
   * Returns true if any edge returns true for the provided `callback`
   *
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
   *     ) => boolean} callback
   * @returns {boolean}
   */
  someEdge: SomeEdge<TData, TDimensions> = (
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>,
    ) => boolean,
  ): boolean => this._someEdge(callback, [])
}
