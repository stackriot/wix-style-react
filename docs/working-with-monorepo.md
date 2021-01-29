# Working With Monorepo

This repository is a monorepo managed by [lerna](https://github.com/lerna/lerna).

Monorepo is a term depicting a repository with many managed packages inside.

A package is a folder with `package.json` file which is inside `packages` directory.

Packages can be:

* public - meant to be released and consumed by other users outside of
  this monorepo (for example `wix-style-react`)
* private - not meant to be released and is consumed only by packages
  within this monorepo (for example `wix-style-react-test-runtime`)

# How to manage packages

Each package has its own `package.json` which defines `dependencies`
and/or `devDependencies`. Usually those are installed with `npm install`.

However, because there are many packages and they might share
dependencies or use inter-packages, a tool - lerna - is used to manage
`node_modules` of each package.

# How to setup

From root of the monorepo:

```js
npm install
```

This will install lerna and run [`lerna bootstrap`](https://github.com/lerna/lerna/tree/main/commands/bootstrap) automatically.

After it runs, all packages will have their `node_modules` installed and
linked as necessary.

For example, because `wix-ui-tpa` has `wix-style-react` as dependency,
it will be linked to local package and not installed from npm. This
allows to work on multiple libraries at once, while maintaining a single
test and build phase.

## How to work on a single package

Not every change requires all packages to be set up, it is sometimes
enough to setup only the part that's needed.

For example, to work only on wix-style-react:

```
cd packages/wix-style-react
npm install
npm start
```

A simple `cd` and `npm install` will setup single package. This is
faster than bootstrapping the whole monorepo but essentially disables
the ability to work on multiple packages at once.

# How to commit

All code changes should be submitted through a pull request (PR).
Once PR is open on github, there will be many test instances running
code changes to ensure everything is valid.

## Commit messages

PRs are merged with squash: all commits of a PR are squashed into one
and then merged into `master` branch as one commit.

Thus, PR names in Github are important and should follow a convention:

`[package-name] commit message`

for example

`[wix-style-react] implement new <HolyGrail/> component`

## PR labels

Some PRs involve code changes of more than one package. In such case it
is mandatory to use github labels and mark the PR appropriately.

For example, a PR which changes code in `wix-style-react` and
`wix-ui-tpa` packages, should have labels of `wix-style-react` and
`wix-ui-tpa`
