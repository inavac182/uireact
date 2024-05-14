# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/charts

This package exports `UiLinearChart` component used to render a linear chart to compare 2 values.

We have a page dedicated to this component [@uireact/charts docs](https://www.uireact.io/docs/charts).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/charts
```

### Use it

```tsx
import { UiLinearChart } from '@uireact/charts';

<UiLinearChart
    data={{
      current: {
        value: 15,
      },
      limit: {
        value: 30,
      },
      title: 'Demo',
    }}
/>
```
