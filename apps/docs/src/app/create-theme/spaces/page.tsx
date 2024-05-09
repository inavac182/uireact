'use client';
import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { UiFlexGrid } from "@uireact/flex";
import { Theme, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";

import { Heading } from "@/app/internal";
import { UiLink, UiText } from "@uireact/text";
import { SpacingForm } from "./spacing-form";
import { isCompletedSpacing } from "../utils";
import { ContinueLink } from "../components";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

export default function SpacesPage () {
    const searchParams = useSearchParams();
    const themeParameter: Theme | null = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            return JSON.parse(atob(theme));
        }

        return null;
    }, [searchParams]);
    const isSpacingCompleted = isCompletedSpacing(themeParameter);

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Link href={`/create-theme/sizes?theme=${btoa(JSON.stringify(themeParameter))}`}>
                        <UiIcon icon="AngleClearLeft" />
                    </Link>
                    <Heading>Spacing</Heading>
                    <UiIcon icon="ArrowsExpand" size="xlarge" category="tertiary" />
                </UiFlexGrid>
            </UiSpacing>
            <br />
            <UiText fontStyle="bold">The values set for spacing are used for margins and paddings.</UiText>
            <br />
            <UiText fontStyle="bold">There are 7 levels of spacing, you can combine them to create the desired spacing as needed. You can look at <UiLink><Link href="/docs/spacing" target="_blank">UiSpacing docs</Link></UiLink> for more details.</UiText>
            <br />
            <UiText fontStyle="bold">We&apos;ve prefilled this with default values, you can modify them if you want.</UiText>
            <br />
            <SpacingForm />
            <br />
            {!isSpacingCompleted ? (
                <UiText fontStyle="bold">There are still missing properties to set up.</UiText>
            ) : (
                <ContinueLink text="Finish" url={`/create-theme/verify?theme=${btoa(JSON.stringify(themeParameter))}`} />
            )}
            <br />
        </>
    )
}