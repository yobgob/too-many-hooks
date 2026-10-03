import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseThrottleValue/useThrottleValue.d.ts?raw'

const USE_THROTTLE_VALUE_DESCRIPTION = `
Updates a frequently-changing value only once every \`delay\`ms
`

const UseThrottleValueDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_THROTTLE_VALUE_DOCS = {
  page: UseThrottleValueDocsPage,
  description: {
    component: USE_THROTTLE_VALUE_DESCRIPTION,
  },
}

export default USE_THROTTLE_VALUE_DOCS
