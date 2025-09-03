'use client';
import { useViewport } from '@uireact/foundation';
import { AnimatePresence, motion, Variants } from 'motion/react';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const HeroHeading = styled.h1`
  width: 70%;
  text-align: center;
  font-size: 36px;
  margin: 0 auto;
  font-family: var(--press-start-font-family);
  color: #e0dede;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const HeroLetter = styled(motion.span)`
  display: inline-block;
  color: var(--tertiary-token_100);
  font-family: var(--press-start-font-family);

  @media screen and (max-width: '500px') {
    font-size: 10px;
  }
`;

const HeroLettersContainer = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin: 50px auto;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const HeroMessage = () => {
  return (
    <>
      <HeroHeading>
        Web can also be
      </HeroHeading>
      <HeroLoop />
    </>
  )
}

const variants: Variants = { 
  initial: {
    y: 0,
    opacity: 0
  },
  flashing: {
    y: [0, -30, -50],
    opacity: [0, 1, 0],
    scale: [1, 1.25, 1],
    transition: {
      duration: 3,
      ease: 'easeIn',
      stiffness: 1000,
      damping: 200
    }
  },
  flashingMobile: {
    y: [0, -30, -50],
    opacity: [0, 1, 0],
    transition: {
      duration: 3,
      ease: 'easeIn',
      stiffness: 1000,
      damping: 200
    }
  }
};

const texts = [
  '🤩 dynamic 🤩',
  '😮 impressive 😮',
  '🧐 interesting 🧐',
  '😎 cool 😎',
  '✨ @UiReact ✨'
]

const HeroLoop = () => {
  const [visible, setVisible] = useState(0);
  const { isSmall } = useViewport();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (visible + 1 === texts.length) {
        setVisible(0);
      } else { 
        setVisible(visible + 1);
      }
    }, 3100);

    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <HeroLettersContainer>
      <AnimatePresence mode='popLayout'>
        {texts.map((text, index) => (
          <React.Fragment key={`letter-${index}`}>
            {visible === index && (
              <HeroLetter initial='initial' animate={isSmall ? 'flashingMobile' : 'flashing'} variants={variants}>
                {text}
              </HeroLetter>
            )}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </HeroLettersContainer>
  )
}