'use client';
import { useRef } from 'react';

import styled from 'styled-components';
import { useScroll, motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

import styles from './styles/homepage.module.scss';
import { Hero } from './hero-section';
import { Installation } from './install-section';
import { useParallax } from './hooks';

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200vh;
  position: absolute;
  top: 0;
`;

export default function HomePage() {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: pageRef });
  const sectionY = useParallax(scrollYProgress, -300);

  return (
    <div className={styles.hero} ref={pageRef}>
      <Hero />
      <StarsContainer>
        <Canvas>
          <Stars radius={50} count={5000} factor={4} fade speed={1} />
        </Canvas>
      </StarsContainer>
      <motion.div style={{ y: sectionY }}>
        <Installation />
      </motion.div>
    </div>
  )
}