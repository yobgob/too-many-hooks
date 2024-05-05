import merge from 'lodash.merge'
import { Length, SafeSubtract } from '../types/arithmetic'

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>
type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never

type _ObjectGraphDataOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? T
  : _ObjectGraphDataOf<Record<number, T>, N, [T, ...R]>
type ObjectGraphData<T, N extends number = 0> = number extends N ? T : _ObjectGraphDataOf<T, N, []>

type Coordinates = Tuple<number, number>
type ObjectGraphDataAtCoordinate<T, TMaxDepth extends number, TCoordinate extends Coordinates> =
  Length<TCoordinate> extends TMaxDepth
    ? T
    : ObjectGraphData<T, SafeSubtract<TMaxDepth, Length<TCoordinate>>>

export interface IGraph<TData, TDimensions extends number = 0> {
  getAtCoordinate: <TCoordinate extends Tuple<number, number> = Tuple<number, 0>>(
    ...coordinates: TDimensions extends 0 ? [never?] : TCoordinate
  ) => ObjectGraphDataAtCoordinate<TData, TDimensions, TCoordinate>
  get: () => ObjectGraphData<TData, TDimensions>
  setAtCoordinate: <TCoordinate extends Coordinates = Tuple<number, 0>>(
    value: ObjectGraphDataAtCoordinate<TData, TDimensions, TCoordinate>,
    ...coordinates: TDimensions extends 0 ? [never?] : TCoordinate
  ) => void
  set: (value: ObjectGraphData<TData, TDimensions>) => void
}

export class Graph<TData, TDimensions extends number = 0> implements IGraph<TData, TDimensions> {
  private data: ObjectGraphData<TData, TDimensions>

  getAtCoordinate = <TCoordinate extends Coordinates = Tuple<number, 0>>(
    ...coordinates: TDimensions extends 0 ? [never?] : TCoordinate
  ): ObjectGraphDataAtCoordinate<TData, TDimensions, TCoordinate> => {
    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an ObjectGraphData with a TDimensions of 0
      return this.data
    }

    // @ts-expect-error TData is valid as an ObjectGraphData with a TDimensions of 0
    return coordinates.reduce((graph, coordinate) => graph?.[coordinate], this.data)
  }

  setAtCoordinate = <TCoordinate extends Coordinates = Tuple<number, 0>>(
    value: ObjectGraphDataAtCoordinate<TData, TDimensions, TCoordinate>,
    ...coordinates: TDimensions extends 0 ? [never?] : TCoordinate
  ): void => {
    // special case for a 0 dimension graph or no coordinates
    if (!coordinates?.length) {
      // @ts-expect-error TData is valid as an ObjectGraphData with a TDimensions of 0
      this.data = value
    }

    // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
    const newValue: ObjectGraphData<TData, TDimensions> = coordinates.reduceRight(
      // @ts-expect-error the initial and final values of the reduce are different types but that is the intent
      (acc, coordinate) => ({ [coordinate]: acc }),
      value,
    )

    this.data = merge(this.data, newValue)
  }
}
