'use client';
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { UiFlexGrid } from "@uireact/flex";
import { Theme, ThemeColor, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiHeading, UiText } from "@uireact/text";
import { UiExpandoText } from "@uireact/expando";
import { UiButton } from "@uireact/button";
import { UiCard } from "@uireact/card";
import { UiReactViewDancing } from "@uireact/framer-animations";

import { Heading } from "@/app/internal";
import { ThemeExample } from "./theme-example";
import styles from './verify.module.scss';
import { getThemeColorVariables } from "./get-theme-color-variables";
import { getSizesVariables } from "./get-sizes-variables";
import { getSpacingVariables } from "./get-spacing-variables";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

const themeSpacing: UiSpacingProps['padding'] = { all: 'four' };
const buttonSpacing: UiSpacingProps['padding'] = {block: 'four'};

export default function VerifyPage () {
    const searchParams = useSearchParams();
    const [isCopied, setIsCopied] = useState(false);
    const theme: Theme | null = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            return JSON.parse(atob(theme));
        }

        return null;
    }, [searchParams]);
    const themeVariables = useMemo(() => {
        const themeUrl = searchParams.get('theme');

        if (!theme) {
            return '';
        }

        const darkVariables = getThemeColorVariables(theme, ThemeColor.dark);
        const lightVariables = getThemeColorVariables(theme, ThemeColor.light);
        const sizesVariables = getSizesVariables(theme);
        const spacingVariables = getSpacingVariables(theme);
    
        return `
/**********
 * 
 * @UiReact generated theme variables
 * Import this file into your app's styles
 *
 * 
 **********/

:root {
    /**
    * Texts / Headings Sizes properties
    * **/
    ${sizesVariables}

    /**
    * Spacing properties
    * **/
    ${spacingVariables}
}

/**
 * Dark coloration class
 * **/
@media (prefers-color-scheme: dark) {
    :root {
${darkVariables}
    }
}

html.dark, .dark {
    ${darkVariables}
}

/**
 * Light coloration class
 * **/
@media (prefers-color-scheme: light) {
    :root {
${lightVariables}
    }
}

html.light, .light {
    ${lightVariables}
}

/**
 * Come back to this theme generator at: https://uireact.io/create-theme/verify?theme=${themeUrl}
 */
    `;
    }, [theme, searchParams]);

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(themeVariables);
        setIsCopied(true);
    }, [themeVariables]);

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => {
                setIsCopied(false)
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [isCopied]);

    if (!theme) {
        return null;
    }

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Heading>Verify theme</Heading>
                    <UiIcon icon="Party" size="xlarge" category="tertiary" motion={UiReactViewDancing} />
                </UiFlexGrid>
            </UiSpacing>
            <br />
            <UiText fontStyle="bold">Let&apos;s make sure all properties you configured are looking great in this example page:</UiText>
            <br />
            <UiText size="small"><UiIcon icon="ArrowSquareLeft" size="small" /> You can use the left side bar to navigate to the each theme property if you need to update any, if you think everything is looking great then you can just copy it into a CSS file in your app:</UiText>
            <br />
            {isCopied && (
                <UiCard category="positive" weight="10">
                    <UiFlexGrid alignItems="center" gap="four">
                        <UiIcon icon="CheckCircle" />
                        <UiText fontStyle="bold">Theme copied to clipboard</UiText>
                        <UiCard category="primary">
                            <UiText>Make sure you copy these variables into your global CSS file.</UiText>
                        </UiCard>
                    </UiFlexGrid>
                </UiCard>
            )}
            <br />
            <UiButton fullWidth category="tertiary" onClick={onCopy}>
                <UiSpacing padding={buttonSpacing}>
                    <UiText><UiIcon icon="DownloadCloud"/> Copy theme</UiText>
                </UiSpacing>
            </UiButton>
            <br/>
            <br/>
            <UiExpandoText collapseLabel="Collapse theme" expandLabel="Expand theme" category="secondary">
                <UiSpacing padding={themeSpacing}>
                    <UiText size="small">You can just copy this entire CSS variables and paste in a global CSS file and will work as well.</UiText>
                    <SyntaxHighlighter language="css" style={vscDarkPlus} wrapLines>{themeVariables}</SyntaxHighlighter>
                </UiSpacing>
            </UiExpandoText>
            <br />
            <UiHeading>Example:</UiHeading>
            <UiText>You will most likely have to check each coloration and manually adjust it accordingly. This is just a baseline of tokens autogenerated to help you get a base set up.</UiText>
            <br  />
            <Suspense>
                <div className={styles.themeExampleWrapper} style={{backgroundColor: '#000'}}>
                    <h3 className={styles.lightHeader}>Dark</h3>
                    <br />
                    <ThemeExample theme={theme} coloration={ThemeColor.dark} />
                </div>
                <br />
                <div className={styles.themeExampleWrapper} style={{backgroundColor: '#fff'}}>
                    <h3 className={styles.darkHeader}>Light</h3>
                    <br />
                    <ThemeExample theme={theme} coloration={ThemeColor.light} />
                </div>
            </Suspense>
        </>
    )
}