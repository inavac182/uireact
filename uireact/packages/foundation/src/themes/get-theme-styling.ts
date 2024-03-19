import { Theme, ThemeColor, ThemeMapper, ThemeMapperStates, ThemeMapperStyles } from '../types';

/** @Deprecated Use CSS variables instead of theme mappers */
export const getThemeStyling = (theme: Theme, selectedTheme: ThemeColor, mapper: ThemeMapper): string => {
  let style = '';

  Object.keys(mapper).map((state) => {
    let stateStyling = '';
    const themeState = mapper[state as ThemeMapperStates];
    themeState &&
      Object.keys(themeState).map((styleProperty) => {
        const mapperValue = themeState[styleProperty as ThemeMapperStyles];
        /* istanbul ignore next */
        const currentTheme = mapperValue?.inverse
          ? theme[selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark]
          : theme[selectedTheme];
        const tokenValue = mapperValue && currentTheme[mapperValue.category]?.[mapperValue.token];

        if (!tokenValue) {
          return;
        }

        stateStyling = `${stateStyling}${styleProperty}: ${tokenValue};\n`;
      });

    if (state !== ThemeMapperStates.normal) {
      style = `${style} &:${state} {\n${stateStyling}}\n`;
    } else {
      style = `${style}${stateStyling}\n`;
    }
  });

  return style;
};
