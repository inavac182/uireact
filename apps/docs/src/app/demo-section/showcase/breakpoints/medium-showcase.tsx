import { UiGridItem } from "@uireact/grid";
import { motion } from "framer-motion";
import { StyledDemo, FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "../../demos";
import styled from "styled-components";
import { ShowcaseProps } from "./showcase-props";
import { useParallax } from "@/app/hooks";

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

export const MediumShowcase = ({ scrollProgress }: ShowcaseProps) => {
    const upwardsGrid = useParallax(scrollProgress, "-3500px", "0px");
    const downwardsGrid = useParallax(scrollProgress, "1000px", "-2500px");

    return (
        <>
            <UiGridItem>
                <DemoGridContainer style={{ y: upwardsGrid }}>
                    <StyledDemo />
                    <FramerMotionDemo />
                    <ThemeSelectorDemo />
                    <TextsDemo />
                    <Cards />
                </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
                <DemoGridContainer style={{ y: downwardsGrid }}>
                    <ExpandosDemo />
                    <Tabs />
                    <BadgesDemo />
                    <MenusDemos />
                    <ButtonsDemo />
                    <FormsDemo />
                    <DialogsDemo />
                    <ThemeDemo />
                </DemoGridContainer>
            </UiGridItem>
        </>
    );
};
