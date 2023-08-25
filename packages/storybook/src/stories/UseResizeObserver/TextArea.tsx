import { useResizeObserver } from '@yobgob/too-many-hooks'
import React, { useEffect, useState } from 'react'

interface Props {
  onResize: (name?: string | null) => string
}

const TextArea: React.FC<Props> = ({ onResize }) => {
  const [textArea, setTextArea] = useState<HTMLTextAreaElement | null>(null)
  const entries = useResizeObserver(textArea)

  useEffect(() => {
    if (entries) {
      const boundingRect = entries[0].target.getBoundingClientRect()
      onResize(`Element resized to ${boundingRect.width} x ${boundingRect.height}`)
    }
  }, [entries, onResize])

  return <textarea className="prose" ref={element => setTextArea(element)} />
}

export default TextArea
