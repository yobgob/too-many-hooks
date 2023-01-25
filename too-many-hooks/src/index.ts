import useArray, { UseArray, UseArrayReturn } from './useArray'
import useCount, { UseCount, UseCountArgs, UseCountReturn } from './useCount'
import useDeepCompareEffect, { UseDeepCompareEffect } from './useDeepCompareEffect'
import useFlag, { UseFlag, UseFlagReturn } from './useFlag'

export type {
  UseCountArgs,
  UseCountReturn,
  UseCount,
  UseFlag,
  UseFlagReturn,
  UseArray,
  UseArrayReturn,
  UseDeepCompareEffect,
}
export { useCount, useFlag, useArray, useDeepCompareEffect }
