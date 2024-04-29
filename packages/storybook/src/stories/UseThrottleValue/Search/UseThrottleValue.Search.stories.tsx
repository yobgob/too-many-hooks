import type { Meta, StoryObj } from '@storybook/react'
import Search from './Search'
import SEARCH_CODE from './Search.tsx?raw'

type SearchMeta = Meta<typeof Search>

const meta: SearchMeta = {
  title: 'UseThrottleValue',
  component: Search,
}
export default meta

export const search: StoryObj<SearchMeta> = {
  name: 'Search',
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      source: { code: SEARCH_CODE, language: 'tsx' },
    },
  },
  args: {
    search: '',
  },
  render: args => <Search {...args} />,
}
