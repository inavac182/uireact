import styled from 'styled-components';
import { UiHeading, UiText } from "@uireact/text"
import { UiCard } from '@uireact/card';

import { DemoCard } from "@/app/internal"
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const CustomCard = styled(UiCard)`
    border-radius: 0px 30px 0px 30px;
    padding: 30px;
`;

export const Cards = () => {
    return (
        <DemoCard  shadow={false}>
            <>
                <UiHeading>Cards</UiHeading>
                <br /> 
                <UiCard category="secondary">
                    <UiText inverseColoration>Content</UiText>
                </UiCard>
                <br /> 
                <CustomCard category="secondary">
                    <UiText inverseColoration fontStyle='bold'>Customizable through styled components</UiText>
                </CustomCard>
            </>
        </DemoCard>
    )
}