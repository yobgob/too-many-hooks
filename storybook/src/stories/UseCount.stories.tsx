import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import dedent from 'ts-dedent'

import { UseCount } from './UseCount'

const DESCRIPTION = dedent`
A demo of the \`useCount\` hook. The \`onClick\` control determines whether to call \`increment\` or \`decrement\` on click.
<br/><br/>\`count: number\` is the current count, displayed on the button
<br/>\`increment: () => void\` adds one to the current count
<br/>\`decrement: () => void\` subtracts one from the current count
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
