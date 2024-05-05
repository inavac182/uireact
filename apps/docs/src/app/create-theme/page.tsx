'use client';
import { useEffect } from "react";

import Link from "next/link";
import styled from "styled-components";
import { animate, motion, useAnimate } from "framer-motion";

import { UiCard } from "@uireact/card";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiList, UiListItem } from "@uireact/list";
import { UiLineSeparator } from "@uireact/separator";
import { UiHeading, UiText } from "@uireact/text";

const Div = styled.div`
    height: 200vh;
    padding: 30px 50px 30px 50px;
    width: 100%;
    box-sizing: border-box;
`;

const StartLinkText = styled.span`
    a {
        color: var(--tertiary-token_100);
        font-size: 40px;
        max-width: 90%;
    }
`;

const LinkContent = styled(motion.div)`
    display: flex;
    align-items: center;
    border-bottom: 5px dotted var(--tertiary-token_100);
    position: relative;
`;

const IconWrapper = styled(motion.div)`
    height: var(--texts-xlarge);
    display: flex;
    font-size: 30px;
    position: absolute;
    box-sizing: border-box;
`;

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };
const listSpacing: UiSpacingProps['padding'] = {inline: 'five'};

const angleAnimation = {
    rest: {
        opacity: 0,
        left: '20%'
    },
    hovered: {
        opacity: 1,
        left: '95%'
    }
}

export default function CreateThemeToolPage () {
    return (
        <Div>
            <UiSpacing padding={headingSpacing}>
                <UiHeading>Create theme tool</UiHeading>
                <br />
                <UiLineSeparator />
            </UiSpacing>
            <br />
            <UiText size="large">This tool will help you go through the steps needed to create your theme.</UiText>
            <br />
            <UiCard category="primary" weight="200">
                <UiFlexGrid gap="five" alignItems="center">
                    <UiIcon icon="WarningTriangle" category="tertiary" />
                    <UiText>A few points to keep in mind throughout the process</UiText>
                </UiFlexGrid>
            </UiCard>
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
                                <UiListItem>60% for your primary color.</UiListItem>
                                <UiListItem>30% for your secondary color.</UiListItem>
                                <UiListItem>10% for your tertiary color.</UiListItem>
                            </UiList>
                        </UiSpacing>
                        <br />
                    </UiListItem>
                    <UiListItem>
                        <UiText>
                            The font name used in the theme <UiText inline fontStyle="bold" category="tertiary">only set it up in the CSS rules, it doesn't install it</UiText>. If you will use a font from the web e.g. google fonts, remember to add it to your page via {`<link />`} tag, CSS {`@import`}, etc...
                        </UiText>
                        <br />
                    </UiListItem>
                </UiList>
            </UiSpacing>
            <StartLinkText>
                <Link href="./create-theme/colors/">
                    <LinkContent initial="rest" whileHover="hovered" whileTap={{ scale: 0.8 }}>
                        Start
                        <IconWrapper variants={angleAnimation}>
                            <UiIcon icon="AngleClearRight" category="tertiary" size="xlarge" />
                        </IconWrapper>
                    </LinkContent>
                </Link>
            </StartLinkText>
        </Div>
    )
}