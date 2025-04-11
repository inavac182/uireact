import { HeadingLevel, TextSize, Theme } from "@uireact/foundation";

export const getSizesVariables = (theme: Theme): string => {
    let variables = '';

    Object.keys(theme.sizes.texts).map(textSize => {
        const size = theme.sizes.texts[textSize as TextSize];

        variables = `${variables}
    --texts-${textSize}: ${size};`;
    });

    Object.keys(theme.sizes.headings).map(headingSize => {
        const size = theme.sizes.headings[headingSize as HeadingLevel];

        variables = `${variables}
    --texts-${headingSize}: ${size};`;
    });

    return variables;
}