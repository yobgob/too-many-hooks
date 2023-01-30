import type { Meta, StoryObj } from '@storybook/react'
import API from './API'
import API_CODE from './API/API.tsx?raw'
import COUNTRIES from './API/assets/countries.json'

export const api: StoryObj<Meta<typeof API>> = {
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
