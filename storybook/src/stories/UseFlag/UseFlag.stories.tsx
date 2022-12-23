import type { Meta, StoryObj } from '@storybook/react'
import Form from './Form'
import FORM_CODE from './Form.tsx?raw'
import Modal from './Modal'
import MODAL_CODE from './Modal.tsx?raw'

const meta = {
  title: 'Example/UseFlag',
  tags: ['docsPage'],
} satisfies Meta

export default meta

export const ModalStory: StoryObj<Meta<typeof Modal>> = {
  name: 'Modal',
  parameters: {
    component: Modal,
    layout: 'fullscreen',
    docs: {
      source: { code: MODAL_CODE, language: 'tsx' },
    },
  },
  render: () => <Modal />,
}

export const FormStory: StoryObj<Meta<typeof Form>> = {
  name: 'Form',
  parameters: {
    component: Form,
    layout: 'centered',
    docs: {
      source: { code: FORM_CODE, language: 'tsx' },
    },
  },
  render: () => <Form />,
}
