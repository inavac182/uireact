import { UiValidator } from '../src';

describe('lessThan validation', () => {
  const validator = new UiValidator();

  it('Should pass when value is less than baseline', () => {
    const schema = {
      test: validator.field('numeric').lessThan(10),
    };
    const data = {
      test: 9,
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should fail when value is greater than baseline', () => {
    const schema = {
      test: validator.field('numeric').lessThan(10),
    };
    const data = {
      test: 11,
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The value is greater than 10');
  });

  it('Should fail when value is invalid', () => {
    const schema = {
      test: validator.field('numeric').lessThan(10, 'The value is invalid'),
    };
    const data = {
      test: 'some',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('This is not a valid numeric');
  });

  it('Should pass when baseline is a date and the value is a date earlier than baseline', () => {
    const date = new Date('2023/12/01');

    const schema = {
      test: validator.field('date').lessThan(date),
    };
    const data = {
      test: new Date('2023/11/30'),
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should fail when baseline is a date and the value is a date after than baseline', () => {
    const date = new Date('2023/12/01');

    const schema = {
      test: validator.field('date').lessThan(date),
    };
    const data = {
      test: new Date('2023/12/02'),
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The date is after 2023/12/01');
  });

  it('Should fail when baseline is a date and the value can be parsed to valid date and is earlier than baseline ', () => {
    const date = new Date('2023/12/01');

    const schema = {
      test: validator.field('date').lessThan(date),
    };
    const data = {
      test: '2023/11/30',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should fail when baseline is a date and the value can be parsed to valid date and is after than baseline ', () => {
    const date = new Date('2023/12/01');

    const schema = {
      test: validator.field('date').lessThan(date),
    };
    const data = {
      test: '2023/12/02',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The date is after 2023/12/01');
  });

  it('Should fail when baseline is a date and the value is not a valid date', () => {
    const date = new Date('2023/12/01');

    const schema = {
      test: validator.field('date').lessThan(date),
    };
    const data = {
      test: '',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('This is not a valid date');
  });
});
