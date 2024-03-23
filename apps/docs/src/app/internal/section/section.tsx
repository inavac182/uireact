import React from 'react';
import styled from 'styled-components';

import { Separator } from './separator';

type SectionProps = {
  children?: React.ReactElement;
}

const SectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const Section = ({ children }: SectionProps) => {
  return (
    <SectionContainer>
      {children}
      <Separator />
    </SectionContainer>
  );
};
