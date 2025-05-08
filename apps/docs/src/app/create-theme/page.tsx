'use client';
import { MotionProps, motion } from "motion/react";
import Link from "next/link";
import styled from "styled-components";

import { UiCard } from "@uireact/card";
import { UiFlexGrid } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiList, UiListItem } from "@uireact/list";
import { UiLineSeparator } from "@uireact/separator";
import { UiLink, UiText } from "@uireact/text";

import { ContinueLink } from "./components";
import { generateThemeStructure } from "./utils";

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };
const listSpacing: UiSpacingProps['padding'] = {inline: 'five'};

const Heading = styled.h3`
    font-size: 44px;
    width: fit-content;
    background: -webkit-linear-gradient(45deg,  var(--fonts-token_100) 0%, var(--tertiary-token_100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const animation: MotionProps = {
    whileInView: {
        rotate: [0, 360, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
        }
    }
}

export default function CreateThemeToolPage () {
    const generatedTheme = generateThemeStructure();

    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Heading>Create theme</Heading>
                    <motion.div {...animation}>
                        <UiIcon icon="SettingsBig" size="xlarge" category="tertiary" />
                    </motion.div>
                </UiFlexGrid>
                <br />
                <UiLineSeparator />
            </UiSpacing>
            <UiText fontStyle="bold">One of the most powerful aspects of this library is the hability to use your custom theme as a plug and play configuration.</UiText>
            <br />
            <UiText>This tool will guide you go through the steps needed to create your theme.</UiText>
            <br />
            <UiCard category="primary" weight="10">
                <UiFlexGrid gap="four" alignItems="center">
                    <UiIcon icon="Info" category="tertiary" />
                    <UiText fontStyle="bold">A few points to keep in mind for your theme:</UiText>
                </UiFlexGrid>
                <br />
                <UiSpacing padding={listSpacing}>
                <UiList type="BULLETED">
                    <UiListItem>
                        <UiText>You will be setting up <UiText inline fontStyle="bold" category="tertiary">2 colorations</UiText> for your theme, <UiText inline fontStyle="bold" category="tertiary">dark and light</UiText></UiText>
                        <br />
                    </UiListItem>
                    <UiListItem>
                        <UiText>In your app, the theme coloration will be selected up based on the user&apos;s device theme preference.</UiText>
                        <br />
                    </UiListItem>
                    <UiListItem>
                        <UiText>When using your theme in your app, we suggest you follow the <UiText inline fontStyle="bold" category="tertiary">60-30-10 rule</UiText>.</UiText>
                        <br />
                        <UiSpacing padding={listSpacing}>
                            <UiList type="BULLETED">
                                <UiListItem>60% usage for primary color.</UiListItem>
                                <UiListItem>30% usage for secondary color.</UiListItem>
                                <UiListItem>10% usage for tertiary color.</UiListItem>
                            </UiList>
                        </UiSpacing>
                        <br />
                    </UiListItem>
                    <UiListItem>
                        <UiText>
                            The font name used in the theme <UiText inline fontStyle="bold" category="tertiary">only set it up in the CSS rules, it doesn&apos;t install it</UiText>. You are still responsible for providing the actual font to your app.
                        </UiText>
                        <br />
                    </UiListItem>
                </UiList>
                <UiText>If you want to learn more about how to choose your colorations you can head to this doc page:{" "}
                    <UiLink>
                        <Link href="/docs/colorations" target="_blank">
                            Colorations information
                        </Link>
                    </UiLink>
                </UiText>
            </UiSpacing>
            </UiCard>
            <br />
            <ContinueLink text="Start" url={`./create-theme/colors?theme=${btoa(JSON.stringify(generatedTheme))}`} />
            <br />
            <UiText size="small">
                <UiIcon icon="Info" /> The theme will be encoded in the URL so if you want to share it with colleagues or just save it to come back to it later on, you can share/store the URL and it will include all your selections.
            </UiText>
        </>
    )
}