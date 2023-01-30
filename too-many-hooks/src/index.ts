import useArray, { UseArray, UseArrayReturn } from './useArray'
import useFlag, { UseFlag, UseFlagReturn } from './useFlag'
import useFlexCorners, {
  Corner,
  Corners,
  UseFlexCorners,
  UseFlexCornersReturn,
} from './useFlexCorners'
import useMutationObserver, { UseMutationObserver } from './useMutationObserver'
import useTally, { UseTally, UseTallyArgs, UseTallyReturn } from './useTally'
import useWindowListener, { UseWindowListener, UseWindowListenerOptions } from './useWindowListener'

export type {
  Corner,
  Corners,
  UseArray,
  UseArrayReturn,
  UseFlag,
  UseFlagReturn,
  UseFlexCorners,
  UseFlexCornersReturn,
  UseMutationObserver,
  UseTally,
  UseTallyArgs,
  UseTallyReturn,
  UseWindowListener,
  UseWindowListenerOptions,
}
export { useArray, useFlag, useFlexCorners, useMutationObserver, useTally, useWindowListener }
