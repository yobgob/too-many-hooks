import type { Meta, StoryObj } from '@storybook/react'
import Grid from './Grid'
import GRID_CODE from './Grid.tsx?raw'

export const grid: StoryObj<Meta<typeof Grid>> = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: { code: GRID_CODE, language: 'tsx' },
    },
  },
  render: args => <Grid {...args} />,
}
