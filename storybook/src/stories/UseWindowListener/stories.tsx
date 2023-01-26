import type { Meta, StoryObj } from '@storybook/react'
import MouseMove from './MouseMove'
import MOUSE_MOVE_CODE from './MouseMove.tsx?raw'
import Resize from './Resize'
import RESIZE_CODE from './Resize.tsx?raw'

export const mouseMove: StoryObj<Meta<typeof MouseMove>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: MOUSE_MOVE_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    onMouseMove: {
      action: (name: string) => name,
    },
  },
  render: args => <MouseMove {...args} />,
}

export const resize: StoryObj<Meta<typeof Resize>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: RESIZE_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    onResize: {
      action: (name: string) => name,
    },
  },
  render: args => <Resize {...args} />,
}
