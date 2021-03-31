import * as React from 'react';
import styled from 'styled-components';

interface UiCardProps {
  children?: React.ReactNode;
}

const Div = styled.div`
  border-radius: 3px;
  border: 1px solid purple;
  padding: 5px;
`;

export const UiCard: React.FC = (props: UiCardProps) => {
  return <Div>{props?.children}</Div>;
};

UiCard.displayName = 'UiCard';
