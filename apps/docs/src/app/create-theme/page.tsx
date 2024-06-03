'use client';
import styled from "styled-components";
import { MotionProps, motion } from "framer-motion";

import { UiCard } from "@uireact/card";
import { UiFlexGrid } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiList, UiListItem } from "@uireact/list";
import { UiLineSeparator } from "@uireact/separator";
import { UiText } from "@uireact/text";
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
            <UiText size="large" fontStyle="bold">One of the most powerful aspects of this library is the hability to use your custom theme as a plug and play configuration.</UiText>
            <br />
            <UiText size="large">This tool will guide you go through the steps needed to create your theme.</UiText>
            <br />
            <UiCard styling='outlined' category='warning'>
                <h2>This generator works only for v1 and v2 components</h2>
                <br/>
                <p>We are moving away from styled-components to SCSS modules, as part of that migration we will be updating this generate as well.</p>
                <br/>
                <p>Currently it will output you a json object that is useful for V1 and V2 components, for V3 components you need to manually provide CSS variables as of today.</p>
                <br/>
                <p>We will update this generator in the following days to output the newer v3 format.</p>
            </UiCard>
            <br />
            <UiCard category="primary" weight="150">
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
                        <UiText>We suggest you follow the <UiText inline fontStyle="bold" category="tertiary">60-30-10 rule</UiText>.</UiText>
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
                            The font name used in the theme <UiText inline fontStyle="bold" category="tertiary">only set it up in the CSS rules, it doesn&apos;t install it</UiText>. If you will use a font from the web e.g. google fonts, remember to add it to your page via {`<link />`} tag, CSS {`@import`}, etc...
                        </UiText>
                        <br />
                    </UiListItem>
                </UiList>
            </UiSpacing>
            </UiCard>
            <br />
            <ContinueLink text="Start" url={`./create-theme/colors?theme=${btoa(JSON.stringify(generatedTheme))}`} />
            <br />
            <UiText size="small">
                <UiIcon icon="Info" /> The theme will be encoded in the URL so if you want to share it with colleagues you can share the URL and they will see the same theme you created.
            </UiText>
        </>
    )
}