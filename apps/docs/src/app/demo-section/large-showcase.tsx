import { MotionValue, motion } from "framer-motion";
import styled from "styled-components";

import { UiGridItem } from "@uireact/grid";
import { StyledDemo, FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "./demos";

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

type ShowcaseProps = {
    upwardsGrid: MotionValue<string | number>,
    downwardsGrid: MotionValue<string | number>
}

export const LargeShowcase = ({ downwardsGrid, upwardsGrid }: ShowcaseProps) => {
    return (
        <>
        <UiGridItem>
            <DemoGridContainer style={{ y: upwardsGrid }}>
            <StyledDemo />
            <FramerMotionDemo />
            <Cards />
            </DemoGridContainer>
        </UiGridItem>
        <UiGridItem>
            <DemoGridContainer style={{ y: downwardsGrid }}>
            <TextsDemo />
            <ThemeSelectorDemo />
            <ThemeDemo />
            </DemoGridContainer>
        </UiGridItem>
        <UiGridItem>
        <DemoGridContainer style={{ y: upwardsGrid }}>
            <TooltipsDemo />
            <FormsDemo />
            <ButtonsDemo />
            <Tabs />
            </DemoGridContainer>
        </UiGridItem>
        <UiGridItem>
        <DemoGridContainer style={{ y: downwardsGrid }}>
            <DialogsDemo />
            <BadgesDemo />
            <MenusDemos />
            <ExpandosDemo />
            </DemoGridContainer>
        </UiGridItem>
        </>
    );
};
