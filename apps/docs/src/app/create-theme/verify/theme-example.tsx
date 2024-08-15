import { CSSProperties } from "react";
import styled from "styled-components";

import { ColorCategory, ColorTokens, HeadingLevel, HeadingSizes, SizesProp, SpacingType, Theme, ThemeColor } from "@uireact/foundation";
import { UiCard } from "@uireact/card";
import { UiReactFadeUp } from "@uireact/framer-animations";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";

import styles from './verify.module.scss';

type ThemeExampleProps = {
    coloration: ThemeColor;
    theme: Theme;
}

const CustomCard = styled(UiCard)<{ $theme: Theme, $coloration: ThemeColor, $category: ColorCategory, $weigth?: ColorTokens }>`
    border-radius: 20px;
    box-sizing: border-box;

    ${(props) => `
        background-color: ${props.$theme[props.$coloration][props.$category][props.$weigth || ColorTokens.token_100]};
        color: ${props.$theme[props.$coloration].fonts.token_100};
        font-size: ${props.$theme.sizes.texts.small};
    `}
`;

const CustomSpacing = styled.div<{ $theme: Theme, $spacing: SpacingType }>`
    ${(props) => `
        padding-top: ${props.$theme.spacing[props.$spacing]};
    `}
`;

const getTextStyles = (theme: Theme, coloration: ThemeColor, token: ColorTokens, category: ColorCategory, size: SizesProp): CSSProperties => {
    return {
        color: theme[coloration][category][token],
        fontSize: theme.sizes.texts[size]
    };
};

const getHeadingStyles = (theme: Theme, coloration: ThemeColor, token: ColorTokens, category: ColorCategory, level: HeadingLevel): CSSProperties => {
    return {
        color: theme[coloration][category][token],
        fontSize: theme.sizes.headings[level]
    };
};

export const ThemeExample = ({ coloration, theme }: ThemeExampleProps) => {
    return (
        <div className={styles.wrapper} style={{
            backgroundColor: theme[coloration].primary.token_100,
            color: theme[coloration].fonts.token_100,
            fontFamily: theme.texts.font,
            fontSize: theme.sizes.texts.regular
        }}>
            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Primary color as background</p>
            <h1 style={getHeadingStyles(theme, coloration, ColorTokens.token_100, 'fonts', HeadingLevel.level1)}>Heading 1</h1>
            <CustomSpacing $theme={theme} $spacing="three" />
            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary">
                <UiFlexGrid gap="five" wrap="wrap">
                    <UiFlexGridItem>
                        <h3 style={getHeadingStyles(theme, coloration, ColorTokens.token_100, 'fonts', HeadingLevel.level4)}>Colorations Examples</h3>
                        <CustomSpacing $theme={theme} $spacing="three" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <p style={getTextStyles(theme, coloration === 'light' ? ThemeColor.dark : ThemeColor.light, ColorTokens.token_100, 'fonts', 'regular')}>Secondary color as background in cards using inverse text coloration.</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary">
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Tertiary color</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <h3 style={getHeadingStyles(theme, coloration, ColorTokens.token_100, 'fonts', HeadingLevel.level4)}>Main colorations</h3>
                        <CustomSpacing $theme={theme} $spacing="three" />
                        <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'small')}>The base token is the one you selected in the color picker and is reference to as token 100 in the CSS variables</p>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <h4 style={getHeadingStyles(theme, coloration, ColorTokens.token_100, 'fonts', HeadingLevel.level5)}>Primary</h4>
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_10}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 10</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 50</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary">
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Base</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_150}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 150</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_200}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 200</p>
                            </CustomCard>
                        </UiFlexGrid>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <h4 style={getHeadingStyles(theme, coloration, ColorTokens.token_100, 'fonts', HeadingLevel.level5)}>Secondary</h4>
                        <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'small')}>Usually the secondary coloration is combined with an inverse font coloration</p>
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_10}>
                                <p style={getTextStyles(theme, coloration === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark, ColorTokens.token_100, 'fonts', 'regular')}>Token 10</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_50}>
                                <p style={getTextStyles(theme, coloration === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark, ColorTokens.token_100, 'fonts', 'regular')}>Token 50</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                                <p style={getTextStyles(theme, coloration === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark, ColorTokens.token_100, 'fonts', 'regular')}>Base</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_150}>
                                <p style={getTextStyles(theme, coloration === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark, ColorTokens.token_100, 'fonts', 'regular')}>Token 150</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_200}>
                                <p style={getTextStyles(theme, coloration === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark, ColorTokens.token_100, 'fonts', 'regular')}>Token 200</p>
                            </CustomCard>
                        </UiFlexGrid>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <h4 style={getHeadingStyles(theme, coloration, ColorTokens.token_100, 'fonts', HeadingLevel.level5)}>Tertiary</h4>
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_10}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 10</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_50}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 50</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary">
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Base</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_150}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 150</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_200}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Token 200</p>
                            </CustomCard>
                        </UiFlexGrid>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <br />
                        <h4 style={getHeadingStyles(theme, coloration, ColorTokens.token_100, 'fonts', HeadingLevel.level4)}>Support Colors</h4>
                        <br />
                        <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'small')}>In this example we are combining background token 50 and font token 200, which is how we suggest to use support colors:</p>
                        <br />
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="positive" $weigth={ColorTokens.token_50}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_200, 'positive', 'regular')}>Positive</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="negative" $weigth={ColorTokens.token_50}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_200, 'negative', 'regular')}>Negative</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="warning" $weigth={ColorTokens.token_50}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_200, 'warning', 'regular')}>Warning</p>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="error" $weigth={ColorTokens.token_50}>
                                <p style={getTextStyles(theme, coloration, ColorTokens.token_200, 'error', 'regular')}>Error</p>
                            </CustomCard>
                        </UiFlexGrid>
                    </UiFlexGridItem>
                    {/**
                    <UiFlexGridItem>
                    <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'regular')}>Spacings Examples:</p>
                        <CustomSpacing $theme={theme} $spacing="seven" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'xsmall')}>level 7</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="six" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'xsmall')}>level 6</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="five" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'xsmall')}>level 5</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'xsmall')}>level 4</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="three" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'xsmall')}>level 3</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="two" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'xsmall')}>level 2</p>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="one" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                            <p style={getTextStyles(theme, coloration, ColorTokens.token_100, 'fonts', 'xsmall')}>level 1</p>
                        </CustomCard>
                    </UiFlexGridItem>
                     */}
                </UiFlexGrid>
            </CustomCard>
                
        </div>
    )
};
