import React, { useState } from 'react'
import { useArray } from 'too-many-hooks'
import { Button, Select } from '../../components'
import '../../index.css'
import { BottomBun, Cheese, Ketchup, Lettuce, Mayo, Mustard, Patty, Tomato, TopBun } from './assets'

const INGREDIENT_WIDTH = '10rem'

const INGREDIENTS = {
  top: {
    label: 'Top Bun',
    svg: <TopBun width={INGREDIENT_WIDTH} />,
    color: '#F4A335',
  },
  lettuce: {
    label: 'Lettuce',
    svg: <Lettuce width={INGREDIENT_WIDTH} />,
    color: '#94C34A',
  },
  cheese: {
    label: 'Cheese',
    svg: <Cheese width={INGREDIENT_WIDTH} />,
    color: '#FCF28C',
  },
  patty: {
    label: 'Patty',
    svg: <Patty width={INGREDIENT_WIDTH} />,
    color: '#6E4337',
  },
  tomato: {
    label: 'Tomato',
    svg: <Tomato width={INGREDIENT_WIDTH} />,
    color: '#F06453',
  },
  ketchup: {
    label: 'Ketchup',
    svg: <Ketchup width={INGREDIENT_WIDTH} />,
    color: '#F06453',
  },
  mayo: {
    label: 'Mayo',
    svg: <Mayo width={INGREDIENT_WIDTH} />,
    color: '#f2efdb',
  },
  mustard: {
    label: 'Mustard',
    svg: <Mustard width={INGREDIENT_WIDTH} />,
    color: '#f2e35f',
  },
  bottom: {
    label: 'Bottom Bun',
    svg: <BottomBun width={INGREDIENT_WIDTH} />,
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
  const [ingredients, { push, insertAt, filter, updateAt, updateWhere, clear }] =
    useArray<Ingredient>([])
  const [insertLocation, setInsertLocation] = useState<number | 'top' | 'bottom'>('top')
  const [toRemove, setToRemove] = useState<Ingredient>('tomato')
  const [updateIngredientsWhere, setUpdateIngredientsWhere] = useState<{
    target: Ingredient | keyof typeof INGREDIENT_GROUPS
    new: Ingredient
  }>({ target: 'vegetables', new: 'ketchup' })
  const [updateIngredientsAt, setUpdateIngredientsAt] = useState<{
    target: number
    new: Ingredient
  }>({ target: 0, new: 'ketchup' })

  return (
    <div className="mx-auto p-4 max-w-4xl h-screen flex flex-col gap-8">
      <h1>Create a burger</h1>
      <div className="h-full flex gap-8 justify-center">
        <div className="h-fit flex flex-col flex-wrap gap-4">
          <Select<number | 'top' | 'bottom'>
            label="Add ingredients at"
            labelDirection="column"
            options={[
              { label: 'Top (0)', value: 'top' },
              ...ingredients.slice(1).map((_, i) => ({
                label: (i + 1).toString(),
                value: i + 1,
              })),
              { label: `Bottom (${ingredients.length})`, value: 'bottom' },
            ]}
            onChange={e => setInsertLocation(e.target.value)}
            value={insertLocation}
          />

          <div className="h-fit flex flex-col gap-2">
            {Object.entries(INGREDIENTS).map(([key, { label, color }]) => {
              const typedKey = key as Ingredient
              return (
                <Button
                  key={typedKey}
                  color={color}
                  onClick={() => {
                    insertLocation === 'top'
                      ? insertAt(0, typedKey)
                      : insertLocation === 'bottom'
                      ? push(typedKey)
                      : insertAt(insertLocation, typedKey)
                  }}
                >
                  Add {label}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="h-fit flex flex-col flex-wrap gap-8">
          <Button onClick={clear}>Reset</Button>

          <div className="w-full grid grid-cols-2 gap-1">
            <Button onClick={() => filter(ingredient => ingredient !== toRemove)}>
              Remove all
            </Button>
            <Select
              options={INGREDIENT_OPTIONS}
              onChange={e => setToRemove(e.target.value)}
              defaultValue={toRemove}
              color={INGREDIENTS[toRemove].color}
            />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="w-full grid grid-cols-2 gap-1">
              <Button
                onClick={() => {
                  const replacedIngredients = Object.keys(INGREDIENT_GROUPS).includes(
                    updateIngredientsWhere.target,
                  )
                    ? INGREDIENT_GROUPS[
                        updateIngredientsWhere.target as keyof typeof INGREDIENT_GROUPS
                      ]
                    : [updateIngredientsWhere.target]
                  updateWhere(
                    ingredient => replacedIngredients.includes(ingredient),
                    updateIngredientsWhere.new,
                  )
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
                onChange={e =>
                  setUpdateIngredientsWhere(curr => ({ ...curr, target: e.target.value }))
                }
                defaultValue={updateIngredientsWhere.target}
                color={
                  !Object.keys(INGREDIENT_GROUPS).includes(updateIngredientsWhere.target)
                    ? INGREDIENTS[updateIngredientsWhere.target as Ingredient].color
                    : undefined
                }
              />
            </div>
            <Select
              label="with"
              options={INGREDIENT_OPTIONS}
              onChange={e => setUpdateIngredientsWhere(curr => ({ ...curr, new: e.target.value }))}
              defaultValue={updateIngredientsWhere.new}
              color={INGREDIENTS[updateIngredientsWhere.new].color}
            />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="w-full grid grid-cols-2 items-baseline gap-1">
              <Button onClick={() => updateAt(updateIngredientsAt.target, updateIngredientsAt.new)}>
                Replace
              </Button>
              <Select
                options={Object.values(ingredients).map((_, i) => ({
                  label: i.toString(),
                  value: i,
                }))}
                onChange={e =>
                  setUpdateIngredientsAt(curr => ({ ...curr, target: parseInt(e.target.value) }))
                }
                defaultValue={updateIngredientsAt.target}
              />
            </div>
            <Select
              label="with"
              options={INGREDIENT_OPTIONS}
              onChange={e => setUpdateIngredientsAt(curr => ({ ...curr, new: e.target.value }))}
              defaultValue={updateIngredientsAt.new}
              color={INGREDIENTS[updateIngredientsAt.new].color}
            />
          </div>
        </div>

        <div className="h-full pb-4 flex flex-col items-center justify-center">
          {ingredients.map((ingredient, i) => (
            <div key={`${ingredient}-${i}`} className="relative flex items-center gap-2">
              {INGREDIENTS[ingredient].svg}
              {i % 2 === 0 && <span className="absolute left-full pl-2">{i}</span>}
            </div>
          ))}
          {ingredients.length === 0 && <h1 className="p-4 text-center">No ingredients added</h1>}
        </div>
      </div>
    </div>
  )
}

export default Burger
