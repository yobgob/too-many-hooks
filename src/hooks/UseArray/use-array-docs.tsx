import { Description, Source, Stories, Title } from '@storybook/addon-docs/blocks'
import TYPES from '../../../dist/hooks/UseArray/useArray.d.ts?raw'

const USE_ARRAY_DESCRIPTION = `
Wrap array state with powerful helper functions for simpler updates

## Functions

- \`set\` - The default React state setter for the entire array.
- \`clear\` - Empties the array.
- \`reset\` - Resets the array to its initial value.
- \`push\` - Adds element(s) to the end of the array.
- \`insertAt\` - Inserts element(s) at an index, shifting the remaining elements right. If the index is out of range the elements are pushed to the end.
- \`removeAt\` - Removes an element at an index, shifting the remaining elements left. If the index is out of range, no change occurs.
- \`removeWhere\` - Removes elements from the array that meet a condition. Like JS \`Array.filter\` with the results applied to the array state.
- \`trimToRange\` - Removes elements from the array outside of a certain range. Like JS \`Array.slice\` with the results applied to the array state
- \`updateAt\` - Updates element(s) at an index. For each additional element, subsequent elements are updated.
- \`updateWhere\` - Updates element(s) that match a predicate.
- \`updateAll\` - The same functionality as JS Array.map with the results applied to the array state
- \`sort\` - Sorts the array by comparing each element. Like JS \`Array.sort\` with the results applied to the array state.
- \`reverse\` - Reverses the order of the elements in the array. Like JS \`Array.reverse\` with the results applied to the array state.

## Examples

See the stories for interactive examples of \`useArray\` in action.
`

const UseArrayDocsPage = () => (
  <>
    <Title />
    <Description />
    <Source code={TYPES} language="typescript" />
    <Stories />
  </>
)

const USE_ARRAY_DOCS = {
  page: UseArrayDocsPage,
  description: {
    component: USE_ARRAY_DESCRIPTION,
  },
}

export default USE_ARRAY_DOCS
