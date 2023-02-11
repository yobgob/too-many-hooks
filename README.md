<div align="center">
<img src="./assets/too-many-hooks-outlined.svg" alt="Too Many Hooks" width="50%">

<h3>An opinionated collection of typed React hooks</h3>
</div>

## Storybook

- The storybook for the current main version can be found at: [https://yobgob.github.io/too-many-hooks](https://yobgob.github.io/too-many-hooks)
- Storybooks will also be build and deployed for each PR at `https://yobgob.github.io/too-many-hooks/pr-preview/pr-[PR number]`

## Guiding Principles

- There should be one obvious way to do each thing
- Explicit is better than implicit
- Code should be extensible but not unopinionated

## Getting Started

### Requirements

- [![Node version](https://img.shields.io/badge/Node-16.0.0%2B-brightgreen.svg)](http://nodejs.org/download/)

**Peer dependencies:**

- [![React version](https://img.shields.io/badge/React-18.0.0%2B-brightgreen.svg)](https://reactjs.org/)

### Installation

- Coming soon to an NPM near you

### Hooks

- `useArray` - Simplify array state management with useful utilities
- `useDeepCompareEffect` - Run function when dependencies change, checked deeply for equality
- `useFlag` - Simply manage boolean state
- `useFlexCorners` - Dynamically find corners in items wrapped with flex
- `useMutationObserver` - Observe a Node and rerender on mutations + get mutation information
- `useResizeObserver` - Observe an Element and rerender on resizes + get size information
- `useTally` - Increment and decrement numeric state
- `useWindowListener` - Easily add and remove listeners on the window

## Contributing

+ Pick a ticket from the GitHub project's issues and drop a comment to have it assigned to you. 
+ Make sure branch names are descriptive and commit messages are valuable and in the imperative mood. 
+ When a change is ready, simply open a PR and make sure to link it to the issue it references.

<br>

>Note that all PRs will be squashed, so PR titles must also adhere to the commit message rules. Ensure they are descriptive, concise, and in the imperative mood. For example: "Add useFlag hook" rather than "New hook" or "Added useFlag hook". The title will be the commit message that remains in the `main` history, it is important they are well-written.

### Structure

The monorepo contains both the `too-many-hooks` library at `/too-many-hooks` and the storybook for testing and demoing hooks at `/storybook`. Contributions will usually include changes to both apps.

### Building the library

The storybook imports the library via a symlink, and thus needs `too-many-hooks` built locally. To build the library, go to `/too-many-hooks` and install dependencies with:

```sh
yarn install
```

Then, build the library by running:

```sh
yarn build
```

The built library will be output to `/too-many-hooks/dist`.

### Running the storybook

To run the storybook, go to `/storybook` and update dependencies with:

`yarn install`

Then, run the app locally at [http://localhost:6006/](http://localhost:6006/) by running:

`yarn storybook`

### Checks

To ensure code quality, PRs are automatically linted and checked for adherence to formatting rules before merging. These checks are performed by GitHub workflows at `/.github/workflow/lint-and-build-package.yml` and `/.github/workflow/lint-and-build-storybook.yml`. Each app also has their own scripts for formatting and linting locally.
