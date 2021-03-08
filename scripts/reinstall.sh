#!/usr/bin/env bash

# The purpose of this script is to completely reinstall the monorepo
# It is useful for updating local environment after some internal changes were done
# For example, after some infra changes it might be required to reinstall `node_modules`
# It should be enough to run only `npm run reinstall` and all the heavy lifting is done behind the scenes.

# Remove node_modules from all packages
lerna exec -- rm -rf node_modules

# Remove package-lock.json from all packages
lerna exec -- rm -f package-lock.json

# Remove `dist` folder from all packages
lerna exec -- rm -rf dist

npm install
# postinstall should run automatically after `npm install`
