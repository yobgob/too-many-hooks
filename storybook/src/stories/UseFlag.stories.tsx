import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'ts-dedent'

import { UseFlag } from './UseFlag'

const DESCRIPTION = dedent`

Types:

\`\`\`ts
/** A simple wrapper for managing boolean state */
declare const useFlag: (initial: boolean) => readonly [boolean, {
    /** Sets the flag to a specific boolean value */
    readonly set: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    /** Sets the flag to true */
    readonly flag: () => void;
    /** Sets the flag to false */
    readonly unflag: () => void;
    /** Inverts the flag */
    readonly toggle: () => void;
}];\`\`\`

Example hook usage:

\`\`\`tsx
import { useFlag } from 'too-many-hooks'

const [isOpen, { flag: open, unflag: close }] = useFlag(false)

return (
  <div className="page">
    <button onClick={open}>Open modal</button>
    {isOpen
      ? ReactDOM.createPortal(
          <>
            <div className="overlay" onClick={close} aria-hidden />
            <div className="modal-wrapper" aria-modal tabIndex={-1} role="dialog">
              <div className="modal">
                <button className="close-button" title="Close" onClick={close}>
                  &#10005;
                </button>
                This modal was opened with a simple "onClick=&#123;open&#125;". Clicking
                "&#10005;" or outside of the modal will close it with a simple
                "onClick=&#123;close&#125;". No setters needed.
              </div>
            </div>
          </>,
          document.body,
        )
      : null}
  </div>
\`\`\``

const meta = {
  title: 'Example/UseFlag',
  component: UseFlag,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    docs: {
      title: 'useFlag',
      description: {
        component: DESCRIPTION,
      },
    },
  },
  tags: ['docsPage'],
} satisfies Meta<typeof UseFlag>

export default meta

type Story = StoryObj<typeof meta>

export const Modal: Story = {}
