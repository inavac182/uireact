'use client';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { Header } from '../internal/header';
import { PagesContainer, ThemeProps } from './components';
import { usePathname } from 'next/navigation';
import { UiViewport } from '@uireact/foundation';

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
                    <UiViewport criteria={'m|l|xl'}>
                        <UiFlexGridItem>
                            <ThemeProps />
                        </UiFlexGridItem>
                    </UiViewport>
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