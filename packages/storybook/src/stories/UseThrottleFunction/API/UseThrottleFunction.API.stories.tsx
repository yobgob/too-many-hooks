import type { Meta, StoryObj } from '@storybook/react'
import API from './API'
import API_CODE from './API.tsx?raw'
import COUNTRIES from './assets/countries.json'

type APIMeta = Meta<typeof API>

const meta: APIMeta = {
  title: 'UseThrottleFunction',
  component: API,
}
export default meta

export const api: StoryObj<APIMeta> = {
  name: 'API Call',
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      source: { code: API_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    firstName: { type: 'string' },
    countryCode: {
      options: Object.keys(COUNTRIES),
      control: {
        type: 'select',
        labels: COUNTRIES,
      },
    },
  },
  args: {
    firstName: '',
    countryCode: 'US',
  },
  render: args => <API {...args} />,
}
