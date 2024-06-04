[![Build and Deploy](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml/badge.svg)](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Next JS](https://img.shields.io/badge/next-js-blue?logo=nextjs)
![Turbo](https://img.shields.io/badge/turbo-black?logo=turbo)
![Pnpm](https://img.shields.io/badge/pnpm-green?logo=pnpm)
![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# ATTENTION!!!

## V3 is here, From Styles components to SCSS modules.

### We moved away from styled-components to SCSS modules, so we can get all the benefits of server components in JS frameworks such as Remix and Next JS.

Issue: [Move to SCSS Modules](https://github.com/inavac182/uireact/issues/346).


# @UiReact.io <img src="/public/sunglasses_cat.gif" alt="icon" width="30px" />

You should see our docs: [uireact.io](https://uireact.io).

## Quick set up ⚙️
If you are starting a brand new project you can run these 2 scripts which will generate a fully configured project:

**Next Js**

```
npx @uireact/create-next-app@latest
```

**Remix**

```
npx @uireact/create-remix-app@latest
```

If the project already exists and you want to add this library then you will have to manually set it up.

## Manual set up 🛠️

1. Install the main packages:
```
npm i -S @uireact/foundation @uireact/view
```

2. Wrap your app inside the UiView component: 

```tsx
import { ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';

const App = ({ children }) => (
  <UiView selectedTheme={ThemeColor.dark}>
    {children}
  </UiView>
)
```

3. Link the packages styles to your global styles files:

```
// In CSS: Update the route based on your project.
  @import url('../node_modules/@uireact/foundation/dist/index.css'); 

  // Include all packages styles
  @import url('../node_modules/@uireact/view/dist/index.css'); 
```

That's it... You are ready to start installing and using any component in this library 🫶

## Contact ☎️

If you want to reach out to us these are our public social networks:

- [Felipe Nava](https://www.linkedin.com/in/inavac/)
- [Felipe's Twitter](https://twitter.com/FelipeNava92)
- [Felipe's gh](https://github.com/inavac182/)
- [Sergio Ortiz](https://www.linkedin.com/in/sergio-audel-ortiz-gutierrez-1698b158/)
- [Sergio's gh](https://github.com/saudelog)


