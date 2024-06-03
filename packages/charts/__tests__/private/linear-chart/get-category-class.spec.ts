import { getCategoryClass } from '../../../src/private';

describe('getCategoryClass', () => {
  it('Should get null when no category is recognized', () => {
    const className = getCategoryClass('#ffffff');
    expect(className).toBeNull();
  });

  it('Should get correct class when primary category is passed', () => {
    const className = getCategoryClass('primary');
    expect(className).toBe(`bg-primary-100`);
  });

  it('Should get correct class when secondary category is passed', () => {
    const className = getCategoryClass('secondary');
    expect(className).toBe(`bg-secondary-100`);
  });

  it('Should get correct class when tertiary category is passed', () => {
    const className = getCategoryClass('tertiary');
    expect(className).toBe(`bg-tertiary-100`);
  });

  it('Should get correct class when positive category is passed', () => {
    const className = getCategoryClass('positive');
    expect(className).toBe(`bg-positive-100`);
  });

  it('Should get correct class when error category is passed', () => {
    const className = getCategoryClass('error');
    expect(className).toBe(`bg-error-100`);
  });

  it('Should get correct class when negative category is passed', () => {
    const className = getCategoryClass('negative');
    expect(className).toBe(`bg-negative-100`);
  });

  it('Should get correct class when warning category is passed', () => {
    const className = getCategoryClass('warning');
    expect(className).toBe(`bg-warning-100`);
  });
});
