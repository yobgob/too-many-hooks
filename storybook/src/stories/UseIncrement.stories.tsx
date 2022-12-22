import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import dedent from 'ts-dedent'

import { UseIncrement } from './UseIncrement'

const DESCRIPTION = dedent`

Types: 

\`\`\`ts
export interface UseIncrementArgs {
  /** Initial \`count\`, defaults to \`0\` */
  initial?: number;
  /** Amount to increment or decrement by, defaults to \`1\` */
  step?: number;
}
export declare type UseIncrementReturn = [
  number,
  {
      /** Adds the \`stepOverride\` or, if \`undefined\`, \`step\` to \`count\` */
      readonly increment: (stepOverride?: number) => void;
      /** Subtracts the \`stepOverride\` or, if \`undefined\`, \`step\` from \`count\` */
      readonly decrement: (stepOverride?: number) => void;
  }
];
/** Returns a numeric \`count\` and functions to increment or decrement it */
export declare type UseIncrement = (args: UseIncrementArgs) => UseIncrementReturn;
declare const useIncrement: UseIncrement;
\`\`\`

Example hook usage:

\`\`\`tsx
import { useIncrement } from 'too-many-hooks'

const [count, { increment, decrement }] = useIncrement()

<button onClick={onClick === 'increment' ? increment : decrement}>
  Clicked {count} time{count === 1 ? '' : 's'}
</button>
\`\`\``

const meta = {
  title: 'Example/UseIncrement',
  component: UseIncrement,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      title: 'useIncrement',
      description: {
        component: DESCRIPTION,
      },
    },
  },
  tags: ['docsPage'],
} satisfies Meta<typeof UseIncrement>

export default meta

type Story = StoryObj<typeof meta>

export const LikesAndDislikes: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const countingButton = canvas.getByTitle('like')
    userEvent.click(countingButton)
  },
}
