# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable but organized theme in a CSS file that organizes your colorations, texts, sizes, spaces, etc. Across your react application.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/notifications

This package exports `useNotifications` hook that is used to attach notifications on the web application, the `UiView` component needs to be set up in order for the notifications to be rendered.

We have a page dedicated to this component [@uireact/notifications docs](https://www.uireact.io/docs/notifications).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/progress-indicator
```

### Use it

```tsx
    import { useNotifications } from '@uireact/nottifications';


    const { showNotification } = useNotifications();

    const addNotification = useCallback(() => {
        showNotification({
        icon: 'Check',
        title: 'New notification',
        message: 'This is a new notification',
        });
    }, [showNotification]);

    const addLinkNotification = useCallback(() => {
        showNotification({
        icon: 'Link',
        title: 'Notification with link',
        message: 'This is a new notification that shows a link',
        link: {
            label: 'Ui React docs',
            url: 'https://uireact.io',
        },
        });
    }, [showNotification]);
```
