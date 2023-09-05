import { ThemeColor } from '@uireact/foundation';
import { getInverseColoration } from '../../../src/theme/helpers/get-inverse-coloration';

describe('getInverseColoration', () => {
  it('Should be inverse when boolean is true', () => {
    const result = getInverseColoration(ThemeColor.dark, true);
    expect(result).toBeTruthy();
  });

  it('Should NOT be inverse when nothing is passed', () => {
    const result = getInverseColoration(ThemeColor.dark);
    expect(result).toBeFalsy();
  });

  it('Should be inverse when inverse prop has light as true and selected theme is light', () => {
    const result = getInverseColoration(ThemeColor.light, { light: true, dark: false });
    expect(result).toBeTruthy();
  });

  it('Should NOT be inverse when inverse prop has light as true and selected theme is dark', () => {
    const result = getInverseColoration(ThemeColor.dark, { light: true, dark: false });
    expect(result).toBeFalsy();
  });

  it('Should be inverse when inverse prop has dark as true and selected theme is dark', () => {
    const result = getInverseColoration(ThemeColor.dark, { light: false, dark: true });
    expect(result).toBeTruthy();
  });

  it('Should NOT be inverse when inverse prop has dark as true and selected theme is light', () => {
    const result = getInverseColoration(ThemeColor.light, { light: false, dark: true });
    expect(result).toBeFalsy();
  });
});
