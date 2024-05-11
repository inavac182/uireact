'use client';
import styled from "styled-components";

import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiSpacingProps, UiViewport } from "@uireact/foundation";

import { SideBar } from "./components/sidebar";

import { FloatingNavbar } from "./components/floating-navbar";
import { Header } from "../internal/header";

type DocsLayoutProps = {
    children?: React.ReactNode;
}

const DocContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
`;

export default function DocsLayout ({ children }: DocsLayoutProps) {
    return (
        <>
            <Header />
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
