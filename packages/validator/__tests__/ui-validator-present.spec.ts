import { UiValidator } from '../src';

describe('present validation', () => {
  const validator = new UiValidator();

  it('Should use default messaging if none is passed in schema', () => {
    const schema = {
      test: validator.field('text').present(),
    };
    const data = {
      test: null,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is required');
  });

  it('Should validate correct when is required', () => {
    const schema = {
      test: validator.field('text').present(),
    };
    const data = {
      test: 'test',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should error out if value is null and retrieve error message', () => {
    const schema = {
      test: validator.field('text').present('The value is required'),
    };
    const data = {
      test: null,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('The value is required');
  });

  it('Should error out if value is undefined and retrieve error code', () => {
    const schema = {
      test: validator.field('text').present('The value is required'),
    };
    const data = {
      test: undefined,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('The value is required');
  });

  it('Should still fail if no custom error messaging is passed', () => {
    const schema = {
      test: validator.field('text').present(),
    };
    const data = {
      test: undefined,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  it('Should validate correct when a boolean is required and truthy values are provided', () => {
    const schema = {
      test: validator.field('boolean').present(),
    };
    const data = {
      test: true,
    };

    const result = validator.validate(schema, data);
    expect(result.passed).toBeTruthy();
  });

  it('Should validate correct when a boolean is required and falsy values are provided', () => {
    const schema = {
      test: validator.field('boolean').present(),
    };
    const data = {
      test: false,
    };

    const result = validator.validate(schema, data);
    expect(result.passed).toBeFalsy();
  });
});
