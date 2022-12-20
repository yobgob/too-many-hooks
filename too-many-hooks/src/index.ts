import { useState } from 'react'

const useCount = (initial: number = 0) => {
  const [count, setCount] = useState<number>(initial)
  return { count, increment: () => setCount(c => c + 1), decrement: () => setCount(c => c - 1) }
}

export { useCount }
