'use client';
import { useEffect } from 'react';
import { motion, useScroll, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

import { Logo } from './logo';

import { Section } from './section';

const colors = ['#df626b', '#0c0d2b', '#742695', '#2e1433'];

const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const StarsContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const LogoContainer = styled.div`
  margin: 50px auto;
  z-index: 2;
  width: 270px;

  a {
    font-size: 34px;
  }
`;

const HeroHeadingContainer = styled.div`
  width: 100%;
  top: 40%;
  left: 0;
  position: absolute;
`;

const HeroHeading = styled.h1`
  width: 70%;
  text-align: center;
  font-size: 48px;
  margin: 0 auto;
`;

export const Hero = () => { 
  const { scrollYProgress } = useScroll();
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    });
  }, [color]);

  return (
    <Section>
      <Background style={{ backgroundImage }}>
        <StarsContainer>
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </StarsContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeroHeadingContainer>
          <HeroHeading>Web doesn&apos;t have to be static</HeroHeading>
        </HeroHeadingContainer>
      </Background>
    </Section>
  )
}