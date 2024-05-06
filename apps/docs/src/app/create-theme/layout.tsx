'use client';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { Header } from '../internal/header';
import { PagesContainer, ThemeProps } from './components';

type CreateThemeLayoutProps = {
    children: React.ReactNode;
}

export default function CreateThemeLayout({ children }: CreateThemeLayoutProps) {
    return (
        <div>
            <Header />
            <UiFlexGrid gap='five'>
                <UiFlexGridItem>
                    <ThemeProps />
                </UiFlexGridItem>
                <UiFlexGridItem grow={1}>
                    <PagesContainer>
                        {children}
                    </PagesContainer>
                </UiFlexGridItem>
            </UiFlexGrid>
        </div>
    )
}