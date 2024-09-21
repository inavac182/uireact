import { UiValidator } from '../src';

const validator = new UiValidator();


describe('isOneOf', () => {
  describe('strings', () => {
    const schema = {
      color: validator.field('text').isOneOf(['red', 'green', 'blue'], 'The option is not valid')
    };

    it('Should be true if the given value is one of the provided options', () => {
      const data = {
        color: 'red'
      };
      const result = validator.validate(schema, data, true);

      expect(result.passed).toStrictEqual(true);
    });
  
    it('Should be false if the given value is NOT one of the options', () => {
      const data = {
        color: 'yellow'
      };
      const result = validator.validate(schema, data, true);

      expect(result.passed).toStrictEqual(false);
    });
  });

  describe('numbers', () => {
    const schema = {
      color: validator.field('numeric').isOneOf([1, 2, 3], 'The option is not valid')
    };

    it('Should be true if the given value is one of the provided options', () => {
      const data = {
        color: 1
      };
      const result = validator.validate(schema, data, true);

      expect(result.passed).toStrictEqual(true);
    });

    it('Should be true if the given value is one of the provided options when using decimals', () => {
      const schema = {
        color: validator.field('numeric').isOneOf([1.34, 2.212, 3.14], 'The option is not valid')
      };
      const data = {
        color: 3.14
      };
      const result = validator.validate(schema, data, true);

      expect(result.passed).toStrictEqual(true);
    });
  
    it('Should be false if the given value is NOT one of the options', () => {
      const data = {
        color: 5
      };
      const result = validator.validate(schema, data, true);

      expect(result.passed).toStrictEqual(false);
    });
  });

  describe('Error messages', () => {
    it('Should get default error message', () => {
      const schema = {
        color: validator.field('numeric').isOneOf([1, 2, 3])
      };
      const data = {
        color: 5
      };
      const result = validator.validate(schema, data, true);

      expect(result.errors?.color?.[0].message).toBe('This is not valid, only possible values are: 1,2,3');
    });
  
    it('Should be false if the given value is NOT one of the options', () => {
      const schema = {
        color: validator.field('numeric').isOneOf([1, 2, 3], 'The option is not valid')
      };
      const data = {
        color: 5
      };
      const result = validator.validate(schema, data, true);

      expect(result.errors?.color?.[0].message).toBe('The option is not valid')
    });
  });
});
