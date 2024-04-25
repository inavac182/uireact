'use client';
import React from 'react';

import styled from 'styled-components';

import { UiCard } from '@uireact/card';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';


const CustomCard = styled(UiCard)`
    border-left: 5px solid var(--tertiary-token_10);
`;

type CustomBlockquoteProps = {
    children: React.ReactNode;
}

const customCardPadding: UiSpacingProps['padding'] = { block: 'four', inline: 'four'};

export const CustomBlockquote = ({ children }: CustomBlockquoteProps) => {
    return (
        <CustomCard noPadding squared>
            <UiSpacing padding={customCardPadding}>
            {children}
            </UiSpacing>
        </CustomCard>
    );
}