import { BottomBun, Cheese, Ketchup, Lettuce, Mayo, Mustard, Patty, Tomato, TopBun } from './assets'
import { Ingredient, IngredientGroup } from './types'

const INGREDIENT_WIDTH = '10rem'

export const INGREDIENTS = {
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

export const INGREDIENT_OPTIONS = Object.entries(INGREDIENTS).map(([key, { label }]) => ({
  label,
  value: key as Ingredient,
}))

export const INGREDIENT_GROUPS = {
  condiments: ['ketchup', 'mayo', 'mustard'],
  vegetables: ['tomato', 'lettuce'],
  buns: ['top', 'bottom'],
}

export const INGREDIENT_GROUP_OPTIONS: { label: string; value: IngredientGroup }[] = [
  { label: 'Condiments', value: 'condiments' },
  { label: 'Vegetables', value: 'vegetables' },
  { label: 'Buns', value: 'buns' },
]
