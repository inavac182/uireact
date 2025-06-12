# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable but organized theme in a CSS file that organizes your colorations, texts, sizes, spaces, etc. Across your react application.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/form

This package exports multiple components that are used to build forms. We have a page dedicated to each component:

- [UiInput](https://uireact.io/docs/input).
- [UiSelect](https://uireact.io/docs/select).
- [UiTextArea](https://uireact.io/docs/textarea).
- [UiSwitch](https://uireact.io/docs/switch).
- [UiDigitsInput](https://uireact.io/docs/digits-input).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/forms
```

### Use it

```tsx
    import { UiInput } from '@uireact/form';

    <UiInput
        placeholder="First Name"
        onChange={(value) => {
            console.log(value);
        }}
    />
```
