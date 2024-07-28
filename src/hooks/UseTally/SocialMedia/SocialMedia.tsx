import type React from 'react'
import { Button } from '../../../storybook-common/components'
import useTally from '../useTally'
import PFP from './assets/pfp.jpeg'

export interface UseTallyStoryProps {
  step?: number
  incrementStep?: number
  decrementStep?: number
}

const SocialMedia: React.FC<UseTallyStoryProps> = ({ step, incrementStep, decrementStep }) => {
  const [value, { increment, decrement }] = useTally({ step })

  return (
    <div className="flex w-full max-w-2xl flex-col items-start gap-2 rounded-md border bg-white px-4 py-2 text-black">
      <div className="flex items-center gap-2">
        <img src={PFP} alt="pfp" className="rounded-full" width="30px" height="30px" />
        <div>Dawson Booth</div>
        <div className="text-slate-400">@DawsonBooth420</div>
      </div>
      <div className="ml-3.5 border-l border-slate-400 pl-3.5">
        <p className="m-1">
          This new library too-many-hooks has huge potential. I hope they add a hook I can use to
          easily tally likes/dislikes on a post. Maybe a &quot;useTally&quot;?
        </p>
      </div>
      <div className="flex items-baseline gap-2 pl-3.5">
        <Button onClick={() => increment(incrementStep)} variant="text" title="like">
          &#128077;
        </Button>
        <span>{value}</span>
        <Button onClick={() => decrement(decrementStep)} variant="text" title="dislike">
          &#128078;
        </Button>
      </div>
    </div>
  )
}

export default SocialMedia
