import { ThemeColor } from '@uireact/foundation';
import { getDialogClasses } from '../../../src/__private/utils/get-dialog-classes';
import { UiDialogType } from '../../../src/types';

describe('getDialogClasses', () => {
  it('Should get correct classes with type centered and all gradients', () => {
    const value = getDialogClasses(UiDialogType.CENTERED, 'all', true);

    expect(value.border).toBe('border centeredRadius bordered');
    expect(value.wrapper).toBe('contentWrapper centered');
    expect(value.content).toBe('content centeredRadius');
  });

  it('Should get correct classes with type centered and light gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.CENTERED, 'light', true);
    expect(value.border).toBe('centeredRadius');
  });

  it('Should get correct classes with type centered and light gradient when theme is light', () => {
    const value = getDialogClasses(UiDialogType.CENTERED, 'light', false);
    expect(value.border).toBe('border centeredRadius bordered');
  });

  it('Should get correct classes with type centered and dark gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.CENTERED, 'dark', true);
    expect(value.border).toBe('border centeredRadius bordered');
  });

  it('Should get correct classes with type centered and none gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.CENTERED, 'none', true);
    expect(value.border).toBe('centeredRadius');
  });

  it('Should get correct classes with type bottom and dark gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.BOTTOM, 'dark', true);

    expect(value.border).toBe('border bottomRadius borderedBottom');
    expect(value.wrapper).toBe('contentWrapper bottom');
    expect(value.content).toBe('content bottomRadius');
  });

  it('Should get correct classes with type bottom and light gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.BOTTOM, 'light', true);
    expect(value.border).toBe('bottomRadius');
  });

  it('Should get correct classes with type bottom and dark gradient when theme is light', () => {
    const value = getDialogClasses(UiDialogType.BOTTOM, 'light', false);
    expect(value.border).toBe('border bottomRadius borderedBottom');
  });

  it('Should get correct classes with type bottom and none gradient when theme is light', () => {
    const value = getDialogClasses(UiDialogType.BOTTOM, 'none', false);
    expect(value.border).toBe('bottomRadius');
  });

  it('Should get correct classes with type bottom and all gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.BOTTOM, 'all', true);
    expect(value.border).toBe('border bottomRadius borderedBottom');
  });

  it('Should get correct classes with type fullscreen and all gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.FULLSCREEN, 'all', true);

    expect(value.border).toBe('border');
    expect(value.wrapper).toBe('contentWrapper fullScreen');
    expect(value.content).toBe('content');
  });
  
  it('Should get correct classes with type fullscreen and none gradient when theme is dark', () => {
    const value = getDialogClasses(UiDialogType.FULLSCREEN, 'none', true);

    expect(value.border).toBe('border');
    expect(value.wrapper).toBe('contentWrapper fullScreen');
    expect(value.content).toBe('content');
  });
});
