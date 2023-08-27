import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import Form from './Form'
import FORM_CODE from './Form.tsx?raw'
import Modal from './Modal'
import MODAL_CODE from './Modal.tsx?raw'

export const modal: StoryObj<Meta<typeof Modal>> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const openModalButton = canvas.getByTestId('open-button')
    userEvent.click(openModalButton)

    const body = within(document.body)

    waitFor(async () => {
      const canvasText = body.getByTestId('modal-text')
      expect(canvasText).toBeInTheDocument()

      waitFor(async () => {
        const closeModalButton = body.getByTitle('Close')
        userEvent.click(closeModalButton)

        waitFor(async () => {
          expect(canvasText).not.toBeInTheDocument()
        })
      })
    })
  },
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
