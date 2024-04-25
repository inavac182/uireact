'use client';
import Link from "next/link";
import styled from "styled-components";

import { UiHeader } from "@uireact/header";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiSpacing, UiSpacingProps, UiViewport } from "@uireact/foundation";
import { UiNavbar, UiNavbarItem } from "@uireact/navbar";
import { UiLink } from "@uireact/text";

import { SideBar } from "./components/sidebar";
import { Logo } from "../internal";
import { ThemeSwitcher } from "./components/theme-switcher";
import { FloatingNavbar } from "./components/floating-navbar";

type DocsLayoutProps = {
    children?: React.ReactNode;
}

const headerPadding: UiSpacingProps['padding'] = { inline: 'five' };
const navbarPadding: UiSpacingProps['padding'] = { inline: 'four', block: 'three' };

const DocContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
`;

export default function DocsLayout ({ children }: DocsLayoutProps) {
    return (
        <>
            <UiHeader fixed>
                <UiSpacing padding={headerPadding}>
                    <UiFlexGrid alignItems="center" justifyContent="space-between">
                        <UiFlexGridItem>
                            <Logo />
                        </UiFlexGridItem>
                        <UiFlexGridItem>
                            <UiFlexGrid alignItems="center" gap="five">
                                <UiNavbar styling="bordered">
                                    <UiNavbarItem>
                                        <UiSpacing padding={navbarPadding}>
                                            <UiLink>
                                                <Link href="/docs">
                                                    Home
                                                </Link>
                                            </UiLink>
                                        </UiSpacing>
                                    </UiNavbarItem>
                                    <UiViewport criteria={'l|xl'}>
                                        <UiNavbarItem>
                                            <UiSpacing padding={navbarPadding}>
                                                <UiLink>
                                                    <Link href="/contact">
                                                        Contact
                                                    </Link>
                                                </UiLink>
                                            </UiSpacing>
                                        </UiNavbarItem>
                                    </UiViewport>
                                </UiNavbar>
                                <ThemeSwitcher />
                            </UiFlexGrid>
                        </UiFlexGridItem>
                    </UiFlexGrid>
                </UiSpacing>
            </UiHeader>
            <UiFlexGrid>
                <UiViewport criteria={'l|xl'}>
                    <UiFlexGridItem>
                        <SideBar isFloatingNavbar={false} />
                    </UiFlexGridItem>
                </UiViewport>
                <UiFlexGridItem grow={1}>
                    <DocContent>
                        {children}
                    </DocContent>
                </UiFlexGridItem>
            </UiFlexGrid>
            <UiViewport criteria={'s|m'}>
                <FloatingNavbar />
            </UiViewport>
        </>
    )
}
