import { styled } from 'styled-components';

type CenteredDivProps = {
  $size: 'l' | 'xl';
};

export const CenteredDiv = styled.div<CenteredDivProps>`
  ${(props) => `
    width: ${props.$size === 'l' ? '992' : '1280'}px;
  `}

  margin: 0 auto;
`;
