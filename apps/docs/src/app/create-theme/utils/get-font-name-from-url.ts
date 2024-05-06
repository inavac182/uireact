import { Theme } from "@uireact/foundation";

export const getFontNameFromUrl = (encodedTheme: string | null) => {
    if (!encodedTheme) {
        return '';
    }

    const theme: Theme = JSON.parse(decodeURIComponent(encodedTheme));
    return theme.texts.font;
}