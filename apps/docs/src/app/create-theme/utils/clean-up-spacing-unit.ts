import { Spacing, SpacingType, Theme } from "@uireact/foundation";

export const cleanUpSpacingUnits = (theme: Theme): Spacing => {
    const spacings = { ...theme.spacing };

    Object.keys(spacings).map((key) => {
        spacings[key as SpacingType] = spacings[key as SpacingType].replace('rem', '');
    });

    return spacings;
};
