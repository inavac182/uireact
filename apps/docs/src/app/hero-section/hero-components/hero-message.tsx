'use client';
import { AnimatePresence, AnimationProps, motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const HeroHeading = styled.h1`
  width: 70%;
  text-align: center;
  font-size: 36px;
  margin: 0 auto;
  font-family: "Press Start 2P", system-ui;
`;

const HeroLetter = styled(motion.span)`
  display: inline-block;
  color: var(--tertiary-token_100);
`;

const HeroLettersContainer = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin: 50px auto;
  font-family: "Press Start 2P", system-ui;
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
  bumpy: {
    y: [0, -30, -50],
    opacity: [0, 1, 0],
    scale: [1, 1.25, 1],
    transition: {
      duration: 3,
      ease: 'easeIn',
      stiffness: 1000,
      damping: 200
    }
  }
};

const texts = [
  '🤩 dynamic',
  '😝 fun',
  '😮 impressive',
  '🧐 interesting',
  '😎 cool',
  '✨ @uiReact'
]

const HeroLoop = () => {
  const [visible, setVisible] = useState(0);

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
              <HeroLetter initial='initial' animate='bumpy' variants={variants}>
                {text}
              </HeroLetter>
            )}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </HeroLettersContainer>
  )
}