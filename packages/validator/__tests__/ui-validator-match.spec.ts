import { UiValidator, UiValidatorSchema } from '../src';

const validator = new UiValidator();

describe('equalsTo()', () => {
  const consoleError = console.error;

  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = consoleError;
  });

  it('Should validate fieldA matches with fieldB', () => {
    const schema: UiValidatorSchema = {
      fieldA: validator.field('text').present("This is required"),
      fieldB: validator.field('text').equalsTo("fieldA", "This field doesn't match fieldA")
    };

    const data = {
      fieldA: 'some-value',
      fieldB: 'different'
    }

    let result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.fieldB[0].message).toBe("This field doesn't match fieldA");

    data.fieldB = 'some-value'

    result = validator.validate(schema, data);

    expect(result.passed).toBeTruthy();
    expect(result.errors).toStrictEqual({});
  });

  it('Should fail if the field name is NOT found in data', () => {
    const schema: UiValidatorSchema = {
      fieldA: validator.field('text').present("This is required"),
      fieldB: validator.field('text').equalsTo("unrecognizedField")
    };

    const data = {
      fieldA: 'some-value',
      fieldB: 'different'
    }

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.fieldB[0].message).toBe("The value doesn't match");

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith("UiValidator - field unrecognizedField NOT found in data.");
  });
});