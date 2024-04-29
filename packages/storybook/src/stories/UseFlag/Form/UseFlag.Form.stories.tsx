import { Meta, StoryObj } from '@storybook/react'
import Form from './Form'
import FORM_CODE from './Form.tsx?raw'

type FormMeta = Meta<typeof Form>

export default {
  title: 'useFlag/Examples/Form',
  component: Form,
} satisfies FormMeta

export const form: StoryObj<FormMeta> = {
  name: 'Form',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: FORM_CODE, language: 'tsx' },
    },
  },
  render: args => <Form {...args} />,
}
