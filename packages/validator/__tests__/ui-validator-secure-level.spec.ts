import { UiValidator } from '../src';

describe('Secure level', () => {
  const validator = new UiValidator();

  it('Should use default messaging if none is passed in schema and is weak', () => {
    const schema = {
      test: validator.field('text').secure('weak'),
    };
    const data = {
      test: "notsecure",
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is not secure, please provide letter and numbers');
  });

  it('Should use default messaging if none is passed in schema and is weak', () => {
    const schema = {
      test: validator.field('text').secure('weak'),
    };
    const data = {
      test: "NOTSECURE",
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is not secure, please provide letter and numbers');
  });

  it('Should use default messaging if none is passed in schema and is mid', () => {
    const schema = {
      test: validator.field('text').secure('mid'),
    };
    const data = {
      test: "notsecure123",
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is not secure, please provide letter, numbers and at least 1 symbol');
  });

  it('Should use default messaging if none is passed in schema and is strong', () => {
    const schema = {
      test: validator.field('text').secure('strong'),
    };
    const data = {
      test: "notsecure123!",
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is not secure, please provide a mix of lowercase and uppercase letters, numbers and symbols');
  });

  it('Should use the given messaging when it does not pass and message is provided', () => {
    const schema = {
      test: validator.field('text').secure('strong', "This is not secure"),
    };
    const data = {
      test: "",
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is not secure');
  });

  it('Should validate correct when is secured weak', () => {
    const schema = {
      test: validator.field('text').secure('weak'),
    };
    const data = {
      test: 'secure123',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should validate correct when is secured mid', () => {
    const schema = {
      test: validator.field('text').secure('mid'),
    };
    const data = {
      test: 'secure123!',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should validate correct when is secured strong', () => {
    const schema = {
      test: validator.field('text').secure('strong'),
    };
    const data = {
      test: 'Secure123*(',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });
});
