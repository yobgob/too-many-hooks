import type { Meta, StoryObj } from '@storybook/react'
import MouseMove from './MouseMove'
import MOUSE_MOVE_CODE from './MouseMove.tsx?raw'

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
