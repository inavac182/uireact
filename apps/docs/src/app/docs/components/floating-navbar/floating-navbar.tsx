import styled from 'styled-components';

import { UiButton } from "@uireact/button"
import { UiIcon } from "@uireact/icons"
import { useCallback, useState } from 'react';
import { UiCard } from '@uireact/card';
import { SideBar } from '../sidebar';

const FloatingNavbarContent = styled.div`
    position: fixed;
    bottom: 10px;
    width: 100%;
`;

const IconContainer = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
`;

const NavbarWrapper = styled.div`
  bottom: 100px;
  padding: 10px;
  max-width: 300px;
  margin: 0 auto;
  z-index: 100;
  box-sizing: border-box;
`;

const NavbarButton = styled(UiButton)`
  border-radius: 50%;
  padding: 15px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const NavbarCard = styled(UiCard)`
    margin-top: 30px;
    border-radius: 25px;
    padding: 25px;

    box-shadow:
        rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const FloatingNavbar = () => {
    const [isNavbarShown, setNavbarShown] = useState(false);

    const onNavbarClick = useCallback(() => {
        setNavbarShown(!isNavbarShown);
    }, [setNavbarShown, isNavbarShown]);

    return (
        <FloatingNavbarContent>
            {isNavbarShown && (
                <NavbarWrapper>
                    <NavbarCard category='tertiary'>
                        <SideBar isFloatingNavbar />
                    </NavbarCard>
                </NavbarWrapper>
            )}
            <IconContainer>
                <NavbarButton category="tertiary" rounded onClick={onNavbarClick}>
                    <UiIcon icon="MenuBurger" size='large' />
                </NavbarButton>
            </IconContainer>
        </FloatingNavbarContent>
    )
}