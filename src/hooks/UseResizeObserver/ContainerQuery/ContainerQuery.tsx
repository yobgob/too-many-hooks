import React, { useState } from 'react'
import useResizeObserver from '../useResizeObserver'

const ContainerQuery: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const entries = useResizeObserver(container)

  return (
    <div className="prose flex flex-col items-center gap-4">
      <p>Resize to change the flow of content</p>
      <div
        ref={element => setContainer(element)}
        className={`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 ${
          entries && entries[0].contentRect.width < 300 ? 'flex-col' : ''
        }`}
      >
        <div className="flex-1 rounded border border-slate-500 bg-white" />
        <div className="flex-1 rounded border border-slate-500 bg-white" />
      </div>
    </div>
  )
}

export default ContainerQuery
