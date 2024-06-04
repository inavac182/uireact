import { Sizing, Theme } from "@uireact/foundation";

export const getSpacingVariables = (theme: Theme) => {
    let variables = '';

    Object.keys(theme.spacing).map(spacingLevel => {
        const spacing = theme.spacing[spacingLevel as Sizing];

        variables = `${variables}
--spacing-${spacingLevel}: ${spacing};`;
    });

    return variables;
};

