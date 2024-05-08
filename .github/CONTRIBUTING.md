# `too-many-hooks` contributing guide

Thanks for taking the time to contribute to `too-many-hooks`! Any merged PRs will be reflected in the next release of the package and on our storybook immediately.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting started

Anyone can contribute so if there is something you'd like to see added to `too-many-hooks`, feel free to open an issue, pull request, or both, according to the guidelines below.

### Github

#### Issues

##### Create a new issue

If you find an issue with one of the hooks or stories, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, open a new issue.

When creating an issue, ensure the title is in the imperative mood (e.g. "Update contributing guide"), and that the description describes the requested feature or steps to reproduce the issue.

##### Claim an issue

Scan through our [existing issues](https://github.com/yobgob/too-many-hooks/issues) to find one that interests you. You can narrow down the search using `labels` as filters. If you find one that has no assignees or has had no updates for a while, leave a comment asking for it to be assigned to you.

Assignees are used for tracking purposes to prevent redundant work. As long as an issue has no assignees or comments claiming it, you can drop a comment and get started.

#### Contributing changes

##### Fork the repository

[Fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo). This will let you make changes on local branches before opening a PR and prevents cluttering the repo's branches.

##### Create a working branch

[Create a branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches) on your fork for the issue you are working on.

> Branch names should be descriptive of the changes being made (e.g. `update-contributing-guide`).

##### Commit your changes

Commit the changes once you are happy with them.

> Commit messages should use the imperative mood and ensure messages are descriptive of the changes they make so reviewing is easier.

##### Pull request

When you're finished with the changes, create a pull request, also known as a PR.

- Fill out the pull request template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.

> PR titles should be in the imperative mood and summarize the changes the PR makes (e.g. "Update contributing guide").

###### Labels

- PRs that make logical changes must include a semver release label ("patch release", "minor release", "major release")
- PRs that make changes to documentation must include the "documentation" label
- PRs that make changes to tooling must include the "tooling" label
- PRs that restructure code must include the "restructure" label
- All PRs must include a release label ("patch release", "minor release", "major release") or a label for another kind of change ("documentation", "tooling", "restructure")

##### PR review

Once you submit your PR, one or more of the organizations members will assign the review to themselves and review your changes. We may ask questions or request additional information.

- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- When all changes are resolved or you need another review to proceed, please re-request a review from the reviewer.
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.
- Once a PR is approved the creator or an organization member will merge it.

##### Merging PRs

<img src="https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" width="20" height="20" /> Thank you for contributing! <img src="https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" width="20" height="20" />

Once your PR is merged, your contributions will be publicly visible in the [Storybook](https://yobgob.github.io/too-many-hooks/) and included in the next release of `too-many-hooks`.

> All PRs will be [squashed](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-commits) to keep the git history streamlined.

### Development

All library and storybook files are included in the top level directory

#### Building the library

Install / update dependencies with:

```sh
bun install
```

Then, build the library with:

```sh
bun run build
```

The built package will output to `/dist`.

#### Running Storybook

The storybook depends upon the library build, so storybook scripts also build the library. The storybook can be run with or without building the library at [http://localhost:6006/](http://localhost:6006/) with:

`bun storybook`

#### Tooling

- Build - The library is built using [Vite](https://vitejs.dev/), configured with `vite.config.ts`
- Formatting - [Prettier](https://prettier.io/docs/en/) configured with `.prettierrc.cjs`
- Linting - [ESLint](https://eslint.org/docs/latest/) configured with `.eslintrc.cjs`
- Storybook - The storybook application is built using [Vite](https://vitejs.dev/), configured with /`.storybook/vite.config.ts` and [storybook](https://storybook.js.org/docs/ember/get-started/introduction)
- Styling - [Tailwind](https://tailwindcss.com/docs/installation) configured with `tailwind.config.cjs`

#### Scripts

- `build` - builds the library to `/dist`
- `storybook` - runs the storybook at [http://localhost:6006/](http://localhost:6006/)
- `build-storybook` - builds the storybook to `/storybook-static`
- `format` - formats all files with Prettier
- `lint:code` - lints all code in `/src` with ESLint
- `lint:formatting` - checks that all code meets Prettier standards
- `lint:types` - checks all types
- `lint` - runs all linting commands

#### Structure

All hooks are contained in the `/src/hooks` directory. Each has its own `Use<Hook>` directory containing a `use<Hook>.ts` file which declares and exports the hook and all of its types. These are all subsequently exported from the top-level `src/index.ts`.

Also inside each `Use<Hook>` directory are MDX documentation and CSF story files for demoing the hook via Storybook. Each hook has a top-level `Use<Hook>.mdx` containing a description of the hook and a source block with its types. Stories are in their own subdirectories like `Use<Hook>/<Story>` e.g. `UseArray/Bookshelf`. Each `<Story>` directory has a `Use<Hook>.<Story>.stories.tsx` CSF file containing its meta information and story definition, as well as a `Use<Hook>.<Story>.source.mdx` showing the source code of the story. The `<Story>.tsx` component file and any supporting files are also included within the directory.

#### Documentation

All hooks and types have block comments that adhere to [JSDoc standards](https://jsdoc.app/) with the goal of adhering to [TSDoc](https://tsdoc.org/) in the future. For functions this includes usage examples where possible.

Each hook has a documentation page which includes at a minimum a description of the hook and a `Types` section with the full types for the relevant hook.

Each story also has an `.mdx` file showing its source code, since the hook is what we want to show off, not the story UI itself. Since the code is included in the docs, story code is written as straightforward and abstracted as possible so it can serve as a valuable example of how to use a hook.

#### Picking stories

When creating stories it is important that each provides a useful real-world example of how a hook is useful. Make sure a story tells a straightforward story of how a hook is used. If a hook is too complex for a simple example, multiple simple stories is preferable to one complex story.
