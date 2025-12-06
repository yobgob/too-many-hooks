import preview from '../../../../.storybook/preview'
import USE_THROTTLE_VALUE_DOCS from '../use-throttle-value-docs'
import Counter from './Counter'
import COUNTER_CODE from './Counter.tsx?raw'

const meta = preview.meta({
  title: 'useThrottleValue',
  component: Counter,
  parameters: {
    layout: 'centered',
    docs: USE_THROTTLE_VALUE_DOCS,
  },
})

export default meta

export const Counter_Example = meta.story({
  name: 'Counter',
  parameters: {
    controls: { expanded: true },
    docs: {
      source: { code: COUNTER_CODE, language: 'tsx' },
    },
  },
})
