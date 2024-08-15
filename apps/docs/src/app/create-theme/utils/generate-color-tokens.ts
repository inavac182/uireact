import { HSLColor } from "react-color";
import hsl from 'hsl-to-hex';
import { ColorTokens, Tokens } from "@uireact/foundation";

enum LumType {
    LIGHT = 'light',
    NORMAL = 'normal',
    DARK = 'dark'
};

/**
 * 
 * @param value - The selected color that reperesents token_100
 * @param token - The token that we need to generate
 * @param type - The type of luminocity selected in the token_100
 * @returns Luminosity for specific token, 100 is all white and 0 is all black
 */
const generateLuminosity = (value: number, token: ColorTokens, type: LumType) => {
    switch (token) {
        case ColorTokens.token_10: 
            if (type === LumType.LIGHT) {
                return 100;
            }

            if (type === LumType.DARK) {
                return value * 1.8;
            }

            return value * 1.5;
        case ColorTokens.token_50:
            if (type === LumType.LIGHT) {
                const available = 100 - value;
                const luminosity = value + available / 2;
                return luminosity;
            }

            if (type === LumType.DARK) {
                return value * 1.5;
            }

            return value * 1.2;
        case ColorTokens.token_150: 
            if (type === LumType.LIGHT) {
                return value / 1.3;
            }

            if (type === LumType.DARK) {
                return value / 1.4;
            }

            return value / 1.5;
        case ColorTokens.token_200: 
            if (type === LumType.LIGHT) {
                return value / 1.4;
            }

            if (type === LumType.DARK) {
                return value / 1.8;
            }

            return value / 1.8;
        default: 
            return value;
    }
}

export const generateColorTokens = (color: HSLColor): Tokens => {
    const luminosity = color.l * 100;
    const lumType = luminosity > 80 ? LumType.LIGHT : luminosity < 20 ? LumType.DARK : LumType.NORMAL;

    const tokens: Tokens = {
        // Lighter
        token_10: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_10, lumType)),
        token_50: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_50, lumType)),
        token_100: hsl(color.h, color.s * 100, luminosity),
        token_150: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_150, lumType)),
        token_200: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_200, lumType))
        // Darker
    };

    return tokens;
}
