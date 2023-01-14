import type { Meta, StoryObj } from '@storybook/react'
import Form from './Form'
import FORM_CODE from './Form.tsx?raw'
import Modal from './Modal'
import MODAL_CODE from './Modal.tsx?raw'

export const modal: StoryObj<Meta<typeof Modal>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: MODAL_CODE, language: 'tsx' },
    },
  },
  render: args => <Modal {...args} />,
}

export const form: StoryObj<Meta<typeof Form>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: FORM_CODE, language: 'tsx' },
    },
  },
  render: args => <Form {...args} />,
}
