import { Field, Size } from './types'

export const formatField = (field: Field): string => {
  switch (field) {
    case Field.FirstName:
      return 'First name'
    case Field.LastName:
      return 'Last name'
    case Field.TShirtSize:
      return 'T-shirt size'
    case Field.HatSize:
      return 'Hat size'
  }
}

export const formatSize = (size: Size): string => {
  switch (size) {
    case Size.Unselected:
      return 'Select'
    default:
      return size
  }
}
