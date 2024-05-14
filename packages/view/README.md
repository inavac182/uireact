# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/view

The view component is what wraps your react tree and provide global styles and providers used across the multiple components from @UiReact library.

We have a page dedicated to this component [@uireact/view docs](https://www.uireact.io/docs/view).

## How to use @UiReact library

There are 5 steps you need to get your project up and running using our library:

### 1. Get a React project working

Doc: https://react.dev/learn/start-a-new-react-project#nextjs-pages-router, Yes, we suggest you use Next JS.

### 2. Install our peer dependencies

```
npm i -S framer-motion styled-components
```

We suggest using framer motion v11 and upwards, and styled components version 6 and upwards.

### 3. Get styled components working on your project.

If you are using Next JS this is very simple. [CSS-in-JS Next Js](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)

If you are using Remix [Styled-Components example](https://github.com/remix-run/examples/tree/main/styled-components)

### 4. Install foundation and view component

```
npm i -S @uireact/foundation @uireact/view
```

If you want to read more about the view package you can visit its docs page [@uireact/view](https://www.uireact.io/docs/view).

### 5. Wrap your react tree in UiView component

You need to wrap your react tree in our UiView component like this:

```tsx
import { ThemeColor, DefaultTheme } from '@uireact/foundation';
import { UiView } from '@uireact/view';

const App = ({ children }) => (
  <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark}>
    {children}
  </UiView>
);
```

And there you have it! You should be up and running now. There are multiple things you can customize to make this even better:

## Create your theme

We have a tool dedicated to the creation of theme that you can customize the colorations. [Create your theme](https://www.uireact.io/create-theme)

