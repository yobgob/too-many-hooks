import type { Meta, StoryObj } from '@storybook/react'
import Resize from './Resize'
import RESIZE_CODE from './Resize.tsx?raw'

type ResizeMeta = Meta<typeof Resize>

export default {
  title: 'useWindowListener/Resize',
  component: Resize,
} satisfies ResizeMeta

export const resize: StoryObj<ResizeMeta> = {
  name: 'Resize',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: RESIZE_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    addResizeAction: {
      action: (...data: unknown[]) => data,
    },
  },
  render: args => <Resize {...args} />,
}
