import { action } from 'storybook/actions'
import Attributes from '.'
import preview from '../../../../.storybook/preview'
import USE_MUTATION_OBSERVER_DOCS from '../use-mutation-observer-docs'
import ATTRIBUTES_CODE from './Attributes.tsx?raw'

const meta = preview.meta({
  title: 'useMutationObserver',
  component: Attributes,
  parameters: {
    layout: 'centered',
    docs: USE_MUTATION_OBSERVER_DOCS,
  },
})

export default meta

export const Attributes_Example = meta.story({
  name: 'Attributes',
  parameters: {
    docs: {
      source: { code: ATTRIBUTES_CODE, language: 'tsx' },
    },
  },
  args: {
    attribute: 'example',
    attributeMutation: (name: string) => action('attributeMutation')(name),
  },
})
