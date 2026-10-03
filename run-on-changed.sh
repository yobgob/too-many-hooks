#!/bin/bash

changed_files=$(git diff --relative -r --name-only --diff-filter=ACMRTUXB origin/main | grep -E '.*\.ts$|.*\.tsx$|.*\.js$|.*\.jsx$' | grep -v -E '^dist/|^storybook-static/|\.config\.js$|^eslint\.config\.js$|^\.storybook/')

if [ -z "$changed_files" ]; then
  exit 0
fi

$1 $changed_files
