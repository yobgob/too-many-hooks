import { formatSize } from './formatters'
import { Size } from './types'

export const SIZE_OPTIONS = Object.values(Size).map(size => ({
  label: formatSize(size),
  value: size,
}))
