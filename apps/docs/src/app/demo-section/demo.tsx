import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

import { UiButtonLink, UiHeading, UiLink, UiText } from "@uireact/text";
import { UiLineSeparator } from '@uireact/separator';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';

import { Separator } from '../internal/section/separator';
import { useParallax } from '../hooks';
import { DemoCard } from '../internal';

const DemoContainer = styled(motion.div)`
  position: sticky;
  height: 200vh;
  top: 0;
`;

const DemoGridContainer = styled(motion.div)`
  height: 800px;
`;

const GridContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const SeparatorWrapper = styled.div`
  margin-top: -280px;
`;

const headingSpacing: UiSpacingProps['padding'] = { block: 'five', inline: 'five' };

export const Demo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["100vh", "400vh"]
  });
  const upwardsGrid = useParallax(scrollYProgress, "-1000px", "100px");
  const downwardsGrid = useParallax(scrollYProgress, "1000px", "-400px");

  return (
    <>
      <SeparatorWrapper>
        <Separator weight='100' />
      </SeparatorWrapper>
      <DemoContainer ref={ref}>
        <UiSpacing padding={headingSpacing}>
          <UiFlexGrid justifyContent='center'>
            <UiFlexGridItem grow={1}>
              <UiHeading>@UiReact | Themed UI React components</UiHeading>
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiButtonLink>
                <Link href="docs/">
                  <UiIcon icon='Book'/> Docs
                </Link>
              </UiButtonLink>
            </UiFlexGridItem>
          </UiFlexGrid>
        </UiSpacing>
        <UiLineSeparator />
        <br />
        <GridContainer>
          <UiGrid cols={{ small: 1, medium: 2, large: 4, xlarge: 4 }} rows={1}>
            <UiGridItem>
              <DemoGridContainer style={{ y: upwardsGrid }}>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
              </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
            <DemoGridContainer style={{ y: downwardsGrid }}>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
              </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
            <DemoGridContainer style={{ y: upwardsGrid }}>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
              </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
            <DemoGridContainer style={{ y: downwardsGrid }}>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard transparent>
                  <UiText>Demo component</UiText>
                </DemoCard>
                <DemoCard>
                  <UiText>Demo component</UiText>
                </DemoCard>
              </DemoGridContainer>
            </UiGridItem>
          </UiGrid>
        </GridContainer>
      </DemoContainer>
    </>
  )
}