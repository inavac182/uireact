# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/navbar

This package exports `UiNavbar` and `UiNavbarItem` component used to render navbars.

We have a page dedicated to this component [@uireact/navbar docs](https://www.uireact.io/docs/navbar).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/navbar
```

### Use it

```tsx
import { UiNavbar, uiNavbarItem } from '@uireact/navbar';

<UiNavbar orientation="stacked">
    <UiNavbarItem>
      <UiLink href="https://uireact.io" fullWidth>
        Option 1
      </UiLink>
    </UiNavbarItem>
    <UiNavbarItem>
      <UiLink href="https://uireact.io" fullWidth>
        Option 2
      </UiLink>
    </UiNavbarItem>
    <UiNavbarItem active>
      <UiLink href="https://uireact.io" fullWidth>
        Option 3
      </UiLink>
    </UiNavbarItem>
    <UiNavbarItem>
      <UiLink href="https://uireact.io" fullWidth>
        Option 4
      </UiLink>
    </UiNavbarItem>
</UiNavbar>
```
