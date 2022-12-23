import React from 'react'
import { useCount } from 'too-many-hooks'
import { Button } from '../../components'

export interface UseCountStoryProps {
  step?: number
  incrementStep?: number
  decrementStep?: number
}

const SocialMedia: React.FC<UseCountStoryProps> = ({ step, incrementStep, decrementStep }) => {
  const [value, { increment, decrement }] = useCount({ step })

  return (
    <div className="max-w-sm py-2 px-4 flex flex-col items-start gap-2 bg-white rounded-md text-black">
      <hr className="w-full" />
      <div className="flex items-center gap-2">
        <img src="https://picsum.photos/30" alt="Random pfp" className="rounded-full" />
        <div>Dawson Booth</div>
        <div className="text-slate-400">@DawsonBooth420</div>
      </div>
      <div className="ml-3.5 pl-3.5 border-l border-slate-400">
        <p className="m-1">
          This new library too-many-hooks has huge potential. I hope they add a hook I can use to
          easily count likes/dislikes on a post. Maybe a &quot;useCount&quot;?
        </p>
      </div>
      <div className="pl-3.5 flex items-baseline gap-2">
        <Button onClick={() => decrement(decrementStep)} variant="text" title="dislike">
          &#128078;
        </Button>
        <span>{value}</span>
        <Button onClick={() => increment(incrementStep)} variant="text" title="like">
          &#128077;
        </Button>
      </div>
      <hr className="w-full bg-slate-800" />
    </div>
  )
}

export default SocialMedia
