'use client';
import styled from "styled-components";

import { UiHeader } from "@uireact/header";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";

import { SideBar } from "./components/sidebar";
import { Logo } from "../internal";

type DocsLayoutProps = {
    children?: React.ReactNode;
}

const DocContent = styled.div`
    width: 600px;
    margin: 0 auto;
`;

export default function DocsLayout ({ children }: DocsLayoutProps) {
    return (
        <>
            <UiHeader>
                <Logo />
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
