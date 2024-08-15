'use client';
import { useCallback, useMemo, useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import { useSearchParams, useRouter } from "next/navigation";
import styled from "styled-components";

import { UiButton } from "@uireact/button";
import { UiFlexGrid } from "@uireact/flex";
import { ColorCategories, ColorTokens, ThemeColor } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiMenu } from "@uireact/menu";

import { MergeTokens, generateThemeStructure } from "../utils";
import { getColorFromUrl, getTokensFromUrl } from "../utils/get-color-from-url";
import { generateColorTokens } from "../utils";

type ColorBoxPickerProps = {
    category: ColorCategories;
    $coloration: ThemeColor;
};

const baseDarkColor = '#fff';
const baseLightColor = '#000';

const ColorWrapper = styled.div`
    flex-grow: 1;
`;

const ColorBox = styled.div<{ $coloration: ThemeColor, $color?: string, $backgroundColor: string }>`
    ${props => `background-color: ${props.$backgroundColor};`}
    ${props => {
        if (props.$color) {
            return `color: ${props.$color};`;
        } else {
            return `color: ${props.$coloration === ThemeColor.dark ? baseDarkColor : baseLightColor};`;
        }
    }}

    button {
        &:hover {
            svg { 
                fill: ${baseDarkColor} !important;
            }
        }
    } 

    svg { 
        fill: ${(props) => props.$coloration === ThemeColor.dark ? baseDarkColor : baseLightColor} !important;
    }

    flex-grow: 1;
    padding: 10px;
    border-radius: 30px;
`;

const ColorText = styled.p`
    text-align: center;
    font-weight: bold;
`;

const ColorTokensBox = styled.div<{ $coloration: ThemeColor, $category?: ColorCategories }>`
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    ${(props) => {
        return `
            background-color: ${props.$coloration === ThemeColor.dark ? baseDarkColor : baseLightColor };
            svg {
                fill: ${props.$coloration === ThemeColor.dark ? baseLightColor : baseDarkColor } !important;
            }
        `
    }}
`;

const ColorToken = styled.div<{ $color: string }>`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.$color};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const FontColorBoxPicker = ({ category, $coloration }: ColorBoxPickerProps) => {
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlTheme = searchParams.get('theme');

    const primaryColor = useMemo(() => {
        return getColorFromUrl(urlTheme, $coloration, ColorCategories.primary, ColorTokens.token_100);
    }, [urlTheme]);
    const secondaryColor = useMemo(() => {
        return getColorFromUrl(urlTheme, $coloration, ColorCategories.secondary, ColorTokens.token_100);
    }, [searchParams]);
    const tertiaryColor = useMemo(() => {
        return getColorFromUrl(urlTheme, $coloration, ColorCategories.tertiary, ColorTokens.token_100);
    }, [searchParams]);

    const positiveColor = useMemo(() => {
        return getColorFromUrl(urlTheme, $coloration, ColorCategories.positive, ColorTokens.token_100);
    }, [searchParams]);
    const negativeColor = useMemo(() => {
        return getColorFromUrl(urlTheme, $coloration, ColorCategories.negative, ColorTokens.token_100);
    }, [searchParams]);
    const errorColor = useMemo(() => {
        return getColorFromUrl(urlTheme, $coloration, ColorCategories.error, ColorTokens.token_100);
    }, [searchParams]);
    const warningColor = useMemo(() => {
        return getColorFromUrl(urlTheme, $coloration, ColorCategories.warning, ColorTokens.token_100);
    }, [searchParams]);

    const color = useMemo(() => {
        const urlTheme = searchParams.get('theme');

        if (urlTheme) {
            return getColorFromUrl(urlTheme, $coloration, category, ColorTokens.token_100);
        }

        return '';
    }, [searchParams]);
    const tokens = useMemo(() => {
        const urlTheme = searchParams.get('theme');

        if (urlTheme) {
            return getTokensFromUrl(urlTheme, $coloration, category);
        }

        return null;
    }, [searchParams]);

    const tooglePicker = useCallback(() => {
        setColorPickerVisible(!colorPickerVisible);
    }, [colorPickerVisible, setColorPickerVisible]);

    const setColorCB = useCallback((value: ColorResult) => {
        const themeInUrl = searchParams.get('theme');
        const theme = themeInUrl ? JSON.parse(atob(themeInUrl)) : generateThemeStructure();
        const tokens = generateColorTokens(value.hsl);
        const updatedTheme = MergeTokens($coloration, category, tokens, theme);

        const encodedTheme = btoa(JSON.stringify(updatedTheme));

        router.push(`?theme=${encodedTheme}`, { scroll: false });
    }, [router, searchParams]);

    return (
        <ColorWrapper>
            <ColorBox $coloration={$coloration} $color={color} $backgroundColor={primaryColor}>
                <UiFlexGrid alignItems="center" justifyContent="space-between">
                    <strong>Font coloration</strong>
                    <UiButton styling="icon" onClick={tooglePicker} category="tertiary">
                        <UiIcon icon="BarsProgress" />
                    </UiButton>
                </UiFlexGrid>
                <UiMenu visible={colorPickerVisible} closeMenuCB={tooglePicker}>
                    <SketchPicker onChangeComplete={setColorCB} color={color} />
                </UiMenu>
                <ColorText>{color ? color : ''}</ColorText>
            </ColorBox>
            {tokens && tokens.token_100 !== '' && (
                <>
                    <br />
                    <ColorTokensBox $coloration={$coloration} $category={category}>
                        <UiIcon icon="Brightness" />
                        <ColorToken $color={tokens.token_10} />
                        <ColorToken $color={tokens.token_50} />
                        <ColorToken $color={tokens.token_100} />
                        <ColorToken $color={tokens.token_150} />
                        <ColorToken $color={tokens.token_200} />
                        <UiIcon icon="Moon" />
                    </ColorTokensBox>
                    <br />
                    <p>Font color over your other colors:</p>
                    <br />
                    <UiFlexGrid gap="five">
                        <ColorBox $coloration={$coloration} $color={color} $backgroundColor={primaryColor}>
                                <strong>Primary color</strong>
                        </ColorBox>
                        <ColorBox $coloration={$coloration} $color={color} $backgroundColor={secondaryColor}>
                                <strong>Secondary color</strong>
                        </ColorBox>
                        <ColorBox $coloration={$coloration} $color={color} $backgroundColor={tertiaryColor}>
                                <strong>Tertiary color</strong>
                        </ColorBox>
                    </UiFlexGrid>
                    <br />
                    <UiFlexGrid gap="five">
                        <ColorBox $coloration={$coloration} $color={color} $backgroundColor={positiveColor}>
                                <strong>Positive color</strong>
                        </ColorBox>
                        <ColorBox $coloration={$coloration} $color={color} $backgroundColor={negativeColor}>
                                <strong>Negative color</strong>
                        </ColorBox>
                        <ColorBox $coloration={$coloration} $color={color} $backgroundColor={warningColor}>
                                <strong>Warning color</strong>
                        </ColorBox>
                        <ColorBox $coloration={$coloration} $color={color} $backgroundColor={errorColor}>
                                <strong>Error color</strong>
                        </ColorBox>
                    </UiFlexGrid>
                </>
            )}
        </ColorWrapper>
    )
}