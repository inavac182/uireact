'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { UiFlexGrid } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiLineSeparator } from "@uireact/separator";

import { Heading } from "@/app/internal";
import { useMemo } from "react";

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
            </UiSpacing>
            <br />
        </>
    )
}