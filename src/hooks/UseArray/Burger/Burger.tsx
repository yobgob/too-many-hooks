import React, { useState } from 'react'
import { Button, Select } from '../../../common/components'
import '../../../index.css'
import useArray from '../useArray'
import {
  DEFAULT_BURGER,
  INGREDIENTS,
  INGREDIENT_GROUPS,
  INGREDIENT_GROUP_OPTIONS,
  INGREDIENT_OPTIONS,
  INGREDIENT_WIDTH,
} from './constants'
import { Ingredient, IngredientGroup } from './types'

const Burger: React.FC = () => {
  const [
    ingredients,
    { push, insertAt, removeWhere, updateAt, updateWhere, updateAll, clear, reset },
  ] = useArray<{
    type: Ingredient
    isSelected: boolean
  }>(DEFAULT_BURGER)
  const [insertLocation, setInsertLocation] = useState<number | 'top' | 'bottom'>('bottom')
  const [toRemove, setToRemove] = useState<Ingredient | IngredientGroup | 'selected'>('selected')
  const [updateIngredientsWhere, setUpdateIngredientsWhere] = useState<{
    target: Ingredient | IngredientGroup | 'selected'
    new: Ingredient
  }>({ target: 'selected', new: 'ketchup' })

  return (
    <div className="prose mx-auto flex h-screen max-w-4xl flex-col gap-8 p-4">
      <h1>Create a burger</h1>
      <div className="flex h-full justify-start gap-8">
        <div className="flex h-fit flex-col flex-wrap gap-4">
          <div className="flex h-fit flex-col gap-2">
            {Object.entries(INGREDIENTS).map(([key, { label, color }]) => {
              const typedKey = key as Ingredient
              return (
                <Button
                  key={typedKey}
                  color={color}
                  onClick={() => {
                    insertLocation === 'top'
                      ? insertAt(0, { type: typedKey, isSelected: false })
                      : insertLocation === 'bottom'
                        ? push({ type: typedKey, isSelected: false })
                        : insertAt(insertLocation, {
                            type: typedKey,
                            isSelected: false,
                          })
                  }}
                >
                  Add {label}
                </Button>
              )
            })}
          </div>
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
        </div>

        <div className="flex h-fit flex-col flex-wrap gap-8">
          <div className="grid w-full grid-cols-2 gap-1">
            <Button onClick={reset}>Reset</Button>
            <Button onClick={clear}>Clear</Button>
          </div>

          <div className="grid w-full grid-cols-2 gap-1">
            <Button
              onClick={() => {
                if (toRemove === 'selected') {
                  return removeWhere(({ isSelected }) => !isSelected)
                }

                const ingredientsToRemove = Object.keys(INGREDIENT_GROUPS).includes(toRemove)
                  ? INGREDIENT_GROUPS[toRemove as IngredientGroup]
                  : [toRemove]

                removeWhere(({ type }) => !ingredientsToRemove.includes(type))
              }}
            >
              Remove
            </Button>
            <Select
              options={[
                { label: 'Selected', value: 'selected' },
                ...INGREDIENT_GROUP_OPTIONS,
                ...INGREDIENT_OPTIONS,
              ]}
              onChange={e => setToRemove(e.target.value)}
              defaultValue={toRemove}
              color={
                Object.keys(INGREDIENTS).includes(toRemove)
                  ? INGREDIENTS[toRemove as Ingredient].color
                  : undefined
              }
            />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="grid w-full grid-cols-2 gap-1">
              <Button
                onClick={() => {
                  if (updateIngredientsWhere.target === 'selected') {
                    return updateWhere(
                      ({ isSelected }) => isSelected,
                      ({ isSelected }) => ({
                        type: updateIngredientsWhere.new,
                        isSelected,
                      }),
                    )
                  }

                  const ingredientsToReplace = Object.keys(INGREDIENT_GROUPS).includes(
                    updateIngredientsWhere.target,
                  )
                    ? INGREDIENT_GROUPS[updateIngredientsWhere.target as IngredientGroup]
                    : [updateIngredientsWhere.target]

                  updateWhere(
                    ({ type }) => ingredientsToReplace.includes(type),
                    ({ isSelected }) => ({
                      type: updateIngredientsWhere.new,
                      isSelected,
                    }),
                  )
                }}
              >
                Replace
              </Button>
              <Select
                options={[
                  { label: 'Selected', value: 'selected' },
                  ...INGREDIENT_GROUP_OPTIONS,
                  ...INGREDIENT_OPTIONS,
                ]}
                onChange={e =>
                  setUpdateIngredientsWhere(curr => ({
                    ...curr,
                    target: e.target.value,
                  }))
                }
                defaultValue={updateIngredientsWhere.target}
                color={
                  Object.keys(INGREDIENTS).includes(updateIngredientsWhere.target)
                    ? INGREDIENTS[updateIngredientsWhere.target as Ingredient].color
                    : undefined
                }
              />
            </div>
            <Select
              label="with"
              options={INGREDIENT_OPTIONS}
              onChange={e =>
                setUpdateIngredientsWhere(curr => ({
                  ...curr,
                  new: e.target.value,
                }))
              }
              defaultValue={updateIngredientsWhere.new}
              color={INGREDIENTS[updateIngredientsWhere.new].color}
            />
          </div>
        </div>

        <div className="mx-auto flex h-full flex-col items-center gap-4">
          <div className="flex gap-2">
            <Button onClick={() => updateAll(({ type }) => ({ type, isSelected: true }))}>
              Select All
            </Button>
            <Button onClick={() => updateAll(({ type }) => ({ type, isSelected: false }))}>
              Clear Selection
            </Button>
            <Button
              onClick={() =>
                updateAll(({ type, isSelected }) => ({
                  type,
                  isSelected: !isSelected,
                }))
              }
            >
              Invert Selection
            </Button>
          </div>
          <div className="mx-auto flex h-full flex-col items-center justify-center pb-4">
            {ingredients.map((ingredient, i) => (
              <label
                key={`${ingredient.type}-${i}`}
                className={`relative flex cursor-pointer items-center gap-2 hover:opacity-80 ${
                  ingredient.isSelected ? 'opacity-60' : ''
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={ingredient.isSelected}
                  onChange={e =>
                    updateAt(i, ({ type }) => ({
                      type,
                      isSelected: e.target.checked,
                    }))
                  }
                />
                {INGREDIENTS[ingredient.type].svg({ width: INGREDIENT_WIDTH })}
                {<span className="absolute left-full pl-2">{i}</span>}
              </label>
            ))}
            {ingredients.length === 0 && <h2 className="p-4 text-center">No ingredients added</h2>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burger
