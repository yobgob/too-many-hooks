import React from 'react'
import { useWindowListener } from 'too-many-hooks'

interface Props {
  onResize: (name?: string | null) => string
}

const Resize: React.FC<Props> = ({ onResize }) => {
  useWindowListener('resize', () =>
    onResize(`Window resized to ${window.innerWidth} x ${window.innerHeight}`),
  )
  return (
    <div className="prose">
      Resize this window to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default Resize
