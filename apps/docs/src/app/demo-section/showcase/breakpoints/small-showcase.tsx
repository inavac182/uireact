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
    const upwardsGrid = useParallax(scrollProgress, "-5500px", "0px");

    return (
        <>
            <UiGridItem>
                <DemoGridContainer style={{ y: upwardsGrid }}>
                    <StyledDemo />
                    <FramerMotionDemo />
                    <ThemeDemo />
                    <ThemeSelectorDemo />
                    <FormsDemo />
                    <Cards />
                    <ButtonsDemo />
                    <DialogsDemo />
                    <TooltipsDemo />
                    <BadgesDemo />
                    <MenusDemos />
                    <ExpandosDemo />
                    <Tabs />
                    <TextsDemo />
                </DemoGridContainer>
            </UiGridItem>
        </>
    );
};
