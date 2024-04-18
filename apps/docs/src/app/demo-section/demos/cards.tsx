import styled from 'styled-components';
import { UiHeading, UiText } from "@uireact/text"
import { UiCard } from '@uireact/card';

import { DemoCard } from "@/app/internal"
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const CustomCard = styled(UiCard)`
    border-radius: 0px 30px 0px 30px;
    padding: 30px;
`;

const cardSpacing: UiSpacingProps['padding'] = { all: 'four'};

export const Cards = () => {
    return (
        <DemoCard  shadow={false}>
            <>
                <UiHeading>Cards</UiHeading>
                <br /> 
                <UiCard category="secondary">
                    <UiSpacing padding={cardSpacing}>
                        <UiText>Content</UiText>
                    </UiSpacing>
                </UiCard>
                <br /> 
                <CustomCard category="secondary">
                    <UiText size='small' fontStyle='bold'>Customizable through styled components</UiText>
                </CustomCard>
            </>
        </DemoCard>
    )
}