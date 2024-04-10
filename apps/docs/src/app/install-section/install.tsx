'use client';

import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiHeading, UiLink, UiText } from "@uireact/text"

import { Section, ScriptCard } from '../internal';

const contentSpacing: UiSpacingProps['padding'] = { top: 'six' };

export const Installation = () => { 
  return (
    <Section centerContent>
      <UiSpacing padding={contentSpacing}>
        <UiHeading level={1} centered>🔥 Getting started</UiHeading>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">1.</UiText> Install peer dependencies:
          </UiHeading>
          <ScriptCard script="npm i -S react react-dom styled-components tslib" />
        </UiSpacing>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">2.</UiText> Install the foundation and view packages:
          </UiHeading>
          <ScriptCard script="npm i -S @uireact/foundation @uireact/view" />
        </UiSpacing>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">3.</UiText> Set up your UiView, by wrapping your entire react tree in the UiView component
          </UiHeading>
          <pre>
            {`
import React from 'react';

import { DefaultTheme } from '@uireact/foundation';
import { UiView } from '@uireact/view';

export const MyAppView = () => (
  <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
    <p>View content</p>
  </UiView>
);
            `}
          </pre>
        </UiSpacing>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">4.</UiText> Create your theme! ✨
          </UiHeading>
          <UiSpacing padding={contentSpacing}>
            <UiText>
              @uireact provides with a <UiLink><a href="https://github.com/inavac182/uireact/blob/main/packages/foundation/src/themes/default-theme.ts">default theme</a></UiLink> so you can either use that or create your own. If you like the default theme then you can skip this step.
              </UiText>
            <br />
            <UiText>
              If you want to build a custom theme visit <UiLink><a href="https://uireact.io/create-theme">Create your own theme</a></UiLink> to learn more about it.
            </UiText>
          </UiSpacing>
        </UiSpacing>
      </UiSpacing>
    </Section>
  )
}