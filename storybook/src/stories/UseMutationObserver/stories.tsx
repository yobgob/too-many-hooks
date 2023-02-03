import type { Meta, StoryObj } from '@storybook/react'
import Attributes from './Attributes'
import ATTRIBUTES_CODE from './Attributes.tsx?raw'

export const attributes: StoryObj<Meta<typeof Attributes>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: ATTRIBUTES_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    attribute: {
      type: 'string',
    },
    attributeMutation: {
      action: (name: string) => name,
    },
  },
  render: args => <Attributes {...args} />,
}
