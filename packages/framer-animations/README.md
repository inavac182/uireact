# @UiReact tools
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

These are a set of tools that we created and are exported as part of the [@uireact](https://uireact.io) library, these tools doesn't need the foundation / view packages to work as they don't export UI, instead are helper functions that could work on any React/Typescript project.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/framer-animations

This package exports multiple objects that have configurations needed for framer motion animations, to make animations simple and reusable.

We have a page dedicated to this package [@uireact/framer-animations docs](https://www.uireact.io/docs/framer-animations).

### Installation

1. Install peers:

```
npm i -S framer-motion
```

We recomend version 11 and upwards

2. Install package:

```
npm i -S @uireact/framer-animations
```

### Usage

Once installed you can start importing animation props like:

```tsx
    import { UiReactFadeUp } from '@uireact/framer-animations';

    // Using it as is:
    <motion.div style={{backgroundColor: '#000000'}} {...UiReactFadeUp}>
        <p>Some content</p>
    </motion.div>

    // Customizing some props:

    const custom = {...UiReactFadeUp, transition: { delay: 2 }};

    <motion.div style={{backgroundColor: '#000000'}} {...custom}>
        <p>Some content</p>
    </motion.div>
```
