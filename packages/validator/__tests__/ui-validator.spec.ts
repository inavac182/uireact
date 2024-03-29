import { UiValidator } from '../src';

describe('UiValidator', () => {
  const validator = new UiValidator();
  const consoleError = console.error;

  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = consoleError;
  });

  it('Should error out if the schema provided is not valid', () => {
    const schema = {};
    const data = {
      test: 'felipe',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('UiValidator - Schema is empty');
  });

  it('Should error out if the schema is null', () => {
    const data = {
      test: 'felipe',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const result = validator.validate(null, data);

    expect(result.passed).toBeFalsy();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('UiValidator - Schema is empty');
  });

  it('Should NOT error out if no rules are found when run in NON strict', () => {
    const schema = {
      diffField: validator.ruler().type('string'),
    };
    const data = {
      test: 'felipe',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
    expect(console.error).not.toHaveBeenCalled();
  });

  describe('Strict', () => {
    it('Should error out if no rules are found in schema for a given data field when run in strict', () => {
      const schema = {
        diffField: validator.ruler().type('string'),
      };
      const data = {
        test: 'felipe',
      };

      const result = validator.validate(schema, data, true);

      expect(result.passed).toBeFalsy();
      expect(console.error).toHaveBeenCalledTimes(2);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      expect(console.error.mock.calls[0][0]).toBe('UiValidator - Field test is NOT in schema');
    });

    it('Should error out if schema has different fields than the data passed in strict', () => {
      const schema = {
        diffField: validator.ruler().type('string'),
      };
      const data = {
        test: 'felipe',
      };

      const result = validator.validate(schema, data, true);

      expect(result.passed).toBeFalsy();
      expect(console.error).toHaveBeenCalledTimes(2);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      expect(console.error.mock.calls[1][0]).toBe('UiValidator - schema has different fields than the data passed');
    });

    it('Should error out if schema field has empty rules when run in strict', () => {
      const schema = {
        test: validator.ruler(),
      };
      const data = {
        test: 'felipe',
      };

      const result = validator.validate(schema, data, true);

      expect(result.passed).toBeFalsy();
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith('UiValidator - Field test has NOT valid rules');
    });
  });

  describe('multiple checks', () => {
    it('Should verify a value is required and valid email', () => {
      const schema = {
        test: validator.ruler().isRequired().type('email'),
      };
      const data = {
        test: 'test@mail.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should include all errors if multiple checks fail', () => {
      const schema = {
        test: validator.ruler().isRequired('Value is required').type('email', 'Value is not valid email'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test).toHaveLength(2);
      expect(result.errors?.test[0].message).toBe('Value is required');
      expect(result.errors?.test[1].message).toBe('Value is not valid email');
    });
  });
});
