import { useCallback, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { UiLink, UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

import useHash from '@/app/hooks/use-hatch';
import { UiIcon, UiIconProps } from '@uireact/icons';
import { UiFlexGrid } from '@uireact/flex';

const Container = styled.div`
    width: 100%;
`;

const NavbarTitleContainer = styled.div`
    cursor: pointer;

    &:hover {
        color: var(--fonts-token_150);
    }
`;

export type NavbarItem = {
    link: string;
    title: string;
    items?: NavbarItem[];
}

export type NavbarSectionProps = {
    isFloatingNavbar?: boolean;
    title: string;
    onSelectMenu: (id: number) => void;
    id: number;
    selected: number;
    icon: UiIconProps['icon'];
    items: NavbarItem[];
}

const nestedNavbarSpacing: UiSpacingProps['padding'] = {
    all: 'five'
};

const navbarItemTitle: UiSpacingProps['padding'] = {
    top: 'four',
    left: 'four'
};
const navbarFloatingItemTitle: UiSpacingProps['padding'] = {
    block: 'four'
};

export const NavbarSection = ({ selected, onSelectMenu, title, id, icon, items, isFloatingNavbar}: NavbarSectionProps) => {
    const path = usePathname();
    const hash = useHash();

    const toggleSection = useCallback(() => {
        onSelectMenu(id);
    }, [onSelectMenu, id]);

    return (
        <Container>
            <NavbarTitleContainer onClick={toggleSection}>
                <UiSpacing padding={isFloatingNavbar ? navbarFloatingItemTitle : navbarItemTitle}>
                    <UiFlexGrid alignItems='center' justifyContent={isFloatingNavbar ? 'center' : 'flex-start'} gap='four'>
                        <UiIcon icon={icon} coloration='light' />
                        <UiText size='large' fontStyle='bold' coloration='light'>{title}</UiText>
                    </UiFlexGrid>
                </UiSpacing>
            </NavbarTitleContainer>
            {selected === id && items && (
                <UiNavbar styling={isFloatingNavbar ? 'filled' : 'bordered'} orientation='stacked' category='tertiary'>
                    {items?.map((item, index) => (
                        <UiNavbarItem active={path === item.link} key={`sidebar-item-${index}`}>
                            <UiLink category={ isFloatingNavbar ? 'primary' : undefined } fullWidth coloration='light'>
                                    <Link href={`/docs${item.link}`}>
                                        <UiSpacing padding={isFloatingNavbar ? navbarFloatingItemTitle : navbarItemTitle}>
                                            {item.title}
                                        </UiSpacing>
                                    </Link>
                            </UiLink>
                            {item.items && (
                                <UiSpacing padding={nestedNavbarSpacing}>
                                    <UiNavbar styling={isFloatingNavbar ? 'filled' : 'bordered'} orientation='stacked' category={ isFloatingNavbar ? 'secondary' : 'tertiary' }>
                                        {item.items.map((item, nestedIndex) => (
                                            <UiNavbarItem key={`nester-sidebar-item-${nestedIndex}-${index}`} active={`#${hash}` === item.link}>
                                                <UiLink size='small' category={ isFloatingNavbar ? 'primary' : undefined } fullWidth coloration='light'>
                                                    <Link href={item.link}>
                                                        <UiSpacing padding={isFloatingNavbar ? navbarFloatingItemTitle : navbarItemTitle}>
                                                            {item.title}
                                                        </UiSpacing>
                                                    </Link>
                                                </UiLink>
                                            </UiNavbarItem>
                                        ))}
                                    </UiNavbar>
                                </UiSpacing>
                            )}
                        </UiNavbarItem>
                    ))}
                </UiNavbar>
            )}
        </Container>
    )
};