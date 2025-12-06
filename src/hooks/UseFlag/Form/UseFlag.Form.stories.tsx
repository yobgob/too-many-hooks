import preview from '../../../../.storybook/preview'
import USE_FLAG_DOCS from '../use-flag-docs'
import Form from './Form'
import FORM_CODE from './Form.tsx?raw'

const meta = preview.meta({
  title: 'useFlag',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: USE_FLAG_DOCS,
  },
})

export default meta

export const Form_Example = meta.story({
  name: 'Form',
  parameters: {
    docs: {
      source: { code: FORM_CODE, language: 'tsx' },
    },
  },
})
