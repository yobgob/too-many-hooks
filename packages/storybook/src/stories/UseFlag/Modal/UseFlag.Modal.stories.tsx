import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import Modal from './Modal'
import MODAL_CODE from './Modal.tsx?raw'

type ModalMeta = Meta<typeof Modal>

export default {
  title: 'UseFlag/Examples/Modal',
  component: Modal,
} satisfies ModalMeta

export const modal: StoryObj<ModalMeta> = {
  name: 'Modal',
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
