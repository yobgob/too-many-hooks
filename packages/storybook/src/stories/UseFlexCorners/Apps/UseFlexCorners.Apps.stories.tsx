import type { Meta, StoryObj } from '@storybook/react'
import Apps from './Apps'
import APPS_CODE from './Apps.tsx?raw'

type AppsMeta = Meta<typeof Apps>

const meta: AppsMeta = {
  title: 'UseFlexCorners',
  component: Apps,
}
export default meta

export const apps: StoryObj<AppsMeta> = {
  name: 'Apps',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: { code: APPS_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    flexWrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: { type: 'select' },
    },
    flexDirection: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['start', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'select' },
    },
    alignItems: {
      options: ['stretch', 'center', 'start', 'end'],
      control: { type: 'select' },
    },
    alignContent: {
      options: ['start', 'center', 'space-between', 'space-around'],
      control: { type: 'select' },
    },
  },
  args: {
    itemCount: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'stretch',
    alignContent: 'start',
  },
  render: args => <Apps {...args} />,
}
