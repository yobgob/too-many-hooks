/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  jsxSingleQuote: false,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
}
