import React, { useState } from 'react'
import { useArray } from 'too-many-hooks'
import { Button, Select } from '../../components'
import '../../index.css'
import { BottomBun, Cheese, Ketchup, Lettuce, Mayo, Mustard, Patty, Tomato, TopBun } from './assets'

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
  mayo: {
    label: 'Mayo',
    svg: <Mayo width="8rem" />,
    color: '#f2efdb',
  },
  mustard: {
    label: 'Mustard',
    svg: <Mustard width="8rem" />,
    color: '#f2e35f',
  },
  bottom: {
    label: 'Bottom Bun',
    svg: <BottomBun width="8rem" />,
    color: '#F4A335',
  },
}

type Ingredient = keyof typeof INGREDIENTS

const INGREDIENT_OPTIONS = Object.entries(INGREDIENTS).map(([key, { label }]) => ({
  label,
  value: key as Ingredient,
}))

const INGREDIENT_GROUPS = {
  condiments: ['ketchup', 'mayo', 'mustard'],
  vegetables: ['tomato', 'lettuce'],
  buns: ['top', 'bottom'],
}

const Burger: React.FC = () => {
  const [ingredients, { push, insertAt, filter, updateWhere, clear }] = useArray<Ingredient>([])
  const [addTo, setAddTo] = useState<'top' | 'bottom'>('top')
  const [toRemove, setToRemove] = useState<Ingredient>('tomato')
  const [toReplace, setToReplace] = useState<Ingredient | keyof typeof INGREDIENT_GROUPS>(
    'vegetables',
  )
  const [toReplaceWith, setToReplaceWith] = useState<Ingredient>('ketchup')

  return (
    <div className="mx-auto p-4 max-w-4xl h-screen flex flex-col gap-8">
      <h1>Create a burger</h1>
      <div className="h-full flex gap-8 justify-center">
        <div className="h-fit flex flex-col flex-wrap gap-8">
          <Select
            label="Add to"
            options={[
              { label: 'Top', value: 'top' },
              { label: 'Bottom', value: 'bottom' },
            ]}
            onChange={value => setAddTo(value)}
          />

          <div className="h-fit flex flex-col gap-2">
            {Object.entries(INGREDIENTS).map(([key, { label, color }]) => {
              const typedKey = key as Ingredient
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
        </div>

        <div className="h-fit flex flex-col flex-wrap gap-8">
          <Button onClick={clear}>Reset</Button>

          <div className="flex items-baseline gap-1">
            <Button onClick={() => filter(ingredient => ingredient !== toRemove)}>
              Remove all
            </Button>
            <Select
              options={INGREDIENT_OPTIONS}
              onChange={value => setToRemove(value)}
              defaultValue={toRemove}
              color={INGREDIENTS[toRemove].color}
            />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-baseline gap-1">
              <Button
                onClick={() => {
                  const replacedIngredients = Object.keys(INGREDIENT_GROUPS).includes(toReplace)
                    ? INGREDIENT_GROUPS[toReplace as keyof typeof INGREDIENT_GROUPS]
                    : [toReplace]
                  updateWhere(ingredient => replacedIngredients.includes(ingredient), toReplaceWith)
                }}
              >
                Replace all
              </Button>
              <Select
                options={[
                  { label: 'Condiments', value: 'condiments' },
                  { label: 'Vegetables', value: 'vegetables' },
                  { label: 'Buns', value: 'buns' },
                  ...INGREDIENT_OPTIONS,
                ]}
                onChange={value => setToReplace(value)}
                defaultValue={toReplace}
                color={
                  !Object.keys(INGREDIENT_GROUPS).includes(toReplace)
                    ? INGREDIENTS[toReplace as Ingredient].color
                    : undefined
                }
              />
            </div>
            <Select
              label="with"
              options={INGREDIENT_OPTIONS}
              onChange={value => setToReplaceWith(value)}
              defaultValue={toReplaceWith}
              color={INGREDIENTS[toReplaceWith].color}
            />
          </div>
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
