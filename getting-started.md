---
name: Getting started
menu: Documentation
route: /getting-started
---

# Getting started 🔥
--------

This doc will help you to get up and running with the library in your project.

The main component of this library is the `@uireact/foundation`, this package has the definition of types, enums, objects and 
helper functions that other packages across the library need, it also has all the handling that is needed for the themes.

These are the steps you have to follow to get the set up done:

## 1. Install peer dependencies 🛠️

The first thing to do is install the peer dependencies, You can see the latest peers directly from the [package.json](https://github.com/inavac182/uireact/blob/main/packages/foundation/package.json#L26).

At the time of putting this doc together these are the ones you need:

```
{
  ...,
  "peerDependencies": {
    "@types/styled-components": "^5.1.0",
    "react": ">= 17 < 19",
    "react-dom": ">= 17 < 19",
    "styled-components": "^5.1.1",
    "tslib": "^2.5.0"
  }
}
```

## 2. Install @uireact packages 🛠️

Once the peers are installed you can go ahead and install the @uireact packages, let's start with the most important ones:

```
npm i @uireact/foundation @uireact/view
```


## 3. Create your theme ✨

@uireact provides with a [default theme](https://github.com/inavac182/uireact/blob/main/packages/foundation/src/themes/default-theme.ts) so you can either use that or can create your own. If you like the default theme then you can skip this step.

If you want to build a custom theme visit [Create your own theme](./create-theme) to learn more about it.


## 4. Set up UiView 🤖

This is basically wrapping your app in the `UiView` component:

```
import React from 'react';

import { DefaultTheme } from '@uireact/foundation';
import { UiView } from '@uireact/view';

export const MyAppView = () => (
  <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
    <p>View content</p>
  </UiView>
);
```

PRO tips:

- You can have the selected theme in a react state so you can have a config your UI for the user to swap between the colorations.


## 🏁 Create magic 🚀

You are ready to start building your amazing projects!

If you find any issue, want to collaborate or ask for a specific feature you can fill an [issue](https://github.com/inavac182/uireact/issues) and we'll try to review the topic as soon as possible ✍️ 
