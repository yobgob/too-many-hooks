import { Meta, StoryObj } from '@storybook/react'
import Bookshelf from './Bookshelf'
import BOOKSHELF_CODE from './Bookshelf.tsx?raw'

type BookshelfMeta = Meta<typeof Bookshelf>

export default {
  title: 'UseArray',
  component: Bookshelf,
} satisfies BookshelfMeta

export const bookshelf: StoryObj<BookshelfMeta> = {
  name: 'Bookshelf',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: BOOKSHELF_CODE, language: 'tsx' },
    },
  },
  render: args => <Bookshelf {...args} />,
}
