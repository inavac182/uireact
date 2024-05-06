import { ColorCategories, ColorToken, ColorTokens, Theme, ThemeColor, Tokens } from "@uireact/foundation";

export const isCompletedColoration = (stringifiedTheme: string, coloration: ThemeColor) => {
    const theme: Theme = JSON.parse(decodeURIComponent(stringifiedTheme));
    let isCompleted = true;
    const colorCategories = theme[coloration];

    Object.keys(colorCategories).map((categoryKey) => {
        const tokens = theme[coloration][categoryKey as ColorCategories];
        if (categoryKey !== 'fonts') {
            Object.keys(tokens).map((token) => {
                const tokenValue = theme[coloration][categoryKey as ColorCategories][token as ColorTokens];
                if (!tokenValue) {
                    isCompleted = false;
                }
            });
        }
    });

    return isCompleted;
}