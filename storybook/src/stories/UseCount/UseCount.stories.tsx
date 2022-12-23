import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import SocialMedia from './SocialMedia'
import SOCIAL_MEDIA_CODE from './SocialMedia.tsx?raw'

const meta = {
  title: 'Example/UseCount',
  tags: ['docsPage'],
} satisfies Meta

export default meta

export const SocialMediaStory: StoryObj<Meta<typeof SocialMedia>> = {
  name: 'Social Media',
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const countingButton = canvas.getByTitle('like')
    userEvent.click(countingButton)
  },
  parameters: {
    component: SocialMedia,
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      source: { code: SOCIAL_MEDIA_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    step: { type: 'number' },
    incrementStep: { type: 'number' },
    decrementStep: { type: 'number' },
  },
  render: args => <SocialMedia {...args} />,
}
