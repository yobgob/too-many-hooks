import type { Meta, StoryObj } from '@storybook/react'
import TextArea from './TextArea'
import TEXT_AREA_CODE from './TextArea.tsx?raw'

type TextAreaMeta = Meta<typeof TextArea>

const meta: TextAreaMeta = {
  title: 'UseResizeObserver',
  component: TextArea,
}
export default meta

export const textArea: StoryObj<TextAreaMeta> = {
  name: 'Text Area',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: TEXT_AREA_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    onResize: {
      action: (name: string) => name,
    },
  },
  render: args => <TextArea {...args} />,
}
