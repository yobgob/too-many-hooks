import type { Meta, StoryObj } from '@storybook/react'
import Bookshelf from './Bookshelf'
import BOOKSHELF_CODE from './Bookshelf/Bookshelf.tsx?raw'
import Burger from './Burger'
import BURGER_CODE from './Burger/Burger.tsx?raw'

export const burger: StoryObj<Meta<typeof Burger>> = {
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

export const bookshelf: StoryObj<Meta<typeof Bookshelf>> = {
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: BOOKSHELF_CODE, language: 'tsx' },
    },
  },
  render: args => <Bookshelf {...args} />,
}
