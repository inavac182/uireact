import React from 'react';
import styled from 'styled-components';

import { ColorToken } from '@uireact/foundation';

import { Separator } from './separator';
import { BottomSeparator } from './bottom-separator';

type SectionProps = {
  children?: React.ReactElement;
  customRef?: React.Ref<HTMLDivElement>;
  centerContent?: boolean;
  skipSeparator?: boolean;
  weight?: ColorToken;
  includeBottomSeparator?: boolean;
}

const SectionContainer = styled.section<{ $weight: ColorToken }>`
  width: 100%;
  min-height: 100vh;
  margin-top: -10px;
  background-color: var(--primary-${(props) => `token_${props.$weight}`});
  position: relative;
  box-sizing: border-box;
`;

const SectionCenteredContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const Section = ({ centerContent, children, customRef, skipSeparator, weight = '100', includeBottomSeparator }: SectionProps) => {
  return (
    <div ref={customRef}>
      {!skipSeparator && <Separator weight={weight} />}
      <SectionContainer $weight={weight}>
        {centerContent ? (
          <SectionCenteredContent>
            {children}
          </SectionCenteredContent>
        ): (
          <>{ children }</>
        )}
        {includeBottomSeparator && <BottomSeparator weight={weight} />}
      </SectionContainer>
    </div>
  );
};
