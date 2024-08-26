import { UiHeading, UiText } from "@uireact/text"
import { UiExpandoCard } from '@uireact/expando';

import { DemoCard } from "@/app/internal"

export const ExpandosDemo = () => {
    return (
        <DemoCard shadow={false}>
            <>
                <UiHeading>Expandos</UiHeading>
                <UiText size="small">Components that expand to reveal content</UiText>
                <br />
                <UiExpandoCard category="secondary" expanded={false} expandLabel="Expand Card" collapseLabel="Collapse Card" headingInverseColoration>
                    <UiText inverseColoration>
                        Some content
                    </UiText>
                </UiExpandoCard>
            </>
        </DemoCard>
    )
}