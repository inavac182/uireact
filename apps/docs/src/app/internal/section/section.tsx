import React from 'react';
import styled from 'styled-components';

import { Separator } from './separator';

type SectionProps = {
  children?: React.ReactElement;
  customRef?: React.Ref<HTMLDivElement>;
  centerContent?: boolean;
  skipSeparator?: boolean;
}

const SectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: -10px;
  background-color: var(--primary-token_100);
`;

const SectionCenteredContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export const Section = ({ centerContent, children, customRef, skipSeparator }: SectionProps) => {
  return (
    <div ref={customRef}>
      {!skipSeparator && <Separator />}
      <SectionContainer>
        {centerContent ? (
          <SectionCenteredContent>
            {children}
          </SectionCenteredContent>
        ): (
          <>{ children }</>
        )}
      </SectionContainer>
    </div>
  );
};
