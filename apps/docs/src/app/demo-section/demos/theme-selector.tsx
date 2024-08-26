import { UiSpacing, UiSpacingProps } from "@uireact/foundation"
import { UiList, UiListItem } from "@uireact/list"
import { UiHeading, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"

const settingsSpacing: UiSpacingProps['padding'] = { left: 'three' };

export const ThemeSelectorDemo = () => {
    return (
        <DemoCard category="tertiary">
            <>
                <UiHeading>Appearance selector</UiHeading>
                <br />
                <UiText>User can change the theme through their device settings</UiText>
                <br />
                <UiSpacing padding={settingsSpacing}>
                    <UiList type="ORDERED">
                    <UiListItem>
                        <UiText size="small">Go to settings</UiText>
                    </UiListItem>
                    <UiListItem>
                        <UiText size="small">Go to appearance</UiText>
                    </UiListItem>
                    <UiListItem>
                        <UiText size="small">Change appearance</UiText>
                    </UiListItem>
                    </UiList>
                </UiSpacing>
            </>
        </DemoCard>
    )
}