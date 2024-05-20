import { FieldElement, FieldsData } from './public'

export type ObjectKey = string | number | symbol

export type PartialDataKeys<TData extends FieldsData, TValue> = { [Key in keyof TData]?: TValue }

export const isFileInput = (
  element: FieldElement,
): element is HTMLInputElement & { type: 'file' } => 'type' in element && element.type === 'file'

export const isRadioInput = (
  element: FieldElement,
): element is HTMLInputElement & { type: 'radio' } => 'type' in element && element.type === 'radio'

export const isCheckboxInput = (
  element: FieldElement,
): element is HTMLInputElement & { type: 'checkbox' } =>
  'type' in element && element.type === 'checkbox'

export const isDateInput = (
  element: FieldElement,
): element is HTMLInputElement & { type: 'date' } => 'type' in element && element.type === 'date'

export const isNumberInput = (
  element: FieldElement,
): element is HTMLInputElement & { type: 'number' } =>
  'type' in element && element.type === 'number'

export const isSelectOne = (
  element: FieldElement,
): element is HTMLSelectElement & { type: 'select-one' } =>
  'type' in element && element.type === 'select-one'

export const isSelectMultiple = (
  element: FieldElement,
): element is HTMLSelectElement & { type: 'select-multiple' } =>
  'type' in element && element.type === 'select-multiple'

export const isTextarea = (element: FieldElement): element is HTMLTextAreaElement =>
  'type' in element && element.type === 'textarea'
