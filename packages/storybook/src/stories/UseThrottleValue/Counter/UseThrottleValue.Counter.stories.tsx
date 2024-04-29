import type { Meta, StoryObj } from '@storybook/react'
import Counter from './Counter'
import COUNTER_CODE from './Counter.tsx?raw'

type CounterMeta = Meta<typeof Counter>

const meta: CounterMeta = {
  title: 'UseThrottleValue',
  component: Counter,
}
export default meta

export const counter: StoryObj<CounterMeta> = {
  name: 'Counter',
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      source: { code: COUNTER_CODE, language: 'tsx' },
    },
  },
  render: args => <Counter {...args} />,
}
