import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';

import { UiHeading, UiText } from "@uireact/text";
import { UiCard } from '@uireact/card';
import { UiLineSeparator } from '@uireact/separator';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiGrid, UiGridItem } from '@uireact/grid';

import { Separator } from '../internal/section/separator';
import { useParallax } from '../hooks';
import { UiSpacing } from '@uireact/foundation';


const DemoContainer = styled(motion.div)`
  position: sticky;
  height: 200vh;
  top: 0;
`;

const DemoGridContainer = styled(motion.div)`
  height: 800px
`;

const GridContainer = styled.div`
  height: 500px;
  overflow: hidden;
`;

const SeparatorWrapper = styled.div`
  margin-top: -280px;
`

export const Demo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["100vh", "400vh"]
  });
  const upwardsGrid = useParallax(scrollYProgress, "-1000px", "0px");
  const downwardsGrid = useParallax(scrollYProgress, "2000px", "-300px");

  return (
    <>
      <SeparatorWrapper>
        <Separator weight='100' />
      </SeparatorWrapper>
      <DemoContainer ref={ref}>
        <UiHeading>Themed React components</UiHeading>
        <UiLineSeparator />
        <br />
        <GridContainer>
          <UiGrid cols={{ small: 1, medium: 2, large: 4, xlarge: 4 }} rows={1}>
            <UiGridItem>
            <DemoGridContainer style={{ y: upwardsGrid }}>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 1.1</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 1.2</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 1.3</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 1.4</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 1.5</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 1.6</p>
                </UiSpacing>
              </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
            <DemoGridContainer style={{ y: downwardsGrid }}>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 2.1</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 2.2</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 2.3</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 2.4</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 2.5</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 2.6</p>
                </UiSpacing>
              </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
            <DemoGridContainer style={{ y: upwardsGrid }}>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 3.1</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 3.2</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 3.3</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 3.4</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 3.5</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 3.6</p>
                </UiSpacing>
              </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
            <DemoGridContainer style={{ y: downwardsGrid }}>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 4.1</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 4.2</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 4.3</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 4.4</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 4.5</p>
              </UiSpacing>
              <UiSpacing padding={{ block: 'seven' }}>
                <p>Grid 4.6</p>
                </UiSpacing>
              </DemoGridContainer>
            </UiGridItem>
          </UiGrid>
        </GridContainer>
      </DemoContainer>
    </>
  )
}