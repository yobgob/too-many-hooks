import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

interface Props {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <>
          <div
            className="fixed top-0 left-0 z-50 h-screen w-screen bg-black opacity-50"
            onClick={onClose}
            aria-hidden
          />
          <div
            className="fixed top-2/4 left-2/4 z-50 -translate-y-2/4 -translate-x-2/4"
            aria-modal
            tabIndex={-1}
            role="dialog"
          >
            <div className="flex h-60 max-w-lg flex-col justify-center gap-12 rounded-lg bg-white p-4 text-xl leading-6 text-black">
              {onClose && (
                <Button
                  variant="text"
                  title="Close"
                  onClick={onClose}
                  className="absolute top-2 right-2"
                >
                  &#10005;
                </Button>
              )}
              {children}
            </div>
          </div>
        </>,
        document.body,
      )
    : null
}

export default Modal
