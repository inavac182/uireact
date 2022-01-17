import styled from 'styled-components';

import { UiPrivateCard } from './types';

export const ContentWrapper = styled.div<UiPrivateCard>`
  ${(props: UiPrivateCard) => `
    ${props?.padded ? 'padding: 5px;' : ''}
  `};
`;
