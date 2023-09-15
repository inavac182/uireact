import React from 'react';

import styled from 'styled-components';

import { UiViewport, useViewport, getColorTokenValue, getColorCategory } from '@uireact/foundation';

import { privateViewRowProps, UiViewRowProps } from './types';
import { CenteredDiv } from './__private';

const Div = styled.div<privateViewRowProps>`
  ${(props) => {
    const inverse = props.$inverseFont ? 'inverse-' : '';
    const weight = props.$weight ? getColorTokenValue(props.$weight) : 'token_100';

    return `color: var(--${inverse}fonts-${weight});`;
  }}

  background-color: ${(props) =>
    props.$noBackground
      ? 'transparent'
      : `var(--${getColorCategory(props.$category)}-${
          props.$weight ? getColorTokenValue(props.$weight) : 'token_100'
        })`};
`;

export const UiViewRow: React.FC<UiViewRowProps> = ({
  category = 'primary',
  centeredContent,
  children,
  className,
  inverseFont,
  testId,
  weight,
  noBackground,
}: UiViewRowProps) => {
  const viewport = useViewport();

  return (
    <Div
      $weight={weight}
      className={className}
      data-testid={testId}
      $category={category}
      $inverseFont={inverseFont}
      $noBackground={noBackground}
    >
      {centeredContent ? (
        <>
          <UiViewport criteria={'l|xl'}>
            <CenteredDiv $size={viewport.isLarge ? 'l' : 'xl'}>{children}</CenteredDiv>
          </UiViewport>
          <UiViewport criteria={'s|m'}>{children}</UiViewport>
        </>
      ) : (
        <>{children}</>
      )}
    </Div>
  );
};

UiViewRow.displayName = 'UiViewRow';
