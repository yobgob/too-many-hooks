import type { Meta, StoryObj } from '@storybook/react'
import { UseFlag } from './UseFlag'
import description from './UseFlag.mdx'

const meta = {
  title: 'Example/UseFlag',
  component: UseFlag,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    docs: {
      title: 'useFlag',
      description: {
        component: description,
      },
    },
  },
  tags: ['docsPage'],
} satisfies Meta<typeof UseFlag>

export default meta

type Story = StoryObj<typeof meta>

export const Modal: Story = {}
