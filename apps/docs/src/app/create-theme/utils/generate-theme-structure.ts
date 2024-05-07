import { Coloration, Sizes, Spacing, Theme, Tokens } from "@uireact/foundation";

const colorStructure: Tokens = {
    token_10: '',
    token_50: '',
    token_100: '',
    token_150: '',
    token_200: ''
};

const colorationStructure: Coloration = {
    error: { ...colorStructure },
    warning: { ...colorStructure },
    negative: { ...colorStructure },
    positive: { ...colorStructure },
    fonts: { ...colorStructure },
    primary: { ...colorStructure },
    secondary: { ...colorStructure },
    tertiary: { ...colorStructure }
}

export const sizesStructure: Sizes = {
    headings: {
        level1: '',
        level2: '',
        level3: '',
        level4: '',
        level5: '',
        level6: '',
    },
    texts: {
        xsmall: '',
        small: '',
        regular: '',
        large: '',
        xlarge: ''
    }
}

const spacesStructure: Spacing = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: ''
}

export const generateThemeStructure = (): Theme => {
    return {
        dark: { ...colorationStructure },
        light: { ...colorationStructure },
        name: 'custom-theme',
        sizes: sizesStructure,
        spacing: spacesStructure,
        texts: {
            font: ''
        }
    }
}