# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/table

This package exports `UiTable` component used to render a data table. This table has a filter option and selection callback.

We have a page dedicated to this component [@uireact/table docs](https://www.uireact.io/docs/table).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/table
```

### Use it

```tsx
<UiTable
    data={{
      headings: ['No', 'Summary', 'Price'],
      items: [
        { id: '1', cols: ['1', 'item 1', '$10'] },
        { id: '2', cols: ['2', 'item 2', '$20'] },
        { id: '3', cols: ['3', 'item 3', '$30'] },
        { id: '4', cols: ['4', 'item 4', '$40'] },
        { id: '5', cols: ['5', 'item 5', '$50'] },
        { id: '6', cols: ['6', 'item 6', '$60'] },
        { id: '7', cols: ['7', 'item 7', '$70'] },
        { id: '8', cols: ['8', 'item 8', '$80'] },
        { id: '9', cols: ['9', 'item 9', '$90'] },
        { id: '10', cols: ['10', 'item 10', '$100'] },
      ],
    }}
    selected="3"
    onClick={(id) => {
      selected = id;
      console.log(`id ${id} selected`);
    }}
/>
```
