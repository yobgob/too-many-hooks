import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseResizeObserver/useResizeObserver.d.ts?raw'

const USE_RESIZE_OBSERVER_DESCRIPTION = `
Handles adding and removing a \`ResizeObserver\` to observe an element and return the most recent \`ResizeObserverEntry\`
`

const UseResizeObserverDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_RESIZE_OBSERVER_DOCS = {
  page: UseResizeObserverDocsPage,
  description: {
    component: USE_RESIZE_OBSERVER_DESCRIPTION,
  },
}

export default USE_RESIZE_OBSERVER_DOCS
