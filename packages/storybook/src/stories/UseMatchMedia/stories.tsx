import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Meta, StoryObj } from '@storybook/react'
import ScreenSize from './ScreenSize'
import SCREEN_SIZE_CODE from './ScreenSize.tsx?raw'

export const screenSize: StoryObj<Meta<typeof ScreenSize>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: SCREEN_SIZE_CODE, language: 'tsx' },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone14',
    },
  },

  argTypes: {
    minWidth: {
      type: 'string',
    },
    maxWidth: {
      type: 'string',
    },
  },
  args: {
    minWidth: '0px',
    maxWidth: '390px',
  },
  render: args => <ScreenSize {...args} />,
}
