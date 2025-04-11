import { ColorCategories, ColorTokens, Theme, ThemeColor } from "@uireact/foundation";

export const getThemeColorVariables = (theme: Theme, coloration: ThemeColor) => {
    let variables = ``;
    const inverseColoration = coloration === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark;

    Object.keys(theme[coloration]).map((colorKey) => {
        const colors = theme[coloration][colorKey as ColorCategories];
        
        Object.keys(colors).map((colorToken) => {
            const color = colors[colorToken as ColorTokens];

            if (color) {
                variables = `${variables}
        --${colorKey}-${colorToken}: ${color};`;
            }
        });
    });

    Object.keys(theme[inverseColoration]).map((colorKey) => {
        const colors = theme[inverseColoration][colorKey as ColorCategories];
        
        Object.keys(colors).map((colorToken) => {
            const color = colors[colorToken as ColorTokens];

            if (color) {
                variables = `${variables}
        --inverse-${colorKey}-${colorToken}: ${color};`;
            }
        });
    });

    return variables;
};
