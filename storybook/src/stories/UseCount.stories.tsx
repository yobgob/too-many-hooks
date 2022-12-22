import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import dedent from 'ts-dedent'

import { UseCount } from './UseCount'

const DESCRIPTION = dedent`

Types: 

\`\`\`ts
interface Args {
  /** Initial \`count\`, defaults to \`0\` */
  initial?: number;
  /** Amount to increment or decrement by, defaults to \`1\` */
  step?: number;
}
/** Returns a numeric \`count\` and functions to increment or decrement it */
declare const useCount: ({ initial, step }: Args) => {
  readonly count: number;
  /** Adds the \`stepOverride\` or, if \`undefined\`, \`step\` to \`count\` */
  readonly increment: (stepOverride?: number) => void;
  /** Subtracts the \`stepOverride\` or, if \`undefined\`, \`step\` from \`count\` */
  readonly decrement: (stepOverride?: number) => void;
};
\`\`\`

Example hook usage:

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
    const countingButton = canvas.getByTitle('like')
    userEvent.click(countingButton)
  },
}
