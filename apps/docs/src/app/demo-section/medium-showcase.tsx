import { UiGridItem } from "@uireact/grid";
import { MotionValue, motion } from "framer-motion";
import { StyledDemo, FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "./demos";
import styled from "styled-components";

type ShowcaseProps = {
    upwardsGrid: MotionValue<string | number>,
    downwardsGrid: MotionValue<string | number>
}

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

export const MediumShowcase = ({ downwardsGrid, upwardsGrid }: ShowcaseProps) => {
    return (
        <>
            <UiGridItem>
                <DemoGridContainer style={{ y: upwardsGrid }}>
                    <StyledDemo />
                    <FramerMotionDemo />
                    <Cards />
                    <TextsDemo />
                    <ThemeSelectorDemo />
                    <ThemeDemo />
                </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
                <DemoGridContainer style={{ y: downwardsGrid }}>
                    <DialogsDemo />
                    <FormsDemo />
                    <ButtonsDemo />
                    <Tabs />
                    <BadgesDemo />
                    <MenusDemos />
                    <ExpandosDemo />
                </DemoGridContainer>
            </UiGridItem>
        </>
    );
};
