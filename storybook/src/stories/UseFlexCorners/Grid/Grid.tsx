import React, { useMemo, useState } from 'react'
import { useFlexCorners } from 'too-many-hooks'
import { GRID_ITEMS } from './constants'

const Grid: React.FC = () => {
  const [resizeWrapper, setResizeWrapper] = useState<HTMLDivElement | null>(null)
  const { corners, setElement } = useFlexCorners(resizeWrapper)
  const items = useMemo(
    () =>
      GRID_ITEMS.map((label, i) => (
        <div
          key={label}
          ref={element => element && setElement(i, element)}
          className={`flex h-16 w-16 items-center justify-center bg-blue-700 p-1 text-white 
          ${i === corners?.top.left.index || i === corners?.left.top.index ? 'rounded-tl-lg ' : ''} 
          ${
            i === corners?.top.right.index || i === corners?.right.top.index ? 'rounded-tr-lg ' : ''
          }
          ${
            i === corners?.bottom.right.index || i === corners?.right.bottom.index
              ? 'rounded-br-lg '
              : ''
          }
          ${
            i === corners?.bottom.left.index || i === corners?.left.bottom.index
              ? 'rounded-bl-lg '
              : ''
          }
        
          `}
        >
          {label}
        </div>
      )),
    [
      corners?.bottom.left.index,
      corners?.bottom.right.index,
      corners?.left.bottom.index,
      corners?.left.top.index,
      corners?.right.bottom.index,
      corners?.right.top.index,
      corners?.top.left.index,
      corners?.top.right.index,
      setElement,
    ],
  )

  return (
    <div className="flex h-screen w-screen content-center items-center">
      <div
        className="m-auto flex h-96 w-96 resize flex-wrap content-center gap-1 overflow-scroll border-2 border-gray-400 p-2"
        ref={element => element && setResizeWrapper(element)}
      >
        {items}
      </div>
    </div>
  )
}

export default Grid
