import type { Meta, StoryObj } from '@storybook/react'
import Counter from './Counter'
import COUNTER_CODE from './Counter/Counter.tsx?raw'
import Search from './Search'
import SEARCH_CODE from './Search.tsx?raw'

export const counter: StoryObj<Meta<typeof Counter>> = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      source: { code: COUNTER_CODE, language: 'tsx' },
    },
  },
  render: args => <Counter {...args} />,
}

export const search: StoryObj<Meta<typeof Search>> = {
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
