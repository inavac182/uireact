# @UiReact tools
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

These are a set of tools that we created and are exported as part of the [@uireact](https://uireact.io) library, these tools doesn't need the foundation / view packages to work as they don't export UI, instead are helper functions that could work on any React/Typescript project.

## @uireact/crypto

This package exports 2 functions a encrypter and decrypter function.

For the full documentation you can visit [@uireact/crypto](https://www.uireact.io/docs/crypto).

### Usage

Just call `UiAESEncrypter` with the phrase to be encrypted and the code, then use `UiAESDecrypter` to get the phrase back.

```tsx
import { UiAESEncrypter, UiAESDecrypter } from '@uireact/crypto';

const toBeEncrypted = "Whatever-I-want-encrypted";
const code = "1234";

const encrypted = UiAESEncrypter(toBeEncrypted, code);
// U2FsdGVkX1/x4zehLGF+up3a+Ig9i3pOPwgrgzunTDQq/XmJhTOQzdFXakRbc5k3

const decrypted = UiAESDecrypter(encrypted, code);
// Whatever-I-want-encrypted

```

## What is @UiReact library?

This is a library of React components and helper functions, that help speed up React development by structuring a theme for application styling and providing a lot of ready to use components.

You should visit our docs page for all information [@uireact docs](https://uireact.io).
