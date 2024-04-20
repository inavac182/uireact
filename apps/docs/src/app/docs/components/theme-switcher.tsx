'use client';
import { useCallback, useContext } from "react"

import { DocsThemeContext } from "@/app/providers";
import { UiButton } from "@uireact/button"
import { UiIcon } from "@uireact/icons"
import { ThemeColor } from "@uireact/foundation";

export const ThemeSwitcher = () => {
    const { selectTheme, selectedTheme } = useContext(DocsThemeContext);
    const toggleTheme = useCallback(() => {
        selectTheme(selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark);
    }, [selectTheme, selectedTheme]);

    return (
        <UiButton styling="icon" onClick={toggleTheme}>
            <UiIcon icon="Opacity" size="small" />
        </UiButton>
    );
}