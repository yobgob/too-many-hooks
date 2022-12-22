import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import dedent from 'ts-dedent'
import { UseCount } from './UseCount'

const DESCRIPTION = dedent`

Types: 

\`\`\`ts
declare interface UseCountArgs {
  /** Initial \`count\`, defaults to \`0\` */
  initial?: number
  /** Amount to increment or decrement by, defaults to \`1\` */
  step?: number
}
declare type UseCountReturn = [
  number,
  {
    /** Sets \`count\` to the provided value */
    readonly set: React.Dispatch<React.SetStateAction<number>>
    /** Adds the \`stepOverride\` or, if \`undefined\`, \`step\` to \`count\` */
    readonly increment: (stepOverride?: number) => void
    /** Subtracts the \`stepOverride\` or, if \`undefined\`, \`step\` from \`count\` */
    readonly decrement: (stepOverride?: number) => void
    /** Resets \`count\` to its initial value */
    readonly reset: () => void
  },
]
/** Returns a numeric \`count\` and functions to increment or decrement it */
declare type UseCount = (args: UseCountArgs) => UseCountReturn;
declare const useCount: UseCount;
\`\`\`

Example hook usage:

\`\`\`tsx
import { useCount } from 'too-many-hooks'

const [count, { set, increment, decrement, reset }] = useCount()

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
