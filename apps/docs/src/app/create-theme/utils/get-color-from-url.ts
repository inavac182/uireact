import { ColorCategories, ColorTokens, Theme, ThemeColor } from "@uireact/foundation";

export const getColorFromUrl = (stringifiedTheme: string, coloration: ThemeColor, category: ColorCategories, token: ColorTokens) => {
    const theme: Theme = JSON.parse(decodeURIComponent(stringifiedTheme));

    return theme[coloration][category][token];
}

export const getTokensFromUrl = (stringifiedTheme: string, coloration: ThemeColor, category: ColorCategories) => {
    const theme: Theme = JSON.parse(decodeURIComponent(stringifiedTheme));

    return theme[coloration][category];
}