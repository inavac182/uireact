import { UiGridItem } from "@uireact/grid";
import { motion } from "motion/react";
import { FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "../../demos";
import styled from "styled-components";
import { ShowcaseProps } from "./showcase-props";
import { useParallax } from "@/app/hooks";
import { ValidatorDemo } from "../../demos/validator";
import { EzFormsDemo } from "../../demos/ezforms";

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
                    <FramerMotionDemo />
                    <ThemeSelectorDemo />
                    <TextsDemo />
                    <Cards />
                    <ValidatorDemo />
                    <EzFormsDemo />
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
