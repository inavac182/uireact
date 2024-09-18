import { UiValidator } from '../src';

describe('EzMetadata', () => {
  const validator = new UiValidator();

  it('Should set up correct metadata', () => {
    const schema = validator.field('string').ezMetada({ label: 'Some label', icon: 'Some icon', dateFormat: 'yyyy-mm-dd' });

    expect(schema.getLabel()).toBe('Some label');
    expect(schema.getIcon()).toBe('Some icon');
    expect(schema.getDateFormat()).toBe('yyyy-mm-dd');
  });
});
