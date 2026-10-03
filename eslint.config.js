import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import youDontNeedLodash from 'eslint-plugin-you-dont-need-lodash-underscore'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist/',
      'storybook-static/',
      '*.config.js',
      'eslint.config.js',
      '.storybook/',
      '**/*.mdx',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'you-dont-need-lodash-underscore': youDontNeedLodash,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...youDontNeedLodash.configs.compatible.rules,
      'react-hooks/exhaustive-deps': [
        'warn',
        { additionalHooks: '(useDeepCompareEffect|useDeepCompareMemoize)' },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: { ...tseslint.configs.recommendedTypeChecked[1].rules },
  },
)
