'use client';
import styled from "styled-components";
import { motion } from "framer-motion";

import { UiHeading, UiText } from "@uireact/text";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiReactHoverScaleUp, UiReactTapScaleDown } from '@uireact/framer-animations';

import { GradientBorder } from '../../../internal'
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiIcon } from "@uireact/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Wrapper = styled.div`
    position: sticky;
    top: 55px;
    left: 0;
    height: 100vh;
    width: 300px;
    box-sizing: border-box;
`;

const Content = styled.div`
    background-color: var(--primary-token_150);
    width: 100%;
    height: 100%;
    padding: 0px 30px 100px 30px;
    box-sizing: border-box;
    overflow-y: auto;
`;

const ThemePropHeading = styled(motion.div)`
    cursor: pointer;
    margin-top: 30px;
`;

const heightSpacing: UiSpacingProps['padding'] = { block: 'five'};
const animationProps = {...UiReactHoverScaleUp, ...UiReactTapScaleDown};

export const ThemeProps = () => {
    const pathname = usePathname();

    return (
        <Wrapper>
            <GradientBorder $padding="0 5px 0 0">
                <Content>
                    <UiSpacing padding={heightSpacing}>
                        <UiText fontStyle="bold" size="large">Theme Properties</UiText>
                    </UiSpacing>
                    <ThemePropHeading {...animationProps}>
                        <Link href='/create-theme/colors'>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="xlarge" inline>1. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Colors
                                    </UiFlexGridItem>
                                    {pathname.includes('colors') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                    <ThemePropHeading {...animationProps}>
                        <Link href='/create-theme/texts'>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="xlarge" inline>2. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Fonts
                                    </UiFlexGridItem>
                                    {pathname.includes('texts') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                    <ThemePropHeading {...animationProps}>
                        <Link href='/create-theme/sizes'>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="xlarge" inline>3. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Sizes
                                    </UiFlexGridItem>
                                    {pathname.includes('sizes') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                    <ThemePropHeading {...animationProps}>
                        <Link href='/create-theme/spaces'>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="xlarge" inline>4. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Spaces
                                    </UiFlexGridItem>
                                    {pathname.includes('spaces') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                </Content>
            </GradientBorder>
        </Wrapper>
    )
};
