---
name: Contributing
menu: Documentation
route: /contributing
---

# Contributing

<iframe src="https://giphy.com/embed/3ohzgD1wRxpvpkDCSI" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

## FIRST! 🧐

Before starting to work on a contribution please make sure to create an [issue](https://github.com/inavac182/uireact/issues) so we can discuss about what you are planning to contribute to make sure  we discuss the topic before you invest some time on it.

## Pull Request 🔥

All PRs should pass the prechecks which includes:

- [Build](https://github.com/inavac182/uireact/actions/workflows/build.yml)
- [Tests and Lint](https://github.com/inavac182/uireact/actions/workflows/test.js.yml)

At least one admin contributor should approve and merge.

<iframe src="https://giphy.com/embed/13HgwGsXF0aiGY" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

## Publish 🚀

The version upgrades are done automatically by lerna using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) processing.

Once a PR is merged the [pipeline.yml](https://github.com/inavac182/uireact/blob/main/.github/workflows/pipeline.yml) a.k.a [publish and deploy](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml) github action is triggerd which will build the packages, publish to npm new versions and deploy the [uireact docs](https://uireact.io/).
