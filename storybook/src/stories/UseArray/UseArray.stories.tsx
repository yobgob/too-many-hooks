import type { Meta, StoryObj } from '@storybook/react'
import Burger from './Burger'
import BURGER_CODE from './Burger.tsx?raw'

const meta = {
  title: 'Example/UseArray',
  tags: ['docsPage'],
} satisfies Meta

export default meta

export const BurgerStory: StoryObj<Meta<typeof Burger>> = {
  name: 'Burger',
  parameters: {
    component: Burger,
    layout: 'fullscreen',
    docs: {
      source: { code: BURGER_CODE, language: 'tsx' },
    },
  },
  render: () => <Burger />,
}
