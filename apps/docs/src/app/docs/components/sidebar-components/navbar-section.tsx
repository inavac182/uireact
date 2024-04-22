import { useCallback, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { UiLink } from '@uireact/text';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

import useHash from '@/app/hooks/use-hatch';

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
    items?: [NavbarItem];
}

export type NavbarSectionProps = {
    opened: boolean;
    title: string;
    items: [NavbarItem];
}

const nestedNavbarSpacing: UiSpacingProps['padding'] = {
    all: 'five'
};

const navbarItemTitle: UiSpacingProps['padding'] = {
    top: 'four',
    left: 'four'
};

export const NavbarSection = ({ opened = false, title, items}: NavbarSectionProps) => {
    const path = usePathname();
    const hash = useHash();
    const [selected, setSelected] = useState(opened);

    const toggleSection = useCallback(() => {
        setSelected(!selected);
    }, [selected]);

    return (
        <Container>
            <NavbarTitleContainer onClick={toggleSection}>
                <p>{title}</p>
            </NavbarTitleContainer>
            {selected && (
                <UiNavbar styling='filled' orientation='stacked'>
                    {items.map((item, index) => (
                        <UiNavbarItem active={path === item.link} key={`sidebar-item-${index}`}>
                            <UiSpacing padding={navbarItemTitle}>
                                <UiLink>
                                    <Link href={item.link}>{item.title}</Link>
                                </UiLink>
                            </UiSpacing>
                            <UiSpacing padding={nestedNavbarSpacing}>
                                <UiNavbar styling='bordered' orientation='stacked' category='tertiary'>
                                    {item.items?.map((item, nestedIndex) => (
                                        <UiNavbarItem key={`nester-sidebar-item-${nestedIndex}-${index}`} active={`#${hash}` === item.link}>
                                            <UiLink size='small'>
                                                <Link href={item.link}>
                                                    {item.title}
                                                </Link>
                                            </UiLink>
                                        </UiNavbarItem>
                                    ))}
                                </UiNavbar>
                            </UiSpacing>
                        </UiNavbarItem>
                    ))}
                </UiNavbar>
            )}
        </Container>
    )
};