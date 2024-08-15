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
        level1: '5rem',
        level2: '4rem',
        level3: '3.5rem',
        level4: '3rem',
        level5: '2.5rem',
        level6: '2rem'
    },
    texts: {
        xsmall: '0.75rem',
        small: '1rem',
        regular: '1.2rem',
        large: '2.5rem',
        xlarge: '3.75rem'
    }
}

export const spacesStructure: Spacing = {
    one: '0.4rem',
    two: '0.8rem',
    three: '1rem',
    four: '1.5rem',
    five: '2.5rem',
    six: '4rem',
    seven: '6rem'
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