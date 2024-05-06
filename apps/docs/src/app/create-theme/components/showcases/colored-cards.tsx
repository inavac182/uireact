import styled from "styled-components";

import { UiCard } from "@uireact/card";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiText } from "@uireact/text";

const ColorationsDiv = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(45deg, var(--primary-token_150) 0%, var(--tertiary-token_100) 100%);
    padding: 20px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const ColorationsText = styled.h3`
    font-size: 44px;
    background: -webkit-linear-gradient(45deg,  rgba(2,0,36,1) 0%, rgba(255,255,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ColoredCards = () => {
    return (
        <UiFlexGrid gap="five" alignItems="stretch">
            <UiFlexGridItem grow={1}>
                <ColorationsDiv>
                    <ColorationsText>Light</ColorationsText>
                    <ColorationsText>Dark</ColorationsText>
                </ColorationsDiv>
            </UiFlexGridItem>
            <UiFlexGridItem grow={1}>
                <UiCard category="tertiary">
                    <UiText>All components plugged in to the theme</UiText>
                </UiCard>
            </UiFlexGridItem>
            <UiFlexGridItem grow={1}>
                <UiCard category="negative">
                    <UiText>Subscribed to user settings appearance</UiText>
                </UiCard>
            </UiFlexGridItem>
        </UiFlexGrid>
    )
};
