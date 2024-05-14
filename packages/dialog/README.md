# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/dialog

This package exports `UiDialog` and `useDialog` used to render and control dialogs.

We have a page dedicated to this component [@uireact/dialog docs](https://www.uireact.io/docs/dialog).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/dialog
```

### Use it

```tsx
import React from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { 
  UiDialog, 
  UiDialogType, 
  useDialog 
} from '@uireact/dialog';

export const DialogsExample = () => {
  const dialogId = 'someFancyDialogId';
  // Instantiating the dialog hook with a dialogId : string
  const { isOpen, actions } = useDialog(dialogId); 

  React.useEffect(() => {
    if (isOpen) {
      // Do something fancy if the dialog is opened, maybe tracking analytics?
    }
  }, [isOpen]);

  const onClickCB = React.useCallback(() => {
    // This open dialog function internally triggers the open dialog fn in the dialog controller and it passes the dialog id that was used in the useDialog hook.

    actions.openDialog(); 
  }, [actions]);

  return (
    <>
      <UiButton onClick={onClickCB}>Open dialog</UiButton>
      <UiDialog dialogId={dialogId}>
        <UiText>Dialog content</UiText>
      </UiDialog>
    </>
  );
};
```
