'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import styled from "styled-components";

import { UiButton } from "@uireact/button";
import { UiFlexGrid } from "@uireact/flex";
import { ColorCategories, ColorTokens, ThemeColor } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiMenu } from "@uireact/menu";

import { UiSwitch } from "@uireact/form";
import { MergeTokens, generateColorTokens, generateThemeStructure } from "../utils";
import { getColorFromUrl, getTokensFromUrl } from "../utils/get-color-from-url";

type ColorBoxPickerProps = {
    category: ColorCategories;
    $coloration: ThemeColor;
};

const baseDarkBg = '#5A5A5A';
const baseLightBg = '#F7F7F7';
const baseDarkColor = '#fff';
const baseLightColor = '#000';

const ColorWrapper = styled.div`
    flex-grow: 1;
`;

const ColorBox = styled.div<{ $coloration: ThemeColor, color?: string }>`
    ${props => {
        if (props.color && props.color !== '') {
            return `
                background-color: ${props.color};
            `;
        } else {
            return `background-color: ${props.$coloration === ThemeColor.dark ? baseDarkBg : baseLightBg };`;
        }
    }}

    color: ${(props) => props.$coloration === ThemeColor.dark ? baseDarkColor : baseLightColor};

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

    padding: 10px;
    border-radius: 30px;
`;

const ColorText = styled.p<{ $coloration: ThemeColor, $inverse: boolean }>`
    text-align: center;
    font-weight: bold;

    color: ${(props) => {
        if (props.$coloration === ThemeColor.dark) {
            if (props.$inverse) {
                return baseLightColor;    
            }

            return baseDarkColor;
        }

        if (props.$inverse) {
            return baseDarkColor;
        }

        return baseLightColor;
    }}
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

export const ColorBoxPicker = ({ category, $coloration }: ColorBoxPickerProps) => {
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const [inverse, setInverse] = useState(false);
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const router = useRouter();
    const color = useMemo(() => {
        const urlTheme = searchParams.get('theme');

        if (urlTheme) {
            return getColorFromUrl(urlTheme, $coloration, category, ColorTokens.token_100);
        }

        return '';
    }, [$coloration, category, searchParams]);
    const tokens = useMemo(() => {
        const urlTheme = searchParams.get('theme');

        if (urlTheme) {
            return getTokensFromUrl(urlTheme, $coloration, category);
        }

        return null;
    }, [$coloration, category, searchParams]);

    const tooglePicker = useCallback(() => {
        setColorPickerVisible(!colorPickerVisible);
    }, [colorPickerVisible, setColorPickerVisible]);

    const setColorCB = useCallback((value: ColorResult) => {
        const themeInUrl = searchParams.get('theme');
        const theme = themeInUrl ? JSON.parse(atob(themeInUrl)) : generateThemeStructure();
        const tokens = generateColorTokens(value.hsl);
        const updatedTheme = MergeTokens($coloration, category, tokens, theme);

        const encodedTheme = btoa(JSON.stringify(updatedTheme));

        router.push(`${pathname}?theme=${encodedTheme}`, { scroll: false });
    }, [$coloration, category, pathname, router, searchParams]);

    return (
        <ColorWrapper>
            <ColorBox $coloration={$coloration} color={color}>
                <UiFlexGrid alignItems="center" justifyContent="space-between">
                    <ColorText $coloration={$coloration} $inverse={inverse}>{category}</ColorText>
                    <UiButton styling="icon" onClick={tooglePicker} category="tertiary">
                        <UiIcon icon="BarsProgress" />
                    </UiButton>
                </UiFlexGrid>
                <UiFlexGrid alignItems="center" justifyContent="space-between">
                    {category === 'secondary' && (
                        <UiSwitch 
                        name={`coloration-${$coloration}-${category}-inverse`} 
                        checked={inverse} 
                        onChange={() => setInverse(!inverse)} 
                        label="Inverse font color?"
                    />)}
                </UiFlexGrid>
                <UiMenu visible={colorPickerVisible} closeMenuCB={tooglePicker}>
                    <SketchPicker onChangeComplete={setColorCB} color={color} />
                </UiMenu>
                <ColorText $coloration={$coloration} $inverse={inverse}>{color ? color : ''}</ColorText>
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
                </>
            )}
        </ColorWrapper>
    )
}