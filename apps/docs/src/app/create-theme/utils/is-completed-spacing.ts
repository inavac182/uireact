import { SpacingType, Theme } from "@uireact/foundation"

export const isCompletedSpacing = (theme: Theme | null) => {
    if (!theme) {
        return false;
    }

    let completed = true;

    Object.keys(theme.spacing).map((spacingKey) => {
        if (!theme.spacing[spacingKey as SpacingType]) {
            completed = false;
        }
    });

    return completed;
};
