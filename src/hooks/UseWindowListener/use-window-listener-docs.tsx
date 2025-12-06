import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseWindowListener/useWindowListener.d.ts?raw'

const USE_WINDOW_LISTENER_DESCRIPTION = `
Handles adding and removing a listener on the window in a \`useEffect\`
`

const UseWindowListenerDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_WINDOW_LISTENER_DOCS = {
  page: UseWindowListenerDocsPage,
  description: {
    component: USE_WINDOW_LISTENER_DESCRIPTION,
  },
}

export default USE_WINDOW_LISTENER_DOCS
