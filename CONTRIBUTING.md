# Contributing

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

# Local Development

## Linting your code

There is a `make` rule for linting. Requirements for it are included in the docker image.

```sh
source util/commands.sh
wptd_exec_it make lint
```

To run outside docker, you'll need to install `golint` and `eslint`.

Globally (in `wpt.fyi` root):
```sh
npm install -g eslint babel-eslint eslint-plugin-html
make test
```

Locally (in `webapp/` dir):
```sh
npm install
npm test
```

## Testing your code

There is a number of `make` rule for testing. To run tests in docker:

```sh
source util/commands.sh
wptd_exec_it make test
```

See [`Makefile`](/Makefile) for more fine grained targets which take less time to run.

## Git prepush

You should set up your repo to run `make prepush` in docker when you're pushing, to help catch trivial build/lint errors.
See [the git hooks folder](/git/hooks) for instructions.

# Coding Guidelines

## License header

All source files (including `.js`, `.go`, `.html`, `.css`) must begin with a comment of the below header:

```go
// Copyright {YEAR} The WPT Dashboard Project. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
```
