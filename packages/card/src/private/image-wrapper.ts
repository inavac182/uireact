import styled from 'styled-components';

import { UiCardProps } from '../';

export const ImageWrapper = styled.div<UiCardProps>`
  width: 100%;

  ${(props: UiCardProps) => `
    min-height: ${props?.imageHeight || '100'}px;
    background: url(${props?.image}) no-repeat ${props.imagePosition ?? 'center'};
    background-size: cover;
  `};
`;
