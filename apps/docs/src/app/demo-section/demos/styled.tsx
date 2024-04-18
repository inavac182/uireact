import { motion } from 'framer-motion';

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
                <UiText centered size='xlarge'>💅</UiText>
            </>
        </DemoCard>
    )
}