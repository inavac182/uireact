import { getButtonLinkStyling } from '../../src/utils';

describe('getButtonLinkStyling', () => {
  it('Should retrieve correct classes when styling is clear', () => {
    const result = getButtonLinkStyling('primary', 'clear');
    expect(result).toBe('hover-bg-primary-150 hover-border-primary-150 active-bg-primary-200 active-border-primary-200 buttonLinkRadius');
  });

  it('Should retrieve correct classes when styling is clear', () => {
    const result = getButtonLinkStyling('primary', 'icon');
    expect(result).toBe('hover-bg-primary-150 hover-border-primary-150 active-bg-primary-200 active-border-primary-200 buttonLinkIcon');
  });

  it('Should retrieve correct classes when no styling provided', () => {
    const result = getButtonLinkStyling('primary');
    expect(result).toBe('bg-primary-100 border-primary-100 hover-border-primary-150 hover-bg-primary-150 active-bg-primary-200 buttonLinkRadius');
  });
});
