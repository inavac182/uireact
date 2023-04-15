[![Build and Deploy](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml/badge.svg)](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml)

# @uireact

Themed UI components to speed up react web applications development

**NOTE:** This is still under development, make sure you only use the components published in version 1 and upwards

## Deployment

Once the packages are published the docs are released to: [uireact docs](https://uireact.io/)

The GH action that does thi is the [pipeline.yml](https://github.com/inavac182/uireact/blob/main/.github/workflows/pipeline.yml) a.k.a [publish and deploy](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml)

## Development

Prerequistes:

- Make sure you have `nvm` installed. Docs: [nvm installion](https://github.com/nvm-sh/nvm#installing-and-updating)
- Make sure you have node installed. Docs: [nodeJS](https://nodejs.org/en)

To start up this project:

```
1. Clone repo
2. run `nvm use` - Make sure you have the correct node version installed, if not install it.
3. run `npm ci`
4. run `npm run dev`
5. Open http://localhost:3000/ in browser
```

## Testing

For running tests:

```
npm run test
```

For running only unit tests:

```
npm run test:jest
```

For running unit tests in only 1 package:

```
npm run test:jest -- --scope=@uireact/THE-COMPONENT-NAME
```

For running unit tests in only 1 file:

```
npx jest --coverage=false -- RELATIVE-PATH
```
👁️ **--coverage=false** this flag will skip coverage, useful when developing but coverage is needed for PR check to pass


### Coverage

The unit tests on each package should aim for 100% coverage in all areas.

```
branches: 100,
functions: 100,
lines: 100,
statements: 100
```

Currently this configs lives inside each package jest file, but in a short future will migrate to a common file that all the inner packages extend from it.