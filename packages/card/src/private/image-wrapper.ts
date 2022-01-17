import styled from 'styled-components';

import { UiPrivateCard } from './types';

export const ImageWrapper = styled.div<UiPrivateCard>`
  width: 100%;

  ${(props: UiPrivateCard) => `
    min-height: ${props?.imageHeight || '100'}px;
    background: url(${props?.image}) no-repeat ${props.imagePosition ?? 'center'};
    background-size: cover;
  `};
`;
