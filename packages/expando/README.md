# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/expando

This package exports `UiExpandoCard` and `UiExpandoText` components used to render a expandible container.

We have a page dedicated to this component [@uireact/expando docs](https://www.uireact.io/docs/expando-card).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/expando
```

### Use it

```tsx
    import { UiExpandoCard } from '@uireact/expando';

    <UiExpandoCard expandLabel="Expand me" collapseLabel="Collapse me" category="tertiary">
        <span>This is some content</span>
    </UiExpandoCard>
```
