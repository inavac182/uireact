import { getPadding } from '../../../src/__private/border-helpers/padding';
import { UiDialogType } from '../../../src/types';

describe('getPadding', () => {
  it('Should get correct padding when is centered', () => {
    const value = getPadding(UiDialogType.CENTERED);
    expect(value).toBe('2px');
  });

  it('Should get correct padding when is fullscreen', () => {
    const value = getPadding(UiDialogType.FULLSCREEN);
    expect(value).toBe('0');
  });

  it('Should get correct padding when is left', () => {
    const value = getPadding(UiDialogType.LEFT);
    expect(value).toBe('0 2px 0 0');
  });

  it('Should get correct padding when is right', () => {
    const value = getPadding(UiDialogType.RIGHT);
    expect(value).toBe('0 0 0 2px');
  });

  it('Should get correct padding when is bottom', () => {
    const value = getPadding(UiDialogType.BOTTOM);
    expect(value).toBe('2px 2px 0px 2px');
  });

  it('Should get correct padding when is undefined', () => {
    const value = getPadding();
    expect(value).toBe('2px');
  });
});
