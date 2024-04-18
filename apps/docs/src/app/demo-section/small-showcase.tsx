import { UiGridItem } from "@uireact/grid";
import { MotionValue, motion } from "framer-motion";
import styled from "styled-components";
import { StyledDemo, FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "./demos";

type ShowcaseProps = {
    upwardsGrid: MotionValue<string | number>,
    downwardsGrid: MotionValue<string | number>
}

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

export const SmallShowcase = ({downwardsGrid, upwardsGrid}: ShowcaseProps) => {
    return (
        <>
            <UiGridItem>
                <DemoGridContainer style={{ y: downwardsGrid }}>
                    <StyledDemo />
                    <FramerMotionDemo />
                    <Cards />
                    <DialogsDemo />
                    <BadgesDemo />
                    <MenusDemos />
                    <ExpandosDemo />
                    <TooltipsDemo />
                    <FormsDemo />
                    <ButtonsDemo />
                    <Tabs />
                    <TextsDemo />
                    <ThemeSelectorDemo />
                    <ThemeDemo />
                </DemoGridContainer>
            </UiGridItem>
        </>
    );
};
