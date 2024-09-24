# @UiReact tools
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

These are a set of tools that we created and are exported as part of the [@uireact](https://uireact.io) library, these tools doesn't need the foundation / view packages to work as they don't export UI, instead are helper functions that could work on any React/Typescript project.

## @uireact/validator

This packages exports a class for validating data. This is commonly used to validate data received from a form.

We have added multiple validations like:

- required
- type
- phone
- greaterThan
- range
- dateRange
- length
- lessThan

For the full documentation you can visit [@uireact/validator](https://www.uireact.io/docs/validator).

### Usage

1. You need to create a schema where each field has its own set of rules:

```tsx
import { UiValidator } from '@uireact/validator';

const validator = new UiValidator();

const schema = {
    firstName: validator.field('text').present('The first name is required')
};
```

2. Then you can call the function `validate()` with your data and schema objects:

```tsx
const data = {
    firstName: 'Felipe'
};

const result = validator.validate(schema, data);
```

3. The `result` will bring 2 properties:

**passed** - If the validation successeded
**errors** - The errors found during the validation

The `errors` property is keyed with properties that matches the field name of the data object passed:

```tsx
console.log(`Passed: ${result.passed}`);

if (result.errors) {
    const { firstName } = result.errors;

    if (firstName?.length > 0) {
        console.log(`Error: ${firstName[0].message}`)
    }
}
```

## What is @UiReact library?

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

You should visit our docs page for all information [@uireact docs](https://uireact.io).
