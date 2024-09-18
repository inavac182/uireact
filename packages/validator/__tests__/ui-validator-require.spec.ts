import { UiValidator } from '../src';

describe('require validation', () => {
  const validator = new UiValidator();

  it('Should use default messaging if none is passed in schema', () => {
    const schema = {
      test: validator.field('string').isRequired(),
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
      test: validator.field('string').isRequired(),
    };
    const data = {
      test: 'test',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should error out if value is null and retrieve error message', () => {
    const schema = {
      test: validator.field('string').isRequired('The value is required'),
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
      test: validator.field('string').isRequired('The value is required'),
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
      test: validator.field('string').isRequired(),
    };
    const data = {
      test: undefined,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });
});
