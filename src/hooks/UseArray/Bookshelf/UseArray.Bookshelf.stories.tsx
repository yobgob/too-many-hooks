import preview from '../../../../.storybook/preview'
import USE_ARRAY_DOCS from '../use-array-docs'
import Bookshelf from './Bookshelf'
import BOOKSHELF_CODE from './Bookshelf.tsx?raw'

const meta = preview.meta({
  title: 'useArray',
  component: Bookshelf,
  parameters: {
    layout: 'centered',
    docs: USE_ARRAY_DOCS,
  },
})

export default meta

export const Bookshelf_Example = meta.story({
  name: 'Bookshelf',
  parameters: {
    docs: {
      source: { code: BOOKSHELF_CODE, language: 'tsx' },
    },
  },
})
