import React, { useState } from 'react'
import { useArray } from 'too-many-hooks'
import { Button } from '../../components'
import '../../index.css'
import { BottomBun, Cheese, Ketchup, Lettuce, Patty, Tomato, TopBun } from './assets'

const INGREDIENTS = {
  top: {
    label: 'Top Bun',
    svg: <TopBun width="8rem" />,
    color: '#F4A335',
  },
  lettuce: {
    label: 'Lettuce',
    svg: <Lettuce width="8rem" />,
    color: '#94C34A',
  },
  cheese: {
    label: 'Cheese',
    svg: <Cheese width="8rem" />,
    color: '#FCF28C',
  },
  patty: {
    label: 'Patty',
    svg: <Patty width="8rem" />,
    color: '#6E4337',
  },
  tomato: {
    label: 'Tomato',
    svg: <Tomato width="8rem" />,
    color: '#F06453',
  },
  ketchup: {
    label: 'Ketchup',
    svg: <Ketchup width="8rem" />,
    color: '#F06453',
  },
  bottom: {
    label: 'Bottom Bun',
    svg: <BottomBun width="8rem" />,
    color: '#F4A335',
  },
}

const Burger: React.FC = () => {
  const [ingredients, { push, insertAt, clear }] = useArray<keyof typeof INGREDIENTS>([])
  const [addTo, setAddTo] = useState<'top' | 'bottom'>('top')

  return (
    <div className="mx-auto p-4 max-w-xl h-screen flex flex-col gap-8">
      <h1>Create a burger</h1>
      <div className="h-full flex gap-8 justify-between">
        <div className="h-fit flex flex-col flex-wrap gap-8">
          <label className="flex items-baseline gap-1">
            Add to
            <select
              className="appearance-none border-none outline-none"
              onChange={e => setAddTo(e.target.value as 'top' | 'bottom')}
            >
              <option value="top" label="Top" /> <option value="bottom" label="Bottom" />
            </select>
          </label>
          <div className="h-fit flex flex-col gap-2">
            {Object.entries(INGREDIENTS).map(([key, { label, color }]) => {
              const typedKey = key as keyof typeof INGREDIENTS
              return (
                <Button
                  key={typedKey}
                  color={color}
                  onClick={() => (addTo === 'top' ? insertAt(0, typedKey) : push(typedKey))}
                >
                  Add {label}
                </Button>
              )
            })}
          </div>

          <Button onClick={clear}>Reset</Button>
        </div>

        <div className="h-full pb-4 flex flex-col items-center justify-center">
          {ingredients.map(ingredient => INGREDIENTS[ingredient].svg)}
          {ingredients.length === 0 && <h1 className="p-4 text-center">No ingredients added</h1>}
        </div>
      </div>
    </div>
  )
}

export default Burger
