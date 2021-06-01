import styled from 'styled-components';

import { UiNavbarItemProps } from '../';

export const NavbarItemWrapper = styled.div<UiNavbarItemProps>`
  width: 100%;

  ${(props) => `
    ${props.align ? `text-align: ${props.align};` : 'text-align: center;'}
  `};
`;
