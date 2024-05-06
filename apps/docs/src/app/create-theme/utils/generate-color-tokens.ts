import { HSLColor } from "react-color";
import hsl from 'hsl-to-hex';
import { ColorToken, ColorTokens, Tokens } from "@uireact/foundation";

const generateLuminosity = (value: number, token: ColorTokens) => {
    switch (token) {
        case ColorTokens.token_10: 
            return value * 1.5;
        case ColorTokens.token_50:
            return value * 1.2;
        case ColorTokens.token_150: 
            return value * 0.8;
        case ColorTokens.token_200: 
            return value * 0.5;
        default: 
            return value;
    }
}

export const generateColorTokens = (color: HSLColor): Tokens => {
    const luminosity = color.l * 100;
    const tokens: Tokens = {
        // Lighter
        token_10: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_10)),
        token_50: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_50)),
        token_100: hsl(color.h, color.s * 100, luminosity),
        token_150: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_150)),
        token_200: hsl(color.h, color.s * 100, generateLuminosity(luminosity, ColorTokens.token_200))
        // Darker
    };

    return tokens;
}
