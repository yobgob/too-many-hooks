import type { Meta, StoryObj } from '@storybook/react'
import Attributes from '.'
import ATTRIBUTES_CODE from './Attributes.tsx?raw'

type AttributesMeta = Meta<typeof Attributes>

const meta: AttributesMeta = {
  title: 'UseMutationObserver',
  component: Attributes,
}
export default meta

export const attributes: StoryObj<Meta<typeof Attributes>> = {
  name: 'Attributes',
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
