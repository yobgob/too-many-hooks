# <img src="./assets/too-many-hooks-outlined.svg" alt="Too Many Hooks" width="50%">

An opinionated collection of typed React hooks

## Storybook

- The storybook for the current main version can be found at: [https://dawsonbooth.github.io/too-many-hooks](https://dawsonbooth.github.io/too-many-hooks)
- Storybooks will also be build and deployed for each PR at `https://dawsonbooth.github.io/too-many-hooks/pr-preview/pr-[PR number]`

## Guiding Principles

- There should be one obvious way to do each thing
- Hook functionality can overlap as long as they each have a unique defined purpose
- Features should be self-contained
- Explicit is better than implicit
- Code should be extensible but not unopinionated
- Code should be self-documenting

## Getting Started

### Requirements

- Node >= 16.0.0

Peer dependencies:

- react ^18.0.0

### Installation

- Coming soon to an NPM near you

### Hooks

- `useCount` - Increment and decrement numeric state
- `useFlag` - Simply manage boolean state

## Contributing

Pick a ticket from the GitHub project's issues and drop a comment to have it assigned to you. Make sure branch names are descriptive and commit messages are valuable and in the imperative mood. When a change is ready, simply open a PR and make sure to link it to the issue it references.

Note that all PRs will be squashed, so PR titles must also adhere to the commit message rules. Ensure they are descriptive, concise, and in the imperative mood. For example: "Add useFlag hook" rather than "New hook" or "Added useFlag hook". The title will be the commit message that remains in the `main` history, it is important they are well-written.

### Structure

The monorepo contains both the `too-many-hooks` library at `/too-many-hooks` and the storybook for testing and demoing hooks at `/storybook`. Contributions will usually include changes to both apps.

### Building the library

The storybook imports the library via a symlink, and thus needs `too-many-hooks` built locally. To build the library, go to `/too-many-hooks` and install dependencies with:

```yarn install```

Then, build the library by running:

```yarn build```

The built library will be output to `/too-many-hooks/dist`.

### Running the storybook

To run the storybook, go to `/storybook` and update dependencies with:

```yarn install```

Then, run the app locally at [http://localhost:6006/](http://localhost:6006/) by running:

```yarn storybook```

### Checks

To ensure code quality, PRs will be automatically linted and checked for adherence to formatting rules before merging. These checks are performed by GitHub workflows at `/.github/workflow/lint-and-build-package.yml` and `/.github/workflow/lint-and-build-storybook.yml`. Each app also has their own scripts for formatting and linting locally.
