import { UiHeading, UiText } from "@uireact/text"
import { UiCard } from '@uireact/card';

import { DemoCard } from "@/app/internal"

export const Tabs = () => {
    return (
        <DemoCard  shadow={false}>
            <>
                <UiHeading>Cards</UiHeading>
                <br /> 
                <UiCard category="primary">
                    <UiText>Content</UiText>
                </UiCard>
            </>
        </DemoCard>
    )
}