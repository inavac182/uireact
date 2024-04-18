import { MotionValue, motion } from "framer-motion";
import styled from "styled-components";

import { UiGridItem } from "@uireact/grid";
import { StyledDemo, FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "../../demos";
import { useParallax } from "@/app/hooks";
import { ShowcaseProps } from "./showcase-props";

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

export const LargeShowcase = ({ scrollProgress }: ShowcaseProps) => {
    const upwardsGrid = useParallax(scrollProgress, "-1900px", "0px");
    const downwardsGrid = useParallax(scrollProgress, "1000px", "-900px");

    return (
        <>
        <UiGridItem>
            <DemoGridContainer style={{ y: upwardsGrid }}>
                <StyledDemo />
                <FramerMotionDemo />
                <Cards />
                <ExpandosDemo />
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
            <BadgesDemo />
            <MenusDemos />
            <DialogsDemo />
        </DemoGridContainer>
        </UiGridItem>
        </>
    );
};
