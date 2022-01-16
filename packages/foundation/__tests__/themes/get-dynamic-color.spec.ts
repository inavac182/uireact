import { getDynamicColor } from '../../src';
import { Themes } from '../../src/themes/themes';
import { CategoryTheme } from '../../src/types';
import { Status } from '../../src/types/themes/stateful-styles';
import { Action } from '../../src/types/themes/actionable-styles';
import { StyleProps } from '../../src/types/themes/static-styles';

describe('getDynamicColor', () => {
  test('Should get the correct text colors from dark theme when SUCCESS and NORMAL dynamic element is needed', () => {
    let value = getDynamicColor(Themes.dark, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);
    expect(value).toBe(Themes.dark.colors.statefulElements.success.normal.paragraph);

    value = getDynamicColor(Themes.dark, StyleProps.heading, Action.NORMAL, Status.SUCCESS);
    expect(value).toBe(Themes.dark.colors.statefulElements.success.normal.heading);
  });

  test('Should get the correct text colors from light theme when SUCCESS and NORMAL dynamic element is needed', () => {
    let value = getDynamicColor(Themes.light, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);
    expect(value).toBe(Themes.light.colors.statefulElements.success.normal.paragraph);

    value = getDynamicColor(Themes.light, StyleProps.heading, Action.NORMAL, Status.SUCCESS);
    expect(value).toBe(Themes.light.colors.statefulElements.success.normal.heading);
  });

  test('Should get the correct text colors from a custom theme when SUCCESS and NORMAL dynamic element is needed', () => {
    const customTheme = { ...Themes.dark, colors: { ...Themes.dark.colors } };

    customTheme.colors.statefulElements.success.normal.paragraph = 'custom-color-paragraph';
    let value = getDynamicColor(customTheme, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);
    expect(value).toBe('custom-color-paragraph');

    customTheme.colors.statefulElements.success.normal.heading = 'custom-color-heading';
    value = getDynamicColor(customTheme, StyleProps.heading, Action.NORMAL, Status.SUCCESS);
    expect(value).toBe('custom-color-heading');
  });

  test('Should log warn when color is not found in action dynamic element', () => {
    const consoleWarn = console.warn;
    console.warn = jest.fn();

    const customTheme = {
      ...Themes.dark,
      colors: {
        ...Themes.dark.colors,
        statefulElements: {
          ...Themes.dark.colors.statefulElements,
          success: { ...Themes.dark.colors.statefulElements.success, normal: {} },
        },
      },
    };
    const value = getDynamicColor(customTheme, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);

    expect(value).toBeFalsy();
    expect(console.warn).toHaveBeenCalledWith('THEME WARN', 'Color was NOT found');
    console.warn = consoleWarn;
  });

  test('Should log error when action is not found in state dynamic element', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = {
      ...Themes.dark,
      colors: { ...Themes.dark.colors, statefulElements: { ...Themes.dark.colors.statefulElements, success: {} } },
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getDynamicColor(customTheme, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'ACTION NOT FOUND IN THIS THEME');
    console.error = consoleError;
  });

  test('Should log error when state is not found dynamic element', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: { ...Themes.dark.colors, statefulElements: {} } };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getDynamicColor(customTheme, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'STATE NOT FOUND IN THEME');
    console.error = consoleError;
  });

  test('Should log error when statefulElements is undefined', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: {} };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getDynamicColor(customTheme, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'STATE NOT FOUND IN THEME');
    console.error = consoleError;
  });

  test('Should log error when theme is an empty object', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getDynamicColor(customTheme, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });

  test('Should log error when theme is undefined', () => {
    const consoleError = console.error;
    console.error = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getDynamicColor(undefined, StyleProps.paragraph, Action.NORMAL, Status.SUCCESS);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });
});
