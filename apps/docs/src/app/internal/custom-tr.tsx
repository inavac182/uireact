'use client';
import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
    border-top: 3px solid var(--primary-token_150);
`;

type CustomTrProps = {
    children: React.ReactNode
};

export const CustomTr = ({ children }: CustomTrProps) => {
    return (
        <Tr>{children}</Tr>
    )
};
