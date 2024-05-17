'use client';
import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { UiFlexGrid } from "@uireact/flex";
import { Theme, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiLineSeparator } from "@uireact/separator";
import { UiText } from "@uireact/text";

import { Heading } from "@/app/internal";
import Pre from "@/app/internal/custom-pre";
import { FontNameForm } from "./font-name-form";
import { FontColor } from "./font-color";
import { isCompletedFonts } from "../utils";
import { ContinueLink } from "../components";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

export default function FontsPage () {
    const searchParams = useSearchParams();
    const themeParameter: Theme | null = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            return JSON.parse(atob(theme));
        }

        return null;
    }, [searchParams]);
    const isFontsComplete = useMemo(() => {
        return isCompletedFonts(themeParameter);
    }, [themeParameter]);

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Link href={`/create-theme/colors?theme=${btoa(JSON.stringify(themeParameter))}`}>
                        <UiIcon icon="AngleClearLeft" />
                    </Link>
                    <Heading>Fonts</Heading>
                    <UiIcon icon="EditComment" size="xlarge" category="tertiary" />
                </UiFlexGrid>
                <br />
                <UiLineSeparator />
                <br />
                <br />
                <UiText>The font name goes straight to the CSS rule for font names, so you can set a few fonts here like:</UiText>
                <br />
                <UiText fontStyle="italic">&apos;Source Sans Pro&apos;, sans-serif, Arial</UiText>
                <br />
                <UiText>This will then be translated to something like this:</UiText>
                <Pre>
                    {`
p {
    font-family: 'Source Sans Pro', sans-serif, Arial;
}
                    `}
                </Pre>
                <UiText fontStyle="bold"><UiIcon icon="Info" /> If you are using a framework that preloads fonts like NextJS, then you SHOULD use prop `skipFontName` in UiView.</UiText>
                <br />
                <FontNameForm />
                <br />
                <FontColor />
                <br />
                <br />
                {isFontsComplete ? (
                    <ContinueLink text="Continue" url={`./sizes?theme=${btoa(JSON.stringify(themeParameter))}`} />
                ) : (
                    <UiText fontStyle="bold">You still need to complete all selections in this page.</UiText>
                )}
                <br />
            </UiSpacing>
            <br />
        </>
    )
}