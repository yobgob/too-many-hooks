import type { Meta, StoryObj } from '@storybook/react'
import UseFlagForm from './UseFlagForm'
import useFlagFormCode from './UseFlagForm.tsx?raw'
import UseFlagModal from './UseFlagModal'
import useFlagModalCode from './UseFlagModal.tsx?raw'

const meta = {
  title: 'Example/UseFlag',
  tags: ['docsPage'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Modal: Story = {
  parameters: {
    component: UseFlagModal,
    layout: 'fullscreen',
    docs: {
      source: { code: useFlagModalCode, language: 'tsx' },
    },
  },
  render: () => <UseFlagModal />,
}

export const Form: Story = {
  parameters: {
    component: UseFlagForm,
    layout: 'centered',
    docs: {
      source: { code: useFlagFormCode, language: 'tsx' },
    },
  },
  render: () => <UseFlagForm />,
}
