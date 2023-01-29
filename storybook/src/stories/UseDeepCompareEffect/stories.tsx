import type { Meta, StoryObj } from '@storybook/react'
import API from './API'
import API_CODE from './API/API.tsx?raw'
import COUNTRY_CODES from './API/countryCodes.json'

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
    countryKey: {
      options: Object.keys(COUNTRY_CODES),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    firstName: '',
    countryKey: 'United States',
  },
  render: args => <API {...args} />,
}
