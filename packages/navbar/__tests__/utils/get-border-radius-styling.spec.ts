import { getBorderRadiusStyling } from '../../src/utils';

describe('getBorderRadiusStyling()', () => {
  it('Should get correct style for inline first', () => {
    const style = getBorderRadiusStyling('inline', true, false);

    expect(style).toBe('border-radius: 5px 0 0 5px;');
  });

  it('Should get correct style for inline last', () => {
    const style = getBorderRadiusStyling('inline', false, true);

    expect(style).toBe('border-radius: 0 5px 5px 0;');
  });

  it('Should get correct style for stacked first', () => {
    const style = getBorderRadiusStyling('stacked', true, false);

    expect(style).toBe('border-radius: 5px 5px 0 0;');
  });

  it('Should get correct style for stacked last', () => {
    const style = getBorderRadiusStyling('stacked', false, true);

    expect(style).toBe('border-radius: 0 0 5px 5px;');
  });
});
