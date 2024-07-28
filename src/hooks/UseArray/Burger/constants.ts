import {
  BottomBun,
  Cheese,
  Ketchup,
  Lettuce,
  Mayo,
  Mustard,
  Patty,
  Tomato,
  TopBun,
} from './components'
import type { Ingredient, IngredientGroup } from './types'

export const INGREDIENT_WIDTH = '20rem'

export const INGREDIENTS = {
  top: {
    label: 'Top Bun',
    svg: TopBun,
    color: '#F4A335',
  },
  lettuce: {
    label: 'Lettuce',
    svg: Lettuce,
    color: '#94C34A',
  },
  cheese: {
    label: 'Cheese',
    svg: Cheese,
    color: '#FCF28C',
  },
  patty: {
    label: 'Patty',
    svg: Patty,
    color: '#6E4337',
  },
  tomato: {
    label: 'Tomato',
    svg: Tomato,
    color: '#F06453',
  },
  ketchup: {
    label: 'Ketchup',
    svg: Ketchup,
    color: '#F06453',
  },
  mayo: {
    label: 'Mayo',
    svg: Mayo,
    color: '#f2efdb',
  },
  mustard: {
    label: 'Mustard',
    svg: Mustard,
    color: '#f2e35f',
  },
  bottom: {
    label: 'Bottom Bun',
    svg: BottomBun,
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

export const INGREDIENT_GROUP_OPTIONS: {
  label: string
  value: IngredientGroup
}[] = [
  { label: 'Condiments', value: 'condiments' },
  { label: 'Vegetables', value: 'vegetables' },
  { label: 'Buns', value: 'buns' },
]

export const DEFAULT_BURGER = Object.keys(INGREDIENTS).map(key => ({
  type: key as keyof typeof INGREDIENTS,
  isSelected: false,
}))
