import { Spacing, SpacingType, Theme } from "@uireact/foundation";

export const mergeSpacesTheme = (theme: Theme, spaces: Spacing): Theme => {
    const updatedTheme = { ...theme };
    updatedTheme.spacing = { ...spaces };

    Object.keys(updatedTheme.spacing).map((spaceKey) => {
        const spacing = updatedTheme.spacing[spaceKey as SpacingType]
        updatedTheme.spacing[spaceKey as SpacingType] = `${spacing}rem`;
    });

    return updatedTheme;
};
