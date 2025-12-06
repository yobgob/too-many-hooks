import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import PUBLIC_TYPES from '../../../dist/hooks/UseForm/useForm/types/public.d.ts?raw'
import HOOK_TYPES from '../../../dist/hooks/UseForm/useForm/useForm.d.ts?raw'

const USE_FORM_DESCRIPTION = `
Manage state, validations, and submission for forms with any number of dimensions

## Utilities

The \`useForm\` hook comes with \`buildRegisterOverride\` - a utility for transforming the results of the \`register\` function to have custom keys, so it can be used custom input components regardless of prop names.
All that is required to register a field is a component with \`ref\`, \`onChange\`, \`onBlur\`, and \`onFocus\` props by any name.
`

const UseFormDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={HOOK_TYPES} language="typescript" />
    <Source code={PUBLIC_TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_FORM_DOCS = {
  page: UseFormDocsPage,
  description: {
    component: USE_FORM_DESCRIPTION,
  },
}

export default USE_FORM_DOCS
