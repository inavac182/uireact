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
        level1: '4rem',
        level2: '3rem',
        level3: '2.5rem',
        level4: '2rem',
        level5: '1.5rem',
        level6: '1.2rem'
    },
    texts: {
        xsmall: '0.8rem',
        small: '1rem',
        regular: '1.2rem',
        large: '1.5rem',
        xlarge: '2rem'
    }
}

export const spacesStructure: Spacing = {
    one: '0.2rem',
    two: '0.4rem',
    three: '1rem',
    four: '1.5rem',
    five: '2rem',
    six: '2.5rem',
    seven: '3rem'
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