import preview from '../../../../.storybook/preview'
import USE_THROTTLE_VALUE_DOCS from '../use-throttle-value-docs'
import Search from './Search'
import SEARCH_CODE from './Search.tsx?raw'

const meta = preview.meta({
  title: 'useThrottleValue',
  component: Search,
  parameters: {
    layout: 'centered',
    docs: USE_THROTTLE_VALUE_DOCS,
  },
})

export default meta

export const Search_Example = meta.story({
  name: 'Search',
  parameters: {
    controls: { expanded: true },
    docs: {
      source: { code: SEARCH_CODE, language: 'tsx' },
    },
  },
  args: { search: '' },
})
