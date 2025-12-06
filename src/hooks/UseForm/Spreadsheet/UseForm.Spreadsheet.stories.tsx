import { action } from 'storybook/actions'
import preview from '../../../../.storybook/preview'
import USE_FORM_DOCS from '../use-form-docs'
import type { Errors, FormData } from '../useForm'
import type { SpreadsheetFormData } from './Spreadsheet'
import Spreadsheet from './Spreadsheet'
import SPREADSHEET_CODE from './Spreadsheet.tsx?raw'

const meta = preview.meta({
  title: 'useForm',
  component: Spreadsheet,
  parameters: {
    layout: 'centered',
    docs: USE_FORM_DOCS,
  },
})

export default meta

export const Spreadsheet_Example = meta.story({
  name: 'Spreadsheet',
  args: {
    onSubmit: (data: FormData<SpreadsheetFormData, 1>) => {
      action('onSubmit')(data)
      return data
    },
    onError: (errors: FormData<Errors<SpreadsheetFormData>, 1>) => {
      action('onError')(errors)
      return errors
    },
  },
  parameters: { docs: { source: { code: SPREADSHEET_CODE, language: 'tsx' } } },
})
