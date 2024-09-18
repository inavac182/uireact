import { UiValidator } from '../src';

describe('dateRange validation', () => {
  const validator = new UiValidator();

  it('Should pass when value is in correct range', () => {
    const minDate = new Date('2023/11/30');
    const maxDate = new Date('2023/12/02');
    const date = new Date('2023/12/01');

    const schema = {
      test: validator.field('date').dateRange(minDate, maxDate),
    };
    const data = {
      test: date,
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should pass when value passed is a string and is in correct range', () => {
    const minDate = new Date('2023/11/30');
    const maxDate = new Date('2023/12/02');

    const schema = {
      test: validator.field('date').dateRange(minDate, maxDate),
    };
    const data = {
      test: '2023/12/01',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should fail when value passed is a date object and is not in correct range', () => {
    const minDate = new Date('2023/11/30');
    const maxDate = new Date('2023/12/02');

    const schema = {
      test: validator.field('date').dateRange(minDate, maxDate),
    };
    const data = {
      test: new Date('2023/12/03'),
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('This date is not in valid range');
  });

  it('Should fail when value passed is not in correct range and render custom message passed', () => {
    const minDate = new Date('2023/11/30');
    const maxDate = new Date('2023/12/02');

    const schema = {
      test: validator.field('date').dateRange(minDate, maxDate, 'The date range is not correct'),
    };
    const data = {
      test: '2023/12/03',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('The date range is not correct');
  });

  it('Should fail when value passed is not valid date', () => {
    const minDate = new Date('2023/11/30');
    const maxDate = new Date('2023/12/02');

    const schema = {
      test: validator.field('date').dateRange(minDate, maxDate),
    };
    const data = {
      test: 'some value',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe("This is not a valid date");
  });

  it('Should fail when schema gets wrong date type', () => {
    const schema = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      test: validator.field('date').dateRange({}, {}),
    };
    const data = {
      test: 'some value',
    };

    const result = validator.validate(schema, data, false);
    expect(result.passed).toBeFalsy();
    expect(result.errors?.test?.[0].message).toBe('This is not a valid date');
  });
});
