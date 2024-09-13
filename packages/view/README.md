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

### 2. Install foundation and view component

```
npm i -S @uireact/foundation @uireact/view
```

If you want to read more about the view package you can visit its docs page [@uireact/view](https://www.uireact.io/docs/view).

### 3. Wrap your react tree in UiView component

You need to wrap your react tree in our UiView component like this:

```tsx
import { UiView } from '@uireact/view';

const AppWrapper = ({ children }) => (
  <UiView>
    {children}
  </UiView>
);
```

And there you have it! You should be up and running now. There are multiple things you can customize to make this even better. 

The `<UiView />` component attach a listener to the user's device theme so whatever the device theme is selected is what your app will render, isn't it cool!?

## Create your theme

We have a tool dedicated to the creation of theme that you can customize the colorations. [Create your theme](https://www.uireact.io/create-theme)

