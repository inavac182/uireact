# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/progress-indicator

This package exports `UiProgressIndicator` component used to render breadcrumbs on web pages.

We have a page dedicated to this component [@uireact/progress-indicator docs](https://www.uireact.io/docs/progress-indicator).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/progress-indicator
```

### Use it

```tsx
    import { UiProgressIndicator } from '@uireact/progress-indicator';

    <UiProgressIndicator>
        <UiProgressIndicatorItem>
            <UiText>Step 1</UiText>
        </UiProgressIndicatorItem>
        <UiProgressIndicatorItem>
            <UiText>Step 2</UiText>
        </UiProgressIndicatorItem>
        <UiProgressIndicatorItem>
            <UiText>Step 3</UiText>
        </UiProgressIndicatorItem>
    </UiProgressIndicator>
```
