import { userEvent, within } from '@storybook/testing-library'
import preview from '../../../../.storybook/preview'
import USE_TALLY_DOCS from '../use-tally-docs'
import SocialMedia from './SocialMedia'
import SOCIAL_MEDIA_CODE from './SocialMedia.tsx?raw'

const meta = preview.meta({
  title: 'useTally',
  component: SocialMedia,
  parameters: {
    layout: 'centered',
    docs: USE_TALLY_DOCS,
  },
})

export default meta

export const SocialMedia_Example = meta.story({
  name: 'Social Media',
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tallyingButton = canvas.getByTitle('like')
    userEvent.click(tallyingButton)
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      source: { code: SOCIAL_MEDIA_CODE, language: 'tsx' },
    },
  },
  args: { step: 1 },
})
