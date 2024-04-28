import { useMatchMedia } from '@yobgob/too-many-hooks'
import type React from 'react'

interface Props {
  minWidth: string
  maxWidth: string
}

const Form: React.FC<Props> = ({ minWidth, maxWidth }) => {
  const { matches } = useMatchMedia(
    `screen and (min-width: ${minWidth}) and (max-width: ${maxWidth})`,
  )

  return (
    <div className={`p-10 text-white ${matches ? 'bg-green-500' : 'bg-red-500'}`}>
      {matches ? 'Matches' : 'Does not match'}
    </div>
  )
}

export default Form
