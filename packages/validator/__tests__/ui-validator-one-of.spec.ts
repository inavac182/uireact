import { UiValidator } from '../src';

const validator = new UiValidator();

describe('isOneOf', () => {
  describe('text', () => {
    const schema = {
      color: validator.field('text').oneOf(['red', 'green', 'blue'], 'The option is not valid')
    };

    it('Should be true if the given value is one of the provided options', () => {
      const data = {
        color: 'red'
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(true);
    });
  
    it('Should be false if the given value is NOT one of the options', () => {
      const data = {
        color: 'yellow'
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(false);
    });
  });

  describe('choice', () => {
    const schema = {
      color: validator.field('choice').present().oneOf(['red', 'green', 'blue'], 'The option is not valid')
    };

    it('Should be true if the given value is one of the provided options', () => {
      const data = {
        color: 'red'
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(true);
    });
  
    it('Should be false if the given value is NOT one of the options', () => {
      const data = {
        color: 'yellow'
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(false);
    });
  });

  describe('labelled options', () => {
    const schema = {
      color: validator.field('choice').present().oneOf([{
        label: 'blue',
        value: '1'
      }, {
        label: 'red',
        value: '2'
      }])
    };

    it('Should be true if the given value is one of the provided labelled options', () => {
      const data = {
        color: '2'
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(true);
    });
  
    it('Should be false if the given value is NOT a valid value', () => {
      const data = {
        color: 'red'
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(false);
    });
  });

  describe('numbers', () => {
    const schema = {
      color: validator.field('numeric').oneOf([1, 2, 3], 'The option is not valid')
    };

    it('Should be true if the given value is one of the provided options', () => {
      const data = {
        color: 1
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(true);
    });

    it('Should be true if the given value is one of the provided options when using decimals', () => {
      const schema = {
        color: validator.field('numeric').oneOf([1.34, 2.212, 3.14], 'The option is not valid')
      };
      const data = {
        color: 3.14
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(true);
    });
  
    it('Should be false if the given value is NOT one of the options', () => {
      const data = {
        color: 5
      };
      const result = validator.validate(schema, data);

      expect(result.passed).toStrictEqual(false);
    });
  });

  describe('Error messages', () => {
    it('Should get default error message', () => {
      const schema = {
        color: validator.field('numeric').oneOf([1, 2, 3])
      };
      const data = {
        color: 5
      };
      const result = validator.validate(schema, data);

      expect(result.errors?.color?.[0].message).toBe('This is not valid, only possible values are: 1,2,3');
    });
  
    it('Should be false if the given value is NOT one of the options', () => {
      const schema = {
        color: validator.field('numeric').oneOf([1, 2, 3], 'The option is not valid')
      };
      const data = {
        color: 5
      };
      const result = validator.validate(schema, data);

      expect(result.errors?.color?.[0].message).toBe('The option is not valid')
    });
  });
});
