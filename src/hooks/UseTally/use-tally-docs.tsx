import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseTally/useTally.d.ts?raw'

const USE_TALLY_DESCRIPTION = `
Increment and decrement numeric state
`

const UseTallyDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_TALLY_DOCS = {
  page: UseTallyDocsPage,
  description: {
    component: USE_TALLY_DESCRIPTION,
  },
}

export default USE_TALLY_DOCS
