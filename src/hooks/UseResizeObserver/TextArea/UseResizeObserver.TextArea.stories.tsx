import { action } from 'storybook/actions'
import preview from '../../../../.storybook/preview'
import USE_RESIZE_OBSERVER_DOCS from '../use-resize-observer-docs'
import TextArea from './TextArea'
import TEXT_AREA_CODE from './TextArea.tsx?raw'

const meta = preview.meta({
  title: 'useResizeObserver',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: USE_RESIZE_OBSERVER_DOCS,
  },
})

export default meta

export const TextArea_Example = meta.story({
  name: 'Text Area',
  parameters: {
    docs: {
      source: { code: TEXT_AREA_CODE, language: 'tsx' },
    },
  },
  args: {
    onResize: (name?: string | null) => {
      action('onResize')(name)
      return name || ''
    },
  },
})
