import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as i,d as a}from"./index-iNG66WTU.js";import"./index-uubelm5h.js";import"./iframe-DLVtTsMU.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-DNoTwSKD.js";import"./_baseIsEqual-rkW4RVPP.js";import"./uniq-dwgeWkvB.js";import"./index-DrFu-skq.js";const o=`import { Length, SafeSubtract } from '../../common/types/arithmetic';

/**
 * Recursion utility for building tuples
 *
 * @typedef {_TupleOf}
 * @template T
 * @template {number} N
 * @template {unknown[]} R
 */
type _TupleOf<T, N extends number, R extends T[]> = Length<R> extends N ? R : _TupleOf<T, N, [T, ...R]>;
/**
 * Utility for building tuples of length \`N\` containing data of type \`T\`
 *
 * @typedef {Tuple}
 * @template T
 * @template {number} N
 */
export type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : N extends 0 ? [] : _TupleOf<T, N, []> : never;
/**
 * Recursion utility for building graph types
 *
 * @typedef {_GraphDataOf}
 * @template TData
 * @template {number} TDimensions
 * @template {unknown[]} R
 */
type _GraphDataOf<TData, TDimensions extends number, R extends never[]> = Length<R> extends TDimensions ? TData : _GraphDataOf<{
    [key: number]: TData;
}, TDimensions, [never, ...R]>;
/**
 * The type of the data stored internally inside a Graph, with a depth of \`N\` and data of type \`T\`
 *
 * @typedef {GraphData}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type GraphData<TData, TDimensions extends number = 0> = TDimensions extends 0 ? TData : _GraphDataOf<TData, TDimensions, []>;
/**
 * The type of coordinates of a certain length
 *
 * @export
 * @typedef {CoordinatesOfLength}
 * @template {number} TDimensions
 */
export type CoordinatesOfLength<TDimensions extends number> = Tuple<number, TDimensions>;
/**
 * The type of coordinates received by Graph functions, where length is any number
 *
 * @typedef {Coordinates}
 */
export type Coordinates = CoordinatesOfLength<number>;
/**
 * Coordinates if TDimensions > 0 otherwise never
 *
 * @export
 * @typedef {CoordinatesOrNever}
 * @template {number} [TDimensions=0]
 * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
 */
export type CoordinatesOrNever<TDimensions extends number = 0, TCoordinates extends Coordinates = CoordinatesOfLength<0>> = TDimensions extends 0 ? never : TCoordinates;
/**
 * The type of the data found at a certain depth within GraphData, determined by
 * the GraphData's max depth and the length of the coordinates accessing it
 *
 * @typedef {GraphDataAtCoordinates}
 * @template T
 * @template {number} TMaxDepth
 * @template {Coordinates} TCoordinate
 */
export type GraphDataAtCoordinates<T, TMaxDepth extends number, TCoordinates extends Coordinates> = GraphData<T | null, SafeSubtract<TMaxDepth, Length<TCoordinates>>>;
/**
 * A function which returns all of the graph data
 *
 * @typedef {Get}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Get<TData, TDimensions extends number = 0> = () => GraphData<TData, TDimensions> | null;
/**
 * A function which returns graph data at certain coordinates
 *
 * @typedef {GetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type GetAtCoordinates<TData, TDimensions extends number = 0> = <TCoordinates extends CoordinatesOfLength<number> = Tuple<number, 0>>(coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>;
/**
 * A function which returns the data of a vertex
 *
 * @export
 * @typedef {GetVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type GetVertex<TData, TDimensions extends number = 0> = (coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => TData | null;
/**
 * A function which sets the entire graph data
 *
 * @typedef {Set}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Set<TData, TDimensions extends number = 0> = (newValue: GraphData<TData, TDimensions> | null) => GraphData<TData, TDimensions> | null;
/**
 * A function which sets graph data at certain coordinates
 *
 * @typedef {SetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type SetAtCoordinates<TData, TDimensions extends number = 0> = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates> | null, coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates> | null;
/**
 * A function which sets graph data at a vertex
 *
 * @typedef {SetVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type SetVertex<TData, TDimensions extends number = 0> = (value: TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => TData | null;
/**
 * A function which transforms the entire graph
 *
 * @typedef {Update}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Update<TData, TDimensions extends number = 0> = (updater: (currentValue: GraphData<TData, TDimensions> | null) => GraphData<TData, TDimensions> | null) => GraphData<TData, TDimensions> | null;
/**
 * A function which transforms graph data at certain coordinates
 *
 * @typedef {UpdateAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateAtCoordinates<TData, TDimensions extends number = 0> = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(updater: (currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates> | null, coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>;
/**
 * A function which transforms graph data at certain coordinates
 *
 * @typedef {UpdateVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateVertex<TData, TDimensions extends number = 0> = (updater: (currentValue: TData | null) => TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => TData | null;
/**
 * A function which clears all graph data
 *
 * @typedef {Clear}
 */
export type Clear = () => void;
/**
 * A function clears graph data at certain coordinates and below
 *
 * @typedef {PruneAtCoordinates}
 * @template {number} [TDimensions=0]
 */
export type PruneAtCoordinates<TDimensions extends number = 0> = <TCoordinates extends CoordinatesOfLength<number> = Tuple<number, 0>>(coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => void;
/**
 * A function which returns the data of a vertex
 *
 * @export
 * @typedef {PruneVertex}
 * @template {number} [TDimensions=0]
 */
export type PruneVertex<TDimensions extends number = 0> = (coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => void;
/**
 * A function which returns a transformed graph
 *
 * @typedef {Map}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Map<TData, TDimensions extends number = 0> = <TResult>(transformer: (currentValue: GraphData<TData, TDimensions> | null) => GraphData<TResult, TDimensions> | null) => GraphData<TResult, TDimensions> | null;
/**
 * A function which returns transformed data at certain coordinates
 *
 * @typedef {MapAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type MapAtCoordinates<TData, TDimensions extends number = 0> = <TResult = TData, TCoordinates extends Coordinates = CoordinatesOfLength<0>>(transformer: (currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>, coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>;
/**
 * A function which returns transformed data of a vertex
 *
 * @typedef {MapVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type MapVertex<TData, TDimensions extends number = 0> = <TResult = TData>(transformer: (currentValue: TData | null) => TResult, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => TResult;
/**
 * A function which executes a function on all vertices of the graph
 *
 * @export
 * @typedef {ForEachVertex}
 * @template TData
 */
export type ForEachVertex<TData, TDimensions extends number = 0> = (callback: (currentValue: TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => void) => void;
/**
 * A function which transforms all vertices of the graph
 *
 * @export
 * @typedef {UpdateAllVertices}
 * @template TData
 */
export type UpdateAllVertices<TData, TDimensions extends number = 0> = (updater: (currentValue: TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => TData | null) => GraphData<TData, TDimensions> | null;
/**
 * Sets all vertices of the graph to the same value
 *
 * @export
 * @typedef {SetAllVertices}
 * @template TData
 */
export type SetAllVertices<TData> = (value: TData) => void;
/**
 * A function which transforms all vertices of the graph into a potentially new shape
 *
 * @export
 * @typedef {MapAllVertices}
 * @template TData
 */
export type MapAllVertices<TData, TDimensions extends number = 0> = <TResult>(transformer: (currentValue: TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => TResult | null) => IGraph<TResult, TDimensions>;
/**
 * A function which transforms all vertices of the graph into a potentially new shape
 *
 * @export
 * @typedef {SomeVertex}
 * @template TData
 */
export type SomeVertex<TData, TDimensions extends number = 0> = (callback: (currentValue: TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => boolean) => boolean;
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
    getDimensions: () => TDimensions;
    /**
     * Returns the entire graph as a GraphData
     *
     * @type {Get<TData, TDimensions>}
     */
    get: Get<TData, TDimensions>;
    /**
     * Accesses graph data at certain coordinates
     *
     * @type {GetAtCoordinates<TData, TDimensions>}
     */
    getAtCoordinates: GetAtCoordinates<TData, TDimensions>;
    /**
     * Gets the data at a vertex
     *
     * @type {GetVertex<TData, TDimensions>}
     */
    getVertex: GetVertex<TData, TDimensions>;
    /**
     * Sets the graph
     *
     * @type {Set<TData, TDimensions>}
     */
    set: Set<TData, TDimensions>;
    /**
     * Sets the graph at certain coordinates
     *
     * @type {SetAtCoordinates<TData, TDimensions>}
     */
    setAtCoordinates: SetAtCoordinates<TData, TDimensions>;
    /**
     * Sets the graph at a vertex
     *
     * @type {SetVertex<TData, TDimensions>}
     */
    setVertex: SetVertex<TData, TDimensions>;
    /**
     * Transforms the graph
     *
     * @type {Update<TData, TDimensions>}
     */
    update: Update<TData, TDimensions>;
    /**
     * Transforms the graph at certain coordinates
     *
     * @type {UpdateAtCoordinates<TData, TDimensions>}
     */
    updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>;
    /**
     * Sets the graph at a vertex
     *
     * @type {UpdateVertex<TData, TDimensions>}
     */
    updateVertex: UpdateVertex<TData, TDimensions>;
    /**
     * Empties the graph
     *
     * @type {Clear}
     */
    clear: Clear;
    /**
     * Removes the coordinates and everything below them from the graph
     *
     * @type {PruneAtCoordinates<TDimensions>}
     */
    pruneAtCoordinates: PruneAtCoordinates<TDimensions>;
    /**
     * Removes a vertex from the graph
     *
     * @type {PruneVertex<TDimensions>}
     */
    pruneVertex: PruneVertex<TDimensions>;
    /**
     * Returns a transformed graph
     *
     * @type {Map<TData, TDimensions>}
     */
    map: Map<TData, TDimensions>;
    /**
     * Returns transformed data at certain coordinates
     *
     * @type {MapAtCoordinates<TData, TDimensions>}
     */
    mapAtCoordinates: MapAtCoordinates<TData, TDimensions>;
    /**
     * Returns transformed data at a vertex
     *
     * @type {MapVertex<TData, TDimensions>}
     */
    mapVertex: MapVertex<TData, TDimensions>;
    /**
     * Executes logic for each vertex of the graph
     *
     * @type {ForEachVertex<TData, TDimensions>}
     */
    forEachVertex: ForEachVertex<TData, TDimensions>;
    /**
     * Returns \`true\` if calling the \`callback\` on any vertex returns \`true\`
     *
     * @type {SomeVertex<TData, TDimensions>}
     */
    someVertex: SomeVertex<TData, TDimensions>;
    /**
     * Transforms all vertices in the graph
     *
     * @type {UpdateAllVertices<TData, TDimensions>}
     */
    updateAllVertices: UpdateAllVertices<TData, TDimensions>;
    /**
     * Sets all vertices in the graph to a new value
     *
     * @type {SetAllVertices<TData>}
     */
    setAllVertices: SetAllVertices<TData>;
    /**
     * Returns a graph where all \`TData\` vertices have been transformed to \`TResult\`s
     *
     * @type {MapAllVertices<TData, TDimensions>}
     */
    mapAllVertices: MapAllVertices<TData, TDimensions>;
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
export declare class Graph<TData, TDimensions extends number = 0> implements IGraph<TData, TDimensions> {
    /**
     * The internal data of the Graph
     *
     * @private
     * @type {GraphData<TData, TDimensions>}
     */
    private data;
    /**
     * The number of dimensions in the graph
     *
     * @private
     * @type {TDimensions}
     */
    private dimensions;
    /**
     * Creates an instance of Graph with set dimensions
     *
     * @constructor
     */
    constructor(initial: {
        dimensions?: TDimensions;
    });
    /**
     * Creates a Graph from existing graph data and dimensions
     *
     * @constructor
     * @param {GraphData<TData, TDimensions>} data
     */
    constructor(initial: {
        dimensions: TDimensions;
        data: GraphData<TData, TDimensions> | null;
    });
    /**
     * Copies a Graph into a new Graph
     *
     * @constructor
     * @param {Graph<TData, TDimensions>} graph
     */
    constructor(initial: {
        graph: Graph<TData, TDimensions>;
    });
    /**
     * Returns the number of dimensions in the graph
     *
     * @returns {TDimensions}
     */
    getDimensions: () => TDimensions;
    /**
     * Returns the entire graph as a GraphData
     *
     * @returns {GraphData<TData, TDimensions>}
     */
    get: Get<TData, TDimensions>;
    /**
     * Accesses graph data at particular \`Coordinates\`
     * \`Coordinates\` of length \`TDimensions\` return \`TData\`,
     * \`Coordinates\` with length shorter than \`TDimensions\` return a \`GraphData\` of depth \`TDimensions\` - length of \`Coordinates\`
     *
     * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
     * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
     * @returns {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>}
     */
    getAtCoordinates: GetAtCoordinates<TData, TDimensions>;
    /**
     * Gets graph data at a vertex
     *
     * @param {?CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>} [coordinates]
     * @returns {(TData | null)}
     */
    getVertex: GetVertex<TData, TDimensions>;
    /**
     * Sets the entire graph
     *
     * @param {GraphData<TData, TDimensions>} newValue
     * @returns {GraphData<TData, TDimensions>}
     */
    set: Set<TData, TDimensions>;
    /**
     * Sets graph data at particular \`Coordinates\`.
     * \`Coordinates\` of length \`TDimensions\` set a point to a \`TData\`,
     * \`Coordinates\` with length shorter than \`TDimensions\` set a \`GraphData\` of depth \`TDimensions\` - length of \`Coordinates\`
     *
     * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
     * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
     * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
     */
    setAtCoordinates: SetAtCoordinates<TData, TDimensions>;
    /**
     * Sets the value of a vertex
     *
     * @param {TData} value
     * @param {?CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>} [coordinates]
     * @returns {TData}
     */
    setVertex: SetVertex<TData, TDimensions>;
    /**
     * Transforms the entire graph
     *
     * @param {(
     *       currentValue: GraphData<TData, TDimensions> | null,
     *     ) => GraphData<TData, TDimensions>} updater
     * @returns {GraphData<TData, TDimensions>}
     */
    update: Update<TData, TDimensions>;
    /**
     * Transforms graph data at particular \`Coordinates\`.
     * \`Coordinates\` of length \`TDimensions\` transforms a \`TData\`,
     * \`Coordinates\` with length shorter than \`TDimensions\` transforms a \`GraphData\` of depth \`TDimensions\` - length of \`Coordinates\`
     *
     * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
     * @param {GraphDataAtCoordinates<TData, TDimensions, TCoordinates>} value
     * @param {...TDimensions extends 0 ? [unknown?] : [TCoordinates?]} coordinatesOrEmpty
     */
    updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>;
    /**
     * Transforms a vertex
     *
     * @param {(currentValue: TData | null) => TData} updater
     * @param {?CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>} [coordinates]
     * @returns {TData, coordinates?: CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>) => TData}
     */
    updateVertex: UpdateVertex<TData, TDimensions>;
    /**
     * Empties the graph, resetting its data to \`null\`
     */
    clear: Clear;
    /**
     * Removes coordinates and everything below them from the graph
     *
     * @template {CoordinatesOfLength<number>} [TCoordinates=Tuple<number, 0>]
     * @param {?CoordinatesOrNever<TDimensions, TCoordinates>} [coordinates]
     */
    pruneAtCoordinates: PruneAtCoordinates<TDimensions>;
    /**
     * Removes a vertex from the graph
     *
     * @param {?CoordinatesOrNever<TDimensions, Tuple<number, TDimensions>>} [coordinates]
     */
    pruneVertex: PruneVertex<TDimensions>;
    /**
     * Returns a transformed graph
     *
     * @template [TResult=TData]
     * @param {(
     *       currentValue: GraphData<TData, TDimensions> | null,
     *     ) => GraphData<TResult, TDimensions>} transformer
     * @returns {GraphData<TResult, TDimensions>}
     */
    map: Map<TData, TDimensions>;
    /**
     * Returns the \`TData\` at the coordinates mapped to a \`TResult\`
     *
     * @template [TResult=TData]
     * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
     * @param {(
     *       currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>,
     *       coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
     *     ) => GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>} transformer
     * @param {?CoordinatesOrNever<TDimensions, TCoordinates>} [coordinates]
     * @returns {GraphDataAtCoordinates<TResult, TDimensions, TCoordinates>}
     */
    mapAtCoordinates: MapAtCoordinates<TData, TDimensions>;
    /**
     * Returns a transformed vertex
     *
     * @template [TResult=TData]
     * @param {(currentValue: TData | null) => TResult} transformer
     * @param {?CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>} [coordinates]
     * @returns {TResult}
     */
    mapVertex: MapVertex<TData, TDimensions>;
    /**
     * Recursively executes a function on all vertices of the graph
     *
     * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
     * @param {(currentValue: TData, coordinates: CoordinatesOfLength<TDimensions>) => TData} updater
     * @param {TCoordinates} previousCoordinates
     * @returns {TData, previousCoordinates: TCoordinates) => void}
     */
    private _forEachVertex;
    /**
     * Executes a callback for each vertex in the graph
     *
     * @param {(
     *       currentValue: TData,
     *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
     *     ) => void} callback
     */
    forEachVertex: ForEachVertex<TData, TDimensions>;
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
    private _updateAllVertices;
    /**
     * Recursively maps over all vertices and returns true if the \`callback\` returns true for any vertex
     *
     * @template {Coordinates} [TCoordinates=CoordinatesOfLength<0>]
     * @param {(
     *       currentValue: TData,
     *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
     *     ) => boolean} callback
     * @param {TCoordinates} previousCoordinates
     * @returns {boolean}
     */
    private _someVertex;
    /**
     * Returns true if any vertex returns true for the provided \`callback\`
     *
     * @param {(
     *       currentValue: TData,
     *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
     *     ) => boolean} callback
     * @returns {boolean}
     */
    someVertex: SomeVertex<TData, TDimensions>;
    /**
     * Transforms all vertices of the graph with an updater function
     *
     * @param {(currentValue: TData, coordinates: CoordinatesOfLength<TDimensions>) => TData} updater
     */
    updateAllVertices: UpdateAllVertices<TData, TDimensions>;
    /**
     * Sets all vertices of the graph to have a value of \`value\`
     *
     * @param {TData} value
     */
    setAllVertices: SetAllVertices<TData>;
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
    private _mapAllVertices;
    /**
     * Returns a \`Graph\` of \`TResult\`s, mapped from the vertices of the \`TData\` \`Graph\`
     *
     * @template TResult
     * @param {(
     *       currentValue: TData,
     *       coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
     *     ) => TResult} transformer
     * @returns {GraphData<TResult, TDimensions>}
     */
    mapAllVertices: MapAllVertices<TData, TDimensions>;
}
export {};
`,d=`import { Clear, Coordinates, CoordinatesOfLength, CoordinatesOrNever, ForEachVertex, GetAtCoordinates, GetVertex, Graph, GraphData, GraphDataAtCoordinates, Map, MapAllVertices, MapAtCoordinates, MapVertex, PruneAtCoordinates, PruneVertex, SetAllVertices, SomeVertex } from './Graph';

/**
 * The type of the \`set\` function for \`useGraph\`
 *
 * @export
 * @typedef {Set}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Set<TData, TDimensions extends number = 0> = (value: GraphData<TData, TDimensions> | null) => void;
/**
 * The type of the \`setAtCoordinates\` function for \`useGraph\`
 *
 * @export
 * @typedef {SetAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type SetAtCoordinates<TData, TDimensions extends number = 0> = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(value: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>, coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => void;
/**
 * The type of the \`setVertex\` function for \`useGraph\`
 *
 * @export
 * @typedef {SetVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type SetVertex<TData, TDimensions extends number = 0> = (value: TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => void;
/**
 * The type of the \`update\` function for \`useGraph\`
 *
 * @export
 * @typedef {Update}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type Update<TData, TDimensions extends number = 0> = (updater: (currentValue: GraphData<TData, TDimensions> | null) => GraphData<TData, TDimensions> | null) => void;
/**
 * The type of the \`updateAtCoordinates\` function for \`useGraph\`
 *
 * @export
 * @typedef {UpdateAtCoordinates}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateAtCoordinates<TData, TDimensions extends number = 0> = <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(updater: (currentValue: GraphDataAtCoordinates<TData, TDimensions, TCoordinates>) => GraphDataAtCoordinates<TData, TDimensions, TCoordinates>, coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>) => void;
/**
 * The type of the \`updateVertex\` function for \`useGraph\`
 *
 * @export
 * @typedef {UpdateVertex}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateVertex<TData, TDimensions extends number = 0> = (updater: (currentValue: TData | null) => TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => void;
/**
 * The type of the \`updateAllVertices\` function for \`useGraph\`
 *
 * @export
 * @typedef {UpdateAllVertices}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UpdateAllVertices<TData, TDimensions extends number = 0> = (updater: (currentValue: TData | null, coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => TData | null) => void;
/**
 * Functions returned by the \`useGraph\` hook for interacting with its state
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
    getAtCoordinates: GetAtCoordinates<TData, TDimensions>;
    getVertex: GetVertex<TData, TDimensions>;
    set: Set<TData, TDimensions>;
    /**
     * Sets the state of the graph at certain coordinates
     *
     * @type {SetAtCoordinates<TData, TDimensions>}
     */
    setAtCoordinates: SetAtCoordinates<TData, TDimensions>;
    setVertex: SetVertex<TData, TDimensions>;
    update: Update<TData, TDimensions>;
    /**
     * Transforms the state of the graph at certain coordinates
     *
     * @type {MapAtCoordinates<TData, TDimensions>}
     */
    updateAtCoordinates: UpdateAtCoordinates<TData, TDimensions>;
    updateVertex: UpdateVertex<TData, TDimensions>;
    clear: Clear;
    pruneAtCoordinates: PruneAtCoordinates<TDimensions>;
    pruneVertex: PruneVertex<TDimensions>;
    map: Map<TData, TDimensions>;
    /**
     * Returns a TData transformed into a TResult
     *
     * @type {MapAtCoordinates<TData, TDimensions>}
     */
    mapAtCoordinates: MapAtCoordinates<TData, TDimensions>;
    mapVertex: MapVertex<TData, TDimensions>;
    /**
     * Executes a callback on all vertices of the graph
     *
     * @type {ForEachVertex<TData, TDimensions>}
     */
    forEachVertex: ForEachVertex<TData, TDimensions>;
    /**
     * Returns \`true\` if any vertex returns \`true\` for the \`callback\`
     *
     * @type {SomeVertex<TData, TDimensions>}
     */
    someVertex: SomeVertex<TData, TDimensions>;
    /**
     * Sets all vertices of the graph to a new value
     *
     * @type {SetAllVertices<TData>}
     */
    setAllVertices: SetAllVertices<TData>;
    /**
     * Transforms all vertices of the graph
     *
     * @type {UpdateAllVertices<TData, TDimensions>}
     */
    updateAllVertices: UpdateAllVertices<TData, TDimensions>;
    /**
     * Creates a new graph with TData transformed to TResult
     *
     * @type {MapAllVertices<TData, TDimensions>}
     */
    mapAllVertices: MapAllVertices<TData, TDimensions>;
}
/**
 * The type of the arguments to \`useGraph\`
 *
 * @export
 * @typedef {UseGraphOptions}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export interface UseGraphOptions<TData, TDimensions extends number = 0> {
    dimensions?: TDimensions;
    initial?: Graph<TData, TDimensions>;
}
/**
 * The return type for the \`useGraph\` hook
 *
 * @typedef {UseGraphReturn}
 * @template TData
 * @template {number} [TDimensions=0]
 */
export type UseGraphReturn<TData, TDimensions extends number = 0> = [
    data: GraphData<TData, TDimensions> | null,
    UseGraphReturnFunctions<TData, TDimensions>
];
/**
 * The type of the \`useGraph\` hook
 *
 * @typedef {UseGraph}
 */
export type UseGraph = <TData, TDimensions extends number = 0>(options?: UseGraphOptions<TData, TDimensions>) => UseGraphReturn<TData, TDimensions>;
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
declare const useGraph: UseGraph;
export default useGraph;
`,l=`import React, { useCallback, useMemo, useRef } from 'react'
import { getObjectWithoutKey } from '../../../common/utils'
import {
  Coordinates,
  CoordinatesOfLength,
  CoordinatesOrNever,
  Graph,
  IGraph,
} from '../../UseGraph/Graph'
import useGraph from '../../UseGraph/useGraph'
import {
  Changed,
  Deregister,
  DeregisterAtCoordinates,
  Errors,
  FieldElement,
  Fields,
  FieldsData,
  FormData,
  HandleSubmit,
  HandleSubmitOptions,
  PartialDataKeys,
  Register,
  RegisterOptions,
  RegisterResult,
  Touched,
  UseForm,
  UseFormOptions,
  UseFormReturn,
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
 * Provides a \`register\` function for registering fields with the hook and handles tracking
 * their values, errors, and submission of the form.
 *
 * @template {FieldsData} TData
 * @returns {{ register: Register<TData>; errors: Errors<TData>; touched: Touched<TData>; handleSubmit: HandleSubmit<TData>; }}
 */
const useForm: UseForm = <TData extends FieldsData, TDimensions extends number = 0>({
  dimensions = 0 as TDimensions,
  isRequiredErrorMessageOverride,
  shouldNotAutoPruneFields = false,
}: UseFormOptions<TDimensions> = {}): UseFormReturn<TData, TDimensions> => {
  const fieldsGraph = useRef<FormData<Fields<TData, TDimensions>, TDimensions>>(
    new Graph<Fields<TData, TDimensions>, TDimensions>({ dimensions }),
  )
  const [
    errors,
    {
      updateVertex: updateErrorsVertex,
      set: setErrors,
      pruneVertex: pruneErrorsVertex,
      pruneAtCoordinates: pruneErrorsAtCoordinates,
    },
  ] = useGraph<Errors<TData>, TDimensions>({ dimensions })
  const [
    touched,
    {
      someVertex: touchedAtSomeVertex,
      updateVertex: updateTouchedVertex,
      pruneVertex: pruneTouchedVertex,
      pruneAtCoordinates: pruneTouchedAtCoordinates,
    },
  ] = useGraph<Touched<TData>, TDimensions>({ dimensions })
  const [
    changed,
    {
      someVertex: changedAtSomeVertex,
      updateVertex: updateChangedVertex,
      updateAllVertices: updateAllChangedVertices,
      pruneVertex: pruneChangedVertex,
      pruneAtCoordinates: pruneChangedAtCoordinates,
    },
  ] = useGraph<Changed<TData>, TDimensions>({ dimensions })
  const hasBegun = useMemo(
    () =>
      !!touched &&
      touchedAtSomeVertex(fields =>
        fields ? Object.values(fields).some(fieldHasBeenTouched => fieldHasBeenTouched) : false,
      ),
    [touched, touchedAtSomeVertex],
  )
  const hasChangedWithoutSubmit = useMemo(
    () =>
      !!changed &&
      changedAtSomeVertex(fields =>
        fields ? Object.values(fields).some(fieldHasBeenChanged => fieldHasBeenChanged) : false,
      ),
    [changed, changedAtSomeVertex],
  )

  const updateFieldsVertexField = useCallback(
    (
      fieldName: keyof TData,
      updater: (
        current?: Fields<TData, TDimensions>[keyof TData],
      ) => Fields<TData, TDimensions>[keyof TData],
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) =>
      fieldsGraph.current.updateVertex(
        fields =>
          fields
            ? { ...fields, [fieldName]: updater(fields?.[fieldName]) }
            : ({ [fieldName]: updater() } as Fields<TData, TDimensions>),
        coordinates,
      ),
    [],
  )

  const setFieldsVertex = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      newValue: Fields<TData, TDimensions>[TFieldName],
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) =>
      fieldsGraph.current.updateVertex(
        fields =>
          fields
            ? { ...fields, [fieldName]: newValue }
            : ({ [fieldName]: newValue } as Fields<TData, TDimensions>),
        coordinates,
      ),
    [],
  )

  const touch = useCallback(
    (
      fieldName: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      updateFieldsVertexField(
        fieldName,
        fields => (fields ? { ...fields, hasBeenTouched: true } : fields),
        coordinates,
      )
      updateTouchedVertex(
        fields => (fields ? { ...fields, [fieldName]: true } : fields),
        coordinates,
      )
    },
    [updateTouchedVertex, updateFieldsVertexField],
  )

  const change = useCallback(
    (
      fieldName: keyof TData,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      updateFieldsVertexField(
        fieldName,
        fields => (fields ? { ...fields, hasBeenChanged: true } : fields),
        coordinates,
      )
      updateChangedVertex(
        fields => (fields ? { ...fields, [fieldName]: true } : fields),
        coordinates,
      )
    },
    [updateChangedVertex, updateFieldsVertexField],
  )

  const resetChanged = useCallback(() => {
    fieldsGraph.current.updateAllVertices(fields =>
      fields
        ? Object.keys(fields).reduce(
            (acc, fieldName) => ({
              ...acc,
              [fieldName]: { ...fields[fieldName], changed: false },
            }),
            {},
          )
        : null,
    )
    updateAllChangedVertices(fields =>
      fields
        ? Object.keys(fields).reduce((acc, fieldName) => ({ ...acc, [fieldName]: false }), {})
        : null,
    )
  }, [updateAllChangedVertices])

  const removeUnregisteredFieldsAtVertex = useCallback(
    (coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => {
      const fields = fieldsGraph.current.getVertex(coordinates)

      if (fields) {
        const newFields = Object.keys(fields).reduce(
          (acc, fieldName) => ({
            ...acc,
            ...(fields[fieldName]?.ref?.current || fields[fieldName]?.options?.shouldNotBeAutoPruned
              ? { [fieldName]: fields[fieldName] }
              : {}),
          }),
          {},
        )
        fieldsGraph.current.setVertex(newFields, coordinates)
        const removeUnregisteredKeys = (fieldsToFilter: PartialDataKeys<TData, unknown> | null) =>
          fieldsToFilter
            ? Object.keys(newFields).reduce(
                (acc, fieldName) => ({ ...acc, [fieldName]: fieldsToFilter[fieldName] }),
                {},
              )
            : null
        updateErrorsVertex(removeUnregisteredKeys)
        updateTouchedVertex(removeUnregisteredKeys)
        updateChangedVertex(removeUnregisteredKeys)
      }
    },
    [updateChangedVertex, updateErrorsVertex, updateTouchedVertex],
  )

  const pruneVertex = useCallback(
    (coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>) => {
      fieldsGraph.current.pruneAtCoordinates(coordinates)
      pruneErrorsVertex(coordinates)
      pruneTouchedVertex(coordinates)
      pruneChangedVertex(coordinates)
    },
    [pruneChangedVertex, pruneErrorsVertex, pruneTouchedVertex],
  )

  const deregister: Deregister<TData, TDimensions> = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      fieldsGraph.current.updateVertex(
        fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
        coordinates,
      )
      const remainingFields = fieldsGraph.current.getVertex(coordinates)

      // if no fields remain registered after filtering, remove the entire vertex
      if (!remainingFields || Object.keys(remainingFields).length === 0) {
        pruneVertex(coordinates)
      } else {
        updateErrorsVertex(
          fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
          coordinates,
        )
        updateTouchedVertex(
          fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
          coordinates,
        )
        updateChangedVertex(
          fields => (fields ? getObjectWithoutKey(fields, fieldName) : null),
          coordinates,
        )
      }
    },
    [pruneVertex, updateChangedVertex, updateErrorsVertex, updateTouchedVertex],
  )

  const deregisterAtCoordinates: DeregisterAtCoordinates<TDimensions> = useCallback(
    <TCoordinates extends Coordinates = CoordinatesOfLength<0>>(
      coordinates?: CoordinatesOrNever<TDimensions, TCoordinates>,
    ) => {
      fieldsGraph.current.pruneAtCoordinates(coordinates)
      pruneErrorsAtCoordinates(coordinates)
      pruneTouchedAtCoordinates(coordinates)
      pruneChangedAtCoordinates(coordinates)
    },
    [pruneChangedAtCoordinates, pruneErrorsAtCoordinates, pruneTouchedAtCoordinates],
  )

  const deregisterInactiveFields = useCallback(() => {
    fieldsGraph.current.forEachVertex((fields, coordinates) => {
      if (!fields) {
        pruneVertex(coordinates)
      } else {
        removeUnregisteredFieldsAtVertex(coordinates)
        const remainingFields = fieldsGraph.current.getVertex(coordinates)

        // if no fields remain registered after filtering, remove the entire vertex
        if (!remainingFields || Object.keys(remainingFields).length === 0) {
          pruneVertex(coordinates)
        }
      }
    })
  }, [pruneVertex, removeUnregisteredFieldsAtVertex])

  const updateFieldsVertexFieldError = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      const fieldsAtCoordinate = fieldsGraph.current.getVertex(coordinates)

      if (!(fieldsAtCoordinate && fieldName in fieldsAtCoordinate)) return null // If the field has not been registered, it cannot have an error

      const field = fieldsAtCoordinate[fieldName]!
      const typedValue = getTypedFieldValue<TData, TDimensions>(field)
      const options = field.options

      if (options?.isRequired && isBlank(typedValue)) {
        const error =
          field.options?.isRequiredErrorMessageOverride ??
          isRequiredErrorMessageOverride ??
          'Field is required'

        updateFieldsVertexField(
          fieldName,
          field => ({
            ...field!,
            error,
          }),
          coordinates,
        )

        return error
      } else {
        const typedData = getTypedData<TData, TDimensions>(fieldsGraph.current) as IGraph<
          TData,
          TDimensions
        >
        const typedFields = {
          ...typedData.getVertex(coordinates)!,
          [fieldName]: typedValue,
        }

        // @ts-expect-error \`TData\` is valid as a \`GraphData\` with \`TDimensions=0\`
        const error = options?.validate?.(typedValue, typedFields, typedData.get()!) ?? null

        updateFieldsVertexField(
          fieldName,
          field => ({
            ...field!,
            error,
          }),
          coordinates,
        )

        return error
      }
    },
    [isRequiredErrorMessageOverride, updateFieldsVertexField],
  )

  const updateFieldsVertexFieldErrors = useCallback(
    (): void =>
      fieldsGraph.current.forEachVertex((fields, coordinates) => {
        if (fields) {
          Object.keys(fields).forEach(fieldName =>
            updateFieldsVertexFieldError(fieldName as keyof TData, coordinates),
          )
        }
      }),
    [updateFieldsVertexFieldError],
  )

  const updateErrorsVertexFieldError = useCallback(
    <TFieldName extends keyof TData>(
      fieldName: TFieldName,
      coordinates?: CoordinatesOrNever<TDimensions, CoordinatesOfLength<TDimensions>>,
    ) => {
      updateErrorsVertex(
        errors => ({
          ...errors!,
          [fieldName]: updateFieldsVertexFieldError(fieldName, coordinates),
        }),
        coordinates,
      )
    },
    [updateErrorsVertex, updateFieldsVertexFieldError],
  )

  const updateErrors = useCallback(() => {
    updateFieldsVertexFieldErrors()

    const errors = fieldsGraph.current
      .mapAllVertices(fields =>
        fields
          ? Object.keys(fields).reduce<Errors<TData>>(
              (acc, fieldName) => ({
                ...acc,
                [fieldName]: fields[fieldName]?.error,
              }),
              {},
            )
          : null,
      )
      .get()

    setErrors(errors)
  }, [setErrors, updateFieldsVertexFieldErrors])

  const handleSubmit: HandleSubmit<TData, TDimensions> = useCallback(
    <TShouldSkipValidations extends boolean = false>({
      shouldSkipValidations,
      onSubmit,
      onError,
    }: HandleSubmitOptions<TData, TDimensions, TShouldSkipValidations>) => {
      if (!shouldNotAutoPruneFields) {
        deregisterInactiveFields()
      }

      if (shouldSkipValidations) {
        const typedData = getTypedData(fieldsGraph.current)
        // @ts-expect-error a graph of data is assignable to a graph of partial data
        onSubmit?.(typedData)
        resetChanged()
      } else if (fieldsGraph.current) {
        updateErrors()
        const errors = fieldsGraph.current.mapAllVertices(fields =>
          fields
            ? Object.keys(fields).reduce<Errors<TData>>(
                (acc, fieldName) => ({ ...acc, [fieldName]: fields[fieldName]!.error }),
                {},
              )
            : null,
        )
        const hasErrors = errors.someVertex(fields =>
          fields ? Object.keys(fields).some(fieldName => fields[fieldName] !== null) : false,
        )

        if (hasErrors) {
          // @ts-expect-error \`Errors<TData>\` is valid as a \`GraphData\` with \`TDimensions=0\`
          onError?.(errors)
        } else {
          const typedData = getTypedData(fieldsGraph.current)
          resetChanged()
          // @ts-expect-error a graph of data is assignable to a graph of data
          onSubmit?.(typedData)
        }
      }
    },
    [resetChanged, shouldNotAutoPruneFields, deregisterInactiveFields, updateErrors],
  )

  const register: Register<TData, TDimensions> = useCallback(
    <
      TFieldName extends keyof TData,
      TFieldElement extends FieldElement,
      TIsRequired extends boolean = false,
    >(
      fieldName: TFieldName,
      options?: RegisterOptions<TData, TDimensions, TFieldName, TIsRequired>,
    ): RegisterResult<TFieldElement> => {
      options ??= {}
      const fields = fieldsGraph.current.getVertex(options.coordinates) ?? {}
      if (fieldName in fields) {
        updateFieldsVertexField(fieldName, field => ({ ...field!, options }), options.coordinates)
      } else {
        setFieldsVertex(
          fieldName,
          // @ts-expect-error options are valid because the \`validate\` type depends upon \`isRequired\`
          {
            name: fieldName,
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
        ref: (element: TFieldElement) => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)
          if (fields?.[fieldName]) {
            // update internal value from ref if not yet set
            if (fields[fieldName]!.value === undefined) {
              const defaultValue = getElementDefaultValue<TData, TFieldElement>(element)
              updateFieldsVertexField(
                fieldName,
                field => ({
                  ...field!,
                  value: defaultValue,
                  ref: { ...field!.ref, current: element },
                }),
                options.coordinates,
              )
            } else {
              updateFieldsVertexField(
                fieldName,
                field => ({ ...field!, ref: { ...field!.ref, current: element } }),
                options.coordinates,
              )
            }
          }
        },
        onChange: event => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)!

          if (fieldName in fields) {
            if (!fields[fieldName]!.hasBeenChanged) {
              change(fieldName, options.coordinates)
            }

            const newValue = getOnChangeValue<TData>(event)
            updateFieldsVertexField(
              fieldName,
              field => ({ ...field!, value: newValue }),
              options?.coordinates,
            )
          }
        },
        onFocus: () => {
          const fields = fieldsGraph.current.getVertex(options.coordinates)!

          if (fieldName in fields) {
            if (!fields[fieldName]!.hasBeenTouched) {
              touch(fieldName, options?.coordinates)
            }
          }
        },
        onBlur: () => {
          updateErrorsVertexFieldError(fieldName, options?.coordinates)
        },
      }
    },
    [change, setFieldsVertex, touch, updateErrorsVertexFieldError, updateFieldsVertexField],
  )

  return {
    register,
    deregister,
    deregisterAtCoordinates,
    errors,
    touched,
    changed,
    hasBegun,
    hasChangedWithoutSubmit,
    handleSubmit,
  }
}

export default useForm
`;function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Graph | useGraph"}),`
`,e.jsx(n.h1,{id:"graph--usegraph",children:"Graph / useGraph"}),`
`,e.jsx(n.p,{children:"Handle state with any number of dimensions"}),`
`,e.jsx(n.h2,{id:"graph-class",children:"Graph class"}),`
`,e.jsxs(n.p,{children:["To support the ",e.jsx(n.code,{children:"useGraph"})," hook, a ",e.jsx(n.code,{children:"Graph"})," class is provided which stores data of any dimensionality and provides utilties for interacting with that data."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useGraph"})," is useful in cases such as the ",e.jsx(n.code,{children:"useForm"})," hook, where state with an unknown number of dimensions is managed."]}),`
`,e.jsx(n.h3,{id:"useform",children:e.jsx(n.code,{children:"useForm"})}),`
`,e.jsxs(n.p,{children:["In this case, a ",e.jsx(n.code,{children:"Graph"}),` ref is used to track information internal to the hook for any number of fields without triggering rerenders.
Additionally, `,e.jsx(n.code,{children:"useGraph"})," is used to statefully store information about each field: ",e.jsx(n.code,{children:"errors"}),", ",e.jsx(n.code,{children:"touched"}),", and ",e.jsx(n.code,{children:"changed"}),"."]}),`
`,e.jsx(a,{language:"ts",code:l}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"graph-class-1",children:"Graph class"}),`
`,e.jsx(a,{language:"ts",code:o}),`
`,e.jsx(n.h3,{id:"usegraph-hook",children:"useGraph hook"}),`
`,e.jsx(a,{language:"ts",code:d})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{y as default};
