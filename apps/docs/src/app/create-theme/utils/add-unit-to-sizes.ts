import { HeadingLevel, TextSize, Theme } from "@uireact/foundation";

export const addUnitToSizes = (baseTheme: Theme, unit: string) => {
    const theme = { ...baseTheme };

    Object.keys(theme.sizes.texts).map((textKey) => {
        const value = theme.sizes.texts[textKey as TextSize];
        theme.sizes.texts[textKey as TextSize] = `${value}${unit}`;
    });

    Object.keys(theme.sizes.headings).map((headingKey) => {
        const value = theme.sizes.headings[headingKey as HeadingLevel];
        theme.sizes.headings[headingKey as HeadingLevel] = `${value}${unit}`;
    });

    return theme;
};

export const cleanUpUnitsFromSizes = (baseTheme: Theme) => {
    const theme = { ...baseTheme };

    Object.keys(theme.sizes.texts).map((textKey) => {
        theme.sizes.texts[textKey as TextSize] = theme.sizes.texts[textKey as TextSize].replace('px', '');
        theme.sizes.texts[textKey as TextSize] = theme.sizes.texts[textKey as TextSize].replace('rem', '');
        theme.sizes.texts[textKey as TextSize] = theme.sizes.texts[textKey as TextSize].replace('em', '');
    });

    Object.keys(theme.sizes.headings).map((headingKey) => {
        theme.sizes.headings[headingKey as HeadingLevel] = theme.sizes.headings[headingKey as HeadingLevel].replace('px', '');
        theme.sizes.headings[headingKey as HeadingLevel] = theme.sizes.headings[headingKey as HeadingLevel].replace('rem', '');
        theme.sizes.headings[headingKey as HeadingLevel] = theme.sizes.headings[headingKey as HeadingLevel].replace('em', '');
    });

    return theme;
};
