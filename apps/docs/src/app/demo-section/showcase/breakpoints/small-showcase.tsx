import { UiGridItem } from "@uireact/grid";
import { motion } from "framer-motion";
import styled from "styled-components";

import { StyledDemo, FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "../../demos";
import { ShowcaseProps } from "./showcase-props";
import { useParallax } from "@/app/hooks";

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

export const SmallShowcase = ({ scrollProgress }: ShowcaseProps) => {
    const downwardsGrid = useParallax(scrollProgress, "1000px", "-400px");

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
