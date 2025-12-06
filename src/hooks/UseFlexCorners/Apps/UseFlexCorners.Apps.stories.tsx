import preview from '../../../../.storybook/preview'
import USE_FLEX_CORNERS_DOCS from '../use-flex-corners-docs'
import Apps from './Apps'
import APPS_CODE from './Apps.tsx?raw'

const meta = preview.meta({
  title: 'useFlexCorners',
  component: Apps,
  parameters: {
    layout: 'centered',
    docs: USE_FLEX_CORNERS_DOCS,
  },
})

export default meta

export const Apps_Example = meta.story({
  name: 'Apps',
  parameters: {
    docs: {
      source: { code: APPS_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    flexWrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
    },
    alignContent: {
      control: { type: 'select' },
      options: [
        'start',
        'end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
      ],
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
})
