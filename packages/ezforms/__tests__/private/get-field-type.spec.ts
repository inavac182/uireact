import { UiValidator } from '@uireact/validator';

import { getFieldType } from '../../src/private';

const validator = new UiValidator();

const schema = {
  method: validator.field('choice').ezMetadata({ label: 'Method' }).present().oneOf(['Credit Card', 'Coupons']),
  card: validator
    .field('text')
    .ezMetadata({ label: 'Card' })
    .when('method', validator.is().equals('Credit Card'))
    .run(validator.is().present())
    .else(validator.is().mutate('choice').present().oneOf(['Coupon 1', 'Coupon 2']))
}

describe('getFieldType()', () => {
  it('Should get correct type', () => {
    const data = {
      method: 'Credit Card',
      card: ''
    };

    const type = getFieldType(schema.card, data);

    expect(type).toBe('text');
  });

  it('Should get main type when data is not present', () => {
    const data = {};

    const type = getFieldType(schema.card, data);

    expect(type).toBe('choice');
  });


  it('Should get main type when no fallback rules are present', () => {
    const data = {};
    const schema = {
      method: validator.field('choice').ezMetadata({ label: 'Method' }).present().oneOf(['Credit Card', 'Coupons']),
      card: validator
        .field('text')
        .ezMetadata({ label: 'Card' })
        .when('method', validator.is().equals('Credit Card'))
        .run(validator.is().present())
    }

    const type = getFieldType(schema.card, data);

    expect(type).toBe('text');
  });

  it('Should get correct type', () => {
    const data = {
      method: 'Coupons',
      card: ''
    };

    const type = getFieldType(schema.card, data);

    expect(type).toBe('choice');
  });

  describe('Error scenarions', () => {
    const errorLogger = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    })

    afterEach(() => {
      console.error = errorLogger;
    })

    it('Should not break when schema is wrong', () => {
      const data = {
        method: 'Coupons',
        card: ''
      };

      //@ts-ignore
      const type = getFieldType(schema.incorrect, data);

      expect(type).toBeNull();
    });

    it('Should not break when field does not have type', () => {
      const data = {
        method: 'Coupons',
        card: ''
      };

      //@ts-ignore
      const type = getFieldType({ field: validator.is().present() }, data);

      expect(type).toBeNull();
    });
  })
});
