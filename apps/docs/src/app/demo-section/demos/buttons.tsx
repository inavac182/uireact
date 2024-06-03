import { UiButton } from "@uireact/button"
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex"
import { UiSpacing, UiSpacingProps } from "@uireact/foundation"
import { UiIcon } from "@uireact/icons"
import { UiHeading, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"

const buttonSpacing: UiSpacingProps['padding'] = { block: 'four'};
const buttonSpacingOutlined: UiSpacingProps['padding'] = { block: 'two'};

export const ButtonsDemo = () => {
    return (
        <DemoCard category="tertiary">
            <>
                <UiHeading coloration="light">Buttons with styles</UiHeading>
                <br />
                <UiFlexGrid alignItems="center" gap="four">
                    <UiFlexGridItem>
                        <UiButton styling="icon">
                            <UiIcon icon="Moon" />
                        </UiButton>
                    </UiFlexGridItem>
                    <UiFlexGridItem grow={1}>
                        <UiButton styling="outlined" rounded fullWidth>
                            <UiText size="small" align="center">
                                🦹🏻‍♂️ Click me
                            </UiText>
                        </UiButton>
                    </UiFlexGridItem>
                </UiFlexGrid>
                <br />
                <UiFlexGrid alignItems="center" gap="four">
                    <UiFlexGridItem grow={1}>
                        <UiButton fullWidth>
                            <UiSpacing padding={buttonSpacing}>
                                <UiText align="center">
                                    ☀️
                                </UiText>
                            </UiSpacing>
                        </UiButton>
                    </UiFlexGridItem>
                    <UiFlexGridItem grow={1}>
                        <UiButton styling="outlined" fullWidth>
                            <UiSpacing padding={buttonSpacingOutlined}>
                                <UiText align="center">
                                    🌙
                                </UiText>
                            </UiSpacing>
                        </UiButton>
                    </UiFlexGridItem>
                </UiFlexGrid>
                <br />
                <UiButton category="secondary" fullWidth>
                    <UiSpacing padding={buttonSpacing}>
                        <UiText align="center">
                            🙈
                        </UiText>
                    </UiSpacing>
                </UiButton>
            </>
        </DemoCard>
    )
}