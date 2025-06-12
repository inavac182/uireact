# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable but organized theme in a CSS file that organizes your colorations, texts, sizes, spaces, etc. Across your react application.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/foundation

Foundation package for @UiReact library, this package holds the core functionality that is shared across the multiple components in the library.

## How to use library

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

## Components in this package
As part of this package we export `<UiViewport />` and `<UiSpacing />` as they are commonly used in all components.

### UiViewport

This component allows you to mount / unmount components based on the user's viewport. [UiViewport docs](https://www.uireact.io/docs/viewport).

### UiSpacing

This components access the spacing properties in the theme object and exposes them through a prop that can be set so the component renders padding / marging as needed. [UiSpacing docs](https://www.uireact.io/docs/spacing).

#### Why are spacing part of the theme?

This was made this way to try to keep a cohesive experience in the web application. A lot of times there is not control over spaces and the web applications can feel a bit misaligned and not consistent. With this approach we tried to bring consistency.
