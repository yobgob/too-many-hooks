import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import SocialMedia from './SocialMedia'
import SOCIAL_MEDIA_CODE from './SocialMedia/SocialMedia.tsx?raw'

export const socialMedia: StoryObj<Meta<typeof SocialMedia>> = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tallyingButton = canvas.getByTitle('like')
    userEvent.click(tallyingButton)
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      source: { code: SOCIAL_MEDIA_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    step: { type: 'number', defaultValue: 1 },
    incrementStep: { type: 'number' },
    decrementStep: { type: 'number' },
  },
  render: args => <SocialMedia {...args} />,
}
