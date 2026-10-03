import { action } from 'storybook/actions'
import preview from '../../../../.storybook/preview'
import USE_WINDOW_LISTENER_DOCS from '../use-window-listener-docs'
import MouseMove from './MouseMove'
import MOUSE_MOVE_CODE from './MouseMove.tsx?raw'

const meta = preview.meta({
  title: 'useWindowListener',
  component: MouseMove,
  parameters: {
    layout: 'centered',
    docs: USE_WINDOW_LISTENER_DOCS,
  },
})

export default meta

export const MouseMove_Example = meta.story({
  name: 'Mouse Move',
  parameters: {
    docs: {
      source: { code: MOUSE_MOVE_CODE, language: 'tsx' },
    },
  },
  args: {
    addMouseMoveAction: (...data: unknown[]) => action('addMouseMoveAction')(...data),
  },
})
