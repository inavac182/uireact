# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable but organized theme in a CSS file that organizes your colorations, texts, sizes, spaces, etc. Across your react application.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/flex-grid

This package exports `UiFlex` component used to render a flex grid.

We have a page dedicated to this component [@uireact/flex docs](https://www.uireact.io/docs/flex).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/flex-grid
```

### Use it

```tsx
    import { UiFlexGrid } from '@uireact/flex';

    <UiFlexGrid alignItems="center" gap="five">
        <UiFlexGridItem>
            <UiCard>
                <UiText>Item 1</UiText>
            </UiCard>
        </UiFlexGridItem>
        <UiFlexGridItem grow={1}>
            <UiCard>
                <UiText>Item 2</UiText>
            </UiCard>
        </UiFlexGridItem>
    </UiFlexGrid>
```
