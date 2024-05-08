import type { Meta, StoryObj } from '@storybook/react'
import Counter from './Counter'
import COUNTER_CODE from './Counter.tsx?raw'

type CounterMeta = Meta<typeof Counter>

export default {
  title: 'useThrottleValue/Counter',
  component: Counter,
} satisfies CounterMeta

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
