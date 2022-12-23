import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { UseCount } from './UseCount'
import description from './UseCount.mdx'

const meta = {
  title: 'Example/UseCount',
  component: UseCount,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      title: 'useCount',
      description: {
        component: description,
      },
    },
  },
  tags: ['docsPage'],
} satisfies Meta<typeof UseCount>

export default meta

type Story = StoryObj<typeof meta>

export const LikesAndDislikes: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const countingButton = canvas.getByTitle('like')
    userEvent.click(countingButton)
  },
}
