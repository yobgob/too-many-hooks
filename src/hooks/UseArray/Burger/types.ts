import { INGREDIENTS, INGREDIENT_GROUPS } from './constants'

export type Ingredient = keyof typeof INGREDIENTS

export type IngredientGroup = keyof typeof INGREDIENT_GROUPS
