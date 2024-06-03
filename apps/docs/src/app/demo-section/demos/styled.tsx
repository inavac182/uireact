import { UiHeading, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"

export const StyledDemo = () => {
    return (
        <DemoCard shadow={false}>
            <>
                <UiHeading>Styled Components</UiHeading>
                <br />
                <UiText>We use styled components for CSS</UiText>
                <br />
                <UiText align='center' size='xlarge'>💅</UiText>
            </>
        </DemoCard>
    )
}