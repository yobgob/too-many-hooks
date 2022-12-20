import React from 'react'
import { useCount } from 'too-many-hooks'
import { Button } from './Button'

export interface UseCountStoryProps {
  onClick: 'increment' | 'decrement'
}

export const UseCount: React.FC<UseCountStoryProps> = ({ onClick }) => {
  const { count, increment, decrement } = useCount()

  return (
    <Button
      primary
      size="small"
      label={`Clicked ${count} time${count === 1 ? '' : 's'}`}
      onClick={onClick === 'increment' ? increment : decrement}
    />
  )
}
