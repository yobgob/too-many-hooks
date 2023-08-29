module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useDeepCompareEffect|useDeepCompareMemoize)',
      },
    ],
  },
}
