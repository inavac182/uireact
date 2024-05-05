import { UiCard } from "@uireact/card";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiText } from "@uireact/text";

export const ColoredCards = () => {
    return (
        <UiFlexGrid gap="five" alignItems="stretch">
            <UiFlexGridItem grow={1}>
                <UiCard category="positive">
                    <UiText>Light / Dark coloration</UiText>
                </UiCard>
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
