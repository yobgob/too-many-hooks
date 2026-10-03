import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseMutationObserver/useMutationObserver.d.ts?raw'

const USE_MUTATION_OBSERVER_DESCRIPTION = `
A wrapper of a \`MutationObserver\` which returns an array of mutation records, allowing code to watch for changes to elements.
`

const UseMutationObserverDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_MUTATION_OBSERVER_DOCS = {
  page: UseMutationObserverDocsPage,
  description: {
    component: USE_MUTATION_OBSERVER_DESCRIPTION,
  },
}

export default USE_MUTATION_OBSERVER_DOCS
