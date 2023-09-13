import { getSpacingDistributionStyle, DefaultTheme } from '../../src';

describe('getSpacingDistributionStyle', () => {
  it('Should get correct style when using all', () => {
    const style = getSpacingDistributionStyle({ all: 'two' }, DefaultTheme);
    expect(style).toBe('2px');
  });

  it('Should get correct style when using inline', () => {
    const style = getSpacingDistributionStyle({ inline: 'two' }, DefaultTheme);
    expect(style).toBe('0px 2px');
  });

  it('Should get correct style when using block', () => {
    const style = getSpacingDistributionStyle({ block: 'two' }, DefaultTheme);
    expect(style).toBe('2px 0px');
  });

  it('Should get correct style when using inline and block', () => {
    const style = getSpacingDistributionStyle({ block: 'two', inline: 'one' }, DefaultTheme);
    expect(style).toBe('2px 1px');
  });

  it('Should get correct style when using left', () => {
    const style = getSpacingDistributionStyle({ left: 'two' }, DefaultTheme);
    expect(style).toBe('0px 0px 0px 2px');
  });

  it('Should get correct style when using top', () => {
    const style = getSpacingDistributionStyle({ top: 'two' }, DefaultTheme);
    expect(style).toBe('2px 0px 0px 0px');
  });

  it('Should get correct style when using right', () => {
    const style = getSpacingDistributionStyle({ right: 'two' }, DefaultTheme);
    expect(style).toBe('0px 2px 0px 0px');
  });

  it('Should get correct style when using bottom', () => {
    const style = getSpacingDistributionStyle({ bottom: 'two' }, DefaultTheme);
    expect(style).toBe('0px 0px 2px 0px');
  });

  it('Should get correct style when using multiple sides together', () => {
    const style = getSpacingDistributionStyle(
      { top: 'two', bottom: 'one', left: 'three', right: 'four' },
      DefaultTheme
    );
    expect(style).toBe('2px 8px 1px 4px');
  });
});
