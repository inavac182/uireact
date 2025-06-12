# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable but organized theme in a CSS file that organizes your colorations, texts, sizes, spaces, etc. Across your react application.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/datepicker

This package exports `UiDatepicker`, `UiTimepicker`, `UiInputTimepicker` and `UiInputDatepicker` used to render a calendar for users to select dates as well as a timer picker so times can be selected.

We have a page dedicated to these components: [@uireact/datepicker docs](https://www.uireact.io/docs/datepicker-input).
We have a page dedicated to these components: [@uireact/timepicker docs](https://www.uireact.io/docs/timepicker-input).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/datepicker
```

### Use it

```tsx
import { UiInputDatepicker } from '@uireact/datepicker';

<UiInputDatepicker
    label="Date"
    labelOnTop
    placeholder="Select the date"
    highlightToday
    onChange={(value) => {
        console.log(value);
    }}
    icon={<UiIcon icon="CalendarLines" />}
    size="large"
    useDialogOnSmall
    closeLabel="Done"
/>
```
