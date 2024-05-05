'use client';
import { useCallback, useState } from 'react';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { DefaultTheme, Theme, ThemeProperties } from '@uireact/foundation';

import { Header } from '../internal/header';
import { ThemeProps } from './components';

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
                    {children}
                </UiFlexGridItem>
            </UiFlexGrid>
        </div>
    )
}