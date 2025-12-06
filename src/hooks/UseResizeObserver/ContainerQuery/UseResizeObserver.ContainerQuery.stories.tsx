import preview from '../../../../.storybook/preview'
import USE_RESIZE_OBSERVER_DOCS from '../use-resize-observer-docs'
import ContainerQuery from './ContainerQuery'
import CONTAINER_QUERY_CODE from './ContainerQuery.tsx?raw'

const meta = preview.meta({
  title: 'useResizeObserver',
  component: ContainerQuery,
  parameters: {
    layout: 'centered',
    docs: USE_RESIZE_OBSERVER_DOCS,
  },
})

export default meta

export const ContainerQuery_Example = meta.story({
  name: 'Container Query',
  parameters: {
    docs: {
      source: { code: CONTAINER_QUERY_CODE, language: 'tsx' },
    },
  },
})
