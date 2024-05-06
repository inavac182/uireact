'use client';
import { useCallback, useMemo } from "react";
import styled from "styled-components";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import { UiFlexGrid } from "@uireact/flex";
import { UiSpacingProps, UiSpacing, ThemeColor } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiLineSeparator } from "@uireact/separator";
import { UiText } from "@uireact/text";

import { ColorationsForm } from "./colorations-form";
import { isCompletedColoration } from "../utils";
import { ContinueLink } from "../components";
import { UiButton } from "@uireact/button";

const Heading = styled.h3`
    font-size: 44px;
    width: fit-content;
    background: -webkit-linear-gradient(45deg,  var(--fonts-token_100) 0%, var(--tertiary-token_100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };
const buttonSpacing: UiSpacingProps['padding'] = {block: 'four', inline: 'five'};

export default function Colors () {
    const searchParams = useSearchParams();
    const router = useRouter();
    const colorsCompleted = useMemo(() => {
        const urlTheme = searchParams.get('theme');

        if (urlTheme) {
            const darkCompleted = isCompletedColoration(urlTheme, ThemeColor.dark);
            const lightCompleted = isCompletedColoration(urlTheme, ThemeColor.light);

            return darkCompleted && lightCompleted;
        }

        return false;
    }, [searchParams]);
    const onReset = useCallback(() => {
        router.push('/create-theme/colors');
    }, [router]);

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Link href="/create-theme">
                        <UiIcon icon="AngleClearLeft" />
                    </Link>
                    <Heading>Colorations</Heading>
                    <UiIcon icon="LoadingBars" size="xlarge" category="tertiary" />
                </UiFlexGrid>
                <br />
                <UiLineSeparator />
            </UiSpacing>
            <br />
            <UiText fontStyle="bold">You need to configure 2 colorations, light and dark. Each of those have its own set of color categories.</UiText>
            <br />
            <UiText fontStyle="bold">When you pick a color this tool will automatically calculate the tokens for the darker and lighter colors, you could manually change them later on.</UiText>
            <br />
            <ColorationsForm $coloration={ThemeColor.dark} />
            <br />
            <ColorationsForm $coloration={ThemeColor.light} />
            <br />
            <br />
            <UiButton onClick={onReset} category="error">
                <UiSpacing padding={buttonSpacing}>
                    <UiFlexGrid gap="four" alignItems="center">
                        <UiIcon icon="Ban" />
                        <UiText>Restart</UiText>
                    </UiFlexGrid>
                </UiSpacing>
            </UiButton>
            <br />
            <br />
            {colorsCompleted ? (
                <ContinueLink text="Continue" url={`./create-theme/fonts?theme=${searchParams.get('theme')}`} />
            ) : (
                <UiText fontStyle="bold">There are colors missing, once those are completed you can continue to next step.</UiText>
            )}
        </>
    )
}