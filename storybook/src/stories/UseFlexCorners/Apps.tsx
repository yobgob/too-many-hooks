import React, { useMemo, useState } from 'react'
import { useFlexCorners } from 'too-many-hooks'

interface Props {
  itemCount: number
  flexWrap: React.CSSProperties['flexWrap']
  flexDirection: React.CSSProperties['flexDirection']
  justifyContent: React.CSSProperties['justifyContent']
  alignItems: React.CSSProperties['alignItems']
  alignContent: React.CSSProperties['alignContent']
}

const Apps: React.FC<Props> = ({
  itemCount,
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
}) => {
  const [resizeWrapper, setResizeWrapper] = useState<HTMLDivElement | null>(null)
  const { corners, setElement } = useFlexCorners(resizeWrapper)
  const items = useMemo(
    () =>
      Array.from({ length: itemCount }, (_, i) =>
        (i + 1) % 5 === 0 ? `Widget ${(i + 1) / 5}` : `App ${i + 1 - Math.floor((i + 1) / 5)}`,
      ),
    [itemCount],
  )

  const renderedItems = useMemo(
    () => (
      <div
        className={`flex w-80 resize gap-1 overflow-auto border-2 border-gray-400 p-2 [height:30rem]`}
        style={{
          flexWrap,
          flexDirection,
          justifyContent,
          alignItems,
          alignContent,
        }}
        ref={element => element && setResizeWrapper(element)}
      >
        {items.map((label, i) => (
          <div
            key={label}
            ref={element => element && setElement(i, element)}
            className={`flex h-16 ${
              (i + 1) % 5 === 0 ? '[width:8.25rem]' : 'w-16'
            } items-center justify-center bg-blue-700 p-1 text-white  
          ${
            i === corners?.top.left.index || i === corners?.left.top.index
              ? 'rounded-tl-3xl bg-emerald-500'
              : ''
          } 
          ${
            i === corners?.top.right.index || i === corners?.right.top.index
              ? 'rounded-tr-3xl bg-emerald-500'
              : ''
          }
          ${
            i === corners?.bottom.right.index || i === corners?.right.bottom.index
              ? 'rounded-br-3xl bg-emerald-500'
              : ''
          }
          ${
            i === corners?.bottom.left.index || i === corners?.left.bottom.index
              ? 'rounded-bl-3xl bg-emerald-500'
              : ''
          }
        
          `}
          >
            {label}
          </div>
        ))}
      </div>
    ),
    [
      flexWrap,
      flexDirection,
      justifyContent,
      alignItems,
      alignContent,
      items,
      corners?.top.left.index,
      corners?.top.right.index,
      corners?.left.top.index,
      corners?.left.bottom.index,
      corners?.right.top.index,
      corners?.right.bottom.index,
      corners?.bottom.right.index,
      corners?.bottom.left.index,
      setElement,
    ],
  )

  return (
    <div className="flex h-screen w-screen content-center items-center justify-center gap-4 bg-white p-8">
      {corners ? (
        <div className="flex flex-col gap-1">
          <div>Top left: {items[corners.top.left.index]}</div>
          <div>Left top: {items[corners.left.top.index]}</div>
          <div>Left bottom: {items[corners.left.bottom.index]}</div>
          <div>Bottom left: {items[corners.bottom.left.index]}</div>
        </div>
      ) : (
        <div>No items added</div>
      )}
      {renderedItems}
      {corners ? (
        <div className="flex flex-col gap-1">
          <div>Top right: {items[corners.top.right.index]}</div>
          <div>Right top: {items[corners.right.top.index]}</div>
          <div>Right bottom: {items[corners.right.bottom.index]}</div>
          <div>Bottom right: {items[corners.bottom.right.index]}</div>
        </div>
      ) : (
        <div>No corners to find</div>
      )}
    </div>
  )
}

export default Apps
