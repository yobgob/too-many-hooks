import { Meta, StoryObj } from '@storybook/react'
import Burger from './Burger'
import BURGER_CODE from './Burger.tsx?raw'

type BurgerMeta = Meta<typeof Burger>

export default {
  title: 'UseArray/Examples/Burger',
  component: Burger,
} satisfies BurgerMeta

export const burger: StoryObj<BurgerMeta> = {
  name: 'Burger',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: 'white' }],
    },
    docs: {
      source: { code: BURGER_CODE, language: 'tsx' },
    },
  },
  render: args => <Burger {...args} />,
}
