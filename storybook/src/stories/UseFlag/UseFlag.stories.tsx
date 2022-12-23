import type { Meta, StoryObj } from '@storybook/react'
import Form_ from './Form'
import FORM_CODE from './Form.tsx?raw'
import Modal_ from './Modal'
import MODAL_CODE from './Modal.tsx?raw'

const meta = {
  title: 'Example/UseFlag',
  tags: ['docsPage'],
} satisfies Meta

export default meta

export const Modal: StoryObj<Meta<typeof Modal_>> = {
  parameters: {
    component: Modal_,
    layout: 'fullscreen',
    docs: {
      source: { code: MODAL_CODE, language: 'tsx' },
    },
  },
  render: () => <Modal_ />,
}

export const Form: StoryObj<Meta<typeof Form_>> = {
  parameters: {
    component: Form_,
    layout: 'centered',
    docs: {
      source: { code: FORM_CODE, language: 'tsx' },
    },
  },
  render: () => <Form_ />,
}
