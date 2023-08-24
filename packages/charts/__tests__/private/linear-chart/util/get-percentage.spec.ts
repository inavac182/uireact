import { getPercentage } from '../../../../src/private/linear-chart/util';

describe('getPercentage', () => {
  it('Should get correct percentage', () => {
    const percentage = getPercentage(100, 30);

    expect(percentage).toBe(30);
  });

  it('Should get correct percentage if current is higher than limit', () => {
    const percentage = getPercentage(100, 150);

    expect(percentage).toBe(100);
  });
});
