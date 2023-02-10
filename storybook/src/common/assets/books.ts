import BOOK_NAMES from './book-names.json'

export const BOOK_COLORS = [
  'border-l-lime-600 border-b-lime-600 bg-lime-500 before:border-r-lime-600',
  'border-l-orange-600 border-b-orange-600 bg-orange-500 before:border-r-orange-600',
  'border-l-emerald-500 border-b-emerald-500 bg-emerald-400 before:border-r-emerald-500',
  'border-l-purple-400 border-b-purple-400 bg-purple-300 before:border-r-purple-400',
]

export const BOOKS_WITH_COLORS = BOOK_NAMES.map((name, i) => ({
  name,
  colors: BOOK_COLORS[i % BOOK_COLORS.length],
}))
