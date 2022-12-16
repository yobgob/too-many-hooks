module.exports = {
  extends: ['react-app'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['variable'],
        modifiers: ['const', 'global'],
        format: ['UPPER_CASE'],
      },
      {
        selector: ['variable'],
        modifiers: ['const', 'exported'],
        format: null,
      },
      {
        selector: ['variable'],
        modifiers: ['const'],
        types: ['function'],
        format: null,
      },
],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useDeepCompareEffect|useDeepCompareMemoize)',
      },
    ],
    'react/jsx-key': 'warn',
  },
}
