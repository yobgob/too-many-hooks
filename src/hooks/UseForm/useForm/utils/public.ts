import { FieldElement, FieldsData, Register, RegisterOptions } from '../types'
import { overrideRegisterResultPropNames } from './internal'

export /**
 * Builds an override for the provided `register` function which renames the returned props to their respective `nameOverrides`
 *
 * @template {FieldsData} TData
 * @template {number} [TDimensions=0]
 * @template {string} [TRefOverride='ref']
 * @template {string} [TOnChangeOverride='onChange']
 * @template {string} [TOnBlurOverride='onBlur']
 * @template {string} [TOnFocusOverride='onFocus']
 * @param {Register<TData, TDimensions>} register
 * @param {Partial<{
 *       ref: TRefOverride
 *       onChange: TOnChangeOverride
 *       onBlur: TOnBlurOverride
 *       onFocus: TOnFocusOverride
 *     }>} nameOverrides
 * @returns
 */
const buildOverriddenRegister =
  <
    TData extends FieldsData,
    TDimensions extends number = 0,
    TRefOverride extends string = 'ref',
    TOnChangeOverride extends string = 'onChange',
    TOnBlurOverride extends string = 'onBlur',
    TOnFocusOverride extends string = 'onFocus',
  >(
    register: Register<TData, TDimensions>,
    nameOverrides: Partial<{
      ref: TRefOverride
      onChange: TOnChangeOverride
      onBlur: TOnBlurOverride
      onFocus: TOnFocusOverride
    }>,
  ) =>
  <
    TFieldName extends keyof TData,
    TFieldElement extends FieldElement,
    TIsRequired extends boolean = false,
  >(
    fieldName: TFieldName,
    options?: RegisterOptions<TData, TDimensions, TFieldName, TIsRequired>,
  ) =>
    overrideRegisterResultPropNames<
      TFieldElement,
      TRefOverride,
      TOnChangeOverride,
      TOnBlurOverride,
      TOnFocusOverride
    >(register(fieldName, options), nameOverrides)
