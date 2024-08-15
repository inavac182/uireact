import { DemoCard } from "@/app/internal"
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiHeading, UiText } from "@uireact/text"
import { UiTooltip } from '@uireact/tooltip';

export const TooltipsDemo = () => {
    return (
        <DemoCard category="secondary">
            <>
                <UiHeading>Tooltips</UiHeading>
                <br />
                <UiText>
                    Tooltips appear around a content on hover:
                </UiText>
                <br />
                <UiFlexGrid alignItems="center" justifyContent="center" gap="five">
                    <UiFlexGridItem>
                        <UiTooltip text="A dinosaur" position="top">
                            <UiText size="large">
                                🦖
                            </UiText>
                        </UiTooltip>
                    </UiFlexGridItem>
                    <UiFlexGridItem>
                        <UiTooltip text="A UNICORN" position="bottom">
                            <UiText size="large">
                                🦄
                            </UiText>
                        </UiTooltip>
                    </UiFlexGridItem>
                    <UiFlexGridItem>
                        <UiTooltip text="A Whale" position="left">
                            <UiText size="large">
                                🐳
                            </UiText>
                        </UiTooltip>
                    </UiFlexGridItem>
                </UiFlexGrid>
            </>
        </DemoCard>
    )
}