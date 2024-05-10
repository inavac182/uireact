import { HeadingLevel, HeadingSizes, TextSize, Theme } from "@uireact/foundation"

export const isCompleletedSizes = (theme: Theme | null) => {
    if (!theme) {
        return false;
    }

    let completed = true;

    Object.keys(theme.sizes.texts).map((textKey) => {
        if (!theme.sizes.texts[textKey as TextSize]) {
            completed = false;
        }
    });

    Object.keys(theme.sizes.headings).map((headingKey) => {
        if (!theme.sizes.headings[headingKey as HeadingLevel]) {
            completed = false;
        }
    });

    return completed;
};
