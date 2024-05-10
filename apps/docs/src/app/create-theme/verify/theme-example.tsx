import styled from "styled-components";

import { ColorCategory, ColorTokens, HeadingLevel, SizesProp, SpacingType, Theme, ThemeColor } from "@uireact/foundation";
import { UiCard } from "@uireact/card";
import { UiReactFadeUp } from "@uireact/framer-animations";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";

type ThemeExampleProps = {
    coloration: ThemeColor;
    theme: Theme;
}

const GlobalWrapper = styled.div<{ $theme: Theme, $coloration: ThemeColor }>`
    border-radius: 30px;
    padding: 30px;

    ${(props) => `
        background-color: ${props.$theme[props.$coloration].primary.token_100};
        color: ${props.$theme[props.$coloration].fonts.token_100};
        font-family: ${props.$theme.texts.font};
        font-size: ${props.$theme.sizes.texts.regular};
    `}
`;

const CustomCard = styled(UiCard)<{ $theme: Theme, $coloration: ThemeColor, $category: ColorCategory, $weigth?: ColorTokens }>`
    border-radius: 20px;

    ${(props) => `
        background-color: ${props.$theme[props.$coloration][props.$category][props.$weigth || ColorTokens.token_100]};
        color: ${props.$theme[props.$coloration].fonts.token_100};
        font-size: ${props.$theme.sizes.texts.small};
    `}
`;

const CustomHeader = styled.h1<{ $theme: Theme, $coloration: ThemeColor, $level: HeadingLevel }>`
    ${(props) => `
        color: ${props.$theme[props.$coloration].fonts.token_100};
        font-size: ${props.$theme.sizes.headings[props.$level]};
    `}
`;

const CustomText = styled.p<{ $theme: Theme, $coloration: ThemeColor, $size: SizesProp, $category?: ColorCategory, $weight?: ColorTokens }>`
    ${(props) => `
        color: ${props.$theme[props.$coloration][props.$category || 'fonts'][props.$weight || ColorTokens.token_100]};
        font-size: ${props.$theme.sizes.texts[props.$size]};
    `}
`;

const CustomSpacing = styled.div<{ $theme: Theme, $spacing: SpacingType }>`
    ${(props) => `
        padding-top: ${props.$theme.spacing[props.$spacing]};
    `}
`;

export const ThemeExample = ({ coloration, theme }: ThemeExampleProps) => {
    return (
        <GlobalWrapper $theme={theme} $coloration={coloration}>
            <CustomText $theme={theme} $coloration={coloration} $size="regular">Primary color as background</CustomText>
            <CustomHeader $theme={theme} $coloration={coloration} $level={HeadingLevel.level1}>Heading level 1</CustomHeader>
            <CustomSpacing $theme={theme} $spacing="six" />
            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary">
                <UiFlexGrid gap="five">
                    <UiFlexGridItem>
                    <CustomHeader $theme={theme} $coloration={coloration} $level={HeadingLevel.level3}>Colorations Examples</CustomHeader>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="regular">Secondary color as background in cards.</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary">
                            <CustomText $theme={theme} $coloration={coloration} $size="regular">Tertiary color</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomHeader $theme={theme} $coloration={coloration} $level={HeadingLevel.level3}>Main colorations</CustomHeader>
                        <CustomSpacing $theme={theme} $spacing="three" />
                        <CustomText $theme={theme} $coloration={coloration} $size="small">The base token is the one you selected in the color picker and is reference to as token 100 in the CSS variables</CustomText>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomHeader $theme={theme} $coloration={coloration} $level={HeadingLevel.level4}>Primary</CustomHeader>
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_10}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 10</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_50}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 50</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary">
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Base</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_150}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 150</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="primary" $weigth={ColorTokens.token_200}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 200</CustomText>
                            </CustomCard>
                        </UiFlexGrid>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomHeader $theme={theme} $coloration={coloration} $level={HeadingLevel.level4}>Secondary</CustomHeader>
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_10}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 10</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_50}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 50</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Base</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_150}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 150</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary" $weigth={ColorTokens.token_200}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 200</CustomText>
                            </CustomCard>
                        </UiFlexGrid>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomHeader $theme={theme} $coloration={coloration} $level={HeadingLevel.level4}>Tertiary</CustomHeader>
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_10}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 10</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_50}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 50</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary">
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Base</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_150}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 150</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="tertiary" $weigth={ColorTokens.token_200}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular">Token 200</CustomText>
                            </CustomCard>
                        </UiFlexGrid>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <br />
                        <CustomHeader $theme={theme} $coloration={coloration} $level={HeadingLevel.level4}>Support Colors</CustomHeader>
                        <br />
                        <CustomText $theme={theme} $coloration={coloration} $size="small">In this example we are combining background token 50 and font token 200, which is how we suggest to use support colors:</CustomText>
                        <br />
                        <UiFlexGrid gap="four">
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="positive" $weigth={ColorTokens.token_50}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular" $category="positive" $weight={ColorTokens.token_200}>Positive</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="negative" $weigth={ColorTokens.token_50}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular" $category="negative" $weight={ColorTokens.token_200}>Negative</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="warning" $weigth={ColorTokens.token_50}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular" $category="warning" $weight={ColorTokens.token_200}>Warning</CustomText>
                            </CustomCard>
                            <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="error" $weigth={ColorTokens.token_50}>
                                <CustomText $theme={theme} $coloration={coloration} $size="regular" $category="error" $weight={ColorTokens.token_200}>Error</CustomText>
                            </CustomCard>
                        </UiFlexGrid>
                    </UiFlexGridItem>
                    <UiFlexGridItem>
                    <CustomText $theme={theme} $coloration={coloration} $size="regular">Spacings Examples:</CustomText>
                        <CustomSpacing $theme={theme} $spacing="seven" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="xsmall">level 7</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="six" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="xsmall">level 6</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="five" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="xsmall">level 5</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="four" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="xsmall">level 4</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="three" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="xsmall">level 3</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="two" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="xsmall">level 2</CustomText>
                        </CustomCard>
                        <CustomSpacing $theme={theme} $spacing="one" />
                        <CustomCard $theme={theme} $coloration={coloration} motion={UiReactFadeUp} $category="secondary">
                            <CustomText $theme={theme} $coloration={coloration} $size="xsmall">level 1</CustomText>
                        </CustomCard>
                    </UiFlexGridItem>
                </UiFlexGrid>
            </CustomCard>
                
        </GlobalWrapper>
    )
};
