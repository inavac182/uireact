'use client';
import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { UiFlexGrid } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiLineSeparator } from "@uireact/separator";
import { UiText } from "@uireact/text";

import { Heading } from "@/app/internal";
import Pre from "@/app/internal/custom-pre";
import { FontNameForm } from "./font-name-form";
import { FontColor } from "./font-color";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

export default function FontsPage () {
    const searchParams = useSearchParams();
    const themeParameter = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            return JSON.parse(decodeURIComponent(theme));
        }

        return '';
    }, [searchParams]);

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Link href={`/create-theme/colors?theme=${encodeURIComponent(JSON.stringify(themeParameter))}`}>
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
                <UiText fontStyle="italic">'Source Sans Pro', sans-serif, Arial</UiText>
                <br />
                <UiText>This will then be translated to something like this:</UiText>
                <Pre>
                    {`
p {
    font-family: 'Source Sans Pro', sans-serif, Arial;
}
                    `}
                </Pre>
                <FontNameForm />
                <br />
            </UiSpacing>
            <br />
        </>
    )
}