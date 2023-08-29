/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.mdx'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'mdx', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['!.storybook', '*.cjs'],
  overrides: [
    {
      files: ['.tsx', '.ts'],
      extends: 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    },
    {
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
}
