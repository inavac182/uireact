import { Theme, ThemeColor, ThemeMapper, ThemeMapperStates, ThemeMapperStyles } from '../types';

export const getThemeStyling = (theme: Theme, selectedTheme: ThemeColor, mapper: ThemeMapper): string => {
  let style = '';

  Object.keys(mapper).map((state) => {
    let stateStyling = '';

    const themeState = mapper[state as ThemeMapperStates];

    if (!themeState) {
      return;
    }

    Object.keys(themeState).map((styleProperty) => {
      const themeStyle = themeState[styleProperty as ThemeMapperStyles];

      if (!themeStyle) {
        return;
      }

      const mapperValue = themeStyle;
      const currentTheme = mapperValue.inverse
        ? theme[selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark]
        : theme[selectedTheme];
      const tokenValue = currentTheme[mapperValue.category][mapperValue.token];

      stateStyling = `${stateStyling}${styleProperty}: ${tokenValue};\n`;
    });

    if (state !== ThemeMapperStates.normal) {
      style = `${style}:${state} {\n${stateStyling}}\n`;
    } else {
      style = `${style}${stateStyling}\n`;
    }
  });

  return style;
};
