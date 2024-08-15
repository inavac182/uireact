import { useMemo } from "react";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";

import { ColorCategories, ThemeColor } from "@uireact/foundation"
import { UiFlexGrid } from "@uireact/flex";
import { UiIcon } from "@uireact/icons";

import { ColorBoxPicker } from "./color-box-picker";
import { isCompletedColoration } from "../utils";

type ColorationsFormProps = {
    $coloration: ThemeColor;
}

const Container = styled.div<ColorationsFormProps>`
    ${props => `
        ${props.$coloration === ThemeColor.dark ? `
            background-color: #000;
            color: #fff;
        ` : `
            background-color: #fff;
            color: #000;
        `}
    `}

    padding: 30px;
    border-radius: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ColorationsForm = ({ $coloration }: ColorationsFormProps) => {
    const searchParams = useSearchParams();
    const isColorationCompleted = useMemo(() => {
        const urlTheme = searchParams.get('theme');

        if (urlTheme) {
            return isCompletedColoration(urlTheme, $coloration);
        }

        return false;
    }, [$coloration, searchParams]);

    return (
        <Container $coloration={$coloration}>
            <h3>{$coloration} coloration {
                isColorationCompleted 
                ? <UiIcon icon="CheckCircle" category="positive" size="xlarge" /> 
                : <UiIcon icon="WarningCircle" category="warning" size="xlarge" /> 
                } </h3>
            <br />
            {$coloration === ThemeColor.dark ? (
                <>
                    <p>Coloration used when Dark theme is enabled in user&apos;s device.</p>
                    <p>Colors should mainly be in the darker end as is usually used during nights or dark environments to protect the user&apos;s eyes.</p>
                </>
            ) : (
                <>
                   <p>Coloration used when Light theme is enabled in user&apos;s device.</p>
                   <p>Colors should mainly be in the lighter end as is usually used during daylight or under sun light, so colors should be bright to help against reflections.</p>
                </> 
            )}
            <br />
            <strong>Main colors</strong>
            <br />
            <br />
            <UiFlexGrid gap="five" wrap="wrap">
                <ColorBoxPicker category={ColorCategories.primary} $coloration={$coloration} />
                <ColorBoxPicker category={ColorCategories.secondary} $coloration={$coloration} />
                <ColorBoxPicker category={ColorCategories.tertiary} $coloration={$coloration} />
            </UiFlexGrid>
            <br />
            <br />
            <strong>Support colors</strong>
            <br />
            <br />
            <UiFlexGrid gap="five" wrap="wrap">
                <ColorBoxPicker category={ColorCategories.positive} $coloration={$coloration} />
                <ColorBoxPicker category={ColorCategories.negative} $coloration={$coloration} />
                <ColorBoxPicker category={ColorCategories.warning} $coloration={$coloration} />
                <ColorBoxPicker category={ColorCategories.error} $coloration={$coloration} />
            </UiFlexGrid>
        </Container>
    )
}

