import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseFlexCorners/useFlexCorners.d.ts?raw'

const USE_FLEX_CORNERS_DESCRIPTION = `
Dynamic selection of elements laid out with wrapping flex, enabling styling elements that are not selectable with CSS alone.
`

const UseFlexCornersDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_FLEX_CORNERS_DOCS = {
  page: UseFlexCornersDocsPage,
  description: {
    component: USE_FLEX_CORNERS_DESCRIPTION,
  },
}

export default USE_FLEX_CORNERS_DOCS
