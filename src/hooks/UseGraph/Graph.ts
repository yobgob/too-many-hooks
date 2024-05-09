import merge from 'lodash.merge'
import { Length, SafeSubtract } from '../../common/types/arithmetic'

// #region tuple types
/**
 * Recursion utility for building tuples
 *
 * @typedef {_TupleOf}
 * @template T
 * @template {number} N
 * @template {unknown[]} R
 */
type _TupleOf<T, N extends number, R extends T[]> =
  Length<R> extends N ? R : _TupleOf<T, N, [T, ...R]>
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
    : N extends 0
      ? []
      : _TupleOf<T, N, []>
  : never
// #endregion

// #region graph data and coordinate types
/**
 * Recursion utility for building graph types
 *
 * @typedef {_GraphDataOf}
 * @template TData
 * @template {number} TDimensions
 * @template {unknown[]} R
 */
type _GraphDataOf<TData, TDimensions extends number, R extends never[]> =
  Length<R> extends TDimensions
    ? TData
    : _GraphDataOf<{ [key: number]: TData }, TDimensions, [never, ...R]>
/**
 * The type of the data stored internally inside a Graph, with a depth of `N` and data of type `T`
 *
 * @typedef {GraphData}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type GraphData<TData, TDimensions extends number = 0> = TDimensions extends 0
  ? TData
  : _GraphDataOf<TData, TDimensions, []>

/**
 * The type of coordinates of a certain length
 *
 * @export
 * @typedef {CoordinatesOfLength}
 * @template {number} TDimensions
 */
export type CoordinatesOfLength<TDimensions extends number> = Tuple<number, TDimensions>

/**
 * The type of coordinates received by Graph functions, where length is any number
 *
 * @typedef {Coordinates}
 */
export type Coordinates = CoordinatesOfLength<number>

/**
 * Coordinates if TDimensions > 0 otherwise never
 *
 * @export
 * @typedef {CoordinatesOrNever}
 * @template {number} [TDimensions=0]
 * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
 */
export type CoordinatesOrNever<
  TDimensions extends number = 0,
  TCoordinates extends Coordinates = CoordinatesOfLength<0>,
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

// #endregion

// #region Graph function types

/**
 * A function which returns all of the graph data
 *
 * @typedef {Get}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Get<TData, TDimensions extends number = 0> = () => GraphData<TData, TDimensions>

/**
 * A function which returns graph data at certain coordinates
 *
 * @typedef {GetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type GetAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends CoordinatesOfLength<number> = Tuple<number, 0>,
>(
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>

/**
 * A function which executes a function on all vertices of the graph
 *
 * @export
 * @typedef {ForEachVertex}
 * @template TData
 */
export type ForEachVertex<TData, TDimensions extends number = 0> = (
  callback: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
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
  TCoordinates extends Coordinates = CoordinatesOfLength<0>,
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
export type UpdateAtCoordinates<TData, TDimensions extends number = 0> = <
  TCoordinates extends Coordinates = CoordinatesOfLength<0>,
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
  TCoordinates extends Coordinates = CoordinatesOfLength<0>,
>(
  transformer: (
    currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
  ) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
  coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>

/**
 * A function which transforms all vertices of the graph
 *
 * @export
 * @typedef {UpdateAllVertices}
 * @template TData
 */
export type UpdateAllVertices<TData, TDimensions extends number = 0> = (
  updater: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
  ) => TData,
) => GraphData<TData, TDimensions>

/**
 * Sets all vertices of the graph to the same value
 *
 * @export
 * @typedef {SetAllVertices}
 * @template TData
 */
export type SetAllVertices<TData> = (value: TData) => void

/**
 * A function which transforms all vertices of the graph into a potentially new shape
 *
 * @export
 * @typedef {MapAllVertices}
 * @template TData
 */
export type MapAllVertices<TData, TDimensions extends number = 0> = <TResult>(
  transformer: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
  ) => TResult,
) => IGraph<TResult, TDimensions>

/**
 * A function which transforms all vertices of the graph into a potentially new shape
 *
 * @export
 * @typedef {SomeVertex}
 * @template TData
 */
export type SomeVertex<TData, TDimensions extends number = 0> = (
  callback: (
    currentValue: TData,
    coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
  ) => boolean,
) => boolean

// #endregion

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
   * Returns the entire graph as a GraphData
   *
   * @type {Get<TData, TDimensions>}
   */
  get: Get<TData, TDimensions>

  /**
   * Accesses graph data at certain coordinates
   *
   * @type {GetAtCoordinates<TData, TDimensions>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions>

  /**
   * Executes logic for each vertex of the graph
   *
   * @type {ForEachVertex<TData, TDimensions>}
   */
  forEachVertex: ForEachVertex<TData, TDimensions>

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
   * Sets all vertices in the graph to a new value
   *
   * @type {MapAtCoordinates<TData, TDimensions>}
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions>

  /**
   * Transforms all vertices in the graph
   *
   * @type {UpdateAllVertices<TData, TDimensions>}
   */
  updateAllVertices: UpdateAllVertices<TData, TDimensions>

  /**
   * Sets all vertices in the graph to a new value
   *
   * @type {SetAllVertices<TData>}
   */
  setAllVertices: SetAllVertices<TData>

  /**
   * Returns a graph where all `TData` vertices have been transformed to `TResult`s
   *
   * @type {MapAllVertices<TData, TDimensions>}
   */
  mapAllVertices: MapAllVertices<TData, TDimensions>

  /**
   * Returns `true` if calling the `callback` on any vertex returns `true`
   *
   * @type {SomeVertex<TData, TDimensions>}
   */
  someVertex: SomeVertex<TData, TDimensions>
}

/**
 * A data structure capable of containing a graph of any depth
 *
 * @export
 * @class Graph
 * @typedef {Graph}
 * @template TData
 * @template {number} [TDimensions=0]
 * @implements {IGraph<TData, TDimensions>}
 */
export class Graph<TData, TDimensions extends number = 0> implements IGraph<TData, TDimensions> {
  // #region Graph attributes
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
  // #endregion

  // #region Graph constructors
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
  // #endregion

  // #region Graph functions

  /**
   * Returns the number of dimensions in the graph
   *
   * @returns {TDimensions}
   */
  getDimensions = (): TDimensions => this.dimensions

  /**
   * Returns the entire graph as a GraphData
   *
   * @returns {GraphData<TData, TDimensions>}
   */
  get: Get<TData, TDimensions> = (): GraphData<TData, TDimensions> => this.data

  /**
   * Accesses graph data at particular `Coordinates`
   * `Coordinates` of length `TDimensions` return `TData`,
   * `Coordinates` with length shorter than `TDimensions` return a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
   * @returns {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>}
   */
  getAtCoordinates: GetAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = CoordinatesOfLength<0>,
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
   * Recursively executes a function on all vertices of the graph
   *
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {(currentValue: TData, coordinates: CoordinatesOfLength<TDimensions>) => TData} updater
   * @param {TCoordinates} previousCoordinates
   * @returns {TData, previousCoordinates: TCoordinates) => void}
   */
  private _forEachVertex = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => void,
    previousCoordinates: TCoordinates,
  ) => {
    // special case for a 0 dimension graph or no coordinates
    if (this.dimensions === 0) {
      callback(this.data)
    } else {
      const depth = previousCoordinates.length + 1

      // @ts-expect-error TDimensions is guaranteed to be greater than 0 due to the previous check
      const graphAtCoordinates = this.getAtCoordinates<TCoordinates>(previousCoordinates)

      // @ts-expect-error this is prevented from running on TData via logical checks
      const coordinatesInGraph = Object.keys(graphAtCoordinates).map(str => parseInt(str))

      if (depth === this.dimensions) {
        coordinatesInGraph.forEach(coordinate => {
          const coordinates = [...previousCoordinates, coordinate] as CoordinatesOrNever<
            TDimensions,
            Tuple<number, TDimensions>
          >

          callback(
            this.getAtCoordinates<CoordinatesOfLength<TDimensions>>(coordinates),
            coordinates,
          )
        })
      } else {
        coordinatesInGraph.forEach(coordinate =>
          this._forEachVertex(callback, [...previousCoordinates, coordinate]),
        )
      }
    }
  }

  /**
   * Executes a callback for each vertex in the graph
   *
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
   *     ) => void} callback
   */
  forEachVertex: ForEachVertex<TData, TDimensions> = (
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => void,
  ): void => this._forEachVertex(callback, [])

  /**
   * Transforms graph data at particular `Coordinates`.
   * `Coordinates` of length `TDimensions` transforms a `TData`,
   * `Coordinates` with length shorter than `TDimensions` transforms a `GraphData` of depth `TDimensions` - length of `Coordinates`
   *
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
   */
  updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = CoordinatesOfLength<0>,
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
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
   * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
   */
  setAtCoordinates: SetAtCoordinates<TData, TDimensions> = <
    TCoordinates extends Coordinates = CoordinatesOfLength<0>,
  >(
    value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
    coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
  ) => this.updateAtCoordinates(() => value, coordinates)

  /**
   * Returns the `TData` at the coordinates mapped to a `TResult`
   *
   * @template TResult
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {(
   *       currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
   *       coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
   *     ) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>} transformer
   * @param {?CoordinatesOrNever<TDimensions, TCoordinates>} [coordinates]
   * @returns {GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>}
   */
  mapAtCoordinates: MapAtCoordinates<TData, TDimensions> = <
    TResult,
    TCoordinates extends Coordinates = CoordinatesOfLength<0>,
  >(
    transformer: (
      currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
    coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
  ): GraphDataAtCoordinates<TResult, TDimensions, TCoordinates> =>
    transformer(this.getAtCoordinates(coordinates), coordinates)

  /**
   * Recursively maps over all vertices of the graph and transforms them
   *
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
   *     ) => TData} updater
   * @param {TCoordinates} previousCoordinates
   * @returns {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>}
   */
  private _updateAllVertices = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
    updater: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
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
            [coordinate]: this.updateAtCoordinates<CoordinatesOfLength<TDimensions>>(updater, [
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
            [coordinate]: this._updateAllVertices(updater, [...previousCoordinates, coordinate]),
          }),
          {} as GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
        )
      }
    }
  }

  /**
   * Transforms all vertices of the graph with an updater function
   *
   * @param {(currentValue: TData, coordinates: CoordinatesOfLength<TDimensions>) => TData} updater
   */
  updateAllVertices: UpdateAllVertices<TData, TDimensions> = (
    updater: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => TData,
  ): GraphData<TData, TDimensions> => {
    this._updateAllVertices(updater, [])
    return this.data
  }

  /**
   * Sets all vertices of the graph to have a value of `value`
   *
   * @param {TData} value
   */
  setAllVertices: SetAllVertices<TData> = (value: TData): void => {
    this._updateAllVertices(() => value, [])
  }

  /**
   * Recursively maps over all vertices of the graph and returns a graph of transformed vertices
   *
   * @template TResult
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
   *     ) => TResult} transformer
   * @param {TCoordinates} previousCoordinates
   * @returns {GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>}
   */
  private _mapAllVertices = <TResult, TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
    transformer: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => TResult,
    previousCoordinates: TCoordinates,
  ): GraphDataAtCoordinates<TResult, TDimensions, TCoordinates> => {
    // special case for a 0 dimension graph or no coordinates
    if (this.dimensions === 0) {
      // @ts-expect-error TResult is valid when `TDimensions` is 0
      const newData: GraphDataAtCoordinates<TResult, TDimensions, TCoordinates> = transformer(
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
            [coordinate]: this.mapAtCoordinates<TResult, CoordinatesOfLength<TDimensions>>(
              // @ts-expect-error TData is valid as a GraphData with a TDimensions of 0
              transformer,
              [...previousCoordinates, coordinate],
            ),
          }),
          {} as GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
        )
      } else {
        return coordinatesInGraph.reduce(
          (acc, coordinate) => ({
            ...acc,
            [coordinate]: this._mapAllVertices(transformer, [...previousCoordinates, coordinate]),
          }),
          {} as GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>,
        )
      }
    }
  }

  /**
   * Returns a `Graph` of `TResult`s, mapped from the vertices of the `TData` `Graph`
   *
   * @template TResult
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
   *     ) => TResult} transformer
   * @returns {GraphData<TResult, TDimensions>}
   */
  mapAllVertices: MapAllVertices<TData, TDimensions> = <TResult>(
    transformer: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => TResult,
  ): IGraph<TResult, TDimensions> =>
    // @ts-expect-error TResult is valid for a graph with TDimensions=0
    new Graph(this.dimensions, this._mapAllVertices(transformer, []))

  /**
   * Recursively maps over all vertices and returns true if the `callback` returns true for any vertex
   *
   * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
   *     ) => boolean} callback
   * @param {TCoordinates} previousCoordinates
   * @returns {boolean}
   */
  private _someVertex = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => boolean,
    previousCoordinates: TCoordinates,
  ): boolean => {
    // special case for a 0 dimension graph or no coordinates
    if (this.dimensions === 0) {
      return callback(this.data)
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
            this.getAtCoordinates<TData, CoordinatesOfLength<TDimensions>>([
              ...previousCoordinates,
              coordinate,
            ]),
          ),
        )
      } else {
        return coordinatesInGraph.some(coordinate =>
          this._someVertex(callback, [...previousCoordinates, coordinate]),
        )
      }
    }
  }

  /**
   * Returns true if any vertex returns true for the provided `callback`
   *
   * @param {(
   *       currentValue: TData,
   *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
   *     ) => boolean} callback
   * @returns {boolean}
   */
  someVertex: SomeVertex<TData, TDimensions> = (
    callback: (
      currentValue: TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => boolean,
  ): boolean => this._someVertex(callback, [])

  // #endregion
}
