import { getColor } from '../../../../src/private/linear-chart/util';

describe('getColor', () => {
  it('Should get color string when string is passed', () => {
    const color = getColor('#ffffff');
    expect(color).toBe('#ffffff');
  });

  it('Should get correct color when primary category is passed', () => {
    const color = getColor('primary');
    expect(color).toBe(`var(--primary-token_100)`);
  });

  it('Should get correct color when secondary category is passed', () => {
    const color = getColor('secondary');
    expect(color).toBe(`var(--secondary-token_100)`);
  });

  it('Should get correct color when tertiary category is passed', () => {
    const color = getColor('tertiary');
    expect(color).toBe(`var(--tertiary-token_100)`);
  });

  it('Should get correct color when positive category is passed', () => {
    const color = getColor('positive');
    expect(color).toBe(`var(--positive-token_100)`);
  });

  it('Should get correct color when error category is passed', () => {
    const color = getColor('error');
    expect(color).toBe(`var(--error-token_100)`);
  });

  it('Should get correct color when negative category is passed', () => {
    const color = getColor('negative');
    expect(color).toBe(`var(--negative-token_100)`);
  });

  it('Should get correct color when warning category is passed', () => {
    const color = getColor('warning');
    expect(color).toBe(`var(--warning-token_100)`);
  });
});
