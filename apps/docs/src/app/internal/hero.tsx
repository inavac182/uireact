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
`

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
      </Background>
    </Section>
  )
}