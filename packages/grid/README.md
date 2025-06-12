# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable but organized theme in a CSS file that organizes your colorations, texts, sizes, spaces, etc. Across your react application.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/grid

This package exports `UiGrid` component used to render a column grid.

We have a page dedicated to this component [@uireact/grid docs](https://www.uireact.io/docs/grid).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/header
```

### Use it

```tsx
    import { UiGrid } from '@uireact/grid';

    <UiGrid cols={3} rows={2} colsGap="four" justifyItems="center">
        <UiCard fullWidth fullHeight>
            <UiText>Item 1!</UiText>
        </UiCard>
        <UiCard fullWidth fullHeight>
            <UiText>Item 2!</UiText>
        </UiCard>
    </UiGrid>
```
