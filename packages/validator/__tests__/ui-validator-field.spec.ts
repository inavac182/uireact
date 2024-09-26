import { UiValidator } from '../src';

describe('EzMetadata', () => {
  const validator = new UiValidator();

  it('Should set up correct metadata', () => {
    const schema = validator.field('text').ezMetadata({ label: 'Some label', icon: 'Some icon', dateFormat: 'yyyy-mm-dd' });

    expect(schema.getEzMetadata()).toStrictEqual({ label: 'Some label', icon: 'Some icon', dateFormat: 'yyyy-mm-dd' });
  });
});
