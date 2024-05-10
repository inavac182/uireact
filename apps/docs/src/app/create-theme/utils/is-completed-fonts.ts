import { Theme } from "@uireact/foundation";

export const isCompletedFonts = (theme: Theme | null) => {
    if (!theme) {
        return false;
    }

    if (!theme.dark.fonts.token_100 || !theme.light.fonts.token_100) {
        return false;
    }

    if (!theme.texts.font) {
        return false;
    }

    return true;
}