import styled from 'styled-components';

import { UiReactElementProp } from '@uireact/foundation';

import { UiNavbarProps } from '../';

type PrivateNavBar = UiNavbarProps & UiReactElementProp;

export const NavbarWrapper = styled.div<PrivateNavBar>`
  display: flex;

  ${(props: PrivateNavBar) => `flex-direction: ${props.orientation === 'stacked' ? 'column' : 'row'};`}
`;
