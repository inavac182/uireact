import { getValueFromStaticThemeElement, getValueFromDynamicThemeElement } from '../../src/';
import { Themes } from '../../src/themes/themes';
import { CategoryTheme } from '../../src/types';
import { DynamicElementActionEnum, DynamicElementStateEnum } from '../../src/types/themes/dynamicElement';
import { StaticElementEnum } from '../../src/types/themes/staticElement';

describe('getValueFromStaticThemeElement', () => {
  test('Should get the correct text colors from dark theme', () => {
    let value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.paragraph, 'dark');
    expect(value).toBe(Themes.dark.colors.texts.paragraph);

    value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.heading, 'dark');
    expect(value).toBe(Themes.dark.colors.texts.heading);
  });

  test('Should get the correct texts colors from light theme', () => {
    let value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.paragraph, 'light');
    expect(value).toBe(Themes.light.colors.texts.paragraph);

    value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.heading, 'light');
    expect(value).toBe(Themes.light.colors.texts.heading);
  });

  test('Should get the correct texts colors from a custom theme', () => {
    const customTheme = { ...Themes.dark, colors: {...Themes.dark.colors, texts: {...Themes.dark.colors.texts, paragraph: 'custom-color-paragraph', heading: 'custom-color-heading'}} };
    let value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.paragraph, customTheme);
    expect(value).toBe('custom-color-paragraph');

    value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.heading, customTheme);
    expect(value).toBe('custom-color-heading');
  });

  test('Should log error when color is not found', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: {...Themes.dark.colors, texts: {...Themes.dark.colors.texts, paragraph: undefined}}};
    const value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.paragraph, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'COLOR NOT FOUND IN CATEGORY');
    console.error = consoleError;
  });

  test('Should log error when static element is not found in theme', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: {}};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.paragraph, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'CATEGORY NOT FOUND IN THEME');
    console.error = consoleError;
  });

  test('Should log error when theme is an empty object', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.paragraph, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });

  test('Should log error when theme is undefined', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromStaticThemeElement(CategoryTheme.TEXTS, StaticElementEnum.paragraph, undefined);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });
});

describe('getValueFromDynamicThemeElement', () => {
  test('Should get the correct text colors from dark theme when SUCCESS and NORMAL dynamic element is needed', () => {
    let value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, 'dark');
    expect(value).toBe(Themes.dark.colors.dynamicElements.success.normal.paragraph);

    value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.heading, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, 'dark');
    expect(value).toBe(Themes.dark.colors.dynamicElements.success.normal.heading);
  });

  test('Should get the correct text colors from light theme when SUCCESS and NORMAL dynamic element is needed', () => {
    let value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, 'light');
    expect(value).toBe(Themes.light.colors.dynamicElements.success.normal.paragraph);

    value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.heading, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, 'light');
    expect(value).toBe(Themes.light.colors.dynamicElements.success.normal.heading);
  });

  test('Should get the correct text colors from a custom theme when SUCCESS and NORMAL dynamic element is needed', () => {
    const customTheme = { ...Themes.dark,
      colors: {...Themes.dark.colors }
    };

    customTheme.colors.dynamicElements.success.normal.paragraph = 'custom-color-paragraph';
    let value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, customTheme);
    expect(value).toBe('custom-color-paragraph');

    customTheme.colors.dynamicElements.success.normal.paragraph = 'custom-color-heading';
    value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, customTheme);
    expect(value).toBe('custom-color-heading');
  });

  test('Should log warn when color is not found in action dynamic element', () => {
    const consoleWarn = console.warn;
    console.warn = jest.fn();

    const customTheme = { ...Themes.dark, colors: {...Themes.dark.colors, dynamicElements: {...Themes.dark.colors.dynamicElements, success: { ...Themes.dark.colors.dynamicElements.success, normal: {} }}}};
    const value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, customTheme);

    expect(value).toBeFalsy();
    expect(console.warn).toHaveBeenCalledWith('THEME WARN', 'color was NOT found');
    console.warn = consoleWarn;
  });

  test('Should log error when action is not found in state dynamic element', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: {...Themes.dark.colors, dynamicElements: {...Themes.dark.colors.dynamicElements, success: {}}}};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'ACTION NOT FOUND IN STATE IN DYNAMIC THEME CATEGORY');
    console.error = consoleError;
  });

  test('Should log error when state is not found dynamic element', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: {...Themes.dark.colors, dynamicElements: {}}};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'STATE NOT FOUND IN DYNAMIC THEME CATEGORY');
    console.error = consoleError;
  });

  test('Should log error when state is not found dynamic element', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = { ...Themes.dark, colors: {}};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'DYNAMIC ELEMENT CATEGORY NOT FOUND IN THEME');
    console.error = consoleError;
  });

  test('Should log error when theme is an empty object', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const customTheme = {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, customTheme);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });

  test('Should log error when theme is undefined', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const value = getValueFromDynamicThemeElement(CategoryTheme.DYNAMIC_ELEMENTS, StaticElementEnum.paragraph, DynamicElementStateEnum.SUCCESS, DynamicElementActionEnum.NORMAL, undefined);

    expect(value).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith('THEME ERROR', 'THEME IS NOT VALID');
    console.error = consoleError;
  });
});
