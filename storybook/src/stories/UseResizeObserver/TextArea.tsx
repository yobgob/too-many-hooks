import React, { useEffect, useState } from 'react'
import { useResizeObserver } from 'too-many-hooks'

interface Props {
  onResize: (name?: string | null) => string
}

const TextArea: React.FC<Props> = ({ onResize }) => {
  const [textArea, setTextArea] = useState<HTMLTextAreaElement | null>(null)
  const entry = useResizeObserver(textArea)

  useEffect(() => {
    if (entry) {
      const boundingRect = entry.target.getBoundingClientRect()
      onResize(`Element resized to ${boundingRect.width} x ${boundingRect.height}`)
    }
  }, [entry, onResize])

  return <textarea className="prose" ref={element => setTextArea(element)} />
}

export default TextArea
