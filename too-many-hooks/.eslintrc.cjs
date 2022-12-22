module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  plugins: ['jsx-a11y'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
