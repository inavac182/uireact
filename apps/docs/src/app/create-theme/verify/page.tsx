'use client';
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { UiFlexGrid } from "@uireact/flex";
import { Theme, ThemeColor, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiHeading, UiText } from "@uireact/text";
import { UiCard } from "@uireact/card";

import { Heading } from "@/app/internal";
import { ThemeExample } from "./theme-example";

import { UiExpandoCard, UiExpandoText } from "@uireact/expando";
import { UiButton } from "@uireact/button";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

const ExampleWrapper = styled.div<{ $theme: ThemeColor }>`
    border-radius: 30px;
    padding: 30px;
    background-color: ${(props) => props.$theme === ThemeColor.dark ? '#000' : '#fff'};
    width: 100%;
    min-height: 300px;
    box-sizing: border-box;
    position: relative;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ExampleTitle = styled.h3<{ $theme: ThemeColor }>`
    color: ${(props) => props.$theme === ThemeColor.dark ? '#fff' : '#000'};
`;

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

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(JSON.stringify(theme));
        setIsCopied(true);
    }, [theme]);

    if (!theme) {
        return null;
    }
    

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Heading>Verify theme</Heading>
                    <UiIcon icon="Party" size="xlarge" category="tertiary" />
                </UiFlexGrid>
            </UiSpacing>
            <br />
            <UiText fontStyle="bold">Let's make sure all properties you configured are looking great in this example page:</UiText>
            <br />
            <UiText size="small"><UiIcon icon="ArrowSquareLeft" size="small" /> You can use the left side bar to navigate to the each theme property if you need to update any, if you think everything is looking great then you can just copy it</UiText>
            <br />
            {isCopied && <UiText category="positive">Theme copied to clipboard</UiText>}
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
                    <SyntaxHighlighter language="json" style={vscDarkPlus} wrapLines>
            {`
${JSON.stringify(theme, null, 2)}
            `}
                    </SyntaxHighlighter>
                </UiSpacing>
            </UiExpandoText>
            <br />
            <UiHeading>Colors</UiHeading>
            <br  />
            <ExampleWrapper $theme={ThemeColor.dark}>
                <ExampleTitle $theme={ThemeColor.dark}>Dark</ExampleTitle>
                <br />
                <ThemeExample theme={theme} coloration={ThemeColor.dark} />
            </ExampleWrapper>
            <br />
            <ExampleWrapper $theme={ThemeColor.light}>
                <ExampleTitle $theme={ThemeColor.light}>Light</ExampleTitle>
                <br />
                <ThemeExample theme={theme} coloration={ThemeColor.light} />
            </ExampleWrapper>
        </>
    )
}