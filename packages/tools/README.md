# @uireact/tools

The tools package exports multiple hooks and components used in React applications to speed up React projects development.

**NOTE:** YOU DO NOT NEED TO USE @UiReact library in order to use these tools. Any React / Typescript project can freely use this tools.

## < UiViewport />

This component renders its children **ONLY** when the given criteria is matched.

```tsx
import { UiViewport } from "@uireact/tools";

export const UiViewportExample = () => {
  return (
    <>
      <UiViewport criteria='small'>
        <p>I render in small</p>
      </UiViewport>
      <UiViewport criteria='s|m'>
        <p>I render in small AND medium</p>
      </UiViewport>
      <UiViewport criteria='medium'>
        <p>I render in medium</p>
      </UiViewport>
      <UiViewport criteria='m|l'>
        <p>I render in medium AND large AND xlarge</p>
      </UiViewport>
      <UiViewport criteria='large'>
        <p>I render in large AND xlarge</p>
      </UiViewport>
      <UiViewport criteria='xlarge'>
        <p>I render in xlarge</p>
      </UiViewport>
    </>
  )
};
```

We have a page dedicated to this component [@uireact/tools UiViewport](https://www.uireact.io/docs/ui-viewport).

## useViewport()

The useViewport hook is the hook counterpart of the `<UiViewport />` component. This will give you what is the current viewport:

```tsx
import { useViewport } from "@uireact/tools";

export const UseViewportExample = () => {
  const { isSmall, isMedium, isLarge, isXLarge } = useViewport();

  return (
    <>
      <p>Small: {isSmall ? '✅' : '❌'}</p>
      <p>Medium: {isMedium ? '✅' : '❌'}</p>
      <p>Large: {isLarge ? '✅' : '❌'}</p>
      <p>XLarge: {isXLarge ? '✅' : '❌'}</p>
    </>
  )
};
```

We have a page dedicated to this hook [@uireact/tools useViewport](https://www.uireact.io/docs/use-viewport).

## useWindowDimensions()

If what you need is to know the actual width / height of the screen then you can call this hook `useWindowDimensions()`. This hook will be re-executed when there is a resize.

```tsx
import { useWindowDimensions } from "@uireact/tools";

export const WindowDimensionExample = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  )
};

```

We have a page dedicated to this hook [@uireact/tools useWindowDimensions](https://www.uireact.io/docs/use-window-dimensions).

## useThemeDetector()

This hook will detect what is the current theme active in the user's device and will give you the actual value in a string format: 

```tsx
import { useThemeDetector } from "@uireact/tools";

export const ThemeDetectorExample = () => {
  const theme = useThemeDetector();

  return (
    <p>Theme: {theme}</p>
  )
};

```

We have a page dedicated to this hook [@uireact/tools useThemeDetector](https://www.uireact.io/docs/use-theme-detector).

# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

Wanna learn more about this library?

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).
