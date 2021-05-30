import styled from 'styled-components';

import { UiCardProps } from '../';

export const ContentWrapper = styled.div<UiCardProps>`
  ${(props: UiCardProps) => `
    ${props?.padded && 'padding: 5px;'}
  `};
`;
