import { Theme, ThemeColor, ThemeMapper, ThemeMapperStates, ThemeMapperValue } from '../types';

export const getThemeStyling = (theme: Theme, selectedTheme: ThemeColor, mapper: ThemeMapper): string => {
  let style = '';

  Object.keys(mapper).map((state) => {
    let stateStyling = '';

    Object.keys(mapper[state]).map((styleProperty) => {
      const mapperValue = mapper[state][styleProperty] as ThemeMapperValue;
      const currentTheme = mapperValue.inverse
        ? theme[selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark]
        : theme[selectedTheme];
      const tokenValue = currentTheme[mapperValue.category][mapperValue.token];

      stateStyling = `${stateStyling}${styleProperty}: ${tokenValue};\n`;
    });

    if (state !== ThemeMapperStates.normal) {
      style = `${style}${state}: {\n${stateStyling}}\n`;
    } else {
      style = `${style}${stateStyling}\n`;
    }
  });

  return style;
};
