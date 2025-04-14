import styled from "styled-components";
import { useScroll } from "motion/react";

import { UiViewport, Breakpoints } from "@uireact/foundation";
import { UiGrid } from "@uireact/grid";

import { LargeShowcase, MediumShowcase, SmallShowcase } from "./breakpoints";

const GridContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const ShowcaseGrid = () => {
    const { scrollYProgress } = useScroll({
        offset: ["100vh", "400vh"]
    });

    return (
        <GridContainer>
          <UiGrid cols={{ small: 1, medium: 2, large: 4, xlarge: 4 }} rows={1}>
            <UiViewport criteria={'l|xl'}>
              <LargeShowcase scrollProgress={scrollYProgress} />
            </UiViewport>
            <UiViewport criteria={Breakpoints.MEDIUM}>
              <MediumShowcase scrollProgress={scrollYProgress} />
            </UiViewport>
            <UiViewport criteria={Breakpoints.SMALL}>
              <SmallShowcase scrollProgress={scrollYProgress} />
            </UiViewport>
          </UiGrid>
        </GridContainer>
    )
};
