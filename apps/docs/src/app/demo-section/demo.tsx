import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';

import { UiButtonLink, UiHeading, UiLink } from "@uireact/text";
import { UiLineSeparator } from '@uireact/separator';
import { UiGrid, UiGridItem } from '@uireact/grid';

import { Separator } from '../internal/section/separator';
import { useParallax } from '../hooks';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import Link from 'next/link';
import { UiIcon } from '@uireact/icons';


const DemoContainer = styled(motion.div)`
  position: sticky;
  height: 200vh;
  top: 0;
`;

const DemoGridContainer = styled(motion.div)`
  height: 800px
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