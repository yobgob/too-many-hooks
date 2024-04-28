import { useMatchMedia } from '@yobgob/too-many-hooks'
import type React from 'react'

interface Props {
  minWidth: string
  maxWidth: string
}

const Form: React.FC<Props> = ({ minWidth, maxWidth }) => {
  const isMatching = useMatchMedia(
    `screen and (min-width: ${minWidth}) and (max-width: ${maxWidth})`,
  )

  return (
    <div className={`p-10 text-white ${isMatching ? 'bg-green-500' : 'bg-red-500'}`}>
      {isMatching ? 'Matches' : 'Does not match'}
    </div>
  )
}

export default Form
