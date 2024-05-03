'use client';
import { useCallback, useState } from 'react';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { DefaultTheme, Theme, ThemeProperties } from '@uireact/foundation';

import { Header } from '../internal/header';
import { ThemeProps, ExamplePage } from './components';

export default function CreateTheme() {
    const [themeProperty, setThemeProperty] = useState<ThemeProperties | null>(null);
    const [themeData, setThemeData] = useState<Theme>(DefaultTheme);

    const updateTheme = useCallback((theme: Theme) => {
        setThemeData(theme);
    }, [setThemeData]);

    const selectThemeProperty = useCallback((property: ThemeProperties) => {
        if (themeProperty === property) {
            setThemeProperty(null);    
        } else {
            setThemeProperty(property);
        }
    }, [setThemeProperty, themeProperty]);

    return (
        <div>
            <Header />
            <UiFlexGrid gap='five'>
                <UiFlexGridItem>
                    <ThemeProps selectProperty={selectThemeProperty} themeProperty={themeProperty} />
                </UiFlexGridItem>
                <UiFlexGridItem grow={1}>
                    <ExamplePage />
                </UiFlexGridItem>
            </UiFlexGrid>
        </div>
    )
}