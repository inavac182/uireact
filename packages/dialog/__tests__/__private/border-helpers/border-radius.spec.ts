import { getBorderRadius } from '../../../src/__private/border-helpers/border-radius';
import { UiDialogType } from '../../../src/types';

describe('getBorderRadius', () => {
  it('Should get correct radius when is centered', () => {
    const value = getBorderRadius(UiDialogType.CENTERED);
    expect(value).toBe('5px');
  });

  it('Should get correct radius when is fullscreen', () => {
    const value = getBorderRadius(UiDialogType.FULLSCREEN);
    expect(value).toBe('0');
  });

  it('Should get correct radius when is left', () => {
    const value = getBorderRadius(UiDialogType.LEFT);
    expect(value).toBe('0');
  });

  it('Should get correct radius when is right', () => {
    const value = getBorderRadius(UiDialogType.RIGHT);
    expect(value).toBe('0');
  });

  it('Should get correct radius when is bottom', () => {
    const value = getBorderRadius(UiDialogType.BOTTOM);
    expect(value).toBe('5px 5px 0 0');
  });

  it('Should get correct radius when is undefined', () => {
    const value = getBorderRadius();
    expect(value).toBe('5px');
  });
});
