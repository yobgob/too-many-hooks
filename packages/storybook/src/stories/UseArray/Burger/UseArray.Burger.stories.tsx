import { Meta, StoryObj } from '@storybook/react'
import Burger from './Burger'
import BURGER_CODE from './Burger.tsx?raw'

type BurgerMeta = Meta<typeof Burger>

const meta: BurgerMeta = {
  title: 'UseArray',
  component: Burger,
}
export default meta

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
