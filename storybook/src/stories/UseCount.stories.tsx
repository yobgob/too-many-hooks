import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import dedent from 'ts-dedent'

import { UseCount } from './UseCount'

const DESCRIPTION = dedent`
Easily manages state for a value that is incremented or decremented
<br/><br/>args:
<br/>\`initial: number = 0\` initial value for \`count\`
<br/>\`step: number = 1\` amount to increment and decrement by
<br/><br/>returns:
<br/>\`count: number\` is the current count, displayed on the button
<br/>\`increment: (stepOverride?: number) => void\` Adds the \`stepOverride\` or, if \`undefined\`, \`step\` to \`count\`
<br/>\`decrement: (stepOverride?: number) => void\` Subracts the \`stepOverride\` or, if \`undefined\`, \`step\` from \`count\`
<br/><br/>Example hook usage:

\`\`\`tsx
import { useCount } from 'too-many-hooks'

const { count, increment, decrement } = useCount()

<button onClick={onClick === 'increment' ? increment : decrement}>
  Clicked {count} time{count === 1 ? '' : 's'}
</button>
\`\`\``

const meta = {
  title: 'Example/UseCount',
  component: UseCount,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      title: 'useCount',
      description: {
        component: DESCRIPTION,
      },
    },
  },
  tags: ['docsPage'],
} satisfies Meta<typeof UseCount>

export default meta

type Story = StoryObj<typeof meta>

export const LikesAndDislikes: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const countingButton = canvas.getByRole('button')
    userEvent.click(countingButton)
  },
}
