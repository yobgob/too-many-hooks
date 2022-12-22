import React from 'react'
import ReactDOM from 'react-dom'
import { useFlag } from 'too-many-hooks'

import './useFlag.css'

export const UseFlag: React.FC = () => {
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
  )
}
