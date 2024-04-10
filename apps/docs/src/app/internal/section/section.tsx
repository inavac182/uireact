import React from 'react';
import styled from 'styled-components';

import { Separator } from './separator';

type SectionProps = {
  children?: React.ReactElement;
  ref?: React.Ref<HTMLElement>;
  centerContent?: boolean;
}

const SectionContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  position: relative;
  padding-bottom: 100px;
`;

const SectionCenteredContent = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

export const Section = ({ centerContent, children, ref }: SectionProps) => {
  return (
    <SectionContainer ref={ref}>
      {centerContent ? (
        <SectionCenteredContent>
          {children}
        </SectionCenteredContent>
      ): (
        <>{ children }</>
      )}
      
      <Separator />
    </SectionContainer>
  );
};
