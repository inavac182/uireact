import { ColorTokens } from "@uireact/foundation";
import { NavbarColoration } from "../types";

export const getColorationToken = (coloration?: NavbarColoration, active?: boolean) => {
    if (coloration === 'light') {
        if (active) {
            return ColorTokens.token_50;
        }

        return ColorTokens.token_10;
    }

    if (active) {
        return ColorTokens.token_150;
    }

    return ColorTokens.token_200;
};
