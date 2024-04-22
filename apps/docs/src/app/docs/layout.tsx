'use client';
import styled from "styled-components";

import { UiHeader } from "@uireact/header";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";

import { SideBar } from "./components/sidebar";
import { Logo } from "../internal";
import { ThemeSwitcher } from "./components/theme-switcher";
import { UiNavbar, UiNavbarItem } from "@uireact/navbar";
import { UiLink } from "@uireact/text";
import Link from "next/link";

type DocsLayoutProps = {
    children?: React.ReactNode;
}

const headerPadding: UiSpacingProps['padding'] = { inline: 'five' };
const navbarPadding: UiSpacingProps['padding'] = { inline: 'four', block: 'three' };

const DocContent = styled.div`
    width: 600px;
    margin: 30px auto;
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
                                                    Set up
                                                </Link>
                                            </UiLink>
                                        </UiSpacing>
                                    </UiNavbarItem>
                                    <UiNavbarItem>
                                        <UiSpacing padding={navbarPadding}>
                                            <UiLink>
                                                <Link href="/contact">
                                                    Contact
                                                </Link>
                                            </UiLink>
                                        </UiSpacing>
                                    </UiNavbarItem>
                                </UiNavbar>
                                <ThemeSwitcher />
                            </UiFlexGrid>
                        </UiFlexGridItem>
                    </UiFlexGrid>
                </UiSpacing>
            </UiHeader>
            <UiFlexGrid>
                <UiFlexGridItem>
                    <SideBar />
                </UiFlexGridItem>
                <UiFlexGridItem grow={1}>
                    <DocContent>
                        {children}
                    </DocContent>
                </UiFlexGridItem>
            </UiFlexGrid>
        </>
    )
}
