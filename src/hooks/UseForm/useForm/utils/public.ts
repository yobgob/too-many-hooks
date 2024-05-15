import { FieldElement, RegisterResult } from '../types'
import { overrideRegisterResultPropNames } from './internal'

export /**
 * Builds a function which overrides the names of the component props returned by the `useForm` `register` function
 *
 * @template {string} [TRefOverride='ref']
 * @template {string} [TOnChangeOverride='onChange']
 * @template {string} [TOnBlurOverride='onBlur']
 * @template {string} [TOnFocusOverride='onFocus']
 * @param {Partial<{
 *       ref: TRefOverride
 *       onChange: TOnChangeOverride
 *       onBlur: TOnBlurOverride
 *       onFocus: TOnFocusOverride
 *     }>} nameOverrides
 * @returns {...}
 */
const buildRegisterOverride =
  <
    TRefOverride extends string = 'ref',
    TOnChangeOverride extends string = 'onChange',
    TOnBlurOverride extends string = 'onBlur',
    TOnFocusOverride extends string = 'onFocus',
  >(
    nameOverrides: Partial<{
      ref: TRefOverride
      onChange: TOnChangeOverride
      onBlur: TOnBlurOverride
      onFocus: TOnFocusOverride
    }>,
  ) =>
  <TFieldElement extends FieldElement = FieldElement>(
    registerProps: RegisterResult<TFieldElement>,
  ) =>
    overrideRegisterResultPropNames<
      TFieldElement,
      TRefOverride,
      TOnChangeOverride,
      TOnBlurOverride,
      TOnFocusOverride
    >(registerProps, nameOverrides)
