import type { Meta, StoryObj } from '@storybook/react'
import Burger from './Burger'
import BURGER_CODE from './Burger.tsx?raw'

export const burger: StoryObj<Meta<typeof Burger>> = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: { code: BURGER_CODE, language: 'tsx' },
    },
  },
  render: args => <Burger {...args} />,
}
