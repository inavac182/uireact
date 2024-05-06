import { ColorCategories, ColorTokens, Theme, ThemeColor } from "@uireact/foundation";

export const getColorFromUrl = (stringifiedTheme: string | null = '', coloration: ThemeColor, category: ColorCategories, token: ColorTokens) => {
    if (!stringifiedTheme) {
        return '';
    }

    const theme: Theme = JSON.parse(atob(stringifiedTheme));

    return theme[coloration][category][token];
}

export const getTokensFromUrl = (stringifiedTheme: string, coloration: ThemeColor, category: ColorCategories) => {
    const theme: Theme = JSON.parse(atob(stringifiedTheme));

    return theme[coloration][category];
}