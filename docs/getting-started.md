---
name: Getting started
menu: Documentation
route: /getting-started
---

# Getting started 🔥
--------

_5 mins read_

This doc will help you to get up and running with the library in your project.

The main component of this library is the `@uireact/foundation`, this package has the definition of types, enums, objects and
helper functions that other packages across the library need, it also has all the handling that is needed for the themes, responsive design and dialogs.


## 1. Install @uireact packages 🛠️

Once the peers are installed you can go ahead and install the @uireact packages, let's start with the most important ones:

```
npm i @uireact/foundation @uireact/view
```

## 2. Create your theme ✨

@uireact provides with a [default theme](https://github.com/inavac182/uireact/blob/main/packages/foundation/src/themes/default-theme.ts) so you can either use that or create your own. If you like the default theme then you can skip this step.

If you want to build a custom theme visit [Create your own theme](./create-theme) to learn more about it.

## 3. Set up UiView 🤖

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

Each available package has its own doc file in the navbar 👈 so you can read about each one there.

If you find any issue, want to collaborate or ask for a specific feature you can fill an [issue](https://github.com/inavac182/uireact/issues) and we'll try to review the topic as soon as possible ✍️

## Usage with frameworks

### Vite

1. Create the app

```bash
npm create vite@latest
```

Follow the steps on the CLI, make sure to select react as the UI framework, and Typescript is highly recommended

2. Install @uireact packages

```bash
 npm install --save @uireact/foundation @uireact/view @uireact/button
```

3. Run the Application

```bash
npm run dev
```

1. Modify the /src/App.tsx file to wrap the application with the provider and import a component

```jsx
import { useState } from 'react'
import './App.css'
import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';
import { UiButton } from '@uireact/button'
function App() {
  const [count, setCount] = useState(0)
  return (
      <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
        <h1>Vite + uireact</h1>
        <div className="card">
          <UiButton theme='negative' onClick={() => setCount((count) => count + 1)}>count is {count}</UiButton>
        </div>
      </UiView>
  )
}
export default App
```

a full example can be find here [here](../examples/vite-ui-react/)

### NextJS

1. Create the app

```bash
npx create-next-app@latest
```
Follow the steps on the CLI, Typescript is highly recommended

2. Install @uireact packages

```bash
 npm install --save @uireact/foundation @uireact/view @uireact/button
```

3. Run the Application

```bash
npm run dev
```

1. Modify the src/app/page.tsx file to wrap the application with the provider and import a component

note: Don't forget to add "use client" directive since next by default will make the component a server component, and server components can't use useState nor can leverage the createContext api needed on uireact library.

```jsx
"use client"
import { useState } from 'react'
import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';
import { UiButton } from '@uireact/button'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UiButton theme='negative' onClick={() => setCount((count) => count + 1)}>count is {count}</UiButton>
      </main>
    </UiView>
  )
}
```

a full example can be find here [here](../examples/nextjs-example/)

### Remix

1. Create the app

```bash
npx create-remix@latest
```

Follow the steps on the CLI, select just the basics, and Remix server, Typescript is highly recommended

2. Install @uireact packages

```bash
 npm install --save @uireact/foundation @uireact/view @uireact/button

```

3. Run the Application

```bash
npm run dev
```

1. Modify the app/routes/_index.tsx file to wrap the application with the provider and import a component


```jsx
import type { V2_MetaFunction } from "@remix-run/node";
import {useState} from 'react'
import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';
import { UiButton } from '@uireact/button'
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix! with uireact" },
  ];
};
export default function Index() {
  const [count, setCount] = useState(0)
  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <UiButton theme='primary' onClick={() => setCount((count) => count + 1)}>count is {count}</UiButton>
      </div>
    </UiView>
  );
}
```

a full example can be find here [here](../examples/remix-ui-react/)