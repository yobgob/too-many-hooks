import { Meta, StoryObj } from '@storybook/react'
import { IGraph } from '../../UseGraph/Graph'
import { Errors } from '../useForm'
import Spreadsheet, { SpreadsheetFormData } from './Spreadsheet'
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
      action: (data: IGraph<SpreadsheetFormData, 1>) => data,
    },
    onError: {
      action: (errors: IGraph<Errors<SpreadsheetFormData>, 1>) => errors,
    },
  },
  render: args => <Spreadsheet {...args} />,
}
