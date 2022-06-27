import styled from 'styled-components';

import { UiReactPrivateElementProps } from '@uireact/foundation';

import { UiNavbarProps } from '../';

type __NavBarProps = UiNavbarProps & UiReactPrivateElementProps;

export const NavbarWrapper = styled.div<__NavBarProps>`
  display: flex;

  ${(props: __NavBarProps) => `flex-direction: ${props.orientation === 'stacked' ? 'column' : 'row'};`}
`;
