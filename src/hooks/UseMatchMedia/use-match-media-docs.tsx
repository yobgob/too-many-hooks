import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseMatchMedia/useMatchMedia.d.ts?raw'

const USE_MATCH_MEDIA_DESCRIPTION = `
Track whether a media query is matching or not
`

const UseMatchMediaDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_MATCH_MEDIA_DOCS = {
  page: UseMatchMediaDocsPage,
  description: {
    component: USE_MATCH_MEDIA_DESCRIPTION,
  },
}

export default USE_MATCH_MEDIA_DOCS
