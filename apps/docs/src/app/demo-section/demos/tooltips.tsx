import { DemoCard } from "@/app/internal"
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiHeading, UiText } from "@uireact/text"
import { UiTooltip } from '@uireact/tooltip';

export const TooltipsDemo = () => {
    return (
        <DemoCard category="tertiary">
            <>
                <UiHeading coloration="light">Tooltips</UiHeading>
                <br />
                <UiText>
                    Tooltips appear around a content on hover:
                </UiText>
                <br />
                <UiFlexGrid alignItems="center" justifyContent="center" gap="five">
                    <UiFlexGridItem>
                        <UiTooltip text="A dinosaur" position="top">
                            <UiText size="xlarge">
                                🦖
                            </UiText>
                        </UiTooltip>
                    </UiFlexGridItem>
                    <UiFlexGridItem>
                        <UiTooltip text="A UNICORN" position="bottom">
                            <UiText size="xlarge">
                                🦄
                            </UiText>
                        </UiTooltip>
                    </UiFlexGridItem>
                    <UiFlexGridItem>
                        <UiTooltip text="A Whale" position="left">
                            <UiText size="xlarge">
                                🐳
                            </UiText>
                        </UiTooltip>
                    </UiFlexGridItem>
                </UiFlexGrid>
            </>
        </DemoCard>
    )
}