import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseThrottleFunction/useThrottleFunction.d.ts?raw'

const USE_THROTTLE_FUNCTION_DESCRIPTION = `
Ensures a function is called whenever its args change, at most once every \`delay\`ms.
Immediately calls then function then re-calls the function and updates the result whenever the args change, at most once every \`delay\`ms.
`

const UseThrottleFunctionDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_THROTTLE_FUNCTION_DOCS = {
  page: UseThrottleFunctionDocsPage,
  description: {
    component: USE_THROTTLE_FUNCTION_DESCRIPTION,
  },
}

export default USE_THROTTLE_FUNCTION_DOCS
