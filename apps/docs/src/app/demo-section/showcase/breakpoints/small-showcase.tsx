import { UiGridItem } from "@uireact/grid";
import { motion } from "motion/react";
import styled from "styled-components";

import { FramerMotionDemo, Cards, TextsDemo, ThemeSelectorDemo, ThemeDemo, TooltipsDemo, FormsDemo, ButtonsDemo, Tabs, DialogsDemo, BadgesDemo, MenusDemos, ExpandosDemo } from "../../demos";
import { ShowcaseProps } from "./showcase-props";
import { useParallax } from "@/app/hooks";
import { EzFormsDemo } from "../../demos/ezforms";
import { ValidatorDemo } from "../../demos/validator";

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

export const SmallShowcase = ({ scrollProgress }: ShowcaseProps) => {
    const upwardsGrid = useParallax(scrollProgress, "-5500px", "0px");

    return (
        <>
            <UiGridItem>
                <DemoGridContainer style={{ y: upwardsGrid }}>
                    <FramerMotionDemo />
                    <ThemeDemo />
                    <ThemeSelectorDemo />
                    <FormsDemo />
                    <EzFormsDemo />
                    <Cards />
                    <ButtonsDemo />
                    <DialogsDemo />
                    <TooltipsDemo />
                    <BadgesDemo />
                    <MenusDemos />
                    <ValidatorDemo />
                    <ExpandosDemo />
                    <Tabs />
                    <TextsDemo />
                </DemoGridContainer>
            </UiGridItem>
        </>
    );
};
