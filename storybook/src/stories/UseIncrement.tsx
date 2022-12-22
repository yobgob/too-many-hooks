import React from 'react'
import { useIncrement } from 'too-many-hooks'
import './useIncrement.css'

export interface UseIncrementStoryProps {
  step?: number
  incrementStep?: number
  decrementStep?: number
}

export const UseIncrement: React.FC<UseIncrementStoryProps> = ({
  step,
  incrementStep,
  decrementStep,
}) => {
  const [value, { increment, decrement }] = useIncrement({ step })

  return (
    <div className="post-wrapper">
      <hr />
      <div className="header">
        <img src="https://picsum.photos/30" alt="Random pfp" />
        <div>Dawson Booth</div>
        <div>@DawsonBooth420</div>
      </div>
      <div className="body">
        <p>
          This new library too-many-hooks has huge potential. I hope they add a hook I can use to
          easily count likes/dislikes on a post. Maybe a "useIncrement"?
        </p>
      </div>
      <div className="like-dislike">
        <button onClick={() => decrement(decrementStep)} title="dislike">
          &#128078;
        </button>
        <span>{value}</span>
        <button onClick={() => increment(incrementStep)} title="like">
          &#128077;
        </button>
      </div>
      <hr />
    </div>
  )
}
