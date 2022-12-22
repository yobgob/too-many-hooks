import React from 'react'
import { useCount } from 'too-many-hooks'

import './useCount.css'

export interface UseCountStoryProps {
  step?: number
  incrementStep?: number
  decrementStep?: number
}

export const UseCount: React.FC<UseCountStoryProps> = ({ step, incrementStep, decrementStep }) => {
  const { count, increment, decrement } = useCount({ step })

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
          easily count likes/dislikes on a post. Maybe a "useCount"?
        </p>
      </div>
      <div className="like-dislike">
        <button onClick={() => decrement(decrementStep)} title="like">
          &#128078;
        </button>
        <span>{count}</span>
        <button onClick={() => increment(incrementStep)} title="dislike">
          &#128077;
        </button>
      </div>
      <hr />
    </div>
  )
}
