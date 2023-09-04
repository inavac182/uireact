import { ThemeColor } from '@uireact/foundation';
import { getInverse } from '../../../src/theme/helpers/getInverse';

describe('getInverse', () => {
  it('Should be inverse when boolean is true', () => {
    const result = getInverse(ThemeColor.dark, true);
    expect(result).toBeTruthy();
  });

  it('Should NOT be inverse when nothing is passed', () => {
    const result = getInverse(ThemeColor.dark);
    expect(result).toBeFalsy();
  });

  it('Should be inverse when inverse prop has light as true and selected theme is light', () => {
    const result = getInverse(ThemeColor.light, { light: true, dark: false });
    expect(result).toBeTruthy();
  });

  it('Should NOT be inverse when inverse prop has light as true and selected theme is dark', () => {
    const result = getInverse(ThemeColor.dark, { light: true, dark: false });
    expect(result).toBeFalsy();
  });

  it('Should be inverse when inverse prop has dark as true and selected theme is dark', () => {
    const result = getInverse(ThemeColor.dark, { light: false, dark: true });
    expect(result).toBeTruthy();
  });

  it('Should NOT be inverse when inverse prop has dark as true and selected theme is light', () => {
    const result = getInverse(ThemeColor.light, { light: false, dark: true });
    expect(result).toBeFalsy();
  });
});
