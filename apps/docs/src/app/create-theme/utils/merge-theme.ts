import { ColorCategories, ColorTokens, Theme, ThemeColor, ThemeProperties, Tokens } from "@uireact/foundation";

export const MergeTokens = (
    coloration: ThemeColor, 
    category: ColorCategories, 
    value: Tokens, 
    theme: Theme
) => {
    theme[coloration][category] = { ...value };
    return theme;
};
