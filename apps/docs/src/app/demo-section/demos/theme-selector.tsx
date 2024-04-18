import { UiSpacing, UiSpacingProps } from "@uireact/foundation"
import { UiList, UiListItem } from "@uireact/list"
import { UiHeading, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"

const settingsSpacing: UiSpacingProps['padding'] = { left: 'five' };

export const ThemeSelectorDemo = () => {
    return (
        <DemoCard category="tertiary">
            <>
                <UiHeading coloration="light">Appearance selector</UiHeading>
                <br />
                <UiText coloration="light">User can change the theme through their settings</UiText>
                <br />
                <UiSpacing padding={settingsSpacing}>
                    <UiList type="ORDERED">
                    <UiListItem>
                        <UiText size="small" coloration="light">Go to settings</UiText>
                    </UiListItem>
                    <UiListItem>
                        <UiText size="small" coloration="light">Go to appearance</UiText>
                    </UiListItem>
                    <UiListItem>
                        <UiText size="small" coloration="light">Change appearance</UiText>
                    </UiListItem>
                    </UiList>
                </UiSpacing>
            </>
        </DemoCard>
    )
}