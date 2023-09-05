import { UiValidator } from '../src';

describe('range validation', () => {
  const validator = new UiValidator();

  it('Should use default messaging if none is passed in schema', () => {
    const schema = {
      test: validator.ruler().range(10, 100),
    };
    const data = {
      test: 5,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is not in valid range of 10 and 100');
  });

  it('Should validate correct range', () => {
    const schema = {
      test: validator.ruler().range(10, 100),
    };
    const data = {
      test: 50,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should error out if value is smaller than the min range', () => {
    const schema = {
      test: validator.ruler().range(10, 100),
    };
    const data = {
      test: 3,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  it('Should error out if value is bigger than the max range', () => {
    const schema = {
      test: validator.ruler().range(10, 100),
    };
    const data = {
      test: 150,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  it('Should error out if value null and retrieve error message', () => {
    const schema = {
      test: validator.ruler().range(10, 100, 'Value is not in range'),
    };
    const data = {
      test: null,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('Value is not in range');
  });

  it('Should error out if value undefined and retrieve error code', () => {
    const schema = {
      test: validator.ruler().range(10, 100, 'Value is not in range'),
    };
    const data = {
      test: undefined,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('Value is not in range');
  });

  it('Should error out if value is not numeric', () => {
    const schema = {
      test: validator.ruler().range(10, 100),
    };
    const data = {
      test: '12aa0',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  it('Should error out if value is numeric and does not pass validation', () => {
    const schema = {
      test: validator.ruler().range(10, 100),
    };
    const data = {
      test: '120',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  it('Should validate correctly if value is numeric and passes validation', () => {
    const schema = {
      test: validator.ruler().range(10, 100),
    };
    const data = {
      test: '90',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });
});
