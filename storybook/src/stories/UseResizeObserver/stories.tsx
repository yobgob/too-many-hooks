import type { Meta, StoryObj } from '@storybook/react'
import ContainerQuery from './ContainerQuery'
import CONTAINER_QUERY_CODE from './ContainerQuery.tsx?raw'
import TextArea from './TextArea'
import TEXT_AREA_CODE from './TextArea.tsx?raw'

export const textArea: StoryObj<Meta<typeof TextArea>> = {
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

export const containerQuery: StoryObj<Meta<typeof ContainerQuery>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: CONTAINER_QUERY_CODE, language: 'tsx' },
    },
  },
  render: args => <ContainerQuery {...args} />,
}
