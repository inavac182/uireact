import { UiValidator } from '../src';

describe('optional', () => {
  const validator = new UiValidator();

  it('Should pass when value is null', () => {
    const schema = {
      test: validator.field('text').optional(),
    };

    const data = {
      test: null,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should pass when value is undefined', () => {
    const schema = {
      test: validator.field('text').optional(),
    };

    const data = {
      test: undefined,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });

  it('Should pass when value is passed', () => {
    const schema = {
      test: validator.field('text').optional(),
    };

    const data = {
      test: '',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
  });
});
