import React from 'react'
import { useWindowListener } from 'too-many-hooks'

interface Props {
  onMouseMove: (name?: string | null) => string
}

const MouseMove: React.FC<Props> = ({ onMouseMove }) => {
  useWindowListener('mousemove', e => onMouseMove(`Mouse moved to (${e.clientX}, ${e.clientY})`))
  return (
    <div className="prose">
      Move your mouse around to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default MouseMove
