import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseFlag/useFlag.d.ts?raw'

const USE_FLAG_DESCRIPTION = `
Simply manage boolean state
`

const UseFlagDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_FLAG_DOCS = {
  page: UseFlagDocsPage,
  description: {
    component: USE_FLAG_DESCRIPTION,
  },
}

export default USE_FLAG_DOCS
