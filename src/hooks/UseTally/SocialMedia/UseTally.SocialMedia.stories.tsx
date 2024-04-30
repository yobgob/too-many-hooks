import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import SocialMedia from './SocialMedia'
import SOCIAL_MEDIA_CODE from './SocialMedia.tsx?raw'

type SocialMediaMeta = Meta<typeof SocialMedia>

export default {
  title: 'useTally/SocialMedia',
  component: SocialMedia,
} satisfies SocialMediaMeta

export const socialMedia: StoryObj<SocialMediaMeta> = {
  name: 'Social Media',
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
    step: { type: 'number' },
    incrementStep: { type: 'number' },
    decrementStep: { type: 'number' },
  },
  args: {
    step: 1,
  },
  render: args => <SocialMedia {...args} />,
}
