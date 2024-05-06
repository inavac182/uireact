'use client';
import { useCallback, useMemo, useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import styled from "styled-components";

import { UiButton } from "@uireact/button";
import { UiFlexGrid } from "@uireact/flex";
import { ColorCategories, ThemeColor } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiMenu } from "@uireact/menu";

type ColorBoxPickerProps = {
    category: ColorCategories;
    $coloration: ThemeColor;
};

const baseDarkBg = '#5A5A5A';
const baseLightBg = '#F7F7F7';
const baseDarkColor = '#fff';
const baseLightColor = '#000';

const ColorBox = styled.div<{ $coloration: ThemeColor, color?: string }>`
    ${props => {
        if (props.color && props.color !== '') {
            return `
                background-color: #${props.color};
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

    flex-grow: 1;
    padding: 10px;
    border-radius: 30px;
`;

const ColorText = styled.p`
    text-align: center;
`;

export const ColorBoxPicker = ({ category, $coloration }: ColorBoxPickerProps) => {
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const router = useRouter();
    const color = useMemo(() => searchParams.get(category) || '', [searchParams]);

    const tooglePicker = useCallback(() => {
        setColorPickerVisible(!colorPickerVisible);
    }, [colorPickerVisible, setColorPickerVisible]);

    const setColorCB = useCallback((value: ColorResult) => {
        router.push(`${pathname}?${category}=${value.hex.replace('#', '')}`, { scroll: false });
    }, [router]);

    return (
        <ColorBox $coloration={$coloration} color={color}>
            <UiFlexGrid alignItems="center" justifyContent="space-between">
                <strong>{category}</strong>
                <UiButton styling="icon" onClick={tooglePicker}>
                    <UiIcon icon="BarsProgress" />
                </UiButton>
            </UiFlexGrid>
            <UiMenu visible={colorPickerVisible} closeMenuCB={tooglePicker}>
                <SketchPicker onChangeComplete={setColorCB} color={color} />
            </UiMenu>
            <ColorText>{color ? `#${color}` : <UiIcon icon="CaretUp" />}</ColorText>
        </ColorBox>
    )
}