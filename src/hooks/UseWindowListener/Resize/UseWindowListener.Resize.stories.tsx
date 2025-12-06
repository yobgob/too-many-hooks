import { action } from 'storybook/actions'
import preview from '../../../../.storybook/preview'
import USE_WINDOW_LISTENER_DOCS from '../use-window-listener-docs'
import Resize from './Resize'
import RESIZE_CODE from './Resize.tsx?raw'

const meta = preview.meta({
  title: 'useWindowListener',
  component: Resize,
  parameters: {
    layout: 'centered',
    docs: USE_WINDOW_LISTENER_DOCS,
  },
})

export default meta

export const Resize_Example = meta.story({
  name: 'Resize',
  parameters: {
    docs: {
      source: { code: RESIZE_CODE, language: 'tsx' },
    },
  },
  args: {
    addResizeAction: (...data: unknown[]) => action('addResizeAction')(...data),
  },
})
