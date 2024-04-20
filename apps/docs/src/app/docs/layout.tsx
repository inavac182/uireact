'use client';
import styled from "styled-components";

import { UiHeader } from "@uireact/header";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";

import { SideBar } from "./components/sidebar";
import { Logo } from "../internal";
import { ThemeSwitcher } from "./components/theme-switcher";

type DocsLayoutProps = {
    children?: React.ReactNode;
}

const headerPadding: UiSpacingProps['padding'] = { inline: 'five' };

const DocContent = styled.div`
    width: 600px;
    margin: 30px auto;
`;

export default function DocsLayout ({ children }: DocsLayoutProps) {
    return (
        <>
            <UiHeader>
                <UiSpacing padding={headerPadding}>
                    <UiFlexGrid alignItems="center" justifyContent="space-between">
                        <UiFlexGridItem>
                            <Logo />
                        </UiFlexGridItem>
                        <UiFlexGridItem>
                            <ThemeSwitcher />
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
