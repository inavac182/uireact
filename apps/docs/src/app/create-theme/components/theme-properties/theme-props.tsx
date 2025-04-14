'use client';
import { useMemo } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { UiHeading, UiText } from "@uireact/text";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiReactHoverScaleUp, UiReactTapScaleDown } from '@uireact/framer-animations';
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiIcon } from "@uireact/icons";

import { GradientBorder } from '../../../internal'

const Wrapper = styled.div`
    position: sticky;
    top: 55px;
    left: 0;
    height: 100%;
    width: 250px;
    box-sizing: border-box;
`;

const Content = styled.div`
    background-color: var(--primary-token_100);
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
    const searchParams = useSearchParams();
    const themeParameter = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            const parsedTheme = JSON.parse(atob(theme));
            return btoa(JSON.stringify(parsedTheme));
        }

        return '';
    }, [searchParams]);

    return (
        <Wrapper>
            <GradientBorder $padding="0 5px 0 0">
                <Content>
                    <UiSpacing padding={heightSpacing}>
                        <UiText fontStyle="bold" size="large">Theme Properties</UiText>
                    </UiSpacing>
                    <ThemePropHeading {...animationProps}>
                        <Link href={`./colors?theme=${themeParameter}`}>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="large" inline>1. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Colors
                                    </UiFlexGridItem>
                                    {pathname.includes('colors') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                    <ThemePropHeading {...animationProps}>
                        <Link href={`./fonts?theme=${themeParameter}`}>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="large" inline>2. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Fonts
                                    </UiFlexGridItem>
                                    {pathname.includes('fonts') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                    <ThemePropHeading {...animationProps}>
                        <Link href={`./sizes?theme=${themeParameter}`}>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="large" inline>3. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Sizes
                                    </UiFlexGridItem>
                                    {pathname.includes('sizes') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                    <ThemePropHeading {...animationProps}>
                        <Link href={`./spaces?theme=${themeParameter}`}>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="large" inline>4. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Spaces
                                    </UiFlexGridItem>
                                    {pathname.includes('spaces') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                    <ThemePropHeading {...animationProps}>
                        <Link href={`./verify?theme=${themeParameter}`}>
                            <UiHeading level={5}>
                                <UiFlexGrid gap="four" alignItems="center">
                                    <UiText category="tertiary" size="large" inline>5. </UiText>
                                    <UiFlexGridItem grow={1}>
                                        Verify
                                    </UiFlexGridItem>
                                    {pathname.includes('verify') && <UiIcon icon="CaretRight" />}
                                </UiFlexGrid>
                            </UiHeading>
                        </Link>
                    </ThemePropHeading>
                </Content>
            </GradientBorder>
        </Wrapper>
    )
};
