module.exports = {
  extends: ['react-app', 'plugin:storybook/recommended'],
  parserOptions: {
    project: 'tsconfig.eslint.json'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn'
  }
};