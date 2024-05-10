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
        level1: '32px',
        level2: '28px',
        level3: '24px',
        level4: '22px',
        level5: '20px',
        level6: '18px'
    },
    texts: {
        xsmall: '12px',
        small: '14px',
        regular: '16px',
        large: '18px',
        xlarge: '20px'
    }
}

export const spacesStructure: Spacing = {
    one: '2px',
    two: '4px',
    three: '8px',
    four: '16px',
    five: '24px',
    six: '32px',
    seven: '40px',
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