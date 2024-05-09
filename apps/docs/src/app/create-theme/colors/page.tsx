'use client';
import { Suspense, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import { UiFlexGrid } from "@uireact/flex";
import { UiSpacingProps, UiSpacing, ThemeColor } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiLineSeparator } from "@uireact/separator";
import { UiText } from "@uireact/text";
import { UiButton } from "@uireact/button";
import { UiExpandoText } from "@uireact/expando";
import { UiList, UiListItem } from "@uireact/list";
import { UiCard } from "@uireact/card";

import { ColorationsForm } from "./colorations-form";
import { generateThemeStructure, isCompletedColoration } from "../utils";
import { ContinueLink } from "../components";

import { Heading } from "@/app/internal";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };
const buttonSpacing: UiSpacingProps['padding'] = {block: 'four', inline: 'five'};
const listSpacing: UiSpacingProps['padding'] = {inline: 'five'};

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
        router.push(`?theme=${btoa(JSON.stringify(generateThemeStructure()))}`);
    }, [router]);
    const themeParameter = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            return JSON.parse(atob(theme));
        }

        return '';
    }, [searchParams]);

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
            <UiCard category="primary" weight="200">
                <UiExpandoText collapseLabel="Color categories information" expandLabel="Color categories information" category="negative">
                    <br />
                    <UiText>Each category has its own purpose, this information will give you a guideline on each one:</UiText>
                    <br />
                    <UiText fontStyle="bold"> Main colors</UiText>
                    <UiSpacing padding={listSpacing}>
                        <UiList type="BULLETED">
                            <UiListItem>
                                <UiText fontStyle="bold">Primary</UiText>
                                <UiList type="BULLETED">
                                    <UiListItem>
                                        <UiText>This is your main color around the web app, used for mostly everything in the page such as backgrounds.</UiText>
                                    </UiListItem>
                                </UiList>
                            </UiListItem>
                            <UiListItem>
                                <UiText fontStyle="bold">Secondary</UiText>
                                <UiList type="BULLETED">
                                    <UiListItem>
                                        <UiText>Secondary as a primary color to highlight some areas of the application for instance a card in the middle of text, like this one.</UiText>
                                    </UiListItem>
                                </UiList>
                            </UiListItem>
                            <UiListItem>
                                <UiText fontStyle="bold">Tertiary</UiText>
                                <UiList type="BULLETED">
                                    <UiListItem>
                                        <UiText>This is usually your brand&apos;s color, used ONLY in the 10% of your app.</UiText>
                                    </UiListItem>
                                    <UiListItem>
                                        <UiText>It&apos;s commonly used to highlight icons, buttons, links. Actions that you would like the user to do.</UiText>
                                    </UiListItem>
                                </UiList>
                            </UiListItem>
                        </UiList>
                    </UiSpacing>
                    <br />
                    <UiText fontStyle="bold"> Support colors</UiText>
                    <UiSpacing padding={listSpacing}>
                        <UiList type="BULLETED">
                            <UiListItem>
                                <UiText fontStyle="bold">Positive</UiText>
                            </UiListItem>
                            <UiListItem>
                                <UiText fontStyle="bold">Negative</UiText>
                            </UiListItem>
                            <UiListItem>
                                <UiText fontStyle="bold">Warning</UiText>
                            </UiListItem>
                            <UiListItem>
                                <UiText fontStyle="bold">Error</UiText>
                            </UiListItem>
                        </UiList>
                    </UiSpacing>
                    <br />
                    <UiText>This colors help to provide state to the user, they are self explanatory but they could be used to represent the result of an action.</UiText>
                </UiExpandoText>
            </UiCard>
            <br />
            <Suspense>
                <ColorationsForm $coloration={ThemeColor.dark} />
            </Suspense>
            <br />
            <Suspense>
                <ColorationsForm $coloration={ThemeColor.light} />
            </Suspense>
            <br />
            <br />
            <UiButton onClick={onReset} category="error">
                <UiSpacing padding={buttonSpacing}>
                    <UiFlexGrid gap="four" alignItems="center">
                        <UiIcon icon="Refresh" />
                        <UiText>Restart</UiText>
                    </UiFlexGrid>
                </UiSpacing>
            </UiButton>
            <br />
            <br />
            {colorsCompleted ? (
                <ContinueLink text="Continue" url={`./fonts?theme=${btoa(JSON.stringify(themeParameter))}`} />
            ) : (
                <UiText fontStyle="bold">There are colors missing, once those are completed you can continue to next step.</UiText>
            )}
            <br />
            <br />
        </>
    )
}