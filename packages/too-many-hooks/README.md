# too-many-hooks

This directory contains a Vite app which builds to the `too-many-hooks` library

## Building

Install / update dependencies with:

```sh
bun install
```

Then, build the library with:

```sh
bun build
```

The built package will output to `/dist`.

## Tooling

- Build - The application is built using [Vite](https://vitejs.dev/), configured with /`vite.config.ts`
- Formatting - [Prettier](https://prettier.io/docs/en/) configured with `/.prettierrc.cjs`
- Linting - [ESLint](https://eslint.org/docs/latest/) configured with `/.eslintrc.cjs`

## Scripts

- `build` - builds the library to `/dist`
- `format` - formats all files with Prettier
- `lint:code` - lints all code in `/src` with ESLint
- `lint:formatting` - checks that all code meets Prettier standards
- `lint:types` - checks all types
- `lint` - runs all linting commands

## Structure

All hooks are contained in the `/src` directory. Each has its own `use<Hook>.ts` file which declares and exports the hook and all of its types. These are all subsequently exported from the top-level `src/index.ts`.

## Documentation

All hooks and types have block comments that adhere to [JSDoc standards](https://jsdoc.app/) with the goal of adhering to [TSDoc](https://tsdoc.org/) in the future. For functions this includes usage examples where possible.
