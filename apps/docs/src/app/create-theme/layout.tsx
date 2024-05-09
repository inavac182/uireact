'use client';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { Header } from '../internal/header';
import { PagesContainer, ThemeProps } from './components';
import { usePathname } from 'next/navigation';

type CreateThemeLayoutProps = {
    children: React.ReactNode;
}

export default function CreateThemeLayout({ children }: CreateThemeLayoutProps) {
    const pathname = usePathname();

    return (
        <div>
            <Header />
            <UiFlexGrid gap='five'>
                {pathname !== "/create-theme" && (
                    <UiFlexGridItem>
                        <ThemeProps />
                    </UiFlexGridItem>
                )}
                <UiFlexGridItem grow={1}>
                    <PagesContainer>
                        {children}
                    </PagesContainer>
                </UiFlexGridItem>
            </UiFlexGrid>
        </div>
    )
}