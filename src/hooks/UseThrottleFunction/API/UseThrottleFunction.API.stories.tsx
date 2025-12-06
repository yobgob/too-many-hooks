import preview from '../../../../.storybook/preview'
import USE_THROTTLE_FUNCTION_DOCS from '../use-throttle-function-docs'
import API from './API'
import API_CODE from './API.tsx?raw'
import COUNTRIES from './assets/countries.json'

const meta = preview.meta({
  title: 'useThrottleFunction',
  component: API,
  parameters: {
    layout: 'centered',
    docs: USE_THROTTLE_FUNCTION_DOCS,
  },
})

export default meta

export const API_Example = meta.story({
  name: 'API Call',
  parameters: {
    controls: { expanded: true },
    docs: {
      source: { code: API_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    countryCode: {
      options: Object.keys(COUNTRIES),
      control: { type: 'select', labels: COUNTRIES },
    },
  },
  args: { firstName: '', countryCode: 'US' },
})
