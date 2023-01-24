import React, { useMemo, useState } from 'react'
import { useFlexCorners } from 'too-many-hooks'

const Grid: React.FC = () => {
  const [resizeWrapper, setResizeWrapper] = useState<HTMLDivElement | null>(null)
  const { corners, setElement } = useFlexCorners(resizeWrapper)
  const [itemCount, setItemCount] = useState<number>(15)

  const items = useMemo(
    () =>
      Array.from({ length: itemCount }, (_, i) => `Item ${i + 1}`).map((label, i) => (
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
      itemCount,
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
    <div className="flex h-screen w-screen flex-col content-center items-center gap-2 bg-white p-8">
      <div className="flex items-end gap-8">
        <label className="flex flex-col gap-1">
          Number of items
          <input
            type="number"
            defaultValue={itemCount}
            onChange={e => setItemCount(parseInt(e.target.value))}
          />
        </label>
        {corners ? (
          <div className="flex gap-2">
            <div className="flex flex-col gap-1">
              <div>Top left: Item {corners.top.left.index + 1}</div>
              <div>Top right: Item {corners.top.right.index + 1}</div>
              <div>Right top: Item {corners.right.top.index + 1}</div>
              <div>Right bottom: Item {corners.right.bottom.index + 1}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div>Bottom left: Item {corners.bottom.left.index + 1}</div>
              <div>Bottom right: Item {corners.bottom.right.index + 1}</div>
              <div>Left top: Item {corners.left.top.index + 1}</div>
              <div>Left bottom: Item {corners.left.bottom.index + 1}</div>
            </div>
          </div>
        ) : (
          <div>No items added</div>
        )}
      </div>
      <div
        className="m-auto flex h-96 w-96 resize flex-wrap content-start gap-1 overflow-scroll border-2 border-gray-400 p-2"
        ref={element => element && setResizeWrapper(element)}
      >
        {items}
      </div>
    </div>
  )
}

export default Grid
