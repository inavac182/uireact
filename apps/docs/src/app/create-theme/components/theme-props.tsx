'use client';
import { useCallback, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { UiHeading, UiText } from "@uireact/text";
import { DefaultTheme, Theme, ThemeColor, ThemeProperties, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiReactHoverScaleUp, UiReactTapScaleDown } from '@uireact/framer-animations';

import { GradientBorder } from '../../internal'
import { ThemePropContainer } from "./theme-prop-container";
import { ColorProps } from './colors-props';
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiIcon } from "@uireact/icons";

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

type ThemePropertiesProps = {
    themeProperty: ThemeProperties | null;
    selectProperty: (property: ThemeProperties) => void;
}

export const ThemeProps = ({ themeProperty, selectProperty }: ThemePropertiesProps) => {
    return (
        <Wrapper>
            <GradientBorder $padding="0 5px 0 0">
                <Content>
                    <UiSpacing padding={heightSpacing}>
                        <UiText fontStyle="bold" size="large">Theme Properties</UiText>
                    </UiSpacing>
                    <ThemePropHeading onClick={() => selectProperty(ThemeProperties.dark)} {...animationProps}>
                        <UiHeading level={5}>
                            <UiFlexGrid gap="four" alignItems="center">
                                <UiText category="tertiary" size="xlarge" inline>1. </UiText>
                                <UiFlexGridItem grow={1}>
                                    Colors
                                </UiFlexGridItem>
                                {themeProperty === ThemeProperties.dark && <UiIcon icon="CaretRight" />}
                            </UiFlexGrid>
                        </UiHeading>
                    </ThemePropHeading>
                    <ThemePropHeading onClick={() => selectProperty(ThemeProperties.texts)} {...animationProps}>
                        <UiHeading level={5}>
                            <UiFlexGrid gap="four" alignItems="center">
                                <UiText category="tertiary" size="xlarge" inline>2. </UiText>
                                <UiFlexGridItem grow={1}>
                                    Fonts
                                </UiFlexGridItem>
                                {themeProperty === ThemeProperties.texts && <UiIcon icon="CaretRight" />}
                            </UiFlexGrid>
                        </UiHeading>
                    </ThemePropHeading>
                    <ThemePropHeading onClick={() => selectProperty(ThemeProperties.sizes)} {...animationProps}>
                        <UiHeading level={5}>
                            <UiFlexGrid gap="four" alignItems="center">
                                <UiText category="tertiary" size="xlarge" inline>3. </UiText>
                                <UiFlexGridItem grow={1}>
                                    Sizes
                                </UiFlexGridItem>
                                {themeProperty === ThemeProperties.sizes && <UiIcon icon="CaretRight" />}
                            </UiFlexGrid>
                        </UiHeading>
                    </ThemePropHeading>
                    <ThemePropHeading onClick={() => selectProperty(ThemeProperties.spacing)} {...animationProps}>
                        <UiHeading level={5}>
                            <UiFlexGrid gap="four" alignItems="center">
                                <UiText category="tertiary" size="xlarge" inline>4. </UiText>
                                <UiFlexGridItem grow={1}>
                                    Spaces
                                </UiFlexGridItem>
                                {themeProperty === ThemeProperties.spacing && <UiIcon icon="CaretRight" />}
                            </UiFlexGrid>
                        </UiHeading>
                    </ThemePropHeading>
                </Content>
            </GradientBorder>
        </Wrapper>
    )
};
