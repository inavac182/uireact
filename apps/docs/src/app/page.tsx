'use client';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

import { Hero } from './hero-section';
import { Installation } from './install-section';
import { Demo } from './demo-section';
import { Footer } from './footer-section';

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const Container = styled.div`
  width: 100%;
`;

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <StarsContainer>
        <Canvas>
          <Stars radius={50} count={5000} factor={4} fade speed={1} />
        </Canvas>
      </StarsContainer>
      <Demo />
      <Installation />
      <Footer />
    </Container>
  )
}