import { FieldElement, ObjectKey, RegisterResult } from '../types'
import { overrideRegisterResultPropNames } from './internal'

export /**
 * Builds a function which overrides the names of the component props returned by the `useForm` `register` function
 *
 * @template {ObjectKey} [TRefOverride='ref']
 * @template {ObjectKey} [TOnChangeOverride='onChange']
 * @template {ObjectKey} [TOnBlurOverride='onBlur']
 * @template {ObjectKey} [TOnFocusOverride='onFocus']
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
    TRefOverride extends ObjectKey = 'ref',
    TOnChangeOverride extends ObjectKey = 'onChange',
    TOnBlurOverride extends ObjectKey = 'onBlur',
    TOnFocusOverride extends ObjectKey = 'onFocus',
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
