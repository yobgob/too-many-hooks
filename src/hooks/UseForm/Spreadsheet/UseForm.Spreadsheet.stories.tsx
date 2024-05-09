import { Meta, StoryObj } from '@storybook/react'
import Spreadsheet, { RowFormData, SpreadsheetErrors } from './Spreadsheet'
import SPREADSHEET_CODE from './Spreadsheet.tsx?raw'

type FormMeta = Meta<typeof Spreadsheet>

export default {
  title: 'useForm/Spreadsheet',
  component: Spreadsheet,
} satisfies FormMeta

export const spreadsheet: StoryObj<FormMeta> = {
  name: 'Spreadsheet',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: SPREADSHEET_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    onSubmit: {
      action: (data: RowFormData) => data,
    },
    onError: {
      action: (errors: SpreadsheetErrors) => errors,
    },
  },
  render: args => <Spreadsheet {...args} />,
}
