import { UiValidator } from '../src';

describe('length validation', () => {
  const validator = new UiValidator();

  it('Should use default messaging if none is passed in schema', () => {
    const schema = {
      test: validator.ruler().length(5, 10),
    };
    const data = {
      test: 'test',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe(`This does not have a valid length of min 5 and max 10`);
  });

  it('Should validate correct length', () => {
    const schema = {
      test: validator.ruler().length(0, 10),
    };
    const data = {
      test: 'testString',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should error out when string is too short and retrieve error message', () => {
    const schema = {
      test: validator.ruler().length(5, 10, 'Value is too short'),
    };
    const data = {
      test: 'test',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('Value is too short');
  });

  it('Should error out when string is too long and retrieve error code', () => {
    const schema = {
      test: validator.ruler().length(5, 10, 'Value is too long'),
    };
    const data = {
      test: 'This is a very long phrase',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('Value is too long');
  });

  it('Should error out if value is not a tring', () => {
    const schema = {
      test: validator.ruler().length(5, 10),
    };
    const data = {
      test: {},
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });
});
