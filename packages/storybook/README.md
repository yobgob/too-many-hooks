# storybook

This directory contains the storybook application for testing and demoing `too-many-hooks`

## Running

Install / update dependencies with:

`bun install`

Then, run the storybook at [http://localhost:6006/](http://localhost:6006/) with:

`bun storybook`

## Tooling

- Build - The application is built using [Vite](https://vitejs.dev/), configured with /`vite.config.ts` and [storybook](https://storybook.js.org/docs/ember/get-started/introduction)
- Formatting - [Prettier](https://prettier.io/docs/en/) configured with `/.prettierrc.cjs`
- Linting - [ESLint](https://eslint.org/docs/latest/) configured with `/.eslintrc.cjs`
- Styling - [Tailwind](https://tailwindcss.com/docs/installation) configured with `./tailwind.config.cjs`

## Scripts

- `storybook` - runs the storybook at [http://localhost:6006/](http://localhost:6006/)
- `build-storybook` - builds the storybook to `/storybook-static`
- `format` - formats all files with Prettier
- `lint:code` - lints all code in `/src` with ESLint
- `lint:formatting` - checks that all code meets Prettier standards
- `lint:types` - checks all types
- `lint` - runs all linting commands

## Structure

Each story is defined in a subdirectory of the `/src/stories` directory. Each has its own `Story.stories.mdx` file containing documentation and story creation. The stories are defined in a `stories.tsx` file to allow for type checking and intellisense on story definitions, then imported into the MDX file. Each story component for these is defined alongside these files. Additional components referenced in story components are placed in a `components` subdirectory.

## Stories

### Picking stories

When creating stories it is important that each provides a useful real-world example of how a hook is useful. Make sure a story tells a straightforward story of how a hook is used. If a hook is too complex for a simple example, multiple simple stories is preferable to one complex story.

### Documentation

Each story includes a documentation page, as defined by its MDX file. This includes at a minimum a `Types` section with the full types for the relevant hook and an `Examples` section containing each story.

Each story also has its source code available to view, since the hook is what we want to show off, not the story UI itself. Since the code is included in the docs, story code is written as straightforward and abstracted as possible so it can serve as a valuable example of how to use a hook.
