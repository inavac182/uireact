import { useCallback, useContext, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

import { UiButtonLink, UiHeading, UiText } from "@uireact/text";
import { UiLineSeparator } from '@uireact/separator';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { ThemeColor, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiDialog } from '@uireact/dialog';

import { Separator } from '../internal/section/separator';
import { useParallax } from '../hooks';
import { DocsThemeContext } from '../providers';
import { BadgesDemo, ButtonsDemo, Cards, DialogsDemo, ExpandosDemo, FormsDemo, FramerMotionDemo, MenusDemos, StyledDemo, Tabs, TextsDemo, ThemeDemo, ThemeSelectorDemo, TooltipsDemo } from './demos';

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

const dialogId = 'demo-dialog';

const dialogSpacing: UiSpacingProps['padding'] = { all: 'four'};
const headingSpacing: UiSpacingProps['padding'] = { block: 'five', inline: 'five' };

export const Demo = () => {
  const { selectTheme, selectedTheme } = useContext(DocsThemeContext);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["100vh", "400vh"]
  });
  const upwardsGrid = useParallax(scrollYProgress, "-1000px", "100px");
  const downwardsGrid = useParallax(scrollYProgress, "1000px", "-400px");
  const toggleTheme = useCallback(() => {
    selectTheme(selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark);
  }, [selectTheme, selectedTheme]);

  return (
    <>
      <SeparatorWrapper>
        <Separator weight='100' />
      </SeparatorWrapper>
      <DemoContainer ref={ref} id="demo-components">
        <UiSpacing padding={headingSpacing}>
          <UiFlexGrid justifyContent='center' columnGap='four'>
            <UiFlexGridItem grow={1}>
              <UiHeading>@UiReact | Themed Components</UiHeading>
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiButton styling='icon' category='tertiary' onClick={toggleTheme}>
                <UiIcon icon="CircleHalfStroke" />
              </UiButton>
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
        <GridContainer>
          <UiGrid cols={{ small: 1, medium: 2, large: 4, xlarge: 4 }} rows={1}>
            <UiGridItem>
              <DemoGridContainer style={{ y: upwardsGrid }}>
                <StyledDemo />
                <FramerMotionDemo />
                <Cards />
              </DemoGridContainer>
            </UiGridItem>
            <UiGridItem>
            <DemoGridContainer style={{ y: downwardsGrid }}>
                <ThemeDemo />
                <ThemeSelectorDemo />
                <TextsDemo />
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
                <DialogsDemo />
                <BadgesDemo />
                <MenusDemos />
                <ExpandosDemo />
              </DemoGridContainer>
            </UiGridItem>
          </UiGrid>
        </GridContainer>
        <UiDialog dialogId={dialogId}>
            <UiSpacing padding={dialogSpacing}>
                <UiHeading>Hey there!</UiHeading>
                <UiText>This is a centered dialog</UiText>
            </UiSpacing>
        </UiDialog>
      </DemoContainer>
    </>
  )
}