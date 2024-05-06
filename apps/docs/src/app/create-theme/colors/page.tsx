'use client';
import styled from "styled-components";

import { UiFlexGrid } from "@uireact/flex";
import { UiSpacingProps, UiSpacing, ThemeColor } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiLineSeparator } from "@uireact/separator";
import { UiText } from "@uireact/text";

import { ColorationsForm } from "./colorations-form";

const Heading = styled.h3`
    font-size: 44px;
    width: fit-content;
    background: -webkit-linear-gradient(45deg,  var(--fonts-token_100) 0%, var(--tertiary-token_100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

export default function Colors () {
    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Heading>Colorations</Heading>
                    <UiIcon icon="LoadingBars" size="xlarge" category="tertiary" />
                </UiFlexGrid>
                <br />
                <UiLineSeparator />
            </UiSpacing>
            <UiText>You need to configure 2 colorations:</UiText>
            <br />
            <ColorationsForm $coloration={ThemeColor.dark} />
            <br />
            <ColorationsForm $coloration={ThemeColor.light} />
        </>
    )
}