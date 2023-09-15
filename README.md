
[![Build and Deploy](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml/badge.svg)](https://github.com/inavac182/uireact/actions/workflows/pipeline.yml)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Lerna](https://img.shields.io/badge/Lerna-3E3E3E?style=for-the-badge&logo=lerna&logoColor=white)
![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)


# @UiReact.io

You should see our docs: [uireact.io](https://uireact.io).

## Quick set up ⚙️

1. Install the peer dependencies: 
```
npm i -S styled-components react react-dom tslib
```
<small>You can define which versions of each one to use...</small>

2. Install these packages:
```
npm i -S @uireact/foundation @uireact/view
```

3. Wrap your app inside the UiView component: 

```tsx
import { ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';

const App = ({ children }) => (
  <UiView theme={YourAmazingTheme} selectedTheme={ThemeColor.dark}>
    {children}
  </UiView>
)
```
That's it... You are ready to start installing and using any component in this library 🫶

## Contact ☎️

If you want to reach out to us these are our public social networks:

- [Felipe Nava](https://www.linkedin.com/in/inavac/)
- [Felipe's Twitter](https://twitter.com/FelipeNava92)
- [Felipe's gh](https://github.com/inavac182/)
- [Sergio Ortiz](https://www.linkedin.com/in/sergio-audel-ortiz-gutierrez-1698b158/)
- [Sergio's gh](https://github.com/saudelog)


