import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import preview from '../../../../.storybook/preview'
import USE_MATCH_MEDIA_DOCS from '../use-match-media-docs'
import ScreenSize from './ScreenSize'
import SCREEN_SIZE_CODE from './ScreenSize.tsx?raw'

const meta = preview.meta({
  title: 'useMatchMedia',
  component: ScreenSize,
  parameters: {
    layout: 'centered',
    docs: USE_MATCH_MEDIA_DOCS,
  },
})

export default meta

export const ScreenSize_Example = meta.story({
  name: 'Screen Size',
  parameters: {
    docs: {
      source: { code: SCREEN_SIZE_CODE, language: 'tsx' },
    },
    viewport: { options: INITIAL_VIEWPORTS, defaultViewport: 'iphone14' },
  },
  args: {
    minWidth: '0px',
    maxWidth: '390px',
  },
})
