'use client';
import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { UiFlexGrid } from "@uireact/flex";
import { Theme, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiText } from "@uireact/text";

import { Heading } from "@/app/internal";
import { ContinueLink } from "../components";
import { SizesForm } from "./sizes-form";
import { isCompleletedSizes } from "../utils/is-completed-sizes";
import { SizesExample } from "./sizes-example";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

export default function SizesPage () {
    const searchParams = useSearchParams();
    const themeParameter: Theme | null = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            return JSON.parse(atob(theme));
        }

        return null;
    }, [searchParams]);
    const isSizesComplete = useMemo(() => {
        return isCompleletedSizes(themeParameter);
    }, [themeParameter]);

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Link href={`/create-theme/fonts?theme=${btoa(JSON.stringify(themeParameter))}`}>
                        <UiIcon icon="AngleClearLeft" />
                    </Link>
                    <Heading>Sizes</Heading>
                    <UiIcon icon="SortAmountUp" size="xlarge" category="tertiary" />
                </UiFlexGrid>
            </UiSpacing>
            <br />
            <br />
            <UiText fontStyle="bold">The sizes properties are used to control the typography components sizes. This means all texts, labels, headings, icons, inputs, buttons, etc...</UiText>
            <br />
            <UiText fontStyle="bold">We've prefilled this with default values, you can modify them if you want.</UiText>
            <br />
            <SizesForm />
            <br />
            {isSizesComplete ? (
                <>
                    <SizesExample />
                    <br />
                    <ContinueLink text="Continue" url={`./spaces?theme=${btoa(JSON.stringify(themeParameter))}`} />
                </>
            ) : (
                <UiText fontStyle="bold">You still need to complete all selections in this page.</UiText>
            )}
            <br />
            <br />
        </>
    )
}