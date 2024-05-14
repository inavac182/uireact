# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/list

This package exports `Uilist` and `UiListItem` components used to render lists.

We have a page dedicated to this component [@uireact/list docs](https://www.uireact.io/docs/list).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/menu
```

### Use it

```tsx
import { UiList, UiListItem } from '@uireact/list';

<UiList>
    <UiListItem>
      <UiText>Item 1</UiText>
    </UiListItem>
    <UiListItem>
      <UiText>Item 2</UiText>
    </UiListItem>
</UiList>
```
