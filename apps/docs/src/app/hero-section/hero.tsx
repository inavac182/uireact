'use client';
import { useEffect, useRef } from 'react';

import { motion, useScroll, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import styled from 'styled-components';

import { useParallax } from '../hooks';
import { Logo } from '../internal/logo';
import { Section } from '../internal/section';
import { HeroMessage } from './hero-components';
import { useViewport } from '@uireact/foundation';

const colors = ['#5fcfbd', '#df626b', '#0c0d2b', '#742695', '#2e1433'];

const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const LogoContainer = styled(motion.div)`
  margin: 50px auto;
  z-index: 2;
  width: 240px;

  a {
    font-size: 34px;
  }
`;

const HeroHeadingContainer = styled(motion.div)`
  width: 100%;
  top: 30%;
  left: 0;
  position: absolute;
`;

export const Hero = () => { 
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const logoY = useParallax(scrollYProgress, 800, 0);
  const heroTextX = useParallax(scrollYProgress, 2, 1);
  const heroTextY = useParallax(scrollYProgress, 1500, 0);

  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    });
  }, [color]);

  return (
    <Section customRef={sectionRef} skipSeparator>
      <Background style={{ backgroundImage }}>
        <LogoContainer style={{ y: logoY }}>
          <Logo iconOnTop />
        </LogoContainer>
        <HeroHeadingContainer style={{ scale: heroTextX, y: heroTextY }}>
          <HeroMessage />
        </HeroHeadingContainer>
      </Background>
    </Section>
  )
}