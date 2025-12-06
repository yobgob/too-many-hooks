import preview from '../../../../.storybook/preview'
import USE_ARRAY_DOCS from '../use-array-docs'
import Burger from './Burger'
import BURGER_CODE from './Burger.tsx?raw'

const meta = preview.meta({
  title: 'useArray',
  component: Burger,
  parameters: {
    layout: 'centered',
    docs: USE_ARRAY_DOCS,
  },
})

export default meta

export const Burger_Example = meta.story({
  name: 'Burger',
  parameters: {
    backgrounds: { default: 'light', values: [{ name: 'light', value: 'white' }] },
    docs: {
      source: { code: BURGER_CODE, language: 'tsx' },
    },
  },
})
