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
import { motion } from 'framer-motion';
import { UiReactHoverScaleUp } from '@uireact/framer-animations';

const Container = styled.div`
    width: 100%;
`;

const NavbarTitleContainer = styled(motion.div)`
    cursor: pointer;
    border-radius: 20px;

    &:hover {
        background-color: var(--primary-token_200);
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

const navbarTitleSpacing: UiSpacingProps['padding'] = {
    block: 'three',
    inline: 'four'
};

const navbarItemTitle: UiSpacingProps['padding'] = {
    block: 'three',
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
            <NavbarTitleContainer onClick={toggleSection} {...UiReactHoverScaleUp}>
                <UiSpacing padding={isFloatingNavbar ? navbarFloatingItemTitle : navbarTitleSpacing}>
                    <UiFlexGrid alignItems='center' justifyContent={isFloatingNavbar ? 'center' : 'flex-start'} gap='four'>
                        <UiIcon icon={icon} category='primary' inverseColoration />
                        <UiText fontStyle='bold' category='primary' inverseColoration>{title}</UiText>
                    </UiFlexGrid>
                </UiSpacing>
            </NavbarTitleContainer>
            {selected === id && items && (
                <UiNavbar styling={isFloatingNavbar ? 'filled' : 'bordered'} orientation='stacked' category='secondary' noBackground>
                    {items?.map((item, index) => (
                        <UiNavbarItem active={path === item.link} key={`sidebar-item-${index}`}>
                            <UiLink category={ isFloatingNavbar ? 'primary' : 'secondary' } fullWidth coloration='light'>
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
                                                <UiLink size='small' category={ isFloatingNavbar ? 'primary' : 'secondary' } fullWidth coloration='light'>
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