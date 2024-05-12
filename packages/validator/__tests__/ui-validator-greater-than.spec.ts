import { UiValidator } from '../src';

describe('greaterThan validation', () => {
  const validator = new UiValidator();

  it('Should validate when value is greater than baseline', () => {
    const schema = {
      test: validator.ruler().greaterThan(10),
    };
    const data = {
      test: 11,
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should validate when value is string and is greater than baseline', () => {
    const schema = {
      test: validator.ruler().greaterThan(10),
    };
    const data = {
      test: "11",
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should use default messaging if none is passed in schema', () => {
    const schema = {
      test: validator.ruler().greaterThan(10),
    };
    const data = {
      test: 5,
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The value is less than 10');
  });

  it('Should get messaging from schema when passed', () => {
    const schema = {
      test: validator.ruler().greaterThan(10, 'The value is invalid'),
    };
    const data = {
      test: 5,
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The value is invalid');
  });

  it('Should fail if the value passed is not a number', () => {
    const schema = {
      test: validator.ruler().greaterThan(10, 'The value is invalid'),
    };
    const data = {
      test: 'some',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The value is invalid');
  });

  it('Should pass when baseline is date and value is greater than baseline', () => {
    const baselineDate = new Date('2023/12/01');
    const schema = {
      test: validator.ruler().greaterThan(baselineDate),
    };
    const data = {
      test: new Date('2023/12/02'),
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should fail when baseline is date and value is earlier than baseline', () => {
    const baselineDate = new Date('2023/12/01');
    const schema = {
      test: validator.ruler().greaterThan(baselineDate),
    };
    const data = {
      test: new Date('2023/11/30'),
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The date is earlier 2023/12/01');
  });

  it('Should fail with schema message when baseline is date and value is earlier than baseline', () => {
    const baselineDate = new Date('2023/12/01');
    const schema = {
      test: validator.ruler().greaterThan(baselineDate, 'The date is not valid'),
    };
    const data = {
      test: new Date('2023/11/30'),
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The date is not valid');
  });

  it('Should fail when baseline is date and value is not a valid date', () => {
    const baselineDate = new Date('2023/12/01');
    const schema = {
      test: validator.ruler().greaterThan(baselineDate),
    };
    const data = {
      test: 20,
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The date is earlier 2023/12/01');
  });

  it('Should pass when baseline is date and value can be parsed to a valid date greater than baseline', () => {
    const baselineDate = new Date('2023/12/01');
    const schema = {
      test: validator.ruler().greaterThan(baselineDate),
    };
    const data = {
      test: '2023/12/02',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should fail when baseline is date and value can be parsed to a valid date but is NOT greater than baseline', () => {
    const baselineDate = new Date('2023/12/01');
    const schema = {
      test: validator.ruler().greaterThan(baselineDate),
    };
    const data = {
      test: '2023/11/30',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The date is earlier 2023/12/01');
  });
});
