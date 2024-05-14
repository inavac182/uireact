# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/confirm-dialog

This package exports `useConfirmDialog` used to control the confirmation dialog. The `UiView` component sets up the dialog component, so you only need to execute the hook to set it up and trigger it.

We have a page dedicated to this component [@uireact/confirm-dialog docs](https://www.uireact.io/docs/confirm-dialog).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/confirm-dialog
```

### Use it

```tsx
import { useConfirmDialog } from '@uireact/confirm-dialog';

export const ConfirmDialogExample: React.FC = () => {
  const { showConfirmDialog } = useConfirmDialog();

  const onConfirm = useCallback(() => {
    console.log('Action Confirmed');
  }, []);
  const onDeny = useCallback(() => {
    console.log('Action denied');
  }, []);
  const onClick = useCallback(() => {
    showConfirmDialog(
      {
        title: 'Are you sure?',
        message: 'Only accept this if you are completely sure',
        confirmLabel: 'Accept',
        denyLabel: 'Cancel',
      },
      onConfirm,
      onDeny,
      {
        direction: 'stacked',
      }
    );
  }, [showConfirmDialog]);

  return (
    <div>
      <UiButton onClick={onClick}>Open confirm dialog</UiButton>
    </div>
  );
};
```
