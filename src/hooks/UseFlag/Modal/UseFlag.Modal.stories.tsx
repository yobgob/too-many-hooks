import { expect } from '@storybook/jest'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import preview from '../../../../.storybook/preview'
import USE_FLAG_DOCS from '../use-flag-docs'
import Modal from './Modal'
import MODAL_CODE from './Modal.tsx?raw'

const meta = preview.meta({
  title: 'useFlag',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: USE_FLAG_DOCS,
  },
})

export default meta

export const Modal_Example = meta.story({
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
    docs: {
      source: { code: MODAL_CODE, language: 'tsx' },
    },
  },
})
